import React, {Component} from 'react';

class Header extends Component {
    render() {
        return (
            <div>
                <div>
                    <div>
                        <button>글목록</button>
                    </div>
                    <div>
                        <button>글쓰기</button>
                    </div>
                    <div>
                        <button>로그아웃</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;