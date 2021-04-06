import React, { Component } from 'react'
import style from './index.module.css'

export default class index extends Component {
    state = {

    }

    static getDerivedStateFromProps() {
        return {
            hot: [													//热点，根据回复量访问量综合排序，实际节点是帖子列表节点
                {
                    "id": 123,
                    "title": "图灵奖今日出炉，“龙书” 作者、编程语言大佬 Alfred Aho 和 Jeffrey Ullman 获奖",
                    "temperature": 123,								//热度，唯一比帖子列表节点多的属性
                    "author": "",
                    "tags": [],
                    "lastModify": "",
                    "lastReply": "",
                    "replyCount": 10
                },
                {
                    "id": 123,
                    "title": "可供货华为！ARM 十年来首次发布最新架构 Armv9",
                    "temperature": 111,								//热度，唯一比帖子列表节点多的属性
                    "author": "",
                    "tags": [],
                    "lastModify": "",
                    "lastReply": "",
                    "replyCount": 10
                },
                {
                    "id": 123,
                    "title": "雷军哽咽：我愿押上人生全部声誉，为小米汽车而战！",
                    "temperature": 99,								//热度，唯一比帖子列表节点多的属性
                    "author": "",
                    "tags": [],
                    "lastModify": "",
                    "lastReply": "",
                    "replyCount": 10
                },
                {
                    "id": 123,
                    "title": "Wi-Fi 爆重大安全漏洞，Android、iOS、Windows 等所有无线设备都不安全了",
                    "temperature": 70,								//热度，唯一比帖子列表节点多的属性
                    "author": "",
                    "tags": [],
                    "lastModify": "",
                    "lastReply": "",
                    "replyCount": 10
                },
                {
                    "id": 123,
                    "title": "我该用 Java 12 还是坚持 Java 11？",
                    "temperature": 70,								//热度，唯一比帖子列表节点多的属性
                    "author": "",
                    "tags": [],
                    "lastModify": "",
                    "lastReply": "",
                    "replyCount": 10
                }
            ]
        }
    }

    render() {
        const { hot } = this.state;
        return (
            <div className={style.outer}>
                <div className={style.title}>
                    <span>最新发布</span>
                    <span className={style.more}>more</span>
                </div>
                {
                    hot.map((item, index) => {
                        return (
                            <div key={index} className={style.docBox}>
                                <div className={style.doc}>
                                    <div className={style.text}>{item.title}</div>
                                </div>
                            </div>
                        );
                    })
                }
            </div>
        )
    }
}
