const PROJECTS = [
  {
    id: 1,
    title: "2026 PC 게임 시장: Story vs System",
    tags: ["Market Analysis", "2026 Trend", "Retention"],
    summary: "MAU TOP 20 게임들의 서사 구조와 시스템적 결합 분석. '스토리텔링의 시스템화'가 리텐션에 미치는 영향.",
    status: "Ready",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80",
    body: `
      <h2>1. 서론: 스토리텔링의 시스템화</h2>
      <p>2026년 글로벌 PC 게임 시장은 더 이상 '스토리'와 '시스템'을 이분법적으로 구분하지 않습니다. 상위권을 장악한 게임들의 공통점은 <strong>"유저의 행동이 곧 서버의 역사가 되는 구조"</strong>, 즉 <strong>'스토리텔링의 시스템화'</strong>를 이룩했다는 점입니다.</p>
      
      <hr>

      <h2>2. 그룹 A: 스토리 및 세계관 중심형 (Story-Centric)</h2>
      <p>이 그룹은 견고한 메인 시나리오를 바탕으로 유저의 몰입을 유도하며, 확장팩과 시즌제 서사를 통해 순위를 유지합니다. 핵심은 <strong>"내가 이 세계에 영향을 미친다"</strong>는 감각(Agency)을 제공하는 것입니다.</p>
      
      <h3>주요 사례 분석</h3>
      <div class="table-container">
        <table class="data-table">
          <thead>
            <tr>
              <th width="25%">게임명 (Rank)</th>
              <th>세계관 및 기획 요소</th>
              <th>리텐션 전략</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Battlefield 6</strong><br>(Rank 9)</td>
              <td>NATO와 PMC(Pax Armata)의 전쟁.<br>주인공 머피와 대거 분대의 사투.</td>
              <td><strong>Destruction 3.0:</strong> 실시간 지형 파괴가 전장의 영구적 변화로 기록됨. 유저에게 '환경 통제권'을 부여하여 몰입도 극대화.</td>
            </tr>
            <tr>
              <td><strong>GTA V (FiveM)</strong><br>(Rank 12)</td>
              <td>현대 범죄 느와르와 사회 풍자.<br>무한한 자유도.</td>
              <td><strong>사회 시뮬레이션(RP):</strong> 유저가 경찰, 의사, 갱단 등 직업을 갖고 스스로 서사를 창조하는 '창발적 플랫폼'으로 진화.</td>
            </tr>
            <tr>
              <td><strong>Diablo IV</strong><br>(Rank 16)</td>
              <td>천상과 지옥의 영원한 분쟁.<br>성역의 구원자 서사.</td>
              <td><strong>War Plans:</strong> 엔드 콘텐츠에서 유저가 직접 퀘스트 동선과 난이도를 설계. '정복 서사'의 개인화 실현.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <hr>

      <h2>3. 그룹 B: 시스템 중심형 (System-Centric)</h2>
      <p>명확한 서사보다는 정교한 밸런스와 경쟁, 혹은 창작 도구를 제공하여 유저를 능동적으로 움직이게 합니다. 스토리는 <strong>"플레이를 위한 맥락(Context)"</strong>으로 작용합니다.</p>

      <ul>
        <li>
            <strong>Counter-Strike 2 (Rank 1):</strong> 
            <br>완벽한 공정성 기반의 전술 슈팅. 승패 불확실성을 50%로 유지하여 뇌의 도파민 예측 오류 시스템을 지속적으로 자극합니다.
        </li>
        <li>
            <strong>Minecraft (Rank 2):</strong> 
            <br>자율성(Autonomy)의 극대화. 주변 환경을 통제하고 변화시키고 싶어 하는 인간 본능적 욕망을 충족시킵니다.
        </li>
        <li>
            <strong>Roblox (Rank 4):</strong> 
            <br>유저를 '플레이어'에서 '크리에이터'로 격상. 플랫폼에 대한 강력한 신뢰(Trust)와 존중을 형성하여 이탈을 방지합니다.
        </li>
      </ul>

      <hr>

      <h2>4. 결론: LTV 방정식의 재해석</h2>
      <p class="highlight-box">
        <strong>LTV = ∑(ARPDAU × Retention)</strong>
      </p>
      <p>시나리오 기획자의 역할은 단순히 좋은 이야기를 쓰는 것이 아닙니다. <strong>"내일은 또 어떤 사건이 벌어질까?"</strong>라는 기대감과 예측 오류 가능성을 심어, 유저의 잔존일수(Retention)를 늘리는 것입니다. 고품질 서사는 유저의 이탈을 막는 가장 강력하고 경제적인 방어막입니다.</p>
    `
  },
  {
    id: 2,
    title: "LoL: IP 확장과 시나리오 기획 실무",
    tags: ["IP Strategy", "Business", "Skin Sales"],
    summary: "스토리가 어떻게 스킨 매출(BM)과 IP 브랜드 파워로 치환되는가? '별수호자' 유니버스 사례 분석.",
    status: "Ready",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=800&q=80",
    body: `
      <h2>1. LoL에서 시나리오 기획자의 역할 정의</h2>
      <p>LoL 같은 초대형 라이브 게임에서 시나리오는 플레이를 직접 지탱하는 것이 아니라, <strong>IP의 성장 엔진</strong>이자 <strong>BM(매출)의 설득력</strong>을 담당합니다.</p>
      
      <h3>핵심 미션</h3>
      <ul>
        <li><strong>캐릭터 페르소나 설계:</strong> 챔피언을 단순한 유닛이 아닌, 팬덤이 형성되는 '인격체'로 격상시킵니다.</li>
        <li><strong>바이블(Bible) 관리:</strong> 게임 외부(Arcane, 굿즈, 소설)로 확장이 일어나도 설정이 무너지지 않도록 중심을 잡습니다.</li>
        <li><strong>트랜스미디어 가이드:</strong> 다양한 매체에서 동일한 브랜드 경험을 주도록 톤앤매너를 조율합니다.</li>
      </ul>

      <hr>

      <h2>2. BM과 서사의 결합: 스킨 세일즈 전략</h2>
      <p>스킨은 단순한 그래픽 데이터가 아닙니다. 유저는 스킨을 통해 <strong>'정체성'과 '소속감'</strong>을 소비합니다.</p>
      
      <h3>Case Study: 별수호자 (Star Guardian)</h3>
      <p>별수호자 스킨 라인이 폭발적인 매출을 기록한 이유는 화려한 비주얼 때문만이 아닙니다.</p>
      <blockquote>
        "평행우주 서사를 통해 유저에게 '마법소녀물'이라는 새로운 장르적 재미와, 팀으로서의 유대감을 제공했기 때문입니다."
      </blockquote>
      
      <h3>기획자의 실무 (To-Do)</h3>
      <ol>
        <li><strong>스킨 유니버스 설계:</strong> 기존 룬테라와 다른 대체 세계관의 룰, 관계도, 갈등 구조를 창조합니다.</li>
        <li><strong>이벤트 서사 제작:</strong> 이벤트 패스, 미션 텍스트, 단편 소설을 통해 "다음 에피소드"를 기대하게 만듭니다.</li>
        <li><strong>대사 및 보이스 오버:</strong> 스킨 착용 시 달라지는 대사를 통해 유저가 구매한 '새로운 인격'을 체감하게 합니다.</li>
      </ol>

      <hr>

      <h2>3. 세계관 유지보수와 팬덤</h2>
      <p>150개 이상의 챔피언이 공존하는 세계에서 설정 충돌은 치명적입니다. 시나리오팀은 신규 챔피언과 리워크 과정에서 <strong>'연결성'</strong>을 부여합니다. 이는 유저들이 2차 창작(Fan Art, Fiction)을 활발히 하도록 돕는 땔감이 되며, 결과적으로 <strong>무료 마케팅 효과</strong>와 <strong>게임 수명 연장</strong>으로 이어집니다.</p>
    `
  },
  {
    id: 3,
    title: "저ARPU-고DAU 모델의 심리학",
    tags: ["Psychology", "Monetization", "Brain Science"],
    summary: "자율성과 불확실성을 활용한 뇌과학적 리텐션 설계. 낮은 진입장벽과 높은 트래픽 유지의 상관관계.",
    status: "Ready",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80",
    body: `
      <h2>1. 서론: 왜 그들은 접속하는가?</h2>
      <p>높은 트래픽(DAU)을 유지하지만 1인당 결제액(ARPU)은 낮은 게임들(Minecraft, Roblox, Fortnite 등)의 공통점은 <strong>인간의 뇌가 가장 갈망하는 본능적 보상</strong>을 제공한다는 점입니다.</p>

      <hr>

      <h2>2. 자율성 (Autonomy): 뇌를 춤추게 하라</h2>
      <p>자기결정이론(SDT)에 따르면, 인간은 자신의 행동이 환경을 통제할 때 가장 큰 만족감을 느낍니다.</p>
      <ul>
        <li><strong>환경 통제권:</strong> Minecraft에서 나무를 캐고 집을 짓는 행위는 현실에서 느끼기 힘든 '완벽한 통제감'을 줍니다.</li>
        <li><strong>즉각적 피드백:</strong> 나의 조작이 즉시 화면의 변화로 나타나는 정교한 조작감은 뇌의 '능동적 추론(Active Inference)' 과정을 만족시킵니다.</li>
      </ul>

      <hr>

      <h2>3. 불확실성 (Uncertainty): 도파민의 원천</h2>
      <p>도파민은 보상을 받을 때가 아니라, <strong>보상을 받을지 안 받을지 모를 때(예측 오류)</strong> 가장 많이 분비됩니다.</p>
      
      <h3>50% 승률의 마법</h3>
      <p>LoL이나 CS2의 매칭 시스템(MMR)은 유저의 승률을 강제로 50%에 수렴시킵니다. "이번 판은 이길 수 있을까?"라는 <strong>적절한 스트레스와 기대감</strong>이 유저를 '한 판만 더'의 굴레로 빠뜨립니다. 만약 승률이 100%라면, 유저는 지루함을 느끼고 이탈할 것입니다.</p>

      <hr>

      <h2>4. 사회적 신뢰 (Social Trust)</h2>
      <p>Roblox는 유저를 단순 소비자가 아닌 <strong>'창조자(Creator)'</strong>로 대우합니다. 이는 플랫폼에 대한 강력한 신뢰 자본을 형성하며, 유저가 만든 콘텐츠가 다시 다른 유저를 불러모으는 <strong>'플라이휠(Flywheel)'</strong> 효과를 만들어냅니다. 낮은 ARPU는 압도적인 유저 수(DAU)로 상쇄되고도 남습니다.</p>
    `
  },
  {
    id: 4,
    title: "Global PC Game Top 20 Deep Dive",
    tags: ["Deep Research", "Data", "2026 Feb"],
    summary: "2026년 2월 기준 글로벌 PC 게임 MAU, DAU, ARPU 추정치 및 마케팅 전략 상세 분석 보고서.",
    status: "Ready",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    body: `
      <h2>Executive Summary</h2>
      <p>본 보고서는 2026년 1월 기준 <strong>글로벌 PC 게임 MAU Top 20</strong>을 분석했습니다. Top 5는 CS2, Minecraft, Fortnite, Roblox, LoL로 플랫폼 성격을 띤 게임들이 점유하고 있습니다.</p>

      <h3>📊 주요 게임 지표 분석 (추정치)</h3>
      <div class="table-container">
        <table class="data-table">
          <thead>
            <tr>
              <th width="5%">#</th>
              <th width="20%">Game</th>
              <th width="15%">MAU (Est.)</th>
              <th width="25%">Revenue Model</th>
              <th width="35%">Marketing Strategy (2025-26)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td><strong>Counter-Strike 2</strong></td>
              <td>46.3M</td>
              <td>스킨/케이스 키 판매<br>장터 수수료</td>
              <td>경제 시스템(스킨 가치) 유지가 곧 마케팅.<br>e스포츠 시청 경험 고도화.</td>
            </tr>
            <tr>
              <td>2</td>
              <td><strong>Minecraft</strong></td>
              <td>55.0M</td>
              <td>패키지 판매<br>마켓플레이스 수수료</td>
              <td>'Minecraft LIVE'를 통한 기능 드롭.<br>유튜브/틱톡 2차 창작 생태계 지원.</td>
            </tr>
            <tr>
              <td>3</td>
              <td><strong>Fortnite</strong></td>
              <td>50.0M</td>
              <td>배틀패스<br>IP 콜라보 스킨</td>
              <td>월간 시즌성 이벤트(Live Event).<br>메타버스 플랫폼 확장(LEGO, Festival).</td>
            </tr>
            <tr>
              <td>4</td>
              <td><strong>Roblox</strong></td>
              <td>45.0M</td>
              <td>Robux 환전 수수료<br>광고 상품</td>
              <td>광고 상품 다각화.<br>고연령층 타겟팅(17+ 컨텐츠) 확대.</td>
            </tr>
            <tr>
              <td>5</td>
              <td><strong>League of Legends</strong></td>
              <td>35.0M</td>
              <td>챔피언/스킨 판매<br>이벤트 패스</td>
              <td>Arcane 시즌2 등 트랜스미디어 전략.<br>e스포츠(Worlds)와 인게임 보상 연동.</td>
            </tr>
            <tr>
              <td>6</td>
              <td><strong>Valorant</strong></td>
              <td>28.0M</td>
              <td>무기 스킨<br>배틀패스</td>
              <td>VCT(e스포츠) 파트너 팀 스킨 출시.<br>하이퍼 로컬라이징 마케팅.</td>
            </tr>
             <tr>
              <td>7</td>
              <td><strong>The Sims 4</strong></td>
              <td>20.0M</td>
              <td>DLC (확장팩/키트)<br>부분 유료화 전환</td>
              <td>무료 플레이 전환 후 유저 유입 가속화.<br>지속적인 DLC 출시로 LTV 증대.</td>
            </tr>
             <tr>
              <td>19</td>
              <td><strong>World of Warcraft</strong></td>
              <td>8.0M</td>
              <td>월 정액제 ($13)<br>확장팩 판매</td>
              <td>'세계혼 서사시' 3부작 발표로 복귀 유도.<br>교역소 시스템으로 꾸준한 접속 유인.</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p class="caption">* 수치는 Newzoo, SteamDB, 기업 공시 자료를 기반으로 한 추정치입니다.</p>

      <hr>

      <h2>💡 핵심 인사이트</h2>
      
      <h3>1. '슈퍼 앱' 현상의 게임화</h3>
      <p>상위 5개 게임은 단순한 게임이 아니라, 소셜/창작/소비가 모두 이루어지는 <strong>플랫폼</strong>으로 기능합니다. 유저는 게임을 하러 오는 것이 아니라, 친구를 만나러 접속합니다.</p>
      
      <h3>2. ARPU의 비대칭성</h3>
      <p><strong>구독형(WoW, FF14)</strong>은 MAU가 상대적으로 적어도(8M~10M) 충성도 높은 유저층 덕분에 높은 ARPU를 유지합니다. 반면, <strong>패키지/인디 게임</strong>은 트래픽 변동성이 크고 반복 결제 모델이 약해 지속적인 수익 창출에 한계가 있습니다.</p>
      
      <h3>3. 마케팅의 시즌화 (Seasonality)</h3>
      <p>단발성 광고 집행보다는, <strong>라이브 운영(패치노트, 시즌 시작, e스포츠 대회)</strong> 자체가 가장 큰 마케팅 이벤트가 됩니다. 게임사는 이를 '미디어 편성표'처럼 관리하여 유저의 접속 습관을 설계합니다.</p>
    `
  }
];
