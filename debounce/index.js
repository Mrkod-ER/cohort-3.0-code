let currentClock; 
function searchBackend() {
    console.log("request sent to the backend");
}


function debouncedSearchBackend() {
    clearTimeout(currentClock);
    currentClock = setTimeout(searchBackend, 30);
}

debouncedSearchBackend();
debouncedSearchBackend();
debouncedSearchBackend();
debouncedSearchBackend();
debouncedSearchBackend();
debouncedSearchBackend();