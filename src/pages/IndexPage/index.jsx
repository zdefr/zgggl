import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import style from './index.module.css'
import ModuleSwitch from '../../components/INDEX/ModuleSwitch'
import PostList from '../../components/INDEX/PostList'

export default class IndexPage extends Component {


    state={
        module:'game'
    }

    static getDerivedStateFromProps(nextProps, preState) {
        if(preState.postData){
            return {
                module:window.location.pathname.split('/').pop()
            };
        }

        return {
            module:window.location.pathname.split('/').pop(),
            postData: {
                "module": "science",										   //帖子分类
                "sort": "lastModify",									//排序方式
                "page": 1,												//分页
                "posts": [												//帖子列表
                    {
                        "id": 123,										//唯一id
                        "title": "小米造车？谎言还是机遇",										//题目
                        "shot": "/mm.jpeg",										//简介图片，再考虑加不加
                        "author": "sheeeenber",									//作者：用户名
                        "tags": ["小米","汽车","sheeeeeeee"],										//标签，作者自定
                        "lastModify": "21.04.03",								//最后修改时间
                        "lastReply": "21.04.03",									//最后回复时间
                        "replyCount": "10"								//回复总数
                    },
                    {
                        "id": 123,										//唯一id
                        "title": "小米造车？谎言还是机遇",										//题目
                        "shot": "/mm.jpeg",										//简介图片，再考虑加不加
                        "author": "sheeeenber",									//作者：用户名
                        "tags": ["小米","汽车","sheeeeeeee"],										//标签，作者自定
                        "lastModify": "21.04.03",								//最后修改时间
                        "lastReply": "21.04.03",									//最后回复时间
                        "replyCount": "10"								//回复总数
                    },
                    {
                        "id": 123,										//唯一id
                        "title": "小米造车？谎言还是机遇",										//题目
                        "shot": "/mm.jpeg",										//简介图片，再考虑加不加
                        "author": "sheeeenber",									//作者：用户名
                        "tags": ["小米","汽车","sheeeeeeee"],										//标签，作者自定
                        "lastModify": "21.04.03",								//最后修改时间
                        "lastReply": "21.04.03",									//最后回复时间
                        "replyCount": "10"								//回复总数
                    },
                    {
                        "id": 123,										//唯一id
                        "title": "小米造车？谎言还是机遇",										//题目
                        "shot": "/mm.jpeg",										//简介图片，再考虑加不加
                        "author": "sheeeenber",									//作者：用户名
                        "tags": ["小米","汽车","sheeeeeeee"],										//标签，作者自定
                        "lastModify": "21.04.03",								//最后修改时间
                        "lastReply": "21.04.03",									//最后回复时间
                        "replyCount": "10"								//回复总数
                    },
                    {
                        "id": 123,										//唯一id
                        "title": "小米造车？谎言还是机遇",										//题目
                        "shot": "/mm.jpeg",										//简介图片，再考虑加不加
                        "author": "sheeeenber",									//作者：用户名
                        "tags": ["小米","汽车","sheeeeeeee"],										//标签，作者自定
                        "lastModify": "21.04.03",								//最后修改时间
                        "lastReply": "21.04.03",									//最后回复时间
                        "replyCount": "10"								//回复总数
                    },
                    {
                        "id": 123,										//唯一id
                        "title": "小米造车？谎言还是机遇",										//题目
                        "shot": "/mm.jpeg",										//简介图片，再考虑加不加
                        "author": "sheeeenber",									//作者：用户名
                        "tags": ["小米","汽车","sheeeeeeee"],										//标签，作者自定
                        "lastModify": "21.04.03",								//最后修改时间
                        "lastReply": "21.04.03",									//最后回复时间
                        "replyCount": "10"								//回复总数
                    },
                    {
                        "id": 123,										//唯一id
                        "title": "小米造车？谎言还是机遇",										//题目
                        "shot": "/mm.jpeg",										//简介图片，再考虑加不加
                        "author": "sheeeenber",									//作者：用户名
                        "tags": ["小米","汽车","sheeeeeeee"],										//标签，作者自定
                        "lastModify": "21.04.03",								//最后修改时间
                        "lastReply": "21.04.03",									//最后回复时间
                        "replyCount": "10"								//回复总数
                    },
                    {
                        "id": 123,										//唯一id
                        "title": "小米造车？谎言还是机遇",										//题目
                        "shot": "/mm.jpeg",										//简介图片，再考虑加不加
                        "author": "sheeeenber",									//作者：用户名
                        "tags": ["小米","汽车","sheeeeeeee"],										//标签，作者自定
                        "lastModify": "21.04.03",								//最后修改时间
                        "lastReply": "21.04.03",									//最后回复时间
                        "replyCount": "10"								//回复总数
                    },
                    {
                        "id": 123,										//唯一id
                        "title": "小米造车？谎言还是机遇",										//题目
                        "shot": "/mm.jpeg",										//简介图片，再考虑加不加
                        "author": "sheeeenber",									//作者：用户名
                        "tags": ["小米","汽车","sheeeeeeee"],										//标签，作者自定
                        "lastModify": "21.04.03",								//最后修改时间
                        "lastReply": "21.04.03",									//最后回复时间
                        "replyCount": "10"								//回复总数
                    },
                    {
                        "id": 123,										//唯一id
                        "title": "小米造车？谎言还是机遇",										//题目
                        "shot": "/mm.jpeg",										//简介图片，再考虑加不加
                        "author": "sheeeenber",									//作者：用户名
                        "tags": ["小米","汽车","sheeeeeeee"],										//标签，作者自定
                        "lastModify": "21.04.03",								//最后修改时间
                        "lastReply": "21.04.03",									//最后回复时间
                        "replyCount": "10"								//回复总数
                    }
                ]
            }
        }
    }

    render() {
        console.log(this.state);
        const { module, postData } = this.state;
        if (module === postData.module) {
            return (
                <div className={style.outer}>
                    <div className={style.aside}></div>
                    <div className={style.main}>
                        <ModuleSwitch/>
                        <PostList list={postData}/>
                    </div>
                    <div className={style.aside}></div>
                </div>
            )
        }else{
            this.setState({
                module:postData.module
            })
            return <Redirect to={"/index/"+postData.module}/>
        }
    }
}
