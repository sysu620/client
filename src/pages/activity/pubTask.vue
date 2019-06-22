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
        <div id="main1" class = "ui padded grid">
            <div class = "three wide column"></div>
            <div class = "ten wide column ton">
                <div class="ui center aligned container">
                    <div class="ui red padded grid"> 
                        <div class = "row"></div>
                        <div class="two wide column"></div>
                        <div class="twelve wide column ">

                            <div class="ui left aligned container">
                                <div class = "ui middle aligned grid">
                                    <div class="four wide column ">
                                        任务类型
                                    </div>
                                    <div class="twelve wide column">
                                        <div class="ui selection dropdown">
                                            <input type="hidden" name="task_type">
                                            <i class="dropdown icon"></i>
                                            <div class="default text">任务类型</div>
                                            <div class="menu">
                                                <div class="item" data-value="0">问卷填写</div>
                                                <div class="item" data-value="1">快递收取</div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="four wide column ">
                                        任务报酬
                                    </div>
                                    <div class="twelve wide column">
                                        <div class="ui input">
                                            <input type="text" placeholder="">
                                        </div>
                                        &nbsp;&nbsp;&nbsp;币
                                    </div>

                                    <div class="four wide column ">
                                        任务时限
                                    </div>
                                    <div class="twelve wide column">
                                        <div class="ui mini input">
                                            <input type="text" placeholder="">
                                        </div>
                                        年
                                        <div class="ui mini input">
                                            <input type="text" placeholder="">
                                        </div>
                                        月
                                        <div class="ui mini input">
                                            <input type="text" placeholder="">
                                        </div>
                                        日
                                    </div>
                                    <div class="four wide column ">
                                        任务具体内容
                                    </div>
                                    <div class="twelve wide column"></div>

                                    <div class="four wide column right aligned ">
                                        问卷链接
                                    </div>
                                    <div class="twelve wide column">
                                        <div class="ui input" >
                                            <input type="text" placeholder="" style="width:450px;">
                                        </div>
                                    </div>

                                    <div class="four wide column right aligned ">
                                        问卷内容
                                    </div>
                                    <div class="twelve wide column">
                                        <div class="ui input" >
                                            <input type="text" placeholder="" style="width:450px;">
                                        </div>
                                    </div>

                                    <div class="four wide column right aligned ">
                                        问卷题数
                                    </div>
                                    <div class="four wide column">
                                        <div class="ui input" >
                                            <input type="text" placeholder="" style="width:100px;">
                                        </div> 
                                        &nbsp;&nbsp;&nbsp;题
                                    </div>
                                    <div class="four wide column right aligned ">
                                        需求问卷数量
                                    </div>
                                    <div class="four wide column">
                                        <div class="ui input" >
                                            <input type="text" placeholder="" style="width:100px;">
                                        </div> 
                                        &nbsp;&nbsp;&nbsp;份
                                    </div>

                                    <div class="four wide column right aligned ">
                                        问卷用途
                                    </div>
                                    <div class="twelve wide column">
                                        <div class="ui input" >
                                            <input type="text" placeholder="" style="width:450px;">
                                        </div>
                                    </div>

                                    <div class="four wide column right aligned ">
                                        其他备注
                                    </div>
                                    <div class="twelve wide column">
                                        <div class="ui textarea" >
                                            <textarea rows="3" cols="60">
                                            </textarea>
                                        </div>
                                    </div>
                                    <div class="row"></div>
                                    <div class="row"></div>
                                    <div class="twelve wide column"></div>
                                    <div class="three wide column left aligned">
                                        <button class="ui small blue button" style="width:120px;">发布</button>
                                    </div>
                                    <div class="one wide column"></div>
                                </div>
                            </div>
                            <br />
                        </div>
                        <div class="two wide column"></div>
                    </div>
                </div>
            </div>
            <div class = "three wide column"></div>
            <div class = "row"></div>
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
        font-size: 1em;
    }
    .pic{
        width: 100px;
        height: 100px;
    }
</style>
