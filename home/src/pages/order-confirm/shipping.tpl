<div class="panel">
    <h2 class="panel-header">收货地址</h2>
    <div class="pandel-body">
        {{#shippings}}
        {{#active}}
        <!-- 绑定地址ID 确认编辑/删除的具体地址 -->
        <div class="shipping-item active" data-shipping-id="{{_id}}">
        {{/active}}
        {{^active}}
        <div class="shipping-item" data-shipping-id="{{_id}}">
        {{/active}}                                  
            <h3 class="shipping-title">{{province}} {{city}}({{name}})</h3>
            <p class="shipping-detail">
                {{province}} {{city}} {{address}} {{phone}}
            </p>
            <div class="shipping-footer">
                <span class="link shipping-edit">编辑</span>
                <span class="link shipping-delete">删除</span>
            </div>
        </div>
        {{/shippings}}                     
        <div class="shipping-add">
            <i class="fa fa-plus"></i>
            <p class="shipping-add-text">添加新地址</p>
        </div>
    </div>
</div>