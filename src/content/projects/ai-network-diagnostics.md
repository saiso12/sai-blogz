---
title: AI Network Diagnostics
description: 400 restaurants. 1 AI agent diagnosing network issues in seconds.
status: in-progress
url: https://github.com/sai/network-diagnostics
meta: 3 weeks in
order: 1
---

## The Problem

When you're running 400+ restaurant locations, network issues aren't just IT problems—they're revenue problems. A POS that can't connect means orders don't go through. A kitchen display that's offline means food sits in the window getting cold.

Our support team was drowning in tickets that all looked the same: "Internet is slow" or "WiFi isn't working." Each one required a human to SSH into routers, run diagnostics, and piece together what was actually wrong.

## The Solution

An AI agent powered by MCP (Model Context Protocol) servers that can:

- Query Meraki and Pronto network devices directly
- Run real-time diagnostics (ping tests, throughput tests, signal analysis)
- Correlate symptoms with root causes
- Generate actionable recommendations in plain English

## Architecture

```
User → Claude Agent → MCP Server → Network APIs
                          ↓
                    Meraki Dashboard
                    Pronto Controllers
                    Device Inventory
```

## Current Status

Week 3. The agent can successfully diagnose ~80% of common network issues. Working on expanding the symptom-to-cause mapping and adding automated remediation for simple fixes.
