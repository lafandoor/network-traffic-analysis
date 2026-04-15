# 🛡️ Network Traffic Analysis (Wireshark + Nmap)

## 📌 Overview

This project demonstrates **packet-level network traffic analysis** using Wireshark in a controlled lab environment.
The objective was to capture, analyze, and interpret both **normal and malicious traffic patterns**.

The analysis simulates real-world SOC scenarios including:

* Normal user activity (DNS + HTTPS)
* Network diagnostics (ICMP)
* Reconnaissance attack (TCP SYN scan)
* Service interaction (HTTP on localhost)

---

## 🎯 Objectives

* Capture real network traffic using Wireshark
* Identify normal vs suspicious patterns
* Simulate attacker behavior (Nmap SYN scan)
* Analyze protocol-level communication
* Assess security risks and exposures

---

## 🛠️ Tools & Technologies

| Tool       | Purpose                              |
| ---------- | ------------------------------------ |
| Wireshark  | Packet capture & analysis            |
| Nmap       | Network scanning (attack simulation) |
| Apache2    | Local web server                     |
| Tcpdump    | CLI packet capture                   |
| Kali Linux | Testing environment                  |

---

## 🧪 Lab Setup

* **OS:** Kali Linux (VMware)
* **Network:** NAT (eth0)
* **Capture Duration:** ~12 minutes
* **Environment:** Controlled lab

---

## 📊 Traffic Summary

* Multi-protocol capture: TCP, UDP, DNS, ICMP, HTTP
* High-volume TCP activity during scan phase
* DNS queries for normal browsing behavior
* ICMP packets for connectivity testing

---

## 🔍 Key Findings

### 🔴 1. TCP SYN Scan (Reconnaissance)

* ~1300+ SYN packets detected
* ~650+ ports scanned
* No SYN-ACK responses → **Filtered firewall**

👉 Indicates **reconnaissance phase attack**

---

### 🟢 2. Open Port Detection (Port 80)

* Successful TCP handshake observed
* Service accessible on localhost

👉 Demonstrates **service exposure**

---

### 🔴 3. HTTP Cleartext Risk

* HTTP GET requests visible in plaintext
* Headers and request data exposed

👉 Risk of **data interception / MITM attacks**

---

### 🟡 4. ICMP Activity

* Ping request/reply observed
* Used for network diagnostics

---

### 🌐 5. DNS Behavior

* Normal query-response patterns
* No signs of DNS tunneling

---

## 🧠 Attack Lifecycle Mapping

| Phase           | Evidence     |
| --------------- | ------------ |
| Normal Activity | DNS + HTTPS  |
| Discovery       | ICMP         |
| Reconnaissance  | SYN Scan     |
| Enumeration     | Port probing |
| Interaction     | HTTP traffic |

---

## 🛡️ Security Insights

* Firewall filtering prevents port visibility
* Open services increase attack surface
* HTTP traffic exposes sensitive data
* Early detection of reconnaissance is critical

---

## ⚙️ Key Wireshark Filters

```bash
tcp.flags.syn==1
tcp.flags.syn==1 && tcp.flags.ack==0
dns
http
icmp
tcp.port == 80
```

---

## 📂 Project Structure

```
Network-Traffic-Analysis/
│── capture.pcap
│── report.pdf
│── screenshots/
│── README.md
```

---

## 📸 Screenshots

(Add your Wireshark screenshots here)

* SYN scan packets
* DNS queries
* HTTP traffic
* TCP handshake

---

## 🎥 Demo

📺 Video Explanation: *(Add YouTube link here)*

---

## 📈 Key Takeaways

* Network traffic analysis can reveal attack patterns early
* Reconnaissance detection is critical for prevention
* Encryption (HTTPS) is essential for data protection
* Packet-level visibility is powerful for security monitoring

---

## 🏁 Conclusion

This project demonstrates how Wireshark can be used to identify:

* Normal network behavior
* Suspicious scanning activity
* Security misconfigurations

It reflects a **real-world SOC analysis workflow**, bridging theoretical knowledge with practical skills.

---

## 👨‍💻 Author

**Youssef Moataz**
Cybersecurity Student

---

## ⭐ If you found this useful

Give it a ⭐ on GitHub — it helps a lot!
