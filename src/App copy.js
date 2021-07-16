!DOCTYPE html>
<html lang="en">
​
<head>
    <meta charset="UTF-8">
    <title>Title</title>
    <style>
        body {
            height: 500px;
            background-size: 500px 500px;
        }
​
        .flex-container {
            display: flex;
            gap: 5px
        }
​
        .item {
            flex: 1;
            height: 250px;
        }
​
        .blue {
            background: blue;
        }
​
        .red {
            background: red;
        }
​
        .green {
            background: green;
        }
​
        .orange {
            background: orange;
        }
​
        .flex-container-vertical {
            margin-top: 50px;
            display: flex;
            gap: 5px;
            flex-direction: column;
        }
​
        .item2 {
            width: 100%;
            height: 400px;
        }
    </style>
</head>
​
<body>
    <div class="flex-container">
        <div onclick="setOrder(this.getAttribute('data-order'))" data-order="1" class="item blue"></div>
        <div onclick="setOrder(this.getAttribute('data-order'))" data-order="2" class="item red"></div>
        <div onclick="setOrder(this.getAttribute('data-order'))" data-order="3" class="item green"></div>
        <div onclick="setOrder(this.getAttribute('data-order'))" data-order="4" class="item orange"></div>
    </div>
    <div class="flex-container-vertical">
        <div class="item2 blue"></div>
        <div class="item2 red"></div>
        <div class="item2 green"></div>
        <div class="item2 orange"></div>
    </div>
​
    <script>
​
        const elements = document.getElementsByClassName('item2');
        const orders = Array.from(elements);
        let newOrders = '';
​
        console.log(typeof orders);
​
        function setOrder(e) {
            console.log(e);
            newOrders = orders.slice();
​
            const clickedElement = newOrders[e - 1]
​
            console.log(clickedElement);
​
            newOrders.splice(e - 1, 1);
            
            console.log(newOrders.splice(e - 1, 1));
​
            newOrders.splice(0, 0, clickedElement);
​
            console.log(newOrders.splice(0, 0, clickedElement));
​
            reOrder()
        }
​
        function reOrder() {
            myNode = document.getElementsByClassName('flex-container-vertical')[0];
            myNode.innerHTML = ''
            newOrders.forEach(function (_, i) {
                myNode.append(newOrders[i])
            })
        }
​
    </script>
​
</body>
​
</html>