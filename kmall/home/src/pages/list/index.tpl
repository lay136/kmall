<ul class="clearfix">
    {{#list}}
    <li class="product-list-item">
        <a href="./detail.html?productId={{_id}}"target="_blank">
            <img class="product-img" src="{{mainImage}}" alt="{{name}}">
            <p class="product-name">{{name}}</p>
            <p class="product-price">￥{{price}}</p>
        </a>
    </li>
    {{/list}}
</ul>