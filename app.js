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
