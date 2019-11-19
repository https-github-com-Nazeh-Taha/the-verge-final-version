import React, { Component } from "react";
export default class Next extends Component {
    constructor(props) {
        super(props);
        
        
      }
    render() {
        return (
            <div>
                <div class="main-contaner">
                    <div class="left-main-contant">
                        <div class="corner-border-next">
                            <h2 corner-border-next>NEXT UP IN TECH</h2>
                        </div>
                        <ul class="next-list">
                            {this.props.article.map(item => {
                               return <li key={item._id}><a href="#">{item.title}</a></li>
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}