const Chalk = require("chalk");
const Figures = require("figures");

const GLOB_TEXT = {
	desc: `Description:\n${Chalk.blueBright("pkg-master")} 一个集成创建和发布的NPM模块管理工具\n文档详情请查看 ${Chalk.yellowBright("https://github.com/JowayYoung/pkg-master")}`,
	help: "使用信息"
};

const ACTION_TEXT = {
	create: "创建模块",
	publish: "发布模块"
};

const CREATE_TEXT = {
	created: `${Figures.tick} 模块创建成功`,
	generating: `${Figures.hamburger} 文件正在生成......`,
	judgeAuthor: `${Figures.cross} 作者只能由数字、字母、中文、下划线、中划线或空格组成`,
	judgeExist: `${Figures.cross} 模块已存在，请使用其他名称创建模块`,
	judgeHome: `${Figures.cross} 请输入正确的首页`,
	judgeKeyword: `${Figures.cross} 关键字只能由数字、字母或中文组成，且使用空格隔开`,
	judgeName: `${Figures.cross} 名称只能由数字、小写字母、下划线或中划线组成，且首位字符只能为数字或小写字母`,
	qaAuthor: "请输入作者",
	qaDesc: "请输入描述",
	qaHome: "请输入首页",
	qaKeyword: `请输入关键字：${Chalk.blueBright("多个关键字可用空格隔开")}`,
	qaName: "请输入名称"
};

const PUBLISH_TEXT = {
	errorAuth: `${Figures.cross} 请执行 npm login 登录NPM账号，无账号请执行 npm adduser 创建NPM账号`,
	errorEnvNode: `${Figures.cross} Node未安装`,
	errorEnvNpm: `${Figures.cross} NPM未安装`,
	errorEnvRegistry: `${Figures.cross} 请执行 npm config set registry https://registry.npmjs.org/ 切换到源镜像`,
	errorNpm: `${Figures.cross} 依赖安装失败，请检查package.json`,
	errorPublish: `${Figures.cross} 模块已存在，请使用其他名称发布模块`,
	errorYarn: `${Figures.cross} 请执行 npm i -g yarn 安装yarn`,
	publishFailed: `${Figures.cross} 执行步骤出错，请根据提示修复再执行${Chalk.blueBright("pkg-master p")}`,
	publishSuccessed: (name, version) => `${Figures.tick} ${Chalk.blueBright(name)}@${Chalk.yellowBright(version)}发布成功`,
	publishWarning: `${Figures.warning} 请执行${Chalk.blueBright("npm config set registry https://registry.npm.taobao.org/")}切换到淘宝镜像`,
	taskAuth: "检测NPM账号状态",
	taskEnv: "检测NPM运行环境",
	taskEnvNode: "检查Node是否安装",
	taskEnvNpm: "检查NPM是否安装",
	taskEnvRegistry: "检查NPM镜像是否正确",
	taskNpm: "使用NPM安装依赖",
	taskPublish: "发布NPM模块",
	taskYarn: "使用Yarn安装依赖"
};

module.exports = {
	ACTION_TEXT,
	CREATE_TEXT,
	GLOB_TEXT,
	PUBLISH_TEXT
};