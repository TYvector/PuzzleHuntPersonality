/**
 * 题目分为三种类型，
 * 1. 目前的情况：最终人格
 * 2. 想要成为的：潜在人格
 * 3. 一些脱离于16人格体系之外的：彩蛋人格
 *
 * 当这个题目是测试潜在人格的时候，会含有 potential 属性并且值为 true
 * 当这个题目能测试彩蛋人格的时候，会含有菜蛋人格的字段属性，值为一个函数
 *
 * 四个维度：
 * RQ 保证质量的程度
 * PC 保证功能，牺牲性能  的程度函数
 * FE 不专精保证探索
 * AV 不抽象喜欢形象交互
 *
 * 函数说明，
 * 通常为一个一次函数，也可能是更复杂的函数。
 * x的输入值是 区间 [-3 , 3] 上的整数。表示同意的程度
 * 返回值表示最终要加成多少或者减少多少分，在-1~+1之间
 *
 * 例如：RQ: (x) => 0.25 * x
 * 表示：
 * 3级同意的时候，将会在 “保证质量的程度” 这个维度上增加 0.75 分，
 * 2级不同意的时候，会在这个维度上减少 0.5 分
 *
 */

const QUESTION_ARRAY = [
    {
        content: "我喜欢日谜胜过纸笔",
        RQ: (x) => 0.5 * x,
    },
    {
        content: "我喜欢团队合作胜过单刷",
        PC: (x) => 0.5 * x,
    },
    {
        content:
            "我喜欢高强度的参与大型ph胜过每天做小题",
        FE: (x) => 0.5 * x,
    },
    {
        content: "遇到新题，我喜欢用各种方法都先尝试一遍，有思路了就扔给队友",
        AV: (x) => 0.5 * x,
    },
];

const PERSONALITY = {
    AFRP: {
        name: "单刷每日纸笔爱好者",
        describe:
            "太强了林中及时雨",
        motto:
            "太强了林中及时雨",
        advantage: "太强了林中及时雨",
        inferiority: "太强了林中及时雨",
        recommendation: "太强了林中及时雨",
    },
    AFRC: {
        name: "群里讨论纸笔人",
        describe:"太强了林中及时雨",
        motto: "太强了林中及时雨",
        advantage: "太强了林中及时雨",
        inferiority: "太强了林中及时雨",
        recommendation: "太强了林中及时雨",
    },
    AFQP: {
        name: "太强了林中及时雨",
        describe: "太强了林中及时雨",
        motto: "太强了林中及时雨",
        advantage: "太强了林中及时雨",
        inferiority: "太强了林中及时雨",
        recommendation: "太强了林中及时雨",
    },
    AFQC: {
        name: "太强了林中及时雨",
        describe: "太强了林中及时雨",
        motto: "太强了林中及时雨",
        advantage: "太强了林中及时雨",
        inferiority: "太强了林中及时雨",
        recommendation: "太强了林中及时雨",
    },
    AERP: {
        name: "太强了林中及时雨",
        describe: "太强了林中及时雨",
        motto: "太强了林中及时雨",
        advantage: "太强了林中及时雨",
        inferiority: "太强了林中及时雨",
        recommendation: "太强了林中及时雨",
    },
    AERC: {
        name: "太强了林中及时雨",
        describe: "太强了林中及时雨",
        motto: "太强了林中及时雨",
        advantage: "太强了林中及时雨",
        inferiority: "太强了林中及时雨",
        recommendation: "太强了林中及时雨",
    },
    AEQP: {
        name: "太强了林中及时雨",
        describe: "太强了林中及时雨",
        motto: "太强了林中及时雨",
        advantage: "太强了林中及时雨",
        inferiority: "太强了林中及时雨",
        recommendation: "太强了林中及时雨",
    },
    AEQC: {
        name: "太强了林中及时雨",
        describe: "太强了林中及时雨",
        motto: "太强了林中及时雨",
        advantage: "太强了林中及时雨",
        inferiority: "太强了林中及时雨",
        recommendation: "太强了林中及时雨",
    },
    VFRP: {
        name: "太强了林中及时雨",
        describe: "太强了林中及时雨",
        motto: "太强了林中及时雨",
        advantage: "太强了林中及时雨",
        inferiority: "太强了林中及时雨",
        recommendation: "太强了林中及时雨",
    },
    VFRC: {
        name: "太强了林中及时雨",
        describe: "太强了林中及时雨",
        motto: "太强了林中及时雨",
        advantage: "太强了林中及时雨",
        inferiority: "太强了林中及时雨",
        recommendation: "太强了林中及时雨",
    },
    VFQP: {
        name: "太强了林中及时雨",
        describe: "太强了林中及时雨",
        motto: "太强了林中及时雨",
        advantage: "太强了林中及时雨",
        inferiority: "太强了林中及时雨",
        recommendation: "太强了林中及时雨",
    },
    VFQC: {
        name: "太强了林中及时雨",
        describe: "太强了林中及时雨",
        motto: "太强了林中及时雨",
        advantage: "太强了林中及时雨",
        inferiority: "太强了林中及时雨",
        recommendation: "太强了林中及时雨",
    },
    VERP: {
        name: "太强了林中及时雨",
        describe: "太强了林中及时雨",
        motto: "太强了林中及时雨",
        advantage: "太强了林中及时雨",
        inferiority: "太强了林中及时雨",
        recommendation: "太强了林中及时雨",
    },
    VERC: {
        name: "太强了林中及时雨",
        describe: "太强了林中及时雨",
        motto: "太强了林中及时雨",
        advantage: "太强了林中及时雨",
        inferiority: "太强了林中及时雨",
        recommendation: "太强了林中及时雨",
    },
    VEQP: {
        name: "太强了林中及时雨",
        describe: "太强了林中及时雨",
        motto: "太强了林中及时雨",
        advantage: "太强了林中及时雨",
        inferiority: "太强了林中及时雨",
        recommendation: "太强了林中及时雨",
    },
    VEQC: {
        name: "太强了林中及时雨",
        describe: "太强了林中及时雨",
        motto: "太强了林中及时雨",
        advantage: "太强了林中及时雨",
        inferiority: "太强了林中及时雨",
        recommendation: "太强了林中及时雨",
    },
    LazyCoder: {
        name: '摸鱼者',
        describe: '摸摸fish，喜欢轻松自在，擅长规避繁琐',
        motto: `人间清醒、悠闲而不失效率`,
        advantage: `快速完成任务，保持轻松的工作氛围`,
        inferiority: `被发现了可能会出事`,
        recommendation: `注意保持任务的整体质量，不要牺牲过多细节，留心监控软件，摄像头，必要时使用手机热点网络`
    },
    EfficiencyMaster: {
        name: '卷王',
        describe: '以高效为己任，追求工作和学习的极致效果',
        motto: `卷死别人，成就自己，效率即王道`,
        advantage: `学习能力强`,
        inferiority: `注意身体`,
        recommendation: `建议平衡生活和工作，注意锻炼和饮食`
    },
    Hacker: {
        name: '黑客',
        describe: '有着丰富的网络攻防知识和经验，具备独特的技术洞察力',
        motto: `游走在网络的世界中`,
        advantage: `学习能力强`,
        inferiority: `可能忽视一些伦理道德因素，在做项目时有时可能过于谨慎，影响创新`,
        recommendation: `建议在学习和实践计算机网络技术的同时也关注计算机安全法律相关内容，在确保系统安全的前提下，鼓励创新思维`
    },
    BugHunter: {
        name: '找bug专家',
        describe: '对细节敏感，善于发现并解决问题',
        motto: `每个bug都是一个学习的机会`,
        advantage: `准确发现和解决问题，提高代码质量`,
        inferiority: `可能过于关注细节而忽略整体进度`,
        recommendation: `在保持对细节关注的同时，注意整体任务的推进`
    }
};
