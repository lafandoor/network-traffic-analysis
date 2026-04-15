# NetFlow Traffic Audit: Network Behavioral Analysis & Forensics

This repository documents a professional network traffic analysis project focusing on behavioral baselining, stealth reconnaissance detection, and service exposure mapping. Using a combination of Wireshark and Nmap, this project captures the transition from nominal network operations to active threat progression.

**🔗 [Access Live Forensic Portal](https://lafandoor.github.io/NetFlow-Traffic-Audit/)**

---

## 🔎 Analysis Objectives

- **Deep Packet Inspection (DPI)**: Detailed analysis of 85,000+ protocol frames across the TCP/IP stack.
- **Reconnaissance Attribution**: Identifying stealth SYN scan signatures and mapping Nmap's timing templates on the wire.
- **Exposure Analysis**: Documenting plaintext data leakage in unencrypted HTTP streams and mapping service response headers.
- **Behavioral Baselining**: Establishing statistical norms for DNS, HTTPS, and local host interactions.

---

## 🏗️ Lab Setup

*   **Platform**: Kali Linux (VMware NAT)
*   **Target**: Local Gateway (192.168.1.1) and Localhost (127.0.0.1)
*   **Tools Engine**: Wireshark 4.x, Nmap 7.95, Tcpdump, Curl, Apache2.

---

## 🛠️ Performance Timeline

I ran the capture in four distinct phases to simulate a natural attack progression:
1.  **Baseline**: Normal web browsing (DNS/HTTPS).
2.  **Mapping**: Active connectivity checks using ICMP pings.
3.  **Recon**: Stealth SYN scan targeting 1000 ports.
4.  **Enumeration**: Successful interaction with a local Apache server on Port 80.

---

## 📁 Repository Structure

*   **/assets**: CSS, JS, and all visual evidence.
*   **/captures**: The original `.pcap` capture file for review.
*   **index.html**: The full interactive analysis report.

---

## 💡 Key Takeaways

The biggest insight here was how clearly a "stealth" scan stands out in Wireshark when you know what filters to use. It also reminded me why HTTPS is non-negotiable—seeing plain HTTP GET requests fly past in cleartext is a huge wake-up call for network security.

---

### Author
**Youssef Moataz**  

---
*If you find this analysis helpful, please give the repo a ⭐!*
