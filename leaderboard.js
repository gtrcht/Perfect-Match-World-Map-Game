const LEADERBOARD_STORAGE_KEY = 'perfectCountryMatchLeaderboard';

function loadLeaderboard() {
    try {
        const raw = localStorage.getItem(LEADERBOARD_STORAGE_KEY);
        return raw ? JSON.parse(raw) : [];
    } catch (err) {
        console.error('Failed to load leaderboard', err);
        return [];
    }
}

function saveLeaderboard(entries) {
    try {
        localStorage.setItem(LEADERBOARD_STORAGE_KEY, JSON.stringify(entries));
    } catch (err) {
        console.error('Failed to save leaderboard', err);
    }
}

function addLeaderboardEntry(entry) {
    const entries = loadLeaderboard();
    entries.push(entry);
    saveLeaderboard(entries);
    return entries;
}

function getLeaderboard() {
    return loadLeaderboard();
}

function clearLeaderboard() {
    saveLeaderboard([]);
}
