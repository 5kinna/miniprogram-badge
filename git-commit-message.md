# Git Commit Message

## Commit 概述

```
<type>(<scope>): <subject>
// 空一行
<body>
```

## Header 组成部分

header 部分只有一行，包括三个字段：type（必需）、scope（可选）和 subject（必需）

### Type

用于说明提交的类别，只允许使用以下 10 种标识：

- **feat:** 新功能
- **fix:** 修补 Bug
- **docs:** 文档
- **style:** 格式变更，不影响代码的运行
- **refactor:** 重构（既不是新增功能，也不是修改 bug 的代码变动）
- **test:** 增加测试
- **chore:** 构建过程或辅助工具的变动
- **up:** 不属于上述分类时，可使用此类别
- **merge:** 用于 merge branch 时，需要手写 commit message 的情况
- **revert:** 用于撤销之前的 commit

### Scope

用于说明提交影响的范围，如某个页面或某个功能，例如：

```
feat(index): 添加 xxx 功能
```

### Subject

用于说明 commit 目的的简短描述

### Revert

如果当前 Commit 用于撤销之前的 commit，则必须以`revert:`开头，后面跟着被撤销的 Commit 的 Header

```
revert: feat(pencil): add 'graphiteWidth' option

This reverts commit 667ecc1654a317a13331b17617d973392f415f02.
```
