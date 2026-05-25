export function speak(text) {
  if (!('speechSynthesis' in window)) return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'hu-HU';
  utterance.rate = 0.85;
  utterance.pitch = 1.2;
  // Try to find a Hungarian voice
  const voices = window.speechSynthesis.getVoices();
  const huVoice = voices.find(v => v.lang.startsWith('hu'));
  if (huVoice) utterance.voice = huVoice;
  window.speechSynthesis.speak(utterance);
}

export function stopSpeech() {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }
}