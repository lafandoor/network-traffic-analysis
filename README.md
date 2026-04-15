## 🚀 Live Analysis

You can view the interactive dashboard live here:  
**[https://lafandoor.github.io/network-traffic-analysis/](https://lafandoor.github.io/network-traffic-analysis/)**

---

## 🔎 What's in this repo?

This analysis establishes a baseline for normal network behavior and tracks various stages of an attack—from initial discovery to service interaction. I focused on identifying how automated tools like Nmap behave on the wire and what kind of footprints they leave behind.

### Main Goals
*   **Deep Packet Inspection**: Investigating large-scale traffic bursts (85k+ packets).
*   **Attack Tracking**: Catching stealth SYN scans in the reconnaissance phase.
*   **Data Exposure**: Finding cleartext HTTP requests and mapping service responses.
*   **Defensive Visibility**: Checking how my local firewall handled unsolicited probes.

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
