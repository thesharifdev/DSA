function isAnagram(s, t) {
    if (s.length !== t.length) {
        return false;
    }
    for (let i = 0; i < t.length; i++) {
        if (s.indexOf(t[i]) === -1) {
            return false;
        }
        s = s.replace(t[i], '');
    }
    return true;
}
