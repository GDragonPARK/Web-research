const PROJECTS = [
  {
    id: 1,
    title: "2026 PC 게임 시장: Story vs System",
    tags: ["Market Analysis", "2026 Trend", "Systemization"],
    summary: "MAU TOP 20 게임들의 서사 구조와 시스템적 결합 분석. '스토리텔링의 시스템화'가 리텐션에 미치는 영향.",
    status: "Ready",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80",
    body: `
      <h2>1. 시장의 변화: 스토리텔링의 시스템화</h2>
      <p>2026년 글로벌 시장은 <strong>'스토리텔링의 시스템화'</strong>를 이룬 게임들이 상위권을 장악하고 있습니다. 단순한 선형적 서사가 아닌, 유저의 행동이 서버의 역사가 되는 구조입니다.</p>
      
      <h3>A. 스토리 및 세계관 중심형 게임 (Story-Centric)</h3>
      <p>이 그룹은 견고한 메인 시나리오를 바탕으로 유저의 몰입을 유도하며, 확장팩과 시즌제 서사를 통해 순위를 유지합니다.</p>
      
      <div class="table-container">
        <table class="data-table">
          <thead>
            <tr>
              <th>순위/게임명</th>
              <th>세계관 및 기획 요소</th>
              <th>DAU / ARPU 분석</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>9위 Battlefield 6</strong> (EA)</td>
              <td><strong>실시간 지형 파괴(Destruction 3.0):</strong> 유저의 전술적 파괴 행위가 곧 전쟁의 역사를 기록하게 함으로써 '환경 통제권' 부여.</td>
              <td>DAU: 150만<br>ARPU: $0.30</td>
            </tr>
            <tr>
              <td><strong>12위 GTA V</strong> (Rockstar)</td>
              <td><strong>사회 시뮬레이션(RP):</strong> FiveM 등 모드 서버를 통해 유저가 스스로 직업과 인생 서사를 창조하는 '창발적 플랫폼'화.</td>
              <td>DAU: 80만<br>ARPU: $0.15</td>
            </tr>
            <tr>
              <td><strong>16위 Diablo IV</strong> (Blizzard)</td>
              <td><strong>워 플랜(War Plans):</strong> 엔드 콘텐츠에서 유저가 직접 퀘스트 동선과 난이도 변수를 설계하여 개인화된 정복 서사 구축.</td>
              <td>DAU: 40만<br>ARPU: $0.50</td>
            </tr>
             <tr>
              <td><strong>20위 바람이 만나는 곳</strong> (NetEase)</td>
              <td><strong>무공 탈취 시스템:</strong> 고정된 성장이 아닌, 세계의 기연을 통해 타 문파의 무공을 배우는 유동적 서사.</td>
              <td>DAU: 10만<br>ARPU: $0.35</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3>B. 시스템 및 재미 요소 중심형 게임 (System-Centric)</h3>
      <p>이 그룹은 명확한 서사보다는 정교한 밸런스, 경쟁, UGC 생산 도구를 통해 유저를 능동적으로 움직이게 합니다.</p>
      <ul>
        <li><strong>Counter-Strike 2 (1위):</strong> 완벽한 공정성을 전제로 한 전술적 슈팅. 승패 불확실성을 50%로 유지하여 뇌의 도파민 예측 오류 시스템 자극. (DAU 1,200만)</li>
        <li><strong>Minecraft (2위):</strong> 자율성(Autonomy)의 극대화. 주변 환경을 통제하고 변화시키고 싶어 하는 인간 본능적 욕망의 완벽한 충족. (DAU 1,600만)</li>
        <li><strong>Roblox (4위):</strong> 성공 자아의 실현. 단순 유저를 '창조자'로 격상시켜 플랫폼에 대한 강력한 신뢰(Trust)와 존중 형성.</li>
      </ul>

      <h3>결론: LTV와 리텐션 서사</h3>
      <p>수학적으로 <code>LTV = ∑(ARPDAU × Retention)</code> 입니다. 시나리오 기획자는 "내일은 또 어떤 사건이 벌어질까?"라는 예측 오류 가능성을 심어 유저의 잔존일수(t)를 늘려야 합니다. 고품질 서사는 유저의 이탈을 막는 가장 강력한 방어막입니다.</p>
    `
  },
  {
    id: 2,
    title: "LoL: IP 확장과 시나리오 기획 전략",
    tags: ["IP Strategy", "Business", "Skin Sales"],
    summary: "스토리가 어떻게 스킨 매출(BM)과 IP 브랜드 파워로 치환되는가? '별수호자' 유니버스 사례 분석.",
    status: "Ready",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=800&q=80",
    body: `
      <h2>LoL에서 시나리오 기획자의 역할</h2>
      <p>LoL 같은 초대형 라이브 게임에서 시나리오는 플레이를 직접 지탱하는 것이 아니라, <strong>IP의 성장</strong>과 <strong>코스메틱 매출의 설득력</strong>을 담당합니다.</p>
      
      <h3>1. IP 확장: 게임 밖에서의 유입</h3>
      <p>LoL의 성장은 게임 밖(미디어, 굿즈, Arcane 등)에서 일어납니다. 시나리오 기획자는 다음 역할을 수행합니다.</p>
      <ul>
        <li>챔피언을 단순 유닛이 아닌 <strong>인격체(Persona)</strong>로 설계</li>
        <li>외부 제작물로 옮겨도 무너지지 않는 설정(바이블) 관리</li>
        <li>트랜스미디어 확장 시 정체성 유지 가이드 제공</li>
      </ul>

      <h3>2. BM과 서사의 결합 (스킨 세일즈)</h3>
      <p>스킨은 단순 외형이 아니라 '정체성 소비'입니다. <strong>'별수호자(Star Guardian)'</strong> 스킨 라인이 성공한 이유는 유저에게 소속감과 수집 욕구를 자극하는 평행우주 서사를 제공했기 때문입니다.</p>
      <blockquote>
        "시나리오 기획자는 스킨을 단순 그래픽 쪼가리가 아닌, '세계관 상품'으로 만들어 ARPPU를 끌어올리는 역할을 수행한다."
      </blockquote>
      <p>기획자는 스킨 라인별 대체 세계관을 설계하고, 이벤트 패스의 서사를 제작하여 유저가 다음 드롭을 기다리게 만듭니다.</p>

      <h3>3. 세계관의 유지보수</h3>
      <p>150개 이상의 챔피언이 존재하는 게임에서 설정 충돌은 신뢰도 하락으로 이어집니다. 시나리오팀은 신규 챔피언, 스킨, 이벤트가 '같은 세계의 다른 조각'으로 쌓이도록 품질 관리를 수행하며, 이는 커뮤니티의 2차 창작과 팬덤 강화로 이어집니다.</p>
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
      <h2>뇌과학으로 본 리텐션 메커니즘</h2>
      <p>상위권 게임들의 공통적인 성공 요인은 인간의 뇌가 가장 갈망하는 <strong>'자율성'</strong>과 <strong>'적절한 불확실성'</strong>을 제공하기 때문입니다.</p>

      <h3>1. 자율성(Autonomy)과 환경 통제</h3>
      <p>Minecraft(2위)나 Fortnite(3위)는 유저의 조작이 즉각적으로 환경의 물리적 변화로 이어집니다. 이는 인간이 주변 환경을 자신의 의지대로 변화시킬 때 느끼는 본능적인 성장의 기쁨을 제공합니다.</p>
      <ul>
        <li><strong>자기 결정권:</strong> 게임은 유저에게 "어느 지역에 갈지, 어떤 캐릭터를 선택할지"를 100% 결정하게 합니다.</li>
        <li><strong>내재 동기:</strong> 현실에서 느끼기 어려운 '세상의 주인'이 되는 경험이 강력한 내재 동기를 유발합니다.</li>
      </ul>

      <h3>2. 50% 불확실성과 도파민</h3>
      <p>도파민은 보상 자체가 아니라, 보상에 대한 '예측'과 '결과' 사이의 <strong>예측 오류(Prediction Error)</strong>가 발생할 때 가장 강력하게 분비됩니다.</p>
      <p>LoL이나 CS2의 매칭 시스템(MMR)은 승률을 50%로 맞춥니다. <strong>"이길 수도 있고 질 수도 있는"</strong> 아슬아슬한 상태가 유저를 끊임없이 '다음 판'으로 이끄는 원동력이 됩니다.</p>

      <h3>3. 능동적 추론 (Active Inference)</h3>
      <p>플레이어의 뇌는 정보를 수동적으로 받아들이지 않고, 끊임없이 다음 상황을 예측(Top-down)하고 결과(Bottom-up)와 비교합니다. 유저의 의도가 즉각적인 움직임과 결과로 이어지는 정교한 조작감은 유저가 게임 세계와 일체감을 느끼게 합니다.</p>
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

      <h3>주요 데이터 (추정치 포함)</h3>
      <div class="table-container">
        <table class="data-table">
          <thead>
            <tr>
              <th>순위</th>
              <th>게임명</th>
              <th>MAU (추정)</th>
              <th>주요 수익모델</th>
              <th>최근 전략 요약</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Counter-Strike 2</td>
              <td>46.3M</td>
              <td>스킨/케이스 + 마켓 수수료</td>
              <td>경제(스킨) 업데이트가 곧 마케팅 자산</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Minecraft</td>
              <td>55.0M</td>
              <td>패키지 + 마켓플레이스</td>
              <td>Minecraft LIVE 중심의 기능 드롭</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Fortnite</td>
              <td>50.0M</td>
              <td>배틀패스 + 코스메틱</td>
              <td>월간 시즌성 이벤트 및 외부 채널 확장</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Roblox</td>
              <td>45.0M</td>
              <td>Robux 가상경제</td>
              <td>광고상품 확장 및 연령층 확대(Novel Game)</td>
            </tr>
             <tr>
              <td>19</td>
              <td>World of Warcraft</td>
              <td>8.0M</td>
              <td>구독($13/mo) + 확장팩</td>
              <td>대형 패치와 하우징 도입으로 복귀 유도</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p><em>* 수치는 Newzoo 랭킹 및 Steam 플레이시간, 기업 공시 자료를 기반으로 한 추정치입니다.</em></p>

      <h3>인사이트</h3>
      <ul>
        <li><strong>MAU 집중:</strong> 상위 5개 게임이 전체 시장 트래픽의 상당 부분을 점유하는 '슈퍼 앱' 현상이 게임에서도 나타납니다.</li>
        <li><strong>ARPU의 비대칭:</strong> 구독형(WoW)은 MAU가 적어도 ARPU가 높으며, 인디/패키지(Terraria)는 MAU 변동에 비해 반복 매출이 낮습니다.</li>
        <li><strong>마케팅의 시즌화:</strong> 단순 광고 집행이 아닌, 라이브 운영(시즌, 패치, 대회) 자체를 미디어 편성표처럼 설계하여 접속 동기를 부여합니다.</li>
      </ul>
    `
  }
];
