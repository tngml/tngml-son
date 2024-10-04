const NewsComponent = () => {
    const dataList =[
        {
            num : 1,
            title : "'TV동물농장' 저격하며 서운함 토로 '내 반려견 언급 없었다'",
            writer : "아시아경제",
            field : "사회",
            createDt : "2024-10-03",
            hit : 10
        },
        {
            num : 2,
            title : "'계속 보게 돼'…'진주 귀걸이를 한 소녀'의 놀라운 비밀",
            writer : "한국경제국제",
            field : "경제",
            createDt : "2024-10-02",
            hit : 20
        },    
        {
            num : 3,
            title : "'아파트 얼마 이하로 내놓지 말아요'…단톡방·커뮤니티 집값 '짬짜미'",
            writer : "뉴스1",
            field : "경제",
            createDt : "2024-10-02",
            hit : 22
        },
        {
            num : 4,
            title : "“쉬는 게 능사 아냐?” 스트레스 해소를 위한 18가지 방법",
            writer : "코메디닷컴",
            field : "생활",
            createDt : "2024-10-02",
            hit : 18
        },
        {
            num : 5,
            title : "“중년 ‘아재’ 냄새라고?”…퀴퀴함, 나이들면서 왜 지독해질까?",
            writer : "코메디닷컴",
            field : "생활",
            createDt : "2024-10-02",
            hit : 5
        }, 
        {
            num : 6,
            title : "주의력 낮은 청소년, 성인이 되면 더 큰 위험?",
            writer : "코메디닷컴",
            field : "생활",
            createDt : "2024-10-02",
            hit : 2
        },
        {
            num : 7,
            title : "'좀만 버티면 돼? 완벽한 오판'‥박문성 '심리적 해임' 직격",
            writer : "MBC",
            field : "사회",
            createDt : "2024-10-01",
            hit : 32
        }, 
        {
            num : 8,
            title : "집값 오르니 편법증여?…수도권 이상거래 '397건'",
            writer : "비즈워치",
            field : "경제",
            createDt : "2024-10-01",
            hit : 53
        }, 
        {
            num : 9,
            title : "내일까지 최고 60mm 비, 낮 기온 20도 안팎 머물러",
            writer : "대구MBC",
            field : "속보",
            createDt : "2024-10-01",
            hit : 123
        }, 
        {
            num : 10,
            title : "최정예 여군·화장 지운 여배우…예능 주인공 된 '강한 여자'들",
            writer : "연합뉴스",
            field : "문화",
            createDt : "2024-10-01",
            hit : 72
        }, 
        {
            num : 11,
            title : "[정치시그널]김경율 “구기동 빌라 임대료 최대 100만 원…文 ‘임대료’ 주장, 엉뚱 발언”",
            writer : "채널A",
            field : "정치",
            createDt : "2024-09-30",
            hit : 66
        }, 
        {
            num : 12,
            title : "고려아연, 휴일에도 포문…'영풍-MBK 기각 뻔한데 가처분 재탕'",
            writer : "데일리안",
            field : "경제",
            createDt : "2024-09-30",
            hit : 41
        },
        {
            num : 13,
            title : "치킨 시켜놓고 “여친 귀신이 주문한 것…돈 못내” 억지부린 진상 태국男",
            writer : "서울신문",
            field : "국제",
            createDt : "2024-09-30",
            hit : 39
        }, 
        {
            num : 14,
            title : "어느 여당 의원들의 '5060 군 경계병 활용'에 관한 짧은 고견",
            writer : "미디어오늘",
            field : "정치",
            createDt : "2024-09-30",
            hit : 78
        }, 
        {
            num : 15,
            title : "의료계 '인력 추계위, 2025년 정원 논의 안하면 참여 않을 것'",
            writer : "동아사이언스",
            field : "속보",
            createDt : "2024-09-30",
            hit : 153
        } 
    ];    

    const info=()=>{
        return (dataList.map((list)=>{
           return(<tr>key {list.num}
            <td>{list.num}</td> 
            <td><a link ="#">{list.title}</a></td> 
            <td>{list.writer}</td> 
            <td>{list.field}</td> 
            <td>{list.createDt}</td> 
            <td>{list.hit}</td> s
            </tr>)
        }))
    }
    
    return (
        <>
        <h1 >뉴스 목록</h1>
        <hr/>

        <table border ="1" id = "tableList">
            <thead>
               <tr>
                <th>번호</th>
                <th>제목</th>
                <th>작성자</th>
                <th>분류</th>
                <th>작성일자</th>
                <th>조회수</th>
                </tr>
            </thead>
            <tbody>
                info();
            </tbody>
        </table>



        </>
    );
};

export default NewsComponent;