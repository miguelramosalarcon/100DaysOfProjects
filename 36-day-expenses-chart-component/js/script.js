const dashboard = document.querySelector(".dashboard")

fetch("./js/data.json").then((response) => {
    response.json().then(function(data) {

        let highestAmount = 0
        var tempAmount = 0

        for(var i = 0; i < data.length; i++) {
            const daysElement = document.createElement("span");
            daysElement.textContent = data[i].day
            daysElement.classList.add('days');
            dashboard.appendChild(daysElement)
            
            const dashboardColumn = document.createElement('div')
            dashboardColumn.classList.add('dashboard-column');
            dashboardColumn.style.height = `${data[i].amount * 2.5}px`
            daysElement.appendChild(dashboardColumn)

            const hoverStats = document.createElement("div")
            hoverStats.classList.add("hover-stats")
            hoverStats.textContent = `$${data[i].amount}`
            dashboardColumn.appendChild(hoverStats)

            dashboardColumn.classList.add('hoverable');
            
            if(tempAmount < data[i].amount) {
                tempAmount = data[i].amount
                highestAmount = i
            }
        }

        
        document.querySelectorAll(".dashboard-column")[highestAmount]
        .style.backgroundColor = "hsl(186, 34%, 60%)"
    })
})