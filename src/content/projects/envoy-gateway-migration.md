---
title: Front Door Migration
description: 12 → 1. Consolidating ALBs into single Envoy Gateway.
status: in-progress
meta: 2 months in
order: 2
---

## Why Envoy Gateway?

We had 12 AWS Application Load Balancers serving different services. Each one had its own:

- SSL certificate management
- Health check configuration
- Target group rules
- WAF rules (some of them)

The operational overhead was unsustainable. One person could spend their entire week just managing ALB changes.

## The Migration Plan

1. Deploy Envoy Gateway on EKS
2. Configure Gateway API routes to match existing ALB rules
3. Migrate services one at a time behind feature flags
4. Monitor error rates and latency
5. Decommission old ALBs

## Benefits So Far

- **Single pane of glass** for all ingress traffic
- **GitOps-native** configuration (no more ClickOps)
- **Better observability** with native Envoy metrics
- **Cost reduction** from fewer load balancers

## Challenges

The biggest challenge has been handling legacy services that rely on ALB-specific features like sticky sessions. We're solving this with custom Envoy filters.
