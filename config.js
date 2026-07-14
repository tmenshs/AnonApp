// Shared config for all pages
const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzwMZHRaqRBdkYSRmm1QBOIvfxsL_2EcrQA5dpsfjj5p32cl1fT9R7l9WK6GAE-0KXHAQ/exec";

// Small helper: call the Apps Script API with a set of params
async function callApi(params) {
  const url = new URL(APPS_SCRIPT_URL);
  Object.keys(params).forEach(key => url.searchParams.set(key, params[key]));
  const res = await fetch(url.toString());
  return res.json();
}

// Local "session" helpers (Apps Script has no real server session)
function getSession() {
  const raw = localStorage.getItem("anonapp_session");
  return raw ? JSON.parse(raw) : null;
}
function setSession(userId, name) {
  localStorage.setItem("anonapp_session", JSON.stringify({ userId, name }));
}
function clearSession() {
  localStorage.removeItem("anonapp_session");
}
