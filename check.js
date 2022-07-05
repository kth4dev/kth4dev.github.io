function getParameters() {

  const searchParams = new URLSearchParams(window.location.search);
  var productId=searchParams.get("product");
  var url="intent://theinqr.com/?product="+productId+"#Intent;scheme=tta;package=com.tta.qr;end";
  window.location.replace(url);
  setTimeout(hideLoading, 1000);
}

function hideLoading(){
  var element = document.getElementById("page_loader");
  element.style.display = "none";
}

