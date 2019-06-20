<template>
    <div class="semantic-component">
        <div class="ui blue secondary  inverted menu">       
            <div class="right menu">
            <a class="ui item">
                    <i class="large bell icon"></i>
            </a>
            <a class="ui item">
                <i class="large sign out alternate icon"></i>
            </a>
            </div>
        </div>
        <div class = "ui padded grid">
            <div class = "three wide column"></div>
            <div class = "ten wide column ton">
                    <div class="ui center aligned container">
                            <i class="circular centered huge teal dollar icon"></i>
                    </div>
                    <div class = "ui left aligned container">
                            <div class="ui bulleted list f">
                                <div class="item f">目前可提现30元</div>
                                <div class="item f">请输入提现金额     <div class="ui mini input">
                                        <input type="text" placeholder="">
                                    </div>
                                    元
                                </div>
                                <div class="item f">您绑定的支付宝账号为：12345678901</div>
                                <div class="item f">点击[提现] ，提现到支付宝</div>
                                <div class="item f">每日可提现1次</div>
                            </div> 
                    </div>
                    <div class = "ui right aligned container">
                            <div class="ui animated button" tabindex="0">
                                    <div class="visible content">提现</div>
                                    <div class="hidden content">
                                    <i class="right arrow icon"></i>
                                    </div>
                            </div>
                    </div>
            </div>
            <div class = "three wide column"></div>

        </div>
        
    </div>
</template>


<style scoped>
    .semantic-component{
        background-color:#F2F6FC;
    }
    .ton{
        background-color: white;
    }
    .f{
        font-family: Arial, Helvetica, sans-serif;
        color: rgba(102, 102, 255, 0.349019607843137);
        font-size: 19px;
    }
</style>
