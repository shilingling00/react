import React from 'react';
export default class Video extends React.Component{
    render(){
        return <div className='video'>
            <div className="title">
                <span className="lefttext">精选专辑</span>
                <span className="righttext">
                    <span>查看全部</span>
                    <i> > </i>
                </span>
            </div>
            <ul className="videos">
                <li>
                <div>
                    <img src="http://img.zxxk.com/2019-1/ZXXKCOM20190117151132969916.jpg" alt=""/>
                    <span>鲁教版 八年级数学下册 第九章 相似三角形的基本模型2-视频微课堂</span>
                </div>
            </li>
                <li>
                    <div>
                        <img src="http://img.zxxk.com/2019-1/ZXXKCOM20190117151132969916.jpg" alt=""/>
                        <span>鲁教版 八年级数学下册 第九章 相似三角形的基本模型2-视频微课堂</span>
                    </div>
                </li>
                <li>
                    <div>
                        <img src="http://img.zxxk.com/2019-1/ZXXKCOM20190117151132969916.jpg" alt=""/>
                        <span>鲁教版 八年级数学下册 第九章 相似三角形的基本模型2-视频微课堂</span>
                    </div>
                </li>
                <li>
                    <div>
                        <img src="http://img.zxxk.com/2019-1/ZXXKCOM20190117151132969916.jpg" alt=""/>
                        <span>鲁教版 八年级数学下册 第九章 相似三角形的基本模型2-视频微课堂</span>
                    </div>
                </li>
            </ul>
        </div>
    }
}
