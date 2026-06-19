const dimensions = [
  {
    id: "cognition",
    name: "AI 基础认知",
    description: "理解模型能力、限制、幻觉、上下文与适用边界。",
  },
  {
    id: "prompt",
    name: "提示词表达",
    description: "能否清楚拆解任务、给出约束、样例与迭代方向。",
  },
  {
    id: "tools",
    name: "工具使用",
    description: "是否会使用 ChatGPT、Claude、Cursor、自动化工具等。",
  },
  {
    id: "workflow",
    name: "工作流整合",
    description: "能否把 AI 放进写作、分析、代码、运营等流程。",
  },
  {
    id: "judgement",
    name: "判断与校验",
    description: "能否识别错误、验证来源、处理隐私和风险。",
  },
];

const levels = [
  {
    code: "L1",
    name: "旁观者",
    min: 0,
    summary: "你对 AI 有基本好奇，但还没有形成稳定使用习惯。",
  },
  {
    code: "L2",
    name: "尝鲜者",
    min: 18,
    summary: "你能完成简单问答和内容生成，但结果质量还比较依赖运气。",
  },
  {
    code: "L3",
    name: "助手型用户",
    min: 34,
    summary: "你已经能用 AI 提升单点任务效率，适合继续训练结构化表达。",
  },
  {
    code: "L4",
    name: "协作型用户",
    min: 52,
    summary: "你能和 AI 多轮协作完成复杂任务，已经具备明显生产力优势。",
  },
  {
    code: "L5",
    name: "工作流设计者",
    min: 70,
    summary: "你能把 AI 融入稳定流程，并开始用系统方法放大团队效率。",
  },
  {
    code: "L6",
    name: "AI 原生专家",
    min: 86,
    summary: "你能设计自动化、评估质量并指导他人，是高度成熟的 AI 使用者。",
  },
];

const questions = [
  {
    dimension: "cognition",
    title: "当 AI 给出一个看似很完整的答案时，你通常会怎么处理？",
    options: [
      "直接使用，默认它比我知道得多",
      "简单扫一眼，觉得顺就采用",
      "会检查关键事实、边界条件和是否遗漏要求",
      "会拆出可验证部分，交叉验证后再决定如何落地",
    ],
  },
  {
    dimension: "cognition",
    title: "你如何理解 AI 的“幻觉”问题？",
    options: [
      "不太清楚，只知道 AI 有时会错",
      "知道会错，但主要靠直觉判断",
      "知道它可能编造事实，会要求来源或验证步骤",
      "会根据任务风险设计验证流程和人工复核点",
    ],
  },
  {
    dimension: "cognition",
    title: "面对一个新任务，你会如何判断是否适合交给 AI？",
    options: [
      "很少主动判断，想到时才问一下",
      "只要能写文字，就先让 AI 试试",
      "会按目标、材料、风险和输出标准判断适配度",
      "会决定 AI 负责哪部分、人负责哪部分，并设计协作方式",
    ],
  },
  {
    dimension: "prompt",
    title: "你给 AI 下达任务时，通常会包含哪些信息？",
    options: [
      "一句简单要求，比如“帮我写一下”",
      "会补充背景，但要求不一定完整",
      "会说明角色、目标、受众、格式和约束",
      "会提供样例、评价标准，并要求 AI 先确认理解",
    ],
  },
  {
    dimension: "prompt",
    title: "如果第一次输出不理想，你会如何迭代？",
    options: [
      "换个说法再问，或者放弃",
      "指出哪里不好，让它重写",
      "明确指出问题类型，并补充新的限制条件",
      "会分阶段修正结构、语气、事实和细节，直到可交付",
    ],
  },
  {
    dimension: "prompt",
    title: "你是否会把复杂任务拆成多个提示步骤？",
    options: [
      "基本不会，通常一次性问完",
      "偶尔会让 AI 先列大纲",
      "会先拆任务，再逐步生成、审查、改写",
      "会设计固定提示模板或流程，用于重复任务",
    ],
  },
  {
    dimension: "tools",
    title: "你目前使用 AI 工具的范围更接近哪一种？",
    options: [
      "主要是聊天问答",
      "会用来写文案、总结、翻译等通用任务",
      "会按场景选择不同工具，例如写作、编程、检索、图片",
      "会组合多个工具完成从输入到交付的完整流程",
    ],
  },
  {
    dimension: "tools",
    title: "你使用过带上下文或项目能力的 AI 工具吗？",
    options: [
      "没有，主要复制粘贴单段内容",
      "用过上传文件或长文本，但不常用",
      "会让 AI 读取文件、代码或资料后完成任务",
      "会维护项目上下文，让 AI 持续理解目标、规范和历史决策",
    ],
  },
  {
    dimension: "tools",
    title: "你是否会使用 AI 辅助自动化或批量处理？",
    options: [
      "不会，都是手动单次操作",
      "会让 AI 帮我写一些表格公式或简单脚本",
      "会用 AI 生成脚本、批处理内容或搭建小工具",
      "会把 AI、脚本、表格或自动化平台串成可复用流程",
    ],
  },
  {
    dimension: "workflow",
    title: "在日常工作中，AI 介入你任务流程的程度是？",
    options: [
      "偶尔救急，不是固定流程",
      "常用于某几个环节，比如起草或总结",
      "会覆盖调研、构思、初稿、修改、复盘多个环节",
      "已经形成稳定流程，并能持续优化时间和质量",
    ],
  },
  {
    dimension: "workflow",
    title: "你会如何沉淀高质量的 AI 使用方法？",
    options: [
      "基本不沉淀，每次重新问",
      "会收藏一些好用提示词",
      "会整理模板、案例和注意事项",
      "会建立团队或个人知识库，让流程可复制、可培训",
    ],
  },
  {
    dimension: "workflow",
    title: "面对跨步骤任务，例如做报告或方案，你会怎么用 AI？",
    options: [
      "直接让 AI 写完整报告",
      "先让 AI 生成初稿，再自己修改",
      "会拆成资料整理、结构、论证、表达和校对",
      "会让 AI 在每个阶段产出可检查物，并建立质量门槛",
    ],
  },
  {
    dimension: "judgement",
    title: "当 AI 输出涉及数据、法律、医学或财务判断时，你会怎么做？",
    options: [
      "如果说得有道理就采用",
      "会提醒自己小心，但不一定验证",
      "会查权威来源，并避免直接当作结论",
      "会明确风险等级、引用来源、复核责任和不可自动化部分",
    ],
  },
  {
    dimension: "judgement",
    title: "你在给 AI 提供资料时，会如何处理隐私和敏感信息？",
    options: [
      "很少考虑，方便就直接发",
      "会避免发特别明显的隐私",
      "会脱敏姓名、联系方式、合同金额等关键信息",
      "会按数据敏感级别决定能否使用 AI 以及使用哪类工具",
    ],
  },
  {
    dimension: "judgement",
    title: "你如何评价 AI 产出的最终质量？",
    options: [
      "看起来顺眼就算可以",
      "主要看语气和格式是否符合要求",
      "会检查准确性、完整性、逻辑和可执行性",
      "会建立评分标准，并用人工、资料或测试结果闭环验证",
    ],
  },
].map((question) => ({
  ...question,
  options: question.options.map((label, index) => ({ label, value: index })),
}));

const state = {
  index: 0,
  answers: Array(questions.length).fill(null),
  loadingTimer: null,
};

const $ = (selector) => document.querySelector(selector);

function getDimensionName(id) {
  return dimensions.find((dimension) => dimension.id === id).name;
}

function getScores() {
  const totals = Object.fromEntries(dimensions.map((dimension) => [dimension.id, 0]));
  const counts = Object.fromEntries(dimensions.map((dimension) => [dimension.id, 0]));

  questions.forEach((question, index) => {
    counts[question.dimension] += 3;
    totals[question.dimension] += state.answers[index] ?? 0;
  });

  const dimensionScores = Object.fromEntries(
    dimensions.map((dimension) => {
      const value = Math.round((totals[dimension.id] / counts[dimension.id]) * 100);
      return [dimension.id, Number.isFinite(value) ? value : 0];
    }),
  );

  const answered = state.answers.filter((answer) => answer !== null).length;
  const totalRaw = state.answers.reduce((sum, answer) => sum + (answer ?? 0), 0);
  const maxRaw = questions.length * 3;
  const totalScore = Math.round((totalRaw / maxRaw) * 100);

  return { dimensionScores, totalScore, answered };
}

function getLevel(score) {
  return levels.reduce((active, level) => (score >= level.min ? level : active), levels[0]);
}

function radarPoints(values, radius = 78, center = 120) {
  const angleOffset = -Math.PI / 2;
  return values
    .map((value, index) => {
      const angle = angleOffset + (Math.PI * 2 * index) / values.length;
      const scaled = radius * (value / 100);
      const x = center + Math.cos(angle) * scaled;
      const y = center + Math.sin(angle) * scaled;
      return `${x.toFixed(2)},${y.toFixed(2)}`;
    })
    .join(" ");
}

function drawRadar(svg, scoreMap) {
  const values = dimensions.map((dimension) => scoreMap[dimension.id] ?? 0);
  const rings = [20, 40, 60, 80, 100]
    .map((value) => `<polygon points="${radarPoints(Array(5).fill(value))}" fill="none" stroke="#30334f" stroke-width="1" />`)
    .join("");
  const axes = dimensions
    .map((_, index) => {
      const end = radarPoints(
        Array(5)
          .fill(0)
          .map((value, axisIndex) => (axisIndex === index ? 100 : 0)),
      )
        .split(" ")[index]
        .split(",");
      return `<line x1="120" y1="120" x2="${end[0]}" y2="${end[1]}" stroke="#30334f" stroke-width="1" />`;
    })
    .join("");
  const labels = dimensions
    .map((dimension, index) => {
      const point = radarPoints(
        Array(5)
          .fill(0)
          .map((value, axisIndex) => (axisIndex === index ? 116 : 0)),
        78,
      )
        .split(" ")[index]
        .split(",");
      return `<text x="${point[0]}" y="${point[1]}" text-anchor="middle" dominant-baseline="middle" fill="#999caf" font-size="9" font-weight="800">${dimension.name.replace("AI ", "")}</text>`;
    })
    .join("");

  svg.innerHTML = `
    <defs>
      <linearGradient id="radarFill-${svg.id}" x1="0%" x2="100%" y1="0%" y2="100%">
        <stop offset="0%" stop-color="#7183ff" stop-opacity="0.5" />
        <stop offset="100%" stop-color="#9a64c9" stop-opacity="0.42" />
      </linearGradient>
    </defs>
    ${rings}
    ${axes}
    <polygon points="${radarPoints(values)}" fill="url(#radarFill-${svg.id})" stroke="#7183ff" stroke-width="3" />
    ${values
      .map((value, index) => {
        const point = radarPoints(
          Array(5)
            .fill(0)
            .map((item, axisIndex) => (axisIndex === index ? value : 0)),
        )
          .split(" ")[index]
          .split(",");
        return `<circle cx="${point[0]}" cy="${point[1]}" r="4" fill="#d9ddff" />`;
      })
      .join("")}
    ${labels}
  `;
}

function renderMetrics(container, scoreMap) {
  container.innerHTML = dimensions
    .map((dimension) => {
      const score = scoreMap[dimension.id] ?? 0;
      return `
        <div class="metric-item">
          <div class="metric-row">
            <span>${dimension.name}</span>
            <span>${score}</span>
          </div>
          <div class="metric-track"><span style="width: ${score}%"></span></div>
        </div>
      `;
    })
    .join("");
}

function renderStaticSections() {
  $("#dimensionGrid").innerHTML = dimensions
    .map(
      (dimension, index) => `
        <article class="dimension-card">
          <span class="number">${String(index + 1).padStart(2, "0")}</span>
          <h3>${dimension.name}</h3>
          <p>${dimension.description}</p>
        </article>
      `,
    )
    .join("");

  $("#levelTrack").innerHTML = levels
    .map(
      (level) => `
        <article class="level-card">
          <div>
            <strong>${level.code}</strong>
            <h3>${level.name}</h3>
          </div>
          <p>${level.summary}</p>
        </article>
      `,
    )
    .join("");

  const previewScores = {
    cognition: 82,
    prompt: 76,
    tools: 72,
    workflow: 68,
    judgement: 88,
  };
  drawRadar($("#heroRadar"), previewScores);
  renderMetrics($("#heroMetrics"), previewScores);
}

function renderQuestion() {
  const question = questions[state.index];
  const { dimensionScores, totalScore, answered } = getScores();
  const progress = ((state.index + 1) / questions.length) * 100;
  const selected = state.answers[state.index];
  const liveLevel = answered === 0 ? null : getLevel(totalScore);

  $("#questionCount").textContent = `第 ${state.index + 1} / ${questions.length} 题`;
  $("#currentDimension").textContent = getDimensionName(question.dimension);
  $("#progressFill").style.width = `${progress}%`;
  $("#questionKicker").textContent = getDimensionName(question.dimension);
  $("#questionTitle").textContent = question.title;
  $("#optionsList").innerHTML = question.options
    .map(
      (option, index) => `
        <button class="option-button ${selected === option.value ? "is-selected" : ""}" type="button" data-value="${option.value}">
          <span class="option-letter">${String.fromCharCode(65 + index)}</span>
          <span class="option-text">${option.label}</span>
        </button>
      `,
    )
    .join("");

  $("#prevButton").disabled = state.index === 0;
  $("#nextButton").textContent = state.index === questions.length - 1 ? "提交测评" : "下一题";
  $("#nextButton").disabled = selected === null;
  $("#liveScore").textContent = `${totalScore} / 100`;
  $("#liveLevel").textContent = liveLevel ? `${liveLevel.code} ${liveLevel.name}` : "等待作答";
  drawRadar($("#liveRadar"), dimensionScores);
  renderMetrics($("#liveMetrics"), dimensionScores);
}

function selectOption(value) {
  state.answers[state.index] = value;
  renderQuestion();

  if (state.index < questions.length - 1) {
    window.setTimeout(() => {
      if (state.answers[state.index] === value) {
        state.index += 1;
        renderQuestion();
      }
    }, 260);
  }
}

function buildResultInsights(scoreMap) {
  const ranked = [...dimensions].sort((a, b) => scoreMap[b.id] - scoreMap[a.id]);
  const strongest = ranked.slice(0, 3);
  const weakest = ranked.slice(-3).reverse();

  const strengthList = strongest.map((dimension) => {
    const score = scoreMap[dimension.id];
    if (score >= 78) return `${dimension.name}表现突出，已经能稳定支撑复杂任务。`;
    if (score >= 55) return `${dimension.name}有清晰基础，继续模板化会更稳定。`;
    return `${dimension.name}已有起点，可以通过固定练习快速提升。`;
  });

  const weaknessList = weakest.map((dimension) => {
    const score = scoreMap[dimension.id];
    if (score < 35) return `${dimension.name}仍偏薄弱，建议先建立基本概念和示例库。`;
    if (score < 65) return `${dimension.name}还有波动，建议用清单和复盘降低不确定性。`;
    return `${dimension.name}可继续精细化，重点提升稳定性和可复制性。`;
  });

  const weakestNames = weakest.map((dimension) => dimension.name).join("、");
  const plan = `接下来 2 周建议围绕 ${weakestNames} 训练：每周选择 3 个真实任务，先写任务拆解，再用 AI 生成初稿，最后用检查清单复核事实、逻辑和可执行性。保留有效提示词和失败案例，逐步沉淀成自己的 AI 工作流。`;

  return { strengthList, weaknessList, plan };
}

function showLoadingThenResult() {
  const questionState = $("#questionState");
  const loadingState = $("#loadingState");
  const actions = document.querySelector(".question-actions");
  const loadingText = $("#loadingText");
  let tick = 0;

  questionState.hidden = true;
  actions.hidden = true;
  loadingState.hidden = false;

  state.loadingTimer = window.setInterval(() => {
    loadingText.textContent = `点亮 ${dimensions[tick % dimensions.length].name}`;
    tick += 1;
  }, 260);

  window.setTimeout(() => {
    window.clearInterval(state.loadingTimer);
    loadingState.hidden = true;
    questionState.hidden = false;
    actions.hidden = false;
    renderResult();
    $("#result").hidden = false;
    $("#result").scrollIntoView({ behavior: "smooth", block: "start" });
  }, 1550);
}

function renderResult() {
  const { dimensionScores, totalScore } = getScores();
  const level = getLevel(totalScore);
  const insights = buildResultInsights(dimensionScores);

  $("#resultScore").textContent = totalScore;
  $("#resultLevel").textContent = `${level.code} ${level.name}`;
  $("#resultSummary").textContent = level.summary;
  drawRadar($("#resultRadar"), dimensionScores);
  renderMetrics($("#resultMetrics"), dimensionScores);
  $("#strengthList").innerHTML = insights.strengthList.map((item) => `<li>${item}</li>`).join("");
  $("#weaknessList").innerHTML = insights.weaknessList.map((item) => `<li>${item}</li>`).join("");
  $("#nextPlan").textContent = insights.plan;
}

function resetAssessment(scrollToAssessment = true) {
  state.index = 0;
  state.answers = Array(questions.length).fill(null);
  $("#result").hidden = true;
  renderQuestion();
  if (scrollToAssessment) {
    $("#assessment").scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("is-visible");
  window.setTimeout(() => toast.classList.remove("is-visible"), 2600);
}

function bindEvents() {
  $("#startButton").addEventListener("click", () => {
    $("#assessment").scrollIntoView({ behavior: "smooth", block: "start" });
  });

  $("#optionsList").addEventListener("click", (event) => {
    const button = event.target.closest(".option-button");
    if (!button) return;
    selectOption(Number(button.dataset.value));
  });

  $("#prevButton").addEventListener("click", () => {
    if (state.index > 0) {
      state.index -= 1;
      renderQuestion();
    }
  });

  $("#nextButton").addEventListener("click", () => {
    if (state.answers[state.index] === null) return;
    if (state.index === questions.length - 1) {
      showLoadingThenResult();
      return;
    }
    state.index += 1;
    renderQuestion();
  });

  $("#resetButton").addEventListener("click", () => resetAssessment(false));
  $("#restartButton").addEventListener("click", () => resetAssessment(true));
  $("#saveButton").addEventListener("click", () => {
    window.print();
    showToast("已打开打印/保存面板，可选择保存为 PDF。");
  });
  $("#planButton").addEventListener("click", () => {
    $("#nextPlan").scrollIntoView({ behavior: "smooth", block: "center" });
    showToast("学习计划已在结果页生成。");
  });
}

renderStaticSections();
renderQuestion();
bindEvents();
