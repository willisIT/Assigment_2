var retrievedData = [];
$(document).ready(function(){
    const list_elements = $("#card_items");
    

    $.get("https://sheetlabs.com/MENC/laptops",
        function (data) {
            var count=0;
            retrievedData = data;
            // console.log(data);
            appendData(data);
            $(".loader").css("display", "none");

            $("#button").click(function (e) { 
                e.preventDefault();
                var input_val = $("#input_text").val();
                const filteredData = filterItems(data,input_val);
                // console.log(filteredData)
                if(filteredData.length){
                    // console.log("there")
                    list_elements.empty();
                    appendData(filteredData);
                } else {
                    alert(`${input_val} Not Found`)
                    appendData(data);
                }
            });
        }
        
    );

    function appendData(data) {
        data.forEach((element, index) => {
            list_elements.append(`
            <div class="col-md-4 col-12 mb-5">
                <div class="card">
                    <img class="card-img-top p-2" src="./asset/laptop.jpg" alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title d-flex justify-content-between align-items-center">
                        ${element.modelname}
                            <span style="background: #007bff;" class="badge badge-pill">${element.ram}</span>
                        </h5>
                        <small>${element.manufacturer}</small>
                        <p class="fw-bold">$${element.priceeuros}<p>
                        <button class="btn btn-primary" onclick="showItem(${index})">Check Item</button>
                    </div>
                </div>
            </div>
            `);
        });
        
    }

    function filterItems(items, searchVal) {
        var newArray = [];
        items.forEach(((item,index)=> {
            Object.values(item).includes(searchVal)?newArray.push(items[index]):"";
        }));
        return newArray;
        
    }

})



function showItem(param) {
    localStorage.setItem("data", JSON.stringify(retrievedData[param]));
    window.location.href = "display.html";
};