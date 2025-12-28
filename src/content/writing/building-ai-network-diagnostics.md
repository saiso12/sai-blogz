---
title: Building AI-Powered Network Diagnostics
date: 2024-12-20
tag: ai
draft: false
---

What if an AI could diagnose network issues faster than your best network engineer? That's the question we set out to answer.

## The Problem Space

Our support team handles hundreds of network-related tickets per week. "WiFi is slow." "POS can't connect." "Kitchen display is offline." Each one requires someone to:

1. Log into the ticketing system
2. Look up the location's network devices
3. SSH into routers and access points
4. Run various diagnostic commands
5. Interpret the results
6. Formulate a response

Average time: 15-20 minutes per ticket. Multiply that by 400 tickets a week, and you're looking at 100+ hours of skilled engineer time just on diagnostics.

## Enter MCP

Model Context Protocol (MCP) is Anthropic's standard for connecting AI models to external tools. Instead of fine-tuning a model on network diagnostics, we give it access to the same tools our engineers use.

The architecture is simple:

```
User describes problem
        ↓
Claude analyzes and decides what to check
        ↓
MCP Server executes network API calls
        ↓
Results returned to Claude
        ↓
Claude interprets and responds
```

## Building the MCP Server

Our MCP server exposes tools for:

- **Device lookup** - Find all network devices at a location
- **Ping tests** - Check connectivity between devices
- **Throughput tests** - Measure actual bandwidth
- **Client enumeration** - See what's connected to the network
- **Event logs** - Check recent network events

Each tool maps to an API call to either Meraki (our wireless vendor) or Pronto (our router management platform).

## The Results

Early testing shows the AI can correctly diagnose common issues about 80% of the time. More importantly, it does it in under 60 seconds instead of 15 minutes.

The types of issues it handles well:

- **ISP outages** - Detects when the WAN link is down
- **WiFi interference** - Identifies channel congestion
- **Client density** - Spots when too many devices are on one AP
- **DHCP exhaustion** - Recognizes when IP pools are full

## What's Next

We're working on:

1. **Automated remediation** - For simple fixes, let the AI take action
2. **Symptom pattern matching** - Learn from past tickets to get smarter
3. **Proactive alerting** - Detect issues before they become tickets

The goal isn't to replace network engineers. It's to handle the routine 80% so engineers can focus on the interesting 20%.
