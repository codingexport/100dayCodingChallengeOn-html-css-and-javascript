const EndDate = "31 OCT 2024 12:00 AM"
const inputs = document.querySelectorAll("input");
document.getElementById('slog').innerText = EndDate;

function clock() {
    const end = new Date(EndDate);
    const now = new Date();
    const diff = (end - now) / 1000;
    // convertInto Days 
    inputs[0].value = Math.floor(diff / 3600 / 24);
    // convertInto Hour 
    inputs[1].value = Math.floor(diff / 3600) % 24;
    // convertInto Minute 
    inputs[2].value = Math.floor(diff / 60) % 60;
    // convertInto Second 
    inputs[3].value = Math.floor(diff) % 60;

}
// 1day = 24hours
// 1hr = 60 min 
// 60 min = 3600sec
// intial call 
clock()

setInterval(
    () => {
        clock()
    },
    1000
)


