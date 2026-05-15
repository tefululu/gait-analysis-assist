const phases = [
  {
    id: "initial-contact",
    label: "Initial Contact",
    jp: "初期接地",
    description: "足部が床へ接地する瞬間。文献上は荷重応答の開始条件を決める相で、足関節中間位、軽度膝屈曲、股関節屈曲位から衝撃吸収へ移る準備を見る。",
    pose: { frontLeg: -26, backLeg: 20, frontFoot: 2, backFoot: -12, frontArm: 20, backArm: -20 },
    issues: [
      { id: "no-heel", label: "踵接地が不十分", hint: "前足部接地、足底接地、下垂足、足関節背屈筋低下、足部痛を確認。" },
      { id: "knee-flex-ic", label: "膝屈曲位で接地", hint: "膝伸展制限、ハムストリングス短縮、疼痛回避、 crouch傾向を確認。" },
      { id: "hip-flex-ic", label: "股関節屈曲不足・歩幅低下", hint: "股関節伸展制限、立脚終期の推進力低下、疼痛性歩行を確認。" },
      { id: "short-step-length", label: "歩幅低下", hint: "患側立脚時間短縮、蹴り出し低下、股関節伸展不足、反対側遊脚の制限を確認。" }
    ]
  },
  {
    id: "loading-response",
    label: "Loading Response",
    jp: "荷重応答期",
    description: "初期両脚支持で、荷重受け入れ、衝撃吸収、前方への継続が課題。膝屈曲による衝撃吸収、足部接地、疼痛回避を確認する。",
    pose: { frontLeg: -10, backLeg: 26, frontFoot: 0, backFoot: -16, frontArm: 15, backArm: -24 },
    issues: [
      { id: "knee-buckle", label: "膝折れ・荷重時の不安定", hint: "大腿四頭筋筋力低下、膝痛、固有感覚低下、荷重恐怖を確認。" },
      { id: "excess-pronation", label: "過回内・足部不安定", hint: "足部アライメント、後脛骨筋機能、距骨下関節、靴・インソールを確認。" },
      { id: "short-stance-pain", label: "患側立脚時間の短縮", hint: "疼痛性跛行の典型。股・膝・足関節痛、荷重時痛、恐怖心を確認。" },
      { id: "posterior-trunk-lean", label: "体幹後傾", hint: "大殿筋筋力低下、股関節伸展筋の要求低下、股関節前面痛、姿勢制御を確認。" }
    ]
  },
  {
    id: "mid-stance",
    label: "Mid Stance",
    jp: "立脚中期",
    description: "単脚支持で身体重心が支持脚上を通過する相。骨盤水平保持、体幹代償、膝・足関節の安定性を確認する。",
    pose: { frontLeg: 2, backLeg: 8, frontFoot: 0, backFoot: -2, frontArm: -4, backArm: 4 },
    issues: [
      { id: "pelvic-drop", label: "対側骨盤下制", hint: "Trendelenburg徴候。支持側股関節外転筋、股関節痛、上殿神経を確認。" },
      { id: "trunk-lean", label: "支持側への体幹側方傾斜", hint: "Duchenne様代償。外転筋モーメントを減らす戦略か確認。" },
      { id: "pelvic-retraction-stance", label: "骨盤後退・後方回旋", hint: "支持側骨盤が後方へ引ける。股関節伸展制限、体幹回旋制御、疼痛回避、片麻痺歩行での代償を確認。" },
      { id: "excess-anterior-pelvic-tilt", label: "骨盤前傾の増大", hint: "股関節屈筋短縮、腹筋群・殿筋群の制御、腰椎前弯、股関節伸展不足を確認。" },
      { id: "knee-hyper", label: "膝過伸展スラスト", hint: "大腿四頭筋低下、足関節背屈制限、底屈筋痙縮、固有感覚低下を確認。" },
      { id: "varus-thrust-issue", label: "膝内反スラスト", hint: "荷重応答から立脚中期に膝が急に外側へ動く。内側型膝OA、内反アライメント、足部回外を確認。" },
      { id: "valgus-thrust-issue", label: "膝外反スラスト", hint: "荷重時に膝が急に内側へ入る。外反アライメント、股関節内転・内旋制御、足部過回内を確認。" }
    ]
  },
  {
    id: "terminal-stance",
    label: "Terminal Stance",
    jp: "立脚終期",
    description: "単脚支持後半で身体が支持足より前方へ進む相。股関節伸展、足関節背屈から踵離地、前足部ロッカーの推進を確認する。",
    pose: { frontLeg: 22, backLeg: -8, frontFoot: -12, backFoot: 6, frontArm: -18, backArm: 16 },
    issues: [
      { id: "limited-hip-ext", label: "股関節伸展不足", hint: "腸腰筋短縮、股関節前面痛、歩幅低下、体幹前傾代償を確認。" },
      { id: "reduced-pelvic-forward-rotation", label: "骨盤前方回旋不足", hint: "立脚終期の骨盤前方回旋が乏しい。股関節伸展制限、疼痛、歩幅低下、体幹回旋不足を確認。" },
      { id: "poor-push", label: "蹴り出し・前方推進の低下", hint: "下腿三頭筋筋力低下、MTP伸展制限、足趾機能、前足部痛を確認。" },
      { id: "early-heel-rise", label: "早期踵離地", hint: "足関節背屈制限、下腿三頭筋短縮、前足部痛、下腿前傾不足を確認。" }
    ]
  },
  {
    id: "pre-swing",
    label: "Pre Swing",
    jp: "前遊脚期",
    description: "後期両脚支持で、荷重を反対側へ移し遊脚へ準備する相。膝屈曲、足関節底屈、足趾離地のタイミングを見る。",
    pose: { frontLeg: 30, backLeg: -20, frontFoot: -20, backFoot: 10, frontArm: -24, backArm: 18 },
    issues: [
      { id: "toe-off-delay", label: "足趾離地が遅い", hint: "MTP伸展制限、底屈筋短縮、前足部痛、靴底形状を確認。" },
      { id: "knee-flex-low", label: "膝屈曲が少ない", hint: "大腿四頭筋痙縮、膝関節可動域制限、膝痛、遊脚クリアランス低下を確認。" },
      { id: "weight-shift-poor", label: "反対側への荷重移動不良", hint: "反対側支持性、バランス、疼痛、恐怖心、杖や手すり依存を確認。" }
    ]
  },
  {
    id: "initial-swing",
    label: "Initial Swing",
    jp: "遊脚初期",
    description: "足部離地から膝最大屈曲まで。下肢を前方へ加速し、床とのクリアランスを確保できるか確認する。",
    pose: { frontLeg: 22, backLeg: -34, frontFoot: -10, backFoot: 14, frontArm: -20, backArm: 22 },
    issues: [
      { id: "toe-drag", label: "つま先の引っかかり", hint: "足関節背屈筋低下、尖足、痙縮、AFO適合、感覚障害を確認。" },
      { id: "hip-hiking", label: "骨盤挙上", hint: "下肢クリアランス低下への代償。膝屈曲・足背屈不足を確認。" },
      { id: "circumduction", label: "分回し", hint: "膝屈曲不足、足関節背屈不足、伸展共同運動、下肢長差を確認。" },
      { id: "excess-pelvic-forward-rotation", label: "骨盤前方回旋の増大", hint: "股関節屈曲不足や遊脚振り出し不足を、骨盤を前に回すことで補っている可能性を確認。" }
    ]
  },
  {
    id: "mid-swing",
    label: "Mid Swing",
    jp: "遊脚中期",
    description: "膝最大屈曲後から下腿が垂直になるまで。足部クリアランス、足関節背屈、股・膝の協調を確認する。",
    pose: { frontLeg: 8, backLeg: -24, frontFoot: 4, backFoot: 12, frontArm: -12, backArm: 12 },
    issues: [
      { id: "drop-foot", label: "下垂足", hint: "前脛骨筋筋力低下、腓骨神経障害、L4-L5、AFO適合を確認。" },
      { id: "vaulting", label: "反対側の伸び上がり", hint: "遊脚側クリアランス不足への代償。尖足、膝屈曲不足、脚長差を確認。" },
      { id: "excess-hip-flex", label: "過剰な股関節・膝屈曲", hint: "Steppage gait。下垂足や足尖接地回避の代償を確認。" }
    ]
  },
  {
    id: "terminal-swing",
    label: "Terminal Swing",
    jp: "遊脚終期",
    description: "下腿垂直位から次の接地直前まで。ハムストリングスによる減速、膝伸展、足関節中間位への準備を確認する。",
    pose: { frontLeg: -22, backLeg: -6, frontFoot: 2, backFoot: 2, frontArm: 18, backArm: -14 },
    issues: [
      { id: "knee-ext-low", label: "膝伸展不足", hint: "ハムストリングス短縮、膝関節伸展制限、疼痛、屈曲拘縮を確認。" },
      { id: "poor-deceleration", label: "振り出しの減速不良", hint: "ハムストリングス筋力低下、運動制御低下、接地位置のばらつきを確認。" },
      { id: "foot-position-poor", label: "接地前の足部位置不良", hint: "足関節背屈制御、足部内外反、感覚障害、視覚依存を確認。" }
    ]
  }
];

const gaitPatterns = [
  { id: "trendelenburg", label: "トレンデレンブルグ歩行 / Trendelenburg gait", hint: "立脚側の股関節外転筋機能低下で対側骨盤が下制する。", issueIds: ["pelvic-drop", "trunk-lean"] },
  { id: "duchenne", label: "デュシェンヌ歩行 / Duchenne gait", hint: "患側立脚時に体幹を患側へ傾け、外転筋モーメントを減らす。", issueIds: ["trunk-lean", "pelvic-drop"] },
  { id: "antalgic", label: "疼痛性跛行 / Antalgic gait", hint: "疼痛回避により患側立脚時間が短縮する。", issueIds: ["short-stance-pain", "limited-hip-ext", "poor-push"] },
  { id: "steppage", label: "鶏歩・下垂足歩行 / Steppage gait", hint: "下垂足を補うため股関節と膝を過剰に屈曲する。", issueIds: ["toe-drag", "drop-foot", "excess-hip-flex"] },
  { id: "circumduction-gait", label: "分回し歩行 / Circumduction gait", hint: "遊脚側下肢を外側へ回して振り出す。", issueIds: ["circumduction", "knee-flex-low", "toe-drag"] },
  { id: "vaulting-gait", label: "伸び上がり歩行 / Vaulting", hint: "反対側立脚で伸び上がり、遊脚側の足部クリアランスを確保する。", issueIds: ["vaulting", "toe-drag", "drop-foot"] },
  { id: "knee-hyperextension", label: "膝過伸展スラスト / Knee hyperextension thrust", hint: "立脚期に膝が急激に過伸展方向へ入る。", issueIds: ["knee-hyper"] },
  { id: "varus-thrust", label: "膝内反スラスト / Varus knee thrust", hint: "荷重応答期から立脚期に膝内反が急に増悪し、内側膝関節負荷や内側型膝OAと関連する。", issueIds: ["varus-thrust-issue", "knee-hyper"] },
  { id: "valgus-thrust", label: "膝外反スラスト / Valgus knee thrust", hint: "荷重時に膝外反方向へ急に崩れる。前額面の動的膝不安定性として確認する。", issueIds: ["valgus-thrust-issue"] },
  { id: "hip-hiking-gait", label: "骨盤挙上歩行 / Hip hiking", hint: "遊脚側骨盤を挙上して足部クリアランスを確保する。", issueIds: ["hip-hiking", "toe-drag", "drop-foot"] },
  { id: "pelvic-retraction-gait", label: "骨盤後退歩行 / Pelvic retraction gait", hint: "骨盤が後方へ引け、下肢の振り出しや立脚安定性を補う。片麻痺歩行や股関節伸展制限で確認する。", issueIds: ["pelvic-retraction-stance", "reduced-pelvic-forward-rotation", "circumduction"] },
  { id: "pelvic-rotation-compensation", label: "骨盤回旋代償歩行 / Pelvic rotation compensation", hint: "骨盤の前方・後方回旋を使って歩幅、振り出し、クリアランスを補う。観察角度に注意して確認する。", issueIds: ["excess-pelvic-forward-rotation", "reduced-pelvic-forward-rotation", "short-step-length"] },
  { id: "anterior-pelvic-tilt-gait", label: "骨盤前傾増大歩行 / Excess anterior pelvic tilt", hint: "骨盤前傾や腰椎前弯が強く、股関節伸展不足や股関節屈筋短縮と関連することがある。", issueIds: ["excess-anterior-pelvic-tilt", "limited-hip-ext"] },
  { id: "hemiparetic-gait", label: "片麻痺歩行 / Hemiparetic gait", hint: "麻痺側下肢が伸展位となり、遊脚で分回しを伴いやすい。脳卒中後などで確認する。", issueIds: ["circumduction", "knee-flex-low", "toe-drag", "knee-hyper"] },
  { id: "scissoring-gait", label: "はさみ脚歩行 / Scissoring gait", hint: "股関節内転筋緊張により両下肢が交差しやすい。痙性、内転筋過緊張、支持基底面狭小を確認する。", issueIds: ["weight-shift-poor", "circumduction"] },
  { id: "sensory-ataxic-gait", label: "感覚性失調性歩行 / Sensory ataxic gait", hint: "深部感覚低下により足を強く接地し、視覚依存やRomberg徴候を伴いやすい。", issueIds: ["foot-position-poor", "poor-deceleration", "weight-shift-poor"] },
  { id: "waddling-gait", label: "動揺性歩行 / Waddling gait", hint: "骨盤・体幹の左右動揺が大きい。両側股関節外転筋低下や近位筋筋力低下を確認する。", issueIds: ["pelvic-drop", "trunk-lean"] }
];

const causes = [
  { id: "weak-abductor", label: "股関節外転筋筋力低下", hint: "中殿筋、片脚立位、骨盤制御を確認。", evidence: "論文あり", evidenceNote: "Trendelenburg gaitとの関連が明確。", patternIds: ["trendelenburg", "duchenne"], issueIds: ["pelvic-drop", "trunk-lean"] },
  { id: "gluteus-max-weak", label: "大殿筋筋力低下・股関節伸展制御不良", hint: "初期接地から荷重応答期の体幹後傾、股関節屈曲位での荷重、坂道・階段・立ち上がりでの困難感を確認。", evidence: "参考書レベル", evidenceNote: "股関節伸展筋の役割から推定。代償かどうか評価で確認。", patternIds: ["antalgic"], issueIds: ["posterior-trunk-lean", "knee-buckle", "limited-hip-ext", "poor-push"] },
  { id: "hip-pain", label: "股関節痛・荷重時痛", hint: "疼痛部位、NRS、荷重応答期の表情と逃避を確認。", evidence: "参考書レベル", evidenceNote: "疼痛性跛行として一般的。痛みの部位は評価で同定。", patternIds: ["antalgic", "duchenne"], issueIds: ["short-stance-pain", "limited-hip-ext"] },
  { id: "quad-weak", label: "大腿四頭筋筋力低下", hint: "膝折れ、立ち上がり、階段、MMTを確認。", evidence: "参考書レベル", evidenceNote: "荷重応答期の膝制御との関連。過伸展は代償の可能性もある。", patternIds: ["knee-hyperextension"], issueIds: ["knee-buckle", "knee-hyper"] },
  { id: "knee-frontal-instability", label: "膝前額面の動的不安定性", hint: "内反・外反アライメント、膝OA、側方動揺、膝関節痛、足部アライメントを確認。", evidence: "論文あり", evidenceNote: "膝OAとvarus thrustの関連研究あり。", patternIds: ["varus-thrust", "valgus-thrust"], issueIds: ["varus-thrust-issue", "valgus-thrust-issue"] },
  { id: "hip-extension-rom", label: "股関節伸展ROM制限", hint: "立脚終期の股関節伸展、骨盤前傾、腸腰筋短縮、Thomas test、歩幅低下との関連を確認。", evidence: "参考書レベル", evidenceNote: "立脚終期の股関節伸展要求に基づく。", patternIds: ["antalgic"], issueIds: ["limited-hip-ext", "poor-push", "short-step-length"] },
  { id: "hip-flexion-rom", label: "股関節屈曲ROM制限", hint: "遊脚期の振り出し、Initial Contact前の下肢前方移動、階段昇降、股関節前面痛を確認。", evidence: "臨床推論", evidenceNote: "振り出し不足の一因として確認。筋力や疼痛との鑑別が必要。", patternIds: ["circumduction-gait", "hip-hiking-gait"], issueIds: ["hip-flex-ic", "short-step-length", "circumduction", "hip-hiking"] },
  { id: "knee-extension-rom", label: "膝伸展ROM制限", hint: "初期接地の膝屈曲位、立脚中の膝屈曲位、ハムストリングス短縮、膝関節痛を確認。", evidence: "参考書レベル", evidenceNote: "初期接地と立脚の膝肢位に影響。", patternIds: ["antalgic"], issueIds: ["knee-flex-ic", "knee-ext-low", "short-step-length"] },
  { id: "knee-flexion-rom", label: "膝屈曲ROM制限", hint: "前遊脚期から遊脚初期の膝屈曲不足、つま先の引っかかり、分回し、骨盤挙上を確認。", evidence: "参考書レベル", evidenceNote: "遊脚クリアランス低下と代償運動の原因候補。", patternIds: ["circumduction-gait", "hip-hiking-gait", "vaulting-gait", "hemiparetic-gait"], issueIds: ["knee-flex-low", "toe-drag", "circumduction", "hip-hiking", "vaulting"] },
  { id: "ankle-df-limited", label: "足関節背屈ROM制限", hint: "膝伸展位・屈曲位で背屈可動域を比較。早期踵離地、膝過伸展、前方移動制限を確認。", evidence: "論文あり", evidenceNote: "背屈制限と立脚期・踵離地タイミングに関する研究あり。", patternIds: ["steppage", "vaulting-gait", "knee-hyperextension"], issueIds: ["toe-drag", "drop-foot", "early-heel-rise", "knee-hyper", "poor-push"] },
  { id: "ankle-pf-rom", label: "足関節底屈ROM制限・足部ロッカー制限", hint: "Pre Swingの足関節底屈、足部離地、蹴り出し、足部痛や固定性を確認。", evidence: "臨床推論", evidenceNote: "足部離地と推進低下の一因として確認。筋力低下との鑑別が必要。", patternIds: ["antalgic"], issueIds: ["poor-push", "toe-off-delay"] },
  { id: "mtp-extension-rom", label: "MTP伸展ROM制限", hint: "立脚終期から前遊脚期の母趾伸展、ウインドラス機構、前足部痛、蹴り出し低下を確認。", evidence: "論文あり", evidenceNote: "MTP制限、ウインドラス機構、歩行速度・ストライド長の研究あり。", patternIds: ["antalgic"], issueIds: ["toe-off-delay", "poor-push", "short-step-length"] },
  { id: "dorsiflexor-weak", label: "足関節背屈筋筋力低下", hint: "前脛骨筋、腓骨神経、AFO適合を確認。", evidence: "論文あり", evidenceNote: "Steppage gait/foot dropとの関連が明確。", patternIds: ["steppage", "vaulting-gait", "hip-hiking-gait"], issueIds: ["toe-drag", "drop-foot", "excess-hip-flex"] },
  { id: "plantarflexor-weak", label: "下腿三頭筋筋力低下", hint: "片脚カーフレイズ、蹴り出し、立脚終期の推進力を確認。", evidence: "参考書レベル", evidenceNote: "立脚終期の推進力・足関節パワーとの関連。", patternIds: ["antalgic"], issueIds: ["poor-push", "early-heel-rise"] },
  { id: "spasticity", label: "痙縮・筋緊張亢進", hint: "Modified Ashworth Scale、クローヌス、速度依存性、内転筋・下腿三頭筋の緊張を確認。", evidence: "論文あり", evidenceNote: "片麻痺歩行、はさみ脚歩行、痙性歩行との関連。", patternIds: ["circumduction-gait", "knee-hyperextension", "hemiparetic-gait", "scissoring-gait"], issueIds: ["knee-flex-low", "knee-hyper", "toe-drag"] },
  { id: "sensory-loss", label: "感覚低下・深部感覚障害", hint: "触覚、振動覚、関節位置覚、足底感覚、Romberg徴候、視覚依存を確認。", evidence: "論文あり", evidenceNote: "感覚性失調性歩行との関連が明確。", patternIds: ["sensory-ataxic-gait", "steppage"], issueIds: ["foot-position-poor", "poor-deceleration", "weight-shift-poor", "toe-drag"] },
  { id: "pelvic-rotation-control", label: "骨盤回旋制御不良", hint: "骨盤の前方・後方回旋、胸郭との分離運動、体幹回旋、歩幅左右差、片麻痺での骨盤後退を確認。", evidence: "参考書レベル", evidenceNote: "骨盤回旋は正常歩行の構成要素。観察では誤差が出やすく動画角度に注意。", patternIds: ["pelvic-retraction-gait", "pelvic-rotation-compensation", "hemiparetic-gait"], issueIds: ["pelvic-retraction-stance", "reduced-pelvic-forward-rotation", "excess-pelvic-forward-rotation", "short-step-length"] },
  { id: "pelvic-tilt-control", label: "骨盤前後傾制御不良", hint: "骨盤前傾・後傾、腰椎前弯、股関節屈筋短縮、腹筋群・殿筋群の協調、疼痛回避を確認。", evidence: "参考書レベル", evidenceNote: "骨盤tiltは股関節運動と腰椎運動に影響。原因か代償か評価で確認。", patternIds: ["anterior-pelvic-tilt-gait"], issueIds: ["excess-anterior-pelvic-tilt", "limited-hip-ext", "posterior-trunk-lean"] },
  { id: "trunk-alignment", label: "体幹アライメント・姿勢制御不良", hint: "体幹側屈・回旋・前傾、骨盤傾斜、胸郭位置、片脚支持での姿勢保持を確認。", evidence: "臨床推論", evidenceNote: "代償・原因の両方になり得るため、姿勢制御評価で確認。", patternIds: ["duchenne", "trendelenburg", "waddling-gait", "pelvic-rotation-compensation"], issueIds: ["trunk-lean", "pelvic-drop", "weight-shift-poor", "pelvic-retraction-stance"] },
  { id: "balance", label: "バランス能力低下・荷重恐怖", hint: "片脚立位、TUG、支持物依存、転倒歴、二重課題での変化を確認。", evidence: "参考書レベル", evidenceNote: "歩行速度、立脚時間、ふらつきとの関連。恐怖心は問診で確認。", patternIds: ["antalgic", "sensory-ataxic-gait"], issueIds: ["weight-shift-poor", "short-stance-pain"] },
  { id: "coordination", label: "協調運動障害・失調", hint: "広い支持基底面、測定障害、踵膝試験、方向転換時のふらつきを確認。", evidence: "論文あり", evidenceNote: "失調性歩行との関連。中枢性要因の確認が必要。", patternIds: ["sensory-ataxic-gait"], issueIds: ["weight-shift-poor", "poor-deceleration"] },
  { id: "leg-length", label: "脚長差・補高不適合", hint: "棘果長、転子果長、骨盤傾斜、靴・補高、VaultingやHip hikingとの関連を確認。", evidence: "臨床推論", evidenceNote: "クリアランス代償の一因として確認。構造的・機能的脚長差を鑑別。", patternIds: ["vaulting-gait", "hip-hiking-gait"], issueIds: ["vaulting", "hip-hiking", "weight-shift-poor"] }
];

const connectionRules = [
  {
    id: "pain-stance-push-step",
    issueIds: ["short-stance-pain", "poor-push", "short-step-length"],
    label: "立脚時間短縮から歩幅低下への連鎖",
    text: "疼痛や荷重不安により患側立脚時間が短くなると、立脚終期まで十分に乗り込めず、蹴り出し低下と反対側歩幅低下につながりやすい。"
  },
  {
    id: "hip-extension-push",
    issueIds: ["limited-hip-ext", "poor-push", "short-step-length", "early-heel-rise"],
    label: "股関節伸展不足と推進力低下",
    text: "股関節伸展不足があると立脚終期の身体前方移動が制限され、足関節ロッカーや蹴り出しが小さくなり、歩幅低下として現れやすい。"
  },
  {
    id: "rom-clearance-chain",
    issueIds: ["knee-flex-low", "toe-drag", "circumduction", "hip-hiking", "vaulting"],
    label: "ROM制限と遊脚クリアランスの連鎖",
    text: "膝屈曲ROM制限や足関節背屈制限があると遊脚期の足部クリアランスが低下し、分回し、骨盤挙上、伸び上がりなどの代償が出やすい。"
  },
  {
    id: "forefoot-rocker-chain",
    issueIds: ["toe-off-delay", "poor-push", "short-step-length"],
    label: "前足部ロッカー制限と蹴り出し低下",
    text: "MTP伸展制限や前足部痛があると立脚終期から前遊脚期の足部ロッカーが使いにくく、蹴り出し低下と歩幅低下につながりやすい。"
  },
  {
    id: "clearance-compensation",
    issueIds: ["toe-drag", "hip-hiking", "circumduction", "vaulting"],
    label: "クリアランス低下と代償運動",
    text: "遊脚期のつま先クリアランスが不足すると、骨盤挙上、分回し、反対側の伸び上がりなど複数の代償が同時に出現しやすい。"
  },
  {
    id: "knee-control-chain",
    issueIds: ["knee-buckle", "knee-hyper", "varus-thrust-issue", "valgus-thrust-issue"],
    label: "荷重応答から立脚中期の膝制御",
    text: "荷重応答期の膝制御不良は、立脚中期の過伸展、内反・外反スラスト、疼痛回避につながるため、矢状面と前額面を合わせて確認する。"
  },
  {
    id: "pelvis-trunk-chain",
    issueIds: ["pelvic-drop", "trunk-lean", "weight-shift-poor", "pelvic-retraction-stance"],
    label: "骨盤・体幹と単脚支持の連鎖",
    text: "単脚支持で骨盤保持が難しい場合、体幹側方傾斜や荷重移動不良が連動し、歩隔、歩幅、患側立脚時間にも影響しやすい。"
  },
  {
    id: "pelvic-rotation-step-chain",
    issueIds: ["reduced-pelvic-forward-rotation", "pelvic-retraction-stance", "short-step-length", "limited-hip-ext"],
    label: "骨盤回旋と歩幅低下の連鎖",
    text: "骨盤前方回旋が乏しい、または骨盤が後退する場合、立脚終期の前方移動や下肢の振り出しが制限され、歩幅低下として現れやすい。"
  },
  {
    id: "pelvic-swing-compensation-chain",
    issueIds: ["excess-pelvic-forward-rotation", "hip-flex-ic", "circumduction", "toe-drag"],
    label: "骨盤前方回旋による振り出し代償",
    text: "股関節屈曲や膝屈曲、足関節背屈が不足する場合、骨盤前方回旋を増やして遊脚側下肢の振り出しやクリアランスを補うことがある。"
  }
];

const compensationRules = [
  {
    id: "posterior-trunk-gluteus",
    triggerIssueIds: ["posterior-trunk-lean"],
    triggerCauseIds: ["gluteus-max-weak"],
    label: "体幹後傾による股関節伸展筋要求の軽減",
    text: "荷重応答期に体幹を後傾させる場合、大殿筋など股関節伸展筋への要求を減らして立脚初期を安定させている可能性がある。"
  },
  {
    id: "hyperextension-stability",
    triggerIssueIds: ["knee-hyper"],
    triggerCauseIds: ["quad-weak", "spasticity", "sensory-loss"],
    label: "膝過伸展による支持性確保",
    text: "膝過伸展は大腿四頭筋低下、足関節背屈制限、痙縮、感覚低下に対して膝をロックして支持性を得る代償の可能性がある。"
  },
  {
    id: "clearance-substitutions",
    triggerIssueIds: ["toe-drag", "hip-hiking", "circumduction", "vaulting"],
    triggerCauseIds: ["dorsiflexor-weak", "ankle-df-limited", "knee-flexion-rom", "hip-flexion-rom", "leg-length"],
    label: "クリアランス確保の代償",
    text: "つま先の引っかかりに対して、骨盤挙上、分回し、反対側の伸び上がりで足部クリアランスを補っている可能性がある。"
  },
  {
    id: "lateral-trunk-abductor",
    triggerIssueIds: ["trunk-lean", "pelvic-drop"],
    triggerCauseIds: ["weak-abductor", "trunk-alignment", "hip-pain"],
    label: "体幹側方傾斜による股関節外転筋要求の軽減",
    text: "支持側への体幹側方傾斜は、股関節外転筋モーメントを小さくし、外転筋低下や股関節痛を補う代償として出ることがある。"
  },
  {
    id: "pelvic-rotation-substitution",
    triggerIssueIds: ["excess-pelvic-forward-rotation", "pelvic-retraction-stance", "reduced-pelvic-forward-rotation"],
    triggerCauseIds: ["pelvic-rotation-control", "hip-flexion-rom", "hip-extension-rom", "trunk-alignment"],
    label: "骨盤回旋による歩幅・振り出しの代償",
    text: "骨盤の前方回旋増大や後方回旋/後退は、股関節運動不足、体幹回旋制御不良、疼痛回避を補う代償として出ることがある。"
  },
  {
    id: "anterior-pelvic-tilt-substitution",
    triggerIssueIds: ["excess-anterior-pelvic-tilt", "limited-hip-ext"],
    triggerCauseIds: ["pelvic-tilt-control", "hip-extension-rom", "gluteus-max-weak"],
    label: "骨盤前傾による股関節伸展不足の代償",
    text: "立脚終期に骨盤前傾や腰椎前弯を増やして、股関節伸展不足を見かけ上補っている可能性がある。"
  },
  {
    id: "short-stance-protection",
    triggerIssueIds: ["short-stance-pain", "poor-push", "short-step-length"],
    triggerCauseIds: ["hip-pain", "balance"],
    label: "疼痛・不安に対する保護的歩行",
    text: "患側立脚時間の短縮や蹴り出し低下は、疼痛や荷重不安を避ける保護的な代償として出現し、歩幅低下につながりやすい。"
  }
];

const references = [
  {
    text: "Perry J, Burnfield JM. Gait Analysis: Normal and Pathological Function. 2nd ed. SLACK Incorporated; 2010.",
    url: "https://jamanetwork.com/journals/jama/articlepdf/186437/jbk0825_907_907.pdf"
  },
  {
    text: "Rancho Los Amigos National Rehabilitation Center. Observational Gait Analysis: Handbook. Downey, CA: Los Amigos Research and Education Institute; 2001.",
    url: "https://www.sciencedirect.com/topics/immunology-and-microbiology/stride-time"
  },
  {
    text: "Whittle MW. Gait Analysis: An Introduction. 4th ed. Butterworth-Heinemann; 2007.",
    url: "https://www.sciencedirect.com/book/9780750688833/gait-analysis"
  },
  {
    text: "Kirtley C. Clinical Gait Analysis: Theory and Practice. Elsevier; 2006.",
    url: "https://catalog.libraries.psu.edu/catalog/3125979"
  },
  {
    text: "Neumann DA. Kinesiology of the Musculoskeletal System: Foundations for Rehabilitation. 3rd ed. Elsevier; 2017.",
    url: "https://www.elsevier.com/books/kinesiology-of-the-musculoskeletal-system/neumann/978-0-323-28753-1"
  },
  {
    text: "Gandbhir VN, Lam JC, Lui F, Rayi A. Trendelenburg Gait. StatPearls; updated 2024.",
    url: "https://www.ncbi.nlm.nih.gov/books/NBK541094/"
  },
  {
    text: "Nori SL, Das JM. Steppage Gait. StatPearls; updated 2023.",
    url: "https://www.ncbi.nlm.nih.gov/sites/books/NBK547672/"
  },
  {
    text: "Pitton Rissardo J, Lui F. Gait Disturbances. StatPearls; updated 2026.",
    url: "https://www.ncbi.nlm.nih.gov/books/NBK560610/"
  },
  {
    text: "Sharma L, et al. Varus Thrust and Incident and Progressive Knee Osteoarthritis. Arthritis Rheumatol. 2017.",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5659924/"
  },
  {
    text: "Di Bacco VE, et al. Defining and measuring varus thrust in knee osteoarthritis: A scoping review. Osteoarthritis and Cartilage Open. 2025.",
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12495470/"
  },
  {
    text: "Ohi H, et al. Varus thrust visualized during gait was associated with inverted foot in patients with knee osteoarthritis. Gait & Posture. 2018.",
    url: "https://pubmed.ncbi.nlm.nih.gov/29413796/"
  },
  {
    text: "Rancho Los Amigos National Rehabilitation Center. Gait Courses and Rancho Observational Gait Analysis overview.",
    url: "https://dhs.lacounty.gov/rancho/education/graduate-medical-and-professional-education/educational-materials/gait-courses/"
  },
  {
    text: "Crosbie J, Vachalathiti R, Smith R. Three-dimensional relationships between the movements of the pelvis and lumbar spine during normal gait. Hum Mov Sci. 1999.",
    url: "https://www.sciencedirect.com/science/article/pii/S0167945799000329"
  },
  {
    text: "Dumas R, et al. Instantaneous progression reference frame for calculating pelvis rotations. Gait & Posture. 2016.",
    url: "https://www.sciencedirect.com/science/article/pii/S0966636216000527"
  },
  {
    text: "University of Oklahoma Health Sciences Center. Observational Gait Analysis checklist and reliability notes.",
    url: "https://www.ouhsc.edu/bserdac/dthompso/web/gait/knmatics/oga.htm"
  }
];

const state = {
  phaseId: phases[0].id,
  issues: new Set(),
  patterns: new Set(),
  causes: new Set(),
  side: "右",
  filterCauses: true
};

const phaseGrid = document.querySelector("#phaseGrid");
const phaseIllustration = document.querySelector("#phaseIllustration");
const phaseLabel = document.querySelector("#phaseLabel");
const phaseDescription = document.querySelector("#phaseDescription");
const issueList = document.querySelector("#issueList");
const gaitList = document.querySelector("#gaitList");
const causeList = document.querySelector("#causeList");
const selectedIssueList = document.querySelector("#selectedIssueList");
const connectionList = document.querySelector("#connectionList");
const compensationList = document.querySelector("#compensationList");
const freeNoteText = document.querySelector("#freeNoteText");
const aiPromptText = document.querySelector("#aiPromptText");
const outputText = document.querySelector("#outputText");
const sideSelect = document.querySelector("#sideSelect");
const copyButton = document.querySelector("#copyButton");
const copyPromptButton = document.querySelector("#copyPromptButton");
const resetButton = document.querySelector("#resetButton");
const causeFilterToggle = document.querySelector("#causeFilterToggle");
const referenceList = document.querySelector("#referenceList");

function createGaitFigure(phase, sizeClass = "mini-gait") {
  const { frontLeg, backLeg, frontFoot, backFoot, frontArm, backArm } = phase.pose;
  return `
    <span class="${sizeClass}">
      <span class="head"></span>
      <span class="torso"></span>
      <span class="arm front" style="transform: rotate(${frontArm}deg);"></span>
      <span class="arm back" style="transform: rotate(${backArm}deg);"></span>
      <span class="leg front" style="transform: rotate(${frontLeg}deg);"></span>
      <span class="leg back" style="transform: rotate(${backLeg}deg);"></span>
      <span class="foot" style="transform: rotate(${frontFoot}deg);"></span>
      <span class="foot back" style="transform: rotate(${backFoot}deg);"></span>
    </span>
  `;
}

function renderPhases() {
  phaseGrid.innerHTML = phases.map((phase) => `
    <button class="phase-card" type="button" data-phase="${phase.id}" aria-pressed="${phase.id === state.phaseId}">
      ${createGaitFigure(phase)}
      <span>
        <strong>${phase.jp}</strong>
        <small>${phase.label}</small>
      </span>
    </button>
  `).join("");

  phaseGrid.querySelectorAll(".phase-card").forEach((button) => {
    button.addEventListener("click", () => {
      state.phaseId = button.dataset.phase;
      render();
    });
  });
}

function getSelectedPhase() {
  return phases.find((phase) => phase.id === state.phaseId) || phases[0];
}

function selectedIssueIds() {
  return [...state.issues];
}

function selectedPatternIds() {
  return [...state.patterns];
}

function isRecommended(item) {
  const issues = selectedIssueIds();
  const patterns = selectedPatternIds();
  return item.issueIds?.some((id) => issues.includes(id)) || item.patternIds?.some((id) => patterns.includes(id));
}

function getVisibleCauses() {
  if (!state.filterCauses) return causes;

  const hasClinicalSelection = state.issues.size > 0 || state.patterns.size > 0;
  if (!hasClinicalSelection) {
    return [...state.causes].map((id) => findById(causes, id)).filter(Boolean);
  }

  const visible = causes.filter((cause) => isRecommended(cause) || state.causes.has(cause.id));
  return visible;
}

function renderChecks(container, items, selectedSet, groupName) {
  if (!items.length && groupName === "cause") {
    container.innerHTML = `<div class="empty-state">問題点または跛行を選択すると、関連する原因候補を提示します。必要時は「関連する原因候補のみ表示」を外すと全候補を確認できます。</div>`;
    return;
  }

  container.innerHTML = items.map((item) => {
    const recommended = groupName !== "issue" && isRecommended(item);
    const checked = selectedSet.has(item.id);
    const evidenceHtml = item.evidence
      ? `<span class="evidence-row"><span class="evidence-badge">${item.evidence}</span><span class="evidence-note">${item.evidenceNote}</span></span>`
      : "";
    return `
      <label class="check-item ${recommended ? "recommended" : ""}">
        <input type="checkbox" data-id="${item.id}" ${checked ? "checked" : ""}>
        <span>
          <strong>${item.label}</strong>
          <span>${item.hint}</span>
          ${evidenceHtml}
        </span>
      </label>
    `;
  }).join("");

  container.querySelectorAll("input").forEach((input) => {
    input.addEventListener("change", () => {
      if (input.checked) selectedSet.add(input.dataset.id);
      else selectedSet.delete(input.dataset.id);
      render();
    });
  });
}

function renderSelectedPhase() {
  const phase = getSelectedPhase();
  phaseIllustration.innerHTML = createGaitFigure(phase, "large-gait");
  phaseLabel.textContent = `${phase.jp} / ${phase.label}`;
  phaseDescription.textContent = phase.description;
  renderChecks(issueList, phase.issues, state.issues, "issue");
}

function getAllIssues() {
  return phases.flatMap((phase) => phase.issues.map((issue) => ({ ...issue, phaseId: phase.id, phaseJp: phase.jp })));
}

function findById(items, id) {
  return items.find((item) => item.id === id);
}

function getSelectedIssues() {
  return selectedIssueIds().map((id) => findById(getAllIssues(), id)).filter(Boolean);
}

function getActiveConnections() {
  const issues = selectedIssueIds();
  return connectionRules.filter((rule) => rule.issueIds.filter((id) => issues.includes(id)).length >= 2);
}

function getActiveCompensations() {
  const issues = selectedIssueIds();
  const selectedCauses = [...state.causes];
  return compensationRules.filter((rule) => {
    const issueHit = rule.triggerIssueIds.some((id) => issues.includes(id));
    const causeHit = rule.triggerCauseIds.some((id) => selectedCauses.includes(id));
    return issueHit || causeHit;
  });
}

function renderSelectedIssues() {
  const issues = getSelectedIssues();
  selectedIssueList.innerHTML = issues.length
    ? issues.map((issue) => `
      <div class="selected-chip">
        <strong>${issue.phaseJp}</strong>
        <span>${issue.label}</span>
      </div>
    `).join("")
    : `<div class="empty-state">複数の相を移動しながら問題点をチェックできます。選択した内容はここに残ります。</div>`;
}

function renderConnections() {
  const connections = getActiveConnections();
  connectionList.innerHTML = connections.length
    ? connections.map((connection) => `
      <div class="connection-item">
        <strong>${connection.label}</strong>
        <span>${connection.text}</span>
      </div>
    `).join("")
    : `<div class="empty-state">関連する問題点が2つ以上選ばれると、周期間のつながりをここに表示します。</div>`;
}

function renderCompensations() {
  const compensations = getActiveCompensations();
  compensationList.innerHTML = compensations.length
    ? compensations.map((compensation) => `
      <div class="connection-item">
        <strong>${compensation.label}</strong>
        <span>${compensation.text}</span>
      </div>
    `).join("")
    : `<div class="empty-state">体幹後傾、膝過伸展、分回し、骨盤挙上、骨盤回旋などが選択されると、代償動作の可能性を表示します。</div>`;
}

function generateOutput() {
  const phase = getSelectedPhase();
  const issues = getSelectedIssues();
  const patterns = selectedPatternIds().map((id) => findById(gaitPatterns, id)).filter(Boolean);
  const selectedCauses = [...state.causes].map((id) => findById(causes, id)).filter(Boolean);
  const connections = getActiveConnections();
  const compensations = getActiveCompensations();
  const freeNote = freeNoteText.value.trim();

  if (!issues.length && !patterns.length && !selectedCauses.length && !freeNote) {
    return `${state.side}下肢の歩行分析を開始してください。歩行周期の相を選択し、観察された問題点、主要な跛行、原因候補をチェックすると所見文が生成されます。`;
  }

  const issueText = issues.length
    ? issues.map((issue) => `${issue.phaseJp}で「${issue.label}」`).join("、")
    : `${phase.jp}で明らかな問題点は未選択`;
  const patternText = patterns.length
    ? patterns.map((pattern) => pattern.label).join("、")
    : "現時点では跛行パターン未選択";
  const causeText = selectedCauses.length
    ? selectedCauses.map((cause) => `${cause.label}（${cause.evidence}）`).join("、")
    : "原因候補は未選択";
  const connectionText = connections.length
    ? connections.map((connection) => connection.text).join(" ")
    : "複数相の問題点が選択された場合は、立脚から遊脚への連鎖、代償運動、歩幅・歩行速度への影響を確認する。";
  const compensationText = compensations.length
    ? compensations.map((compensation) => compensation.text).join(" ")
    : "観察された動作が機能低下そのものか、疼痛・不安定性・クリアランス不足を補う代償かを追加評価で確認する。";
  const freeNoteLine = freeNote
    ? `【自由記載所見】${freeNote}`
    : "【自由記載所見】追加の自由記載はなし。";
  const evalText = selectedCauses.length
    ? selectedCauses.map((cause) => cause.hint.replace("。", "")).join("。") + "。"
    : "疼痛、関節可動域、筋力、筋緊張、感覚、バランス、装具・靴の影響を追加確認する。";

  return [
    `【観察所見】${state.side}下肢を中心に、${issueText}が観察された。`,
    `【考えられる跛行】${patternText}が関連する可能性がある。`,
    `【歩行周期のつながり】${connectionText}`,
    `【代償動作の可能性】${compensationText}`,
    freeNoteLine,
    `【推定される原因】${causeText}を優先して確認する。`,
    `【追加評価】${evalText}`,
    "【注意】本出力は臨床推論と記録作成の補助であり、診断を代替するものではない。実際の評価所見と照合して判断する。"
  ].join("\n");
}

function formatList(items, fallback) {
  return items.length ? items.map((item) => `- ${item}`).join("\n") : `- ${fallback}`;
}

function generateAiPrompt() {
  const issues = getSelectedIssues().map((issue) => `${issue.phaseJp}: ${issue.label}`);
  const patterns = selectedPatternIds().map((id) => findById(gaitPatterns, id)?.label).filter(Boolean);
  const selectedCauses = [...state.causes].map((id) => findById(causes, id)).filter(Boolean);
  const causesForPrompt = selectedCauses.map((cause) => `${cause.label}（根拠: ${cause.evidence}、確認: ${cause.hint}）`);
  const connections = getActiveConnections().map((connection) => `${connection.label}: ${connection.text}`);
  const compensations = getActiveCompensations().map((compensation) => `${compensation.label}: ${compensation.text}`);
  const freeNote = freeNoteText.value.trim() || "自由記載なし";

  return [
    "あなたは理学療法士の歩行分析を補助するAIです。",
    "以下の情報をもとに、診断ではなく臨床推論の補助として整理してください。",
    "患者名、ID、生年月日、施設名など個人情報は含めていません。",
    "",
    "【観察側】",
    `${state.side}下肢`,
    "",
    "【選択された問題点】",
    formatList(issues, "選択なし"),
    "",
    "【選択された跛行・代償候補】",
    formatList(patterns, "選択なし"),
    "",
    "【既に考えている原因候補】",
    formatList(causesForPrompt, "選択なし"),
    "",
    "【歩行周期のつながり】",
    formatList(connections, "該当なし"),
    "",
    "【代償動作の可能性】",
    formatList(compensations, "該当なし"),
    "",
    "【自由記載・表にない動作】",
    freeNote,
    "",
    "【依頼】",
    "1. 観察所見を歩行周期ごとに整理してください。",
    "2. 表にない動作がある場合、関連しそうな跛行・代償を候補として挙げてください。",
    "3. 考えられる原因を、筋力、ROM、疼痛、感覚、筋緊張、バランス、体幹・骨盤アライメント、装具・靴の観点で整理してください。",
    "4. 原因を断定せず、優先して確認すべき追加評価を提示してください。",
    "5. 最後に理学療法記録に使える所見文案を作成してください。",
    "",
    "【出力形式】",
    "【観察所見の整理】",
    "【関連しそうな歩行周期】",
    "【考えられる跛行・代償】",
    "【原因候補】",
    "【追加評価】",
    "【記録文案】",
    "【注意点】"
  ].join("\n");
}

function renderReferences() {
  referenceList.innerHTML = references.map((reference) => `
    <li><a href="${reference.url}" target="_blank" rel="noreferrer">${reference.text}</a></li>
  `).join("");
}

function render() {
  renderPhases();
  renderSelectedPhase();
  renderChecks(gaitList, gaitPatterns, state.patterns, "pattern");
  renderChecks(causeList, getVisibleCauses(), state.causes, "cause");
  renderSelectedIssues();
  renderConnections();
  renderCompensations();
  outputText.value = generateOutput();
  aiPromptText.value = generateAiPrompt();
  renderReferences();
}

sideSelect.addEventListener("change", () => {
  state.side = sideSelect.value;
  render();
});

freeNoteText.addEventListener("input", () => {
  outputText.value = generateOutput();
  aiPromptText.value = generateAiPrompt();
});

causeFilterToggle.addEventListener("change", () => {
  state.filterCauses = causeFilterToggle.checked;
  render();
});

copyButton.addEventListener("click", async () => {
  outputText.select();
  try {
    await navigator.clipboard.writeText(outputText.value);
    copyButton.textContent = "コピー済み";
    setTimeout(() => {
      copyButton.textContent = "所見をコピー";
    }, 1200);
  } catch {
    document.execCommand("copy");
  }
});

copyPromptButton.addEventListener("click", async () => {
  aiPromptText.select();
  try {
    await navigator.clipboard.writeText(aiPromptText.value);
    copyPromptButton.textContent = "コピー済み";
    setTimeout(() => {
      copyPromptButton.textContent = "プロンプトをコピー";
    }, 1200);
  } catch {
    document.execCommand("copy");
  }
});

resetButton.addEventListener("click", () => {
  state.phaseId = phases[0].id;
  state.issues.clear();
  state.patterns.clear();
  state.causes.clear();
  state.side = "右";
  state.filterCauses = true;
  freeNoteText.value = "";
  sideSelect.value = "右";
  causeFilterToggle.checked = true;
  render();
});

render();
