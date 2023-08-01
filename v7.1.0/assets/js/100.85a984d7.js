(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{663:function(e,t,a){"use strict";a.r(t);var r=a(1),o=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"tagging-a-release"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tagging-a-release"}},[e._v("#")]),e._v(" Tagging a release")]),e._v(" "),a("h2",{attrs:{id:"new-major-release-branch"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#new-major-release-branch"}},[e._v("#")]),e._v(" New major release branch")]),e._v(" "),a("p",[e._v("Pre-requisites for creating a release branch for a new major version:")]),e._v(" "),a("ol",[a("li",[e._v("Bump "),a("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/main/go.mod#L3",target:"_blank",rel:"noopener noreferrer"}},[e._v("Go package version"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("li",[e._v("Change all imports. For example: if the next major version is "),a("code",[e._v("v3")]),e._v(", then change all imports starting with "),a("code",[e._v("github.com/cosmos/ibc-go/v2")]),e._v(" to "),a("code",[e._v("github.com/cosmos/ibc-go/v3")]),e._v(").")])]),e._v(" "),a("p",[e._v("Once the above pre-requisites are satified:")]),e._v(" "),a("ol",[a("li",[e._v("Start on "),a("code",[e._v("main")]),e._v(".")]),e._v(" "),a("li",[e._v("Create the release branch ("),a("code",[e._v("release/vX.XX.X")]),e._v("). For example: "),a("code",[e._v("release/v3.0.x")]),e._v(".")])]),e._v(" "),a("h2",{attrs:{id:"new-minor-release-branch"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#new-minor-release-branch"}},[e._v("#")]),e._v(" New minor release branch")]),e._v(" "),a("ol",[a("li",[e._v("Start on the latest release branch in the same major release line. For example: the latest release branch in the "),a("code",[e._v("v3")]),e._v(" release line is "),a("code",[e._v("v3.2.x")]),e._v(".")]),e._v(" "),a("li",[e._v("Create branch from the release branch. For example: create branch "),a("code",[e._v("release/v3.3.x")]),e._v(" from "),a("code",[e._v("v3.2.x")]),e._v(".")])]),e._v(" "),a("p",[e._v("Post-requisites for both new major and minor release branches:")]),e._v(" "),a("ol",[a("li",[e._v("Add branch protection rules to new release branch.")]),e._v(" "),a("li",[e._v("Add backport task to "),a("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/main/.github/mergify.yml",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("mergify.yml")]),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("li",[e._v("Create label for backport (e.g."),a("code",[e._v("backport-to-v3.0.x")]),e._v(").")])]),e._v(" "),a("h2",{attrs:{id:"point-release-procedure"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#point-release-procedure"}},[e._v("#")]),e._v(" Point release procedure")]),e._v(" "),a("p",[e._v("In order to alleviate the burden for a single person to have to cherry-pick and handle merge conflicts of all desired backporting PRs to a point release, we instead maintain a living backport branch, where all desired features and bug fixes are merged into as separate PRs.")]),e._v(" "),a("h3",{attrs:{id:"example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[e._v("#")]),e._v(" Example")]),e._v(" "),a("p",[e._v("Current release is "),a("code",[e._v("v1.0.2")]),e._v(". We then maintain a (living) branch "),a("code",[e._v("release/v1.0.x")]),e._v(", given "),a("code",[e._v("x")]),e._v(" as the next patch release number (currently "),a("code",[e._v("v1.0.3")]),e._v(") for the "),a("code",[e._v("v1.0")]),e._v(" release series. As bugs are fixed and PRs are merged into "),a("code",[e._v("main")]),e._v(", if a contributor wishes the PR to be released into the "),a("code",[e._v("v1.0.x")]),e._v(" point release, the contributor must:")]),e._v(" "),a("ol",[a("li",[e._v("Add the "),a("code",[e._v("backport-to-v1.0x")]),e._v(" label to the PR.")]),e._v(" "),a("li",[e._v("Once the PR is merged, the Mergify GitHub application will automatically copy the changes into another branch and open a new PR agains the desired "),a("code",[e._v("release/v1.0.x")]),e._v(" branch.")]),e._v(" "),a("li",[e._v("If the following has not been discussed in the original PR, then update the backport PR's description and ensure it contains the following information:")])]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("[Impact]")]),e._v(" explanation of how the bug affects users or developers.")]),e._v(" "),a("li",[a("strong",[e._v("[Test Case]")]),e._v(" section with detailed instructions on how to reproduce the bug.")]),e._v(" "),a("li",[a("strong",[e._v("[Regression Potential]")]),e._v(" section with a discussion how regressions are most likely to manifest, or might manifest even if it's unlikely, as a result of the change. "),a("strong",[e._v("It is assumed that any backport PR is well-tested before it is merged in and has an overall low risk of regression")]),e._v(". This section should discuss the potential for state breaking changes to occur such as through out-of-gas errors.")])]),e._v(" "),a("p",[e._v("It is the PR's author's responsibility to fix merge conflicts, update changelog entries, and ensure CI passes. If a PR originates from an external contributor, it may be a core team member's responsibility to perform this process instead of the original author. Lastly, it is core team's responsibility to ensure that the PR meets all the backport criteria.")]),e._v(" "),a("p",[e._v("Finally, when a point release is ready to be made:")]),e._v(" "),a("ol",[a("li",[e._v("Checkout the release branch (e.g. "),a("code",[e._v("release/v1.0.x")]),e._v(").")]),e._v(" "),a("li",[e._v("In "),a("code",[e._v("CHANGELOG.md")]),e._v(":")])]),e._v(" "),a("ul",[a("li",[e._v("Ensure changelog entries are verified.")]),e._v(" "),a("li",[e._v("Remove any sections of the changelog that do not have any entries (e.g. if the release does not have any bug fixes, then remove the section).")]),e._v(" "),a("li",[e._v("Remove the "),a("code",[e._v("[Unreleased]")]),e._v(" title.")]),e._v(" "),a("li",[e._v("Add release version and date of release.")])]),e._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[e._v("Create release in GitHub:")])]),e._v(" "),a("ul",[a("li",[e._v("Select the correct target branch (e.g. "),a("code",[e._v("release/v1.0.x")]),e._v(").")]),e._v(" "),a("li",[e._v("Choose a tag (e.g. "),a("code",[e._v("v1.0.3")]),e._v(").")]),e._v(" "),a("li",[e._v("Write release notes.")]),e._v(" "),a("li",[e._v("Check the "),a("code",[e._v("This is a pre-release")]),e._v(" checkbox if needed (this applies for alpha, beta and release candidates).")])]),e._v(" "),a("h3",{attrs:{id:"post-release-procedure"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#post-release-procedure"}},[e._v("#")]),e._v(" Post-release procedure")]),e._v(" "),a("ul",[a("li",[e._v("Update "),a("RouterLink",{attrs:{to:"/CHANGELOG.html"}},[a("code",[e._v("CHANGELOG.md")])]),e._v(" in "),a("code",[e._v("main")]),e._v(" (remove from the "),a("code",[e._v("[Unreleased]")]),e._v(" section any items that are part of the release).`")],1),e._v(" "),a("li",[e._v("Put back the "),a("code",[e._v("[Unreleased]")]),e._v(" section in the release branch (e.g. "),a("code",[e._v("release/v1.0.x")]),e._v(") with clean sections for each of the types of changelog entries, so that entries will be added for the PRs that are backported for the next release.")]),e._v(" "),a("li",[e._v("Update "),a("RouterLink",{attrs:{to:"/RELEASES.html#version-matrix"}},[e._v("version matrix")]),e._v(" in "),a("code",[e._v("RELEASES.md")]),e._v(": add the new release and remove any tags that might not be recommended anymore.")],1)]),e._v(" "),a("p",[e._v("Additionally, for the first point release of a new major or minor release branch:")]),e._v(" "),a("ul",[a("li",[e._v("Update the table of supported release lines (and End of Life dates) in "),a("RouterLink",{attrs:{to:"/RELEASES.html"}},[a("code",[e._v("RELEASES.md")])]),e._v(": add the new release line and remove any release lines that might have become discontinued.")],1),e._v(" "),a("li",[e._v("Update the "),a("RouterLink",{attrs:{to:"/RELEASES.html#releases"}},[e._v("list of supported release lines in README.md")]),e._v(", if necessary.")],1),e._v(" "),a("li",[e._v("Update the "),a("a",{attrs:{href:"https://github.com/cosmos/ibc-go/tree/main/.github/compatibility-test-matrices",target:"_blank",rel:"noopener noreferrer"}},[e._v("e2e compatibility test matrices"),a("OutboundLink")],1),e._v(": add the tag for the new release and remove any tags that might not be recommended anymore.")]),e._v(" "),a("li",[e._v("Update the manual "),a("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/main/.github/workflows/e2e-manual-simd.yaml",target:"_blank",rel:"noopener noreferrer"}},[e._v("e2e "),a("code",[e._v("simd")]),a("OutboundLink")],1),e._v(" and "),a("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/main/.github/workflows/e2e-manual-icad.yaml",target:"_blank",rel:"noopener noreferrer"}},[e._v("e2e "),a("code",[e._v("icad")]),a("OutboundLink")],1),e._v(" test workflows:\n"),a("ul",[a("li",[e._v("Add the new release and the new "),a("code",[e._v("icad")]),e._v(" tag.")]),e._v(" "),a("li",[e._v("Remove any tags that might not be recommended anymore.")])])]),e._v(" "),a("li",[e._v("Bump ibc-go version in "),a("a",{attrs:{href:"https://github.com/cosmos/interchain-accounts-demo",target:"_blank",rel:"noopener noreferrer"}},[e._v("cosmos/interchain-accounts-demo repository"),a("OutboundLink")],1),e._v(" and create a tag.")]),e._v(" "),a("li",[e._v("Open a PR to "),a("code",[e._v("main")]),e._v(" updating the docs site:\n"),a("ul",[a("li",[e._v("Add new release branch to "),a("a",{attrs:{href:"../versions"}},[a("code",[e._v("docs/versions")])]),e._v(" file.")]),e._v(" "),a("li",[e._v("Add "),a("code",[e._v("label")]),e._v(" and "),a("code",[e._v("key")]),e._v(" to "),a("code",[e._v("versions")]),e._v(" array in "),a("a",{attrs:{href:"https://github.com/cosmos/ibc-go/blob/main/docs/.vuepress/config.js#L33",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("config.js")]),a("OutboundLink")],1),e._v(".")])])]),e._v(" "),a("li",[e._v("After changes to docs site are deployed, check "),a("a",{attrs:{href:"https://ibc.cosmos.network",target:"_blank",rel:"noopener noreferrer"}},[e._v("ibc.cosmos.network"),a("OutboundLink")],1),e._v(" is updated.")]),e._v(" "),a("li",[e._v("Open issue in "),a("a",{attrs:{href:"https://github.com/cosmos/sdk-tutorials",target:"_blank",rel:"noopener noreferrer"}},[e._v("SDK tutorials repo"),a("OutboundLink")],1),e._v(" to update tutorials to the released version of ibc-go.")])]),e._v(" "),a("p",[e._v("See "),a("a",{attrs:{href:"https://github.com/cosmos/ibc-go/pull/2919",target:"_blank",rel:"noopener noreferrer"}},[e._v("this PR"),a("OutboundLink")],1),e._v(" for an example of the involved changes.")])])}),[],!1,null,null,null);t.default=o.exports}}]);