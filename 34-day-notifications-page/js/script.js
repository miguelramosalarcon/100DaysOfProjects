document.getElementById("mark-read").addEventListener("click", function() {
    var unreadNotifications = document.querySelectorAll(".notification.unread");
    unreadNotifications.forEach(function(notification) {
      notification.classList.remove("unread");
      notification.style.backgroundColor = "hsl(210, 60%, 98%)";
    });


    document.getElementById("notification-count").textContent = "0";
  });