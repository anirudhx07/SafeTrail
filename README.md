# SafeTrail-AI

## Chosen Vertical
Tourist Safety Monitoring and Incident Response

## Overview
SafeTrail-AI is a smart tourist safety platform designed for travelers in high-risk and remote regions. It helps improve safety through digital identity, route-aware monitoring, geo-fencing alerts, and emergency support features.

## Approach and Logic
The solution is designed around a tourist safety assistant persona. It focuses on:
- registering tourists through digital identity
- tracking itinerary and route context
- showing safety insights through a dashboard
- detecting unsafe situations using safety logic
- allowing emergency SOS support
- giving authorities an admin view for monitoring and response

## How the Solution Works
- Tourists onboard through login and KYC
- Travel itinerary is added to the system
- A digital tourist ID is generated
- The system shows safety-related screens such as dashboard, map, and score
- Geo-fencing and emergency support are represented through the interface
- Admin dashboard supports monitoring and response workflows

## Assumptions Made
- Tourist identity is verified before trip activation
- Safety score is based on travel and location context
- Geo-fencing alerts are triggered when users enter unsafe zones
- Emergency workflows notify relevant authorities and contacts
- Some advanced services are represented as prototype logic and UI flows

## Tech Stack
- React
- TypeScript
- Vite

## Run Locally
```bash
npm install
npm run dev
