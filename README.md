<div align="center">

# SafeTrail-AI

### Smart Tourist Safety Monitoring & Incident Response System

SafeTrail-AI is a smart tourism safety platform designed to protect travelers in high-risk, remote, and unfamiliar regions using **AI**, **blockchain-based digital identity**, **geo-fencing**, **real-time alerts**, and **emergency response tools**.

</div>

---

## Overview

SafeTrail-AI is built to improve tourist safety through a connected digital ecosystem that helps tourists, tourism departments, and law enforcement authorities monitor travel risk, respond to emergencies, and securely verify traveler identity.

The platform focuses on solving real-world tourism safety problems such as:

- tourists entering unsafe or restricted areas
- missing traveler cases in remote zones
- slow emergency response coordination
- lack of verified tourist identity records
- absence of live situational awareness for police and tourism departments
- poor multilingual and accessibility support during emergencies

This project combines:

- **AI-based anomaly detection**
- **Blockchain-backed digital tourist ID verification**
- **Geo-fencing alerts**
- **Real-time emergency response**
- **Tourist and authority dashboards**
- **Optional IoT wearable integration**
- **Privacy-aware location sharing**

---

## Problem Statement

In tourism-heavy and geographically sensitive regions, especially remote and high-risk areas, traditional safety methods are often not enough. Tourists may lose connectivity, deviate from their routes, enter dangerous zones, or face emergencies without fast access to help.

SafeTrail-AI addresses this by creating a smart digital safety platform with:

- secure tourist onboarding
- temporary digital tourist IDs
- itinerary-aware monitoring
- risk scoring
- geo-fenced warning systems
- panic button with live location sharing
- anomaly detection for missing or distressed travelers
- operational dashboards for tourism departments and police

---

## Key Features

### 1. Digital Tourist ID Generation
- secure digital tourist ID issued at airports, hotels, or checkpoints
- linked with KYC details such as Aadhaar or passport
- temporary validity based on trip duration
- blockchain-backed verification logs
- QR-based identity validation

### 2. Tourist Mobile Application
- tourist onboarding and trip registration
- digital tourist ID view
- live safety score
- geofence-based danger alerts
- planned route and map monitoring
- panic / SOS button
- optional family and authority live tracking
- multilingual support
- accessibility-focused emergency interactions

### 3. AI-Based Safety Monitoring
- route deviation detection
- prolonged inactivity detection
- sudden signal or movement drop-off alerts
- missing tourist suspicion logic
- intelligent safety score generation
- explainable alerts for authorities

### 4. Police & Tourism Dashboard
- live tourist monitoring
- heat maps and cluster views
- active alerts and incidents
- digital ID verification console
- tourist registry
- missing person investigation workflow
- automated E-FIR generation support
- zone risk monitoring

### 5. Geo-Fencing & Incident Response
- alerts for entering high-risk zones
- warnings for restricted area access
- emergency response dispatch support
- last known location tracking
- alert escalation and incident history

### 6. Optional IoT Integration
- smart wristband or tracking tag support
- emergency SOS from wearable
- health and location signal placeholder support
- connectivity monitoring

### 7. Privacy & Security
- consent-based live tracking
- end-to-end secure data flow design
- audit logs for sensitive access
- permission-aware authority access
- blockchain-backed tamper resistance

---

## Target Users

SafeTrail-AI is designed for multiple user roles:

### Tourist
- register and verify identity
- upload itinerary
- monitor safety score
- receive alerts
- trigger emergency SOS
- share live tracking if needed

### Police / Emergency Operator
- monitor alerts in real time
- access verified tourist records
- investigate anomaly cases
- respond to distress incidents
- generate case records and E-FIR drafts

### Tourism Department
- manage registrations
- monitor tourist movement density
- review risk zones and incident analytics
- maintain safer tourism operations

### Family / Emergency Contacts
- receive SOS notifications
- access shared live location when enabled
- track incident progress in emergencies

### Admin
- manage zones, alerts, permissions, and settings
- configure system behavior
- review logs and audit records

---

## Project Modules

This project is structured around the following major modules:

- Tourist Onboarding
- KYC Verification
- Trip Itinerary Management
- Digital Tourist ID
- Safety Score Engine
- Geo-Fencing Alerts
- SOS / Emergency Workflow
- Incident Reporting
- Live Tracking & Consent
- Authority Dashboard
- Tourist Registry
- Missing Tourist Monitoring
- E-FIR Workflow
- Risk Zone Management
- IoT Device Monitoring
- Audit Logs and Security Settings

---

## Tech Stack

This project currently uses a modern frontend stack and can be extended further based on project needs.

### Frontend
- **React**
- **TypeScript**
- **Vite**
- **Tailwind CSS**
- **React Router**
- **Lucide React**
- **Framer Motion** (if used)

### Possible Backend / Future Integration
- Node.js / Express
- Firebase / Supabase / MongoDB / PostgreSQL
- Blockchain integration layer
- Maps and geolocation APIs
- Notification services
- AI/ML anomaly detection service
- IoT device integration APIs

---

## Folder Structure

```bash
SafeTrail/
│
├── src/
│   ├── components/
│   ├── lib/
│   ├── screens/
│   │   ├── AdminDashboard.tsx
│   │   ├── Dashboard.tsx
│   │   ├── DigitalID.tsx
│   │   ├── Itinerary.tsx
│   │   ├── KYC.tsx
│   │   ├── Login.tsx
│   │   ├── MapView.tsx
│   │   ├── Onboarding.tsx
│   │   ├── SafetyScore.tsx
│   │   ├── SOS.tsx
│   │   └── SplashScreen.tsx
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
│
├── .env.example
├── .gitignore
├── index.html
├── metadata.json
├── package.json
├── package-lock.json
├── tsconfig.json
└── vite.config.ts
