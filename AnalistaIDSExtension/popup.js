document.getElementById("scan").addEventListener("click", () => {
  const targetInput = document.getElementById("target");
  if (!targetInput) return;

  const target = targetInput.value.trim();
  if (!target) {
    alert("Ingresa una URL, dominio o IP");
    return;
  }

  const q = encodeURIComponent(target);

  const urls = [
    // 🌐 IP / Reputation / Threat Intel
    `https://checkip.com/ip/${q}/`,

    // 🔬 Malware / Sandbox
    `https://www.hybrid-analysis.com/search?query=${q}`,
    `https://urlscan.io/search/#${q}`,
    `https://www.abuseipdb.com/check/${q}`,
    `https://talosintelligence.com/reputation_center/lookup?search=${q}`,
    `https://www.virustotal.com/gui/search/${q}`
  ];

  urls.forEach(url => {
    chrome.tabs.create({ url });
  });
});
``