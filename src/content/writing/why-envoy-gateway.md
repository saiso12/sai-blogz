---
title: Why We Moved to Envoy Gateway
date: 2025-01-15
tag: platform
draft: false
---

After managing 12 separate AWS Application Load Balancers for two years, we finally made the switch to Envoy Gateway. Here's why—and what we learned along the way.

## The Breaking Point

It started with a simple question: "Can you add a new header to requests going to the payments service?"

What should have been a 5-minute change turned into a 2-hour ordeal. We had to:

1. Find which ALB handled payments traffic
2. Navigate the AWS console to find the right listener rule
3. Realize we couldn't add custom headers at the ALB level
4. Spin up a Lambda@Edge function
5. Wait for CloudFront propagation

This wasn't the first time, and it wouldn't be the last.

## Why Envoy Gateway

Envoy Gateway is the Kubernetes Gateway API implementation built on Envoy Proxy. Here's what sold us:

### 1. Configuration as Code

Every route, every header modification, every rate limit lives in Git. No more "who changed that ALB rule last Tuesday?"

```yaml
apiVersion: gateway.networking.k8s.io/v1
kind: HTTPRoute
metadata:
  name: payments-route
spec:
  parentRefs:
    - name: main-gateway
  rules:
    - matches:
        - path:
            value: /api/payments
      filters:
        - type: RequestHeaderModifier
          requestHeaderModifier:
            add:
              - name: X-Custom-Header
                value: "my-value"
```

### 2. Single Control Plane

One gateway handles all our ingress. When we need to add a new service, it's a single HTTPRoute manifest—not a new ALB, target group, and listener rule.

### 3. Native Observability

Envoy's metrics are best-in-class. Request latency percentiles, error rates by status code, upstream health—all exposed via Prometheus without any extra configuration.

## The Migration

We didn't do a big bang cutover. Instead:

1. Deployed Envoy Gateway alongside existing ALBs
2. Used weighted routing to send 1% of traffic to the new path
3. Monitored for a week
4. Gradually increased to 100%
5. Decommissioned the old ALB

Total time per service: about 2 weeks, mostly waiting and watching.

## Lessons Learned

**Start with non-critical services.** Our first migration was an internal tool. Low traffic, low risk. This let us build confidence before touching customer-facing paths.

**Invest in observability first.** Before migrating anything, we made sure our dashboards could compare old-path vs new-path latency and error rates.

**Document the rollback plan.** We kept the old ALBs running in "standby" mode for 30 days after each migration. One DNS change and we could roll back instantly.

## What's Next

We're now exploring Envoy's rate limiting and authentication features. The goal is to move these concerns out of individual services and into the gateway layer.

If you're drowning in load balancer management, give Envoy Gateway a look. The Kubernetes Gateway API is the future of ingress, and Envoy is the best implementation we've used.
