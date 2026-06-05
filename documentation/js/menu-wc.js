'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">help_ajustadores documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AdeudaPageModule.html" data-type="entity-link" >AdeudaPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AdeudaPageModule-67290aa6c98e095e5c2a7d0a144dccd88d662ef4fe212c47dee6a4a196a63be3128c4e795dcc948437b5e5ea38dfb3b8d74683464a998b3ced80e1dcf73f319e"' : 'data-bs-target="#xs-components-links-module-AdeudaPageModule-67290aa6c98e095e5c2a7d0a144dccd88d662ef4fe212c47dee6a4a196a63be3128c4e795dcc948437b5e5ea38dfb3b8d74683464a998b3ced80e1dcf73f319e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AdeudaPageModule-67290aa6c98e095e5c2a7d0a144dccd88d662ef4fe212c47dee6a4a196a63be3128c4e795dcc948437b5e5ea38dfb3b8d74683464a998b3ced80e1dcf73f319e"' :
                                            'id="xs-components-links-module-AdeudaPageModule-67290aa6c98e095e5c2a7d0a144dccd88d662ef4fe212c47dee6a4a196a63be3128c4e795dcc948437b5e5ea38dfb3b8d74683464a998b3ced80e1dcf73f319e"' }>
                                            <li class="link">
                                                <a href="components/AdeudaPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdeudaPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AdeudaPageRoutingModule.html" data-type="entity-link" >AdeudaPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AjustadorhnPageModule.html" data-type="entity-link" >AjustadorhnPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AjustadorhnPageModule-4d5bafbe81096bb5ecf10a16968e1c202b44a900d5d49240507fb49f990bd2a8cf50a37cba43052a2c82c100a8411fd1bb794db401c4354c9f53e64e29d5141e"' : 'data-bs-target="#xs-components-links-module-AjustadorhnPageModule-4d5bafbe81096bb5ecf10a16968e1c202b44a900d5d49240507fb49f990bd2a8cf50a37cba43052a2c82c100a8411fd1bb794db401c4354c9f53e64e29d5141e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AjustadorhnPageModule-4d5bafbe81096bb5ecf10a16968e1c202b44a900d5d49240507fb49f990bd2a8cf50a37cba43052a2c82c100a8411fd1bb794db401c4354c9f53e64e29d5141e"' :
                                            'id="xs-components-links-module-AjustadorhnPageModule-4d5bafbe81096bb5ecf10a16968e1c202b44a900d5d49240507fb49f990bd2a8cf50a37cba43052a2c82c100a8411fd1bb794db401c4354c9f53e64e29d5141e"' }>
                                            <li class="link">
                                                <a href="components/AjustadorhnPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AjustadorhnPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AjustadorhnPageRoutingModule.html" data-type="entity-link" >AjustadorhnPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AppModule-bd221f8effbf4950974c89b9fc84d113c48a525880d264725f4cf29fea2e44ebfe53328bcf6a65d446db0e70a5fd745744982b4505679de191ff66c772e009ec"' : 'data-bs-target="#xs-components-links-module-AppModule-bd221f8effbf4950974c89b9fc84d113c48a525880d264725f4cf29fea2e44ebfe53328bcf6a65d446db0e70a5fd745744982b4505679de191ff66c772e009ec"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-bd221f8effbf4950974c89b9fc84d113c48a525880d264725f4cf29fea2e44ebfe53328bcf6a65d446db0e70a5fd745744982b4505679de191ff66c772e009ec"' :
                                            'id="xs-components-links-module-AppModule-bd221f8effbf4950974c89b9fc84d113c48a525880d264725f4cf29fea2e44ebfe53328bcf6a65d446db0e70a5fd745744982b4505679de191ff66c772e009ec"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/BeneficiarioPageModule.html" data-type="entity-link" >BeneficiarioPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-BeneficiarioPageModule-9ba6e1b560e03ddcbda6d31d881af4c78dd17b78ba822cb841377370b42eb2e8571ba062d49bc625bc87698067432f489c43bab8fc96e8414af6bce6e9ecbdb4"' : 'data-bs-target="#xs-components-links-module-BeneficiarioPageModule-9ba6e1b560e03ddcbda6d31d881af4c78dd17b78ba822cb841377370b42eb2e8571ba062d49bc625bc87698067432f489c43bab8fc96e8414af6bce6e9ecbdb4"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-BeneficiarioPageModule-9ba6e1b560e03ddcbda6d31d881af4c78dd17b78ba822cb841377370b42eb2e8571ba062d49bc625bc87698067432f489c43bab8fc96e8414af6bce6e9ecbdb4"' :
                                            'id="xs-components-links-module-BeneficiarioPageModule-9ba6e1b560e03ddcbda6d31d881af4c78dd17b78ba822cb841377370b42eb2e8571ba062d49bc625bc87698067432f489c43bab8fc96e8414af6bce6e9ecbdb4"' }>
                                            <li class="link">
                                                <a href="components/BeneficiarioPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BeneficiarioPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/BeneficiarioPageRoutingModule.html" data-type="entity-link" >BeneficiarioPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ClientehnPageModule.html" data-type="entity-link" >ClientehnPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-ClientehnPageModule-cc5f3a7eb7811a5397d60cb38bbbbcc4e0a67128c7f1192c19a9b827948ac33c0aa880e590fb52b17852e1325fd969c370d9060201861b4546033f9d5f969c1b"' : 'data-bs-target="#xs-components-links-module-ClientehnPageModule-cc5f3a7eb7811a5397d60cb38bbbbcc4e0a67128c7f1192c19a9b827948ac33c0aa880e590fb52b17852e1325fd969c370d9060201861b4546033f9d5f969c1b"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ClientehnPageModule-cc5f3a7eb7811a5397d60cb38bbbbcc4e0a67128c7f1192c19a9b827948ac33c0aa880e590fb52b17852e1325fd969c370d9060201861b4546033f9d5f969c1b"' :
                                            'id="xs-components-links-module-ClientehnPageModule-cc5f3a7eb7811a5397d60cb38bbbbcc4e0a67128c7f1192c19a9b827948ac33c0aa880e590fb52b17852e1325fd969c370d9060201861b4546033f9d5f969c1b"' }>
                                            <li class="link">
                                                <a href="components/ClientehnPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ClientehnPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ClientehnPageRoutingModule.html" data-type="entity-link" >ClientehnPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CulpablePageModule.html" data-type="entity-link" >CulpablePageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-CulpablePageModule-fbd8797c3ee2620f58b3d15ad0800ad28c42280bb62ef3717ad85d7fbf3747e35ef4cfe9dd0a09508a904462527cd4a7aac774173bd4072166877ef7a93d94f5"' : 'data-bs-target="#xs-components-links-module-CulpablePageModule-fbd8797c3ee2620f58b3d15ad0800ad28c42280bb62ef3717ad85d7fbf3747e35ef4cfe9dd0a09508a904462527cd4a7aac774173bd4072166877ef7a93d94f5"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CulpablePageModule-fbd8797c3ee2620f58b3d15ad0800ad28c42280bb62ef3717ad85d7fbf3747e35ef4cfe9dd0a09508a904462527cd4a7aac774173bd4072166877ef7a93d94f5"' :
                                            'id="xs-components-links-module-CulpablePageModule-fbd8797c3ee2620f58b3d15ad0800ad28c42280bb62ef3717ad85d7fbf3747e35ef4cfe9dd0a09508a904462527cd4a7aac774173bd4072166877ef7a93d94f5"' }>
                                            <li class="link">
                                                <a href="components/CulpablePage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CulpablePage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CulpablePageRoutingModule.html" data-type="entity-link" >CulpablePageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/DeclaracionPageModule.html" data-type="entity-link" >DeclaracionPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-DeclaracionPageModule-d462ff00621842746eb5e6640f4bbfa529cf1050666f8453ad660b8d6223eb77b9c84edf905bcc957b2101d3e8f3c4bb86fc98cf01c00b3a2fcb82cc41218e83"' : 'data-bs-target="#xs-components-links-module-DeclaracionPageModule-d462ff00621842746eb5e6640f4bbfa529cf1050666f8453ad660b8d6223eb77b9c84edf905bcc957b2101d3e8f3c4bb86fc98cf01c00b3a2fcb82cc41218e83"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DeclaracionPageModule-d462ff00621842746eb5e6640f4bbfa529cf1050666f8453ad660b8d6223eb77b9c84edf905bcc957b2101d3e8f3c4bb86fc98cf01c00b3a2fcb82cc41218e83"' :
                                            'id="xs-components-links-module-DeclaracionPageModule-d462ff00621842746eb5e6640f4bbfa529cf1050666f8453ad660b8d6223eb77b9c84edf905bcc957b2101d3e8f3c4bb86fc98cf01c00b3a2fcb82cc41218e83"' }>
                                            <li class="link">
                                                <a href="components/DeclaracionPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DeclaracionPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/DeclaracionPageRoutingModule.html" data-type="entity-link" >DeclaracionPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/DirectivesModule.html" data-type="entity-link" >DirectivesModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#directives-links-module-DirectivesModule-c76ea99a429532dfdeeef7500085246c7ce28786a39d1332c7bb29814efeda72b19012971f081537c0e2d9eb91947b80a25bda7bca43697dc12e0601b78a3176"' : 'data-bs-target="#xs-directives-links-module-DirectivesModule-c76ea99a429532dfdeeef7500085246c7ce28786a39d1332c7bb29814efeda72b19012971f081537c0e2d9eb91947b80a25bda7bca43697dc12e0601b78a3176"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-DirectivesModule-c76ea99a429532dfdeeef7500085246c7ce28786a39d1332c7bb29814efeda72b19012971f081537c0e2d9eb91947b80a25bda7bca43697dc12e0601b78a3176"' :
                                        'id="xs-directives-links-module-DirectivesModule-c76ea99a429532dfdeeef7500085246c7ce28786a39d1332c7bb29814efeda72b19012971f081537c0e2d9eb91947b80a25bda7bca43697dc12e0601b78a3176"' }>
                                        <li class="link">
                                            <a href="directives/PressDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PressDirective</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/EndProcessPageModule.html" data-type="entity-link" >EndProcessPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-EndProcessPageModule-8d0b39f6be6d695004943d312048afa2d4149f55253ba4f3290f5b1d413754f9855853e39f1f9444d87447252190566ab84b32caa214d6ecdcf166a6319c35bd"' : 'data-bs-target="#xs-components-links-module-EndProcessPageModule-8d0b39f6be6d695004943d312048afa2d4149f55253ba4f3290f5b1d413754f9855853e39f1f9444d87447252190566ab84b32caa214d6ecdcf166a6319c35bd"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-EndProcessPageModule-8d0b39f6be6d695004943d312048afa2d4149f55253ba4f3290f5b1d413754f9855853e39f1f9444d87447252190566ab84b32caa214d6ecdcf166a6319c35bd"' :
                                            'id="xs-components-links-module-EndProcessPageModule-8d0b39f6be6d695004943d312048afa2d4149f55253ba4f3290f5b1d413754f9855853e39f1f9444d87447252190566ab84b32caa214d6ecdcf166a6319c35bd"' }>
                                            <li class="link">
                                                <a href="components/EndProcessPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EndProcessPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/EndProcessPageRoutingModule.html" data-type="entity-link" >EndProcessPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/EsignaturePageModule.html" data-type="entity-link" >EsignaturePageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-EsignaturePageModule-b749c16879feae44e48ac46bf797ff476cfabfbb13de2b65458cc80208f991e1585951aec9df4ffcc28ff68072950ef19b36c1eab3300386c46b19dbc9ab98d7"' : 'data-bs-target="#xs-components-links-module-EsignaturePageModule-b749c16879feae44e48ac46bf797ff476cfabfbb13de2b65458cc80208f991e1585951aec9df4ffcc28ff68072950ef19b36c1eab3300386c46b19dbc9ab98d7"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-EsignaturePageModule-b749c16879feae44e48ac46bf797ff476cfabfbb13de2b65458cc80208f991e1585951aec9df4ffcc28ff68072950ef19b36c1eab3300386c46b19dbc9ab98d7"' :
                                            'id="xs-components-links-module-EsignaturePageModule-b749c16879feae44e48ac46bf797ff476cfabfbb13de2b65458cc80208f991e1585951aec9df4ffcc28ff68072950ef19b36c1eab3300386c46b19dbc9ab98d7"' }>
                                            <li class="link">
                                                <a href="components/EsignaturePage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >EsignaturePage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/EsignaturePageRoutingModule.html" data-type="entity-link" >EsignaturePageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ExpedientePageModule.html" data-type="entity-link" >ExpedientePageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-ExpedientePageModule-493a53e5f6d9059c8d2ad477cd49ac0fefa8107e3c9894ec71048e2742ea398760e692a23ad3f6d8b63878e3855e54ceff783d4f31833a6f7d4bed754e11a1bd"' : 'data-bs-target="#xs-components-links-module-ExpedientePageModule-493a53e5f6d9059c8d2ad477cd49ac0fefa8107e3c9894ec71048e2742ea398760e692a23ad3f6d8b63878e3855e54ceff783d4f31833a6f7d4bed754e11a1bd"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ExpedientePageModule-493a53e5f6d9059c8d2ad477cd49ac0fefa8107e3c9894ec71048e2742ea398760e692a23ad3f6d8b63878e3855e54ceff783d4f31833a6f7d4bed754e11a1bd"' :
                                            'id="xs-components-links-module-ExpedientePageModule-493a53e5f6d9059c8d2ad477cd49ac0fefa8107e3c9894ec71048e2742ea398760e692a23ad3f6d8b63878e3855e54ceff783d4f31833a6f7d4bed754e11a1bd"' }>
                                            <li class="link">
                                                <a href="components/ExpedientePage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ExpedientePage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ExpedientePageRoutingModule.html" data-type="entity-link" >ExpedientePageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ExploreContainerComponentModule.html" data-type="entity-link" >ExploreContainerComponentModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-ExploreContainerComponentModule-2814c4c990070c76fa78ba30eb29067f01f11055a26ff0a819dfccd8566453302558e5e37efb07d56f24a3f685fde5915c7efd385bfd89cdd358e69fa94faede"' : 'data-bs-target="#xs-components-links-module-ExploreContainerComponentModule-2814c4c990070c76fa78ba30eb29067f01f11055a26ff0a819dfccd8566453302558e5e37efb07d56f24a3f685fde5915c7efd385bfd89cdd358e69fa94faede"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ExploreContainerComponentModule-2814c4c990070c76fa78ba30eb29067f01f11055a26ff0a819dfccd8566453302558e5e37efb07d56f24a3f685fde5915c7efd385bfd89cdd358e69fa94faede"' :
                                            'id="xs-components-links-module-ExploreContainerComponentModule-2814c4c990070c76fa78ba30eb29067f01f11055a26ff0a819dfccd8566453302558e5e37efb07d56f24a3f685fde5915c7efd385bfd89cdd358e69fa94faede"' }>
                                            <li class="link">
                                                <a href="components/ExploreContainerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ExploreContainerComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/FiniquitoPageModule.html" data-type="entity-link" >FiniquitoPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-FiniquitoPageModule-d1cf76639f8c24a150fb443b1ce1fca7fc24e57dcdc118d39d930a0fd745e42e7d66ce0b638bac7ffc4edf178a1b51a85a2e667e11e0a0c2e4a5515c512b23be"' : 'data-bs-target="#xs-components-links-module-FiniquitoPageModule-d1cf76639f8c24a150fb443b1ce1fca7fc24e57dcdc118d39d930a0fd745e42e7d66ce0b638bac7ffc4edf178a1b51a85a2e667e11e0a0c2e4a5515c512b23be"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-FiniquitoPageModule-d1cf76639f8c24a150fb443b1ce1fca7fc24e57dcdc118d39d930a0fd745e42e7d66ce0b638bac7ffc4edf178a1b51a85a2e667e11e0a0c2e4a5515c512b23be"' :
                                            'id="xs-components-links-module-FiniquitoPageModule-d1cf76639f8c24a150fb443b1ce1fca7fc24e57dcdc118d39d930a0fd745e42e7d66ce0b638bac7ffc4edf178a1b51a85a2e667e11e0a0c2e4a5515c512b23be"' }>
                                            <li class="link">
                                                <a href="components/FiniquitoPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FiniquitoPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/FiniquitoPageRoutingModule.html" data-type="entity-link" >FiniquitoPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/FormularioPageModule.html" data-type="entity-link" >FormularioPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-FormularioPageModule-b155688df21c136540c958722fbf7870b7babbf04137b1302e97d759f4ea2dd229fa97f0e8dc4b16d4555ae37fe2661e6311186358f5721a88ed8a0c43686918"' : 'data-bs-target="#xs-components-links-module-FormularioPageModule-b155688df21c136540c958722fbf7870b7babbf04137b1302e97d759f4ea2dd229fa97f0e8dc4b16d4555ae37fe2661e6311186358f5721a88ed8a0c43686918"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-FormularioPageModule-b155688df21c136540c958722fbf7870b7babbf04137b1302e97d759f4ea2dd229fa97f0e8dc4b16d4555ae37fe2661e6311186358f5721a88ed8a0c43686918"' :
                                            'id="xs-components-links-module-FormularioPageModule-b155688df21c136540c958722fbf7870b7babbf04137b1302e97d759f4ea2dd229fa97f0e8dc4b16d4555ae37fe2661e6311186358f5721a88ed8a0c43686918"' }>
                                            <li class="link">
                                                <a href="components/FormularioPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FormularioPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/FormularioPageRoutingModule.html" data-type="entity-link" >FormularioPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/FormulariosPageModule.html" data-type="entity-link" >FormulariosPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-FormulariosPageModule-3989cdc76bad792d7c8e5380086312ddc1f8abb9f1ccaeed9f9b726ffcbe6bdefdc92ca8970be293a229673eeb8eb75fc5faf4d54d96d6e72805c60d2993b4bc"' : 'data-bs-target="#xs-components-links-module-FormulariosPageModule-3989cdc76bad792d7c8e5380086312ddc1f8abb9f1ccaeed9f9b726ffcbe6bdefdc92ca8970be293a229673eeb8eb75fc5faf4d54d96d6e72805c60d2993b4bc"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-FormulariosPageModule-3989cdc76bad792d7c8e5380086312ddc1f8abb9f1ccaeed9f9b726ffcbe6bdefdc92ca8970be293a229673eeb8eb75fc5faf4d54d96d6e72805c60d2993b4bc"' :
                                            'id="xs-components-links-module-FormulariosPageModule-3989cdc76bad792d7c8e5380086312ddc1f8abb9f1ccaeed9f9b726ffcbe6bdefdc92ca8970be293a229673eeb8eb75fc5faf4d54d96d6e72805c60d2993b4bc"' }>
                                            <li class="link">
                                                <a href="components/FormulariosPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FormulariosPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/FormulariosPageRoutingModule.html" data-type="entity-link" >FormulariosPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/FotografiasPageModule.html" data-type="entity-link" >FotografiasPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-FotografiasPageModule-e1691682388cbcf6b2d1646fc3f1789ff7c9abbe8546fbc01b2118fddbca860e98cf3c33af2bb1687874aea8723155ccaf98cd663307804b81c4b9e629d244e7"' : 'data-bs-target="#xs-components-links-module-FotografiasPageModule-e1691682388cbcf6b2d1646fc3f1789ff7c9abbe8546fbc01b2118fddbca860e98cf3c33af2bb1687874aea8723155ccaf98cd663307804b81c4b9e629d244e7"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-FotografiasPageModule-e1691682388cbcf6b2d1646fc3f1789ff7c9abbe8546fbc01b2118fddbca860e98cf3c33af2bb1687874aea8723155ccaf98cd663307804b81c4b9e629d244e7"' :
                                            'id="xs-components-links-module-FotografiasPageModule-e1691682388cbcf6b2d1646fc3f1789ff7c9abbe8546fbc01b2118fddbca860e98cf3c33af2bb1687874aea8723155ccaf98cd663307804b81c4b9e629d244e7"' }>
                                            <li class="link">
                                                <a href="components/FotografiasPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FotografiasPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/FotografiasPageRoutingModule.html" data-type="entity-link" >FotografiasPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/FotoReportePageModule.html" data-type="entity-link" >FotoReportePageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-FotoReportePageModule-3a8d4b2b9f538386d746a620b080251a4cb6ef2e6f34cc3196e777ef9b309b126ea9c58ee5b13dd60af9833a6569a43f510d3d4f5306a8d0b49c5bd3ce320e35"' : 'data-bs-target="#xs-components-links-module-FotoReportePageModule-3a8d4b2b9f538386d746a620b080251a4cb6ef2e6f34cc3196e777ef9b309b126ea9c58ee5b13dd60af9833a6569a43f510d3d4f5306a8d0b49c5bd3ce320e35"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-FotoReportePageModule-3a8d4b2b9f538386d746a620b080251a4cb6ef2e6f34cc3196e777ef9b309b126ea9c58ee5b13dd60af9833a6569a43f510d3d4f5306a8d0b49c5bd3ce320e35"' :
                                            'id="xs-components-links-module-FotoReportePageModule-3a8d4b2b9f538386d746a620b080251a4cb6ef2e6f34cc3196e777ef9b309b126ea9c58ee5b13dd60af9833a6569a43f510d3d4f5306a8d0b49c5bd3ce320e35"' }>
                                            <li class="link">
                                                <a href="components/FotoReportePage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FotoReportePage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/FotoReportePageRoutingModule.html" data-type="entity-link" >FotoReportePageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/FotoshnPageModule.html" data-type="entity-link" >FotoshnPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-FotoshnPageModule-d06745417c9cfd1b0a9e95b691f1a49511bb7a47a0f2138d4780bd446a5d05c946d8f573fc0e1ba3bfc19cfc74d03b23241fb6b3be6fdce3995fbd610694a788"' : 'data-bs-target="#xs-components-links-module-FotoshnPageModule-d06745417c9cfd1b0a9e95b691f1a49511bb7a47a0f2138d4780bd446a5d05c946d8f573fc0e1ba3bfc19cfc74d03b23241fb6b3be6fdce3995fbd610694a788"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-FotoshnPageModule-d06745417c9cfd1b0a9e95b691f1a49511bb7a47a0f2138d4780bd446a5d05c946d8f573fc0e1ba3bfc19cfc74d03b23241fb6b3be6fdce3995fbd610694a788"' :
                                            'id="xs-components-links-module-FotoshnPageModule-d06745417c9cfd1b0a9e95b691f1a49511bb7a47a0f2138d4780bd446a5d05c946d8f573fc0e1ba3bfc19cfc74d03b23241fb6b3be6fdce3995fbd610694a788"' }>
                                            <li class="link">
                                                <a href="components/FotoshnPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FotoshnPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/FotoshnPageRoutingModule.html" data-type="entity-link" >FotoshnPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/LoginPageModule.html" data-type="entity-link" >LoginPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-LoginPageModule-0ba85b2fc0df7a13721bba58191a74230c2b0e69c58f693124a8623be1233d9bb8a55222570794f84414e3cd73ded1024aeed252bd7c0e3c4c15c67c26a6a2c7"' : 'data-bs-target="#xs-components-links-module-LoginPageModule-0ba85b2fc0df7a13721bba58191a74230c2b0e69c58f693124a8623be1233d9bb8a55222570794f84414e3cd73ded1024aeed252bd7c0e3c4c15c67c26a6a2c7"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LoginPageModule-0ba85b2fc0df7a13721bba58191a74230c2b0e69c58f693124a8623be1233d9bb8a55222570794f84414e3cd73ded1024aeed252bd7c0e3c4c15c67c26a6a2c7"' :
                                            'id="xs-components-links-module-LoginPageModule-0ba85b2fc0df7a13721bba58191a74230c2b0e69c58f693124a8623be1233d9bb8a55222570794f84414e3cd73ded1024aeed252bd7c0e3c4c15c67c26a6a2c7"' }>
                                            <li class="link">
                                                <a href="components/ErrorMessageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ErrorMessageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LoginPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/LoginPageRoutingModule.html" data-type="entity-link" >LoginPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/LogoutPageModule.html" data-type="entity-link" >LogoutPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-LogoutPageModule-4c1d26f3b0a3543b555fa62b9424862537f9cc5b7461f26c674ae1e1dc76b1b280f7eaa07810d352ba74d6683941d1ecb615dd28e06ee307750bfdc1594e074d"' : 'data-bs-target="#xs-components-links-module-LogoutPageModule-4c1d26f3b0a3543b555fa62b9424862537f9cc5b7461f26c674ae1e1dc76b1b280f7eaa07810d352ba74d6683941d1ecb615dd28e06ee307750bfdc1594e074d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LogoutPageModule-4c1d26f3b0a3543b555fa62b9424862537f9cc5b7461f26c674ae1e1dc76b1b280f7eaa07810d352ba74d6683941d1ecb615dd28e06ee307750bfdc1594e074d"' :
                                            'id="xs-components-links-module-LogoutPageModule-4c1d26f3b0a3543b555fa62b9424862537f9cc5b7461f26c674ae1e1dc76b1b280f7eaa07810d352ba74d6683941d1ecb615dd28e06ee307750bfdc1594e074d"' }>
                                            <li class="link">
                                                <a href="components/LogoutPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LogoutPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/LogoutPageRoutingModule.html" data-type="entity-link" >LogoutPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/MapaPageModule.html" data-type="entity-link" >MapaPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-MapaPageModule-70dd3a2bbd9ab836478a0a6dc81f4d477279e0656214183ba19845547db274449f3f3b206021b7860b5a8784aa705edf98439cbb1e047a31ca660790d1828728"' : 'data-bs-target="#xs-components-links-module-MapaPageModule-70dd3a2bbd9ab836478a0a6dc81f4d477279e0656214183ba19845547db274449f3f3b206021b7860b5a8784aa705edf98439cbb1e047a31ca660790d1828728"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-MapaPageModule-70dd3a2bbd9ab836478a0a6dc81f4d477279e0656214183ba19845547db274449f3f3b206021b7860b5a8784aa705edf98439cbb1e047a31ca660790d1828728"' :
                                            'id="xs-components-links-module-MapaPageModule-70dd3a2bbd9ab836478a0a6dc81f4d477279e0656214183ba19845547db274449f3f3b206021b7860b5a8784aa705edf98439cbb1e047a31ca660790d1828728"' }>
                                            <li class="link">
                                                <a href="components/MapaPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MapaPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/MapaPageRoutingModule.html" data-type="entity-link" >MapaPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/MaterialesPageModule.html" data-type="entity-link" >MaterialesPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-MaterialesPageModule-423bdd292cc627ded7f9ea5a8cb9d2951a89f9b4e200c47fbf81ea2b0b2a438406ead4f401b5f5523e39bf2243315532840d0770c78425994f018a58360ee1f1"' : 'data-bs-target="#xs-components-links-module-MaterialesPageModule-423bdd292cc627ded7f9ea5a8cb9d2951a89f9b4e200c47fbf81ea2b0b2a438406ead4f401b5f5523e39bf2243315532840d0770c78425994f018a58360ee1f1"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-MaterialesPageModule-423bdd292cc627ded7f9ea5a8cb9d2951a89f9b4e200c47fbf81ea2b0b2a438406ead4f401b5f5523e39bf2243315532840d0770c78425994f018a58360ee1f1"' :
                                            'id="xs-components-links-module-MaterialesPageModule-423bdd292cc627ded7f9ea5a8cb9d2951a89f9b4e200c47fbf81ea2b0b2a438406ead4f401b5f5523e39bf2243315532840d0770c78425994f018a58360ee1f1"' }>
                                            <li class="link">
                                                <a href="components/MaterialesPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MaterialesPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/MaterialesPageRoutingModule.html" data-type="entity-link" >MaterialesPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ModalEmpresaConductorPageModule.html" data-type="entity-link" >ModalEmpresaConductorPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-ModalEmpresaConductorPageModule-a28be929ee3742a9629043387cc75e9ea21761fd6a1e9c4279f7ba33e01c59b35141e726e331da20723bbd78bbec66d113a7243a8c1815dad4cd821b69e39597"' : 'data-bs-target="#xs-components-links-module-ModalEmpresaConductorPageModule-a28be929ee3742a9629043387cc75e9ea21761fd6a1e9c4279f7ba33e01c59b35141e726e331da20723bbd78bbec66d113a7243a8c1815dad4cd821b69e39597"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ModalEmpresaConductorPageModule-a28be929ee3742a9629043387cc75e9ea21761fd6a1e9c4279f7ba33e01c59b35141e726e331da20723bbd78bbec66d113a7243a8c1815dad4cd821b69e39597"' :
                                            'id="xs-components-links-module-ModalEmpresaConductorPageModule-a28be929ee3742a9629043387cc75e9ea21761fd6a1e9c4279f7ba33e01c59b35141e726e331da20723bbd78bbec66d113a7243a8c1815dad4cd821b69e39597"' }>
                                            <li class="link">
                                                <a href="components/ModalEmpresaConductorPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ModalEmpresaConductorPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ModalEmpresaConductorPageRoutingModule.html" data-type="entity-link" >ModalEmpresaConductorPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ModalGuardarPageModule.html" data-type="entity-link" >ModalGuardarPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-ModalGuardarPageModule-e18578ee11ae89c6d7687b2a03d9ee49d0d85b03f4a0b3777715ee9871237945e8ea6649d5f0ee3fd5a2239027d9d288dd417f45b9965be4312931ae3df17610"' : 'data-bs-target="#xs-components-links-module-ModalGuardarPageModule-e18578ee11ae89c6d7687b2a03d9ee49d0d85b03f4a0b3777715ee9871237945e8ea6649d5f0ee3fd5a2239027d9d288dd417f45b9965be4312931ae3df17610"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ModalGuardarPageModule-e18578ee11ae89c6d7687b2a03d9ee49d0d85b03f4a0b3777715ee9871237945e8ea6649d5f0ee3fd5a2239027d9d288dd417f45b9965be4312931ae3df17610"' :
                                            'id="xs-components-links-module-ModalGuardarPageModule-e18578ee11ae89c6d7687b2a03d9ee49d0d85b03f4a0b3777715ee9871237945e8ea6649d5f0ee3fd5a2239027d9d288dd417f45b9965be4312931ae3df17610"' }>
                                            <li class="link">
                                                <a href="components/ModalGuardarPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ModalGuardarPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ModalGuardarPageRoutingModule.html" data-type="entity-link" >ModalGuardarPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/NewPasswordPageModule.html" data-type="entity-link" >NewPasswordPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-NewPasswordPageModule-d8995b15d7dded1965b34c95d0f8d493ad55fc0ad59258611e42a002e2eda8db862fa63905d03117bbdc3f183988ce47e6c55c40937c0165644970783baa2099"' : 'data-bs-target="#xs-components-links-module-NewPasswordPageModule-d8995b15d7dded1965b34c95d0f8d493ad55fc0ad59258611e42a002e2eda8db862fa63905d03117bbdc3f183988ce47e6c55c40937c0165644970783baa2099"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-NewPasswordPageModule-d8995b15d7dded1965b34c95d0f8d493ad55fc0ad59258611e42a002e2eda8db862fa63905d03117bbdc3f183988ce47e6c55c40937c0165644970783baa2099"' :
                                            'id="xs-components-links-module-NewPasswordPageModule-d8995b15d7dded1965b34c95d0f8d493ad55fc0ad59258611e42a002e2eda8db862fa63905d03117bbdc3f183988ce47e6c55c40937c0165644970783baa2099"' }>
                                            <li class="link">
                                                <a href="components/NewPasswordPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NewPasswordPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/NewPasswordPageRoutingModule.html" data-type="entity-link" >NewPasswordPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PopoverPageModule.html" data-type="entity-link" >PopoverPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-PopoverPageModule-718b1eca1b5fde5e9d3b2a66dbc40fe16899a0891dcaba0b34e502fbfee268b37115e6f5e35e7503e8e456b6dd17d3e0622107d2f49ad05926c5b98d202099e2"' : 'data-bs-target="#xs-components-links-module-PopoverPageModule-718b1eca1b5fde5e9d3b2a66dbc40fe16899a0891dcaba0b34e502fbfee268b37115e6f5e35e7503e8e456b6dd17d3e0622107d2f49ad05926c5b98d202099e2"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PopoverPageModule-718b1eca1b5fde5e9d3b2a66dbc40fe16899a0891dcaba0b34e502fbfee268b37115e6f5e35e7503e8e456b6dd17d3e0622107d2f49ad05926c5b98d202099e2"' :
                                            'id="xs-components-links-module-PopoverPageModule-718b1eca1b5fde5e9d3b2a66dbc40fe16899a0891dcaba0b34e502fbfee268b37115e6f5e35e7503e8e456b6dd17d3e0622107d2f49ad05926c5b98d202099e2"' }>
                                            <li class="link">
                                                <a href="components/PopoverPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PopoverPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PopoverPageRoutingModule.html" data-type="entity-link" >PopoverPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PrepareAudiencePageModule.html" data-type="entity-link" >PrepareAudiencePageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-PrepareAudiencePageModule-715a9589d288d67199534c287fe4a9859b350e2cc2f54affb23d132e2d7dfdb0d098dbff29e5d345ab0da0ea7393ab55ed6950430e5cdbacdcc9238e181eb512"' : 'data-bs-target="#xs-components-links-module-PrepareAudiencePageModule-715a9589d288d67199534c287fe4a9859b350e2cc2f54affb23d132e2d7dfdb0d098dbff29e5d345ab0da0ea7393ab55ed6950430e5cdbacdcc9238e181eb512"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PrepareAudiencePageModule-715a9589d288d67199534c287fe4a9859b350e2cc2f54affb23d132e2d7dfdb0d098dbff29e5d345ab0da0ea7393ab55ed6950430e5cdbacdcc9238e181eb512"' :
                                            'id="xs-components-links-module-PrepareAudiencePageModule-715a9589d288d67199534c287fe4a9859b350e2cc2f54affb23d132e2d7dfdb0d098dbff29e5d345ab0da0ea7393ab55ed6950430e5cdbacdcc9238e181eb512"' }>
                                            <li class="link">
                                                <a href="components/PrepareAudiencePage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrepareAudiencePage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PrepareAudiencePageRoutingModule.html" data-type="entity-link" >PrepareAudiencePageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PrepareSendPageModule.html" data-type="entity-link" >PrepareSendPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-PrepareSendPageModule-87f8af791270421775cdbf316a2f9305c9788e1c03b4205e7cb89fb3b99364bf2d4eaa1ed8533439d4b13249b3458a4331b1828d85f63a5a158e5c5c9733e78d"' : 'data-bs-target="#xs-components-links-module-PrepareSendPageModule-87f8af791270421775cdbf316a2f9305c9788e1c03b4205e7cb89fb3b99364bf2d4eaa1ed8533439d4b13249b3458a4331b1828d85f63a5a158e5c5c9733e78d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PrepareSendPageModule-87f8af791270421775cdbf316a2f9305c9788e1c03b4205e7cb89fb3b99364bf2d4eaa1ed8533439d4b13249b3458a4331b1828d85f63a5a158e5c5c9733e78d"' :
                                            'id="xs-components-links-module-PrepareSendPageModule-87f8af791270421775cdbf316a2f9305c9788e1c03b4205e7cb89fb3b99364bf2d4eaa1ed8533439d4b13249b3458a4331b1828d85f63a5a158e5c5c9733e78d"' }>
                                            <li class="link">
                                                <a href="components/PrepareSendPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrepareSendPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PrepareSendPageRoutingModule.html" data-type="entity-link" >PrepareSendPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PrinterPageModule.html" data-type="entity-link" >PrinterPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-PrinterPageModule-5451f6ad2e7a778e911c6a87f2170848e77b419495da19c0e40ffec3b73f81d04079b1f5043ca6311b8cd6e5d233cac99c6295479b2ecf11f17c2489181f6b92"' : 'data-bs-target="#xs-components-links-module-PrinterPageModule-5451f6ad2e7a778e911c6a87f2170848e77b419495da19c0e40ffec3b73f81d04079b1f5043ca6311b8cd6e5d233cac99c6295479b2ecf11f17c2489181f6b92"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PrinterPageModule-5451f6ad2e7a778e911c6a87f2170848e77b419495da19c0e40ffec3b73f81d04079b1f5043ca6311b8cd6e5d233cac99c6295479b2ecf11f17c2489181f6b92"' :
                                            'id="xs-components-links-module-PrinterPageModule-5451f6ad2e7a778e911c6a87f2170848e77b419495da19c0e40ffec3b73f81d04079b1f5043ca6311b8cd6e5d233cac99c6295479b2ecf11f17c2489181f6b92"' }>
                                            <li class="link">
                                                <a href="components/PrinterPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrinterPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PrinterPageRoutingModule.html" data-type="entity-link" >PrinterPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PropiedadPageModule.html" data-type="entity-link" >PropiedadPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-PropiedadPageModule-259b6a93ac2d8dfc0bca3e218b333b9b37916b7991a758cddc8f4a3e7aa7db74f22e91d8d0b673c2874c99a4bb5f2b9bcccd12810f9d48226fd6e1d1f78710b3"' : 'data-bs-target="#xs-components-links-module-PropiedadPageModule-259b6a93ac2d8dfc0bca3e218b333b9b37916b7991a758cddc8f4a3e7aa7db74f22e91d8d0b673c2874c99a4bb5f2b9bcccd12810f9d48226fd6e1d1f78710b3"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PropiedadPageModule-259b6a93ac2d8dfc0bca3e218b333b9b37916b7991a758cddc8f4a3e7aa7db74f22e91d8d0b673c2874c99a4bb5f2b9bcccd12810f9d48226fd6e1d1f78710b3"' :
                                            'id="xs-components-links-module-PropiedadPageModule-259b6a93ac2d8dfc0bca3e218b333b9b37916b7991a758cddc8f4a3e7aa7db74f22e91d8d0b673c2874c99a4bb5f2b9bcccd12810f9d48226fd6e1d1f78710b3"' }>
                                            <li class="link">
                                                <a href="components/PropiedadPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PropiedadPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PropiedadPageRoutingModule.html" data-type="entity-link" >PropiedadPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/RecoveryPageModule.html" data-type="entity-link" >RecoveryPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-RecoveryPageModule-4408cff53258f128ebdf335c9ba7b88cf0740bdd14567179853392b6b2cc195943269610e744ed50e65c57d3e82b87621052f86aadb79f6967427862db7c9189"' : 'data-bs-target="#xs-components-links-module-RecoveryPageModule-4408cff53258f128ebdf335c9ba7b88cf0740bdd14567179853392b6b2cc195943269610e744ed50e65c57d3e82b87621052f86aadb79f6967427862db7c9189"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-RecoveryPageModule-4408cff53258f128ebdf335c9ba7b88cf0740bdd14567179853392b6b2cc195943269610e744ed50e65c57d3e82b87621052f86aadb79f6967427862db7c9189"' :
                                            'id="xs-components-links-module-RecoveryPageModule-4408cff53258f128ebdf335c9ba7b88cf0740bdd14567179853392b6b2cc195943269610e744ed50e65c57d3e82b87621052f86aadb79f6967427862db7c9189"' }>
                                            <li class="link">
                                                <a href="components/RecoveryPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RecoveryPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/RecoveryPageRoutingModule.html" data-type="entity-link" >RecoveryPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SegmentoCaracteristicasPageModule.html" data-type="entity-link" >SegmentoCaracteristicasPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-SegmentoCaracteristicasPageModule-aec8b184c1dc8cb0304bd26254c98379791631186dbd44bc0810045e7975a49a4bd020344912c5feaea7e3fc3b77db499fa4d5682b16bd5ca486baac0af09936"' : 'data-bs-target="#xs-components-links-module-SegmentoCaracteristicasPageModule-aec8b184c1dc8cb0304bd26254c98379791631186dbd44bc0810045e7975a49a4bd020344912c5feaea7e3fc3b77db499fa4d5682b16bd5ca486baac0af09936"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SegmentoCaracteristicasPageModule-aec8b184c1dc8cb0304bd26254c98379791631186dbd44bc0810045e7975a49a4bd020344912c5feaea7e3fc3b77db499fa4d5682b16bd5ca486baac0af09936"' :
                                            'id="xs-components-links-module-SegmentoCaracteristicasPageModule-aec8b184c1dc8cb0304bd26254c98379791631186dbd44bc0810045e7975a49a4bd020344912c5feaea7e3fc3b77db499fa4d5682b16bd5ca486baac0af09936"' }>
                                            <li class="link">
                                                <a href="components/SegmentoCaracteristicasPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SegmentoCaracteristicasPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SegmentoCaracteristicasPageRoutingModule.html" data-type="entity-link" >SegmentoCaracteristicasPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SegmentoCaseguradoPageModule.html" data-type="entity-link" >SegmentoCaseguradoPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-SegmentoCaseguradoPageModule-5c8e5b005f922c79064e3912d98325aaa450b6a31d2e01994cd5d9c118c8656bc2e5267374b549b8459a60f389a3cdbc921aa3e4e8ba5e068e8b45c042eb8c1f"' : 'data-bs-target="#xs-components-links-module-SegmentoCaseguradoPageModule-5c8e5b005f922c79064e3912d98325aaa450b6a31d2e01994cd5d9c118c8656bc2e5267374b549b8459a60f389a3cdbc921aa3e4e8ba5e068e8b45c042eb8c1f"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SegmentoCaseguradoPageModule-5c8e5b005f922c79064e3912d98325aaa450b6a31d2e01994cd5d9c118c8656bc2e5267374b549b8459a60f389a3cdbc921aa3e4e8ba5e068e8b45c042eb8c1f"' :
                                            'id="xs-components-links-module-SegmentoCaseguradoPageModule-5c8e5b005f922c79064e3912d98325aaa450b6a31d2e01994cd5d9c118c8656bc2e5267374b549b8459a60f389a3cdbc921aa3e4e8ba5e068e8b45c042eb8c1f"' }>
                                            <li class="link">
                                                <a href="components/SegmentoCaseguradoPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SegmentoCaseguradoPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SegmentoCaseguradoPageRoutingModule.html" data-type="entity-link" >SegmentoCaseguradoPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SegmentoCconductorPageModule.html" data-type="entity-link" >SegmentoCconductorPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-SegmentoCconductorPageModule-1b2ef5994d726323a7ab34d3d0a2966b4ba99945dc7c5beb0411a87c07ca1fc7cb21653dd496b6cbb1b12bc16454186f1d11152f9d9dfdd4bfa41edd0a83c087"' : 'data-bs-target="#xs-components-links-module-SegmentoCconductorPageModule-1b2ef5994d726323a7ab34d3d0a2966b4ba99945dc7c5beb0411a87c07ca1fc7cb21653dd496b6cbb1b12bc16454186f1d11152f9d9dfdd4bfa41edd0a83c087"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SegmentoCconductorPageModule-1b2ef5994d726323a7ab34d3d0a2966b4ba99945dc7c5beb0411a87c07ca1fc7cb21653dd496b6cbb1b12bc16454186f1d11152f9d9dfdd4bfa41edd0a83c087"' :
                                            'id="xs-components-links-module-SegmentoCconductorPageModule-1b2ef5994d726323a7ab34d3d0a2966b4ba99945dc7c5beb0411a87c07ca1fc7cb21653dd496b6cbb1b12bc16454186f1d11152f9d9dfdd4bfa41edd0a83c087"' }>
                                            <li class="link">
                                                <a href="components/SegmentoCconductorPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SegmentoCconductorPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SegmentoCconductorPageRoutingModule.html" data-type="entity-link" >SegmentoCconductorPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SegmentoCinformacionPageModule.html" data-type="entity-link" >SegmentoCinformacionPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-SegmentoCinformacionPageModule-f284093d6f7d58231c08b3c1365f82b042fd6e0d3772cfa5c283ba21495d775c8cfabe8139c6d77147f834a951e30283201959d9da4bd102a92339649b9ebe1c"' : 'data-bs-target="#xs-components-links-module-SegmentoCinformacionPageModule-f284093d6f7d58231c08b3c1365f82b042fd6e0d3772cfa5c283ba21495d775c8cfabe8139c6d77147f834a951e30283201959d9da4bd102a92339649b9ebe1c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SegmentoCinformacionPageModule-f284093d6f7d58231c08b3c1365f82b042fd6e0d3772cfa5c283ba21495d775c8cfabe8139c6d77147f834a951e30283201959d9da4bd102a92339649b9ebe1c"' :
                                            'id="xs-components-links-module-SegmentoCinformacionPageModule-f284093d6f7d58231c08b3c1365f82b042fd6e0d3772cfa5c283ba21495d775c8cfabe8139c6d77147f834a951e30283201959d9da4bd102a92339649b9ebe1c"' }>
                                            <li class="link">
                                                <a href="components/SegmentoCinformacionPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SegmentoCinformacionPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SegmentoCinformacionPageRoutingModule.html" data-type="entity-link" >SegmentoCinformacionPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SegmentoCvehiculoPageModule.html" data-type="entity-link" >SegmentoCvehiculoPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-SegmentoCvehiculoPageModule-e751b579eae2171e75c84cf0749811e00a8a763acd670895e53b29179dec8206cd76f89ea1973be5127c6e8294793e1bf662e283999d134ebcc6f4a56fd0af02"' : 'data-bs-target="#xs-components-links-module-SegmentoCvehiculoPageModule-e751b579eae2171e75c84cf0749811e00a8a763acd670895e53b29179dec8206cd76f89ea1973be5127c6e8294793e1bf662e283999d134ebcc6f4a56fd0af02"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SegmentoCvehiculoPageModule-e751b579eae2171e75c84cf0749811e00a8a763acd670895e53b29179dec8206cd76f89ea1973be5127c6e8294793e1bf662e283999d134ebcc6f4a56fd0af02"' :
                                            'id="xs-components-links-module-SegmentoCvehiculoPageModule-e751b579eae2171e75c84cf0749811e00a8a763acd670895e53b29179dec8206cd76f89ea1973be5127c6e8294793e1bf662e283999d134ebcc6f4a56fd0af02"' }>
                                            <li class="link">
                                                <a href="components/SegmentoCvehiculoPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SegmentoCvehiculoPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SegmentoCvehiculoPageRoutingModule.html" data-type="entity-link" >SegmentoCvehiculoPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SegmentoDanioPageModule.html" data-type="entity-link" >SegmentoDanioPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-SegmentoDanioPageModule-d3fdda2ae0e93245b0adcbe96bc04a734c6a8ca67d71d0177dd23d8788d60db377a81dae0bce9c9c9723b3ed8a9836aee52b4e34020e88534fe9cc67a80b7af5"' : 'data-bs-target="#xs-components-links-module-SegmentoDanioPageModule-d3fdda2ae0e93245b0adcbe96bc04a734c6a8ca67d71d0177dd23d8788d60db377a81dae0bce9c9c9723b3ed8a9836aee52b4e34020e88534fe9cc67a80b7af5"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SegmentoDanioPageModule-d3fdda2ae0e93245b0adcbe96bc04a734c6a8ca67d71d0177dd23d8788d60db377a81dae0bce9c9c9723b3ed8a9836aee52b4e34020e88534fe9cc67a80b7af5"' :
                                            'id="xs-components-links-module-SegmentoDanioPageModule-d3fdda2ae0e93245b0adcbe96bc04a734c6a8ca67d71d0177dd23d8788d60db377a81dae0bce9c9c9723b3ed8a9836aee52b4e34020e88534fe9cc67a80b7af5"' }>
                                            <li class="link">
                                                <a href="components/SegmentoDanioPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SegmentoDanioPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SegmentoDanioPageRoutingModule.html" data-type="entity-link" >SegmentoDanioPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SegmentoFajustadorPageModule.html" data-type="entity-link" >SegmentoFajustadorPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-SegmentoFajustadorPageModule-861c074c1d5422c9cab102cdef97f6877f96c0bd1bc346c2bfe7a56017bfe22e7fa7cfa733301f4df0dfa97e15ced03a873e4700298fe5798890b190b5091723"' : 'data-bs-target="#xs-components-links-module-SegmentoFajustadorPageModule-861c074c1d5422c9cab102cdef97f6877f96c0bd1bc346c2bfe7a56017bfe22e7fa7cfa733301f4df0dfa97e15ced03a873e4700298fe5798890b190b5091723"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SegmentoFajustadorPageModule-861c074c1d5422c9cab102cdef97f6877f96c0bd1bc346c2bfe7a56017bfe22e7fa7cfa733301f4df0dfa97e15ced03a873e4700298fe5798890b190b5091723"' :
                                            'id="xs-components-links-module-SegmentoFajustadorPageModule-861c074c1d5422c9cab102cdef97f6877f96c0bd1bc346c2bfe7a56017bfe22e7fa7cfa733301f4df0dfa97e15ced03a873e4700298fe5798890b190b5091723"' }>
                                            <li class="link">
                                                <a href="components/SegmentoFajustadorPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SegmentoFajustadorPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SegmentoFajustadorPageRoutingModule.html" data-type="entity-link" >SegmentoFajustadorPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SegmentoFaseguradoPageModule.html" data-type="entity-link" >SegmentoFaseguradoPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-SegmentoFaseguradoPageModule-1b02c21e63db85f6738fcea501c312e9bfa6e3a60178388b4854dd76f49c2dbceb638b18e546738cf3f4625200455954407bbcfd2030fd3ba4556e1578a54aa4"' : 'data-bs-target="#xs-components-links-module-SegmentoFaseguradoPageModule-1b02c21e63db85f6738fcea501c312e9bfa6e3a60178388b4854dd76f49c2dbceb638b18e546738cf3f4625200455954407bbcfd2030fd3ba4556e1578a54aa4"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SegmentoFaseguradoPageModule-1b02c21e63db85f6738fcea501c312e9bfa6e3a60178388b4854dd76f49c2dbceb638b18e546738cf3f4625200455954407bbcfd2030fd3ba4556e1578a54aa4"' :
                                            'id="xs-components-links-module-SegmentoFaseguradoPageModule-1b02c21e63db85f6738fcea501c312e9bfa6e3a60178388b4854dd76f49c2dbceb638b18e546738cf3f4625200455954407bbcfd2030fd3ba4556e1578a54aa4"' }>
                                            <li class="link">
                                                <a href="components/SegmentoFaseguradoPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SegmentoFaseguradoPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SegmentoFaseguradoPageRoutingModule.html" data-type="entity-link" >SegmentoFaseguradoPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SegmentoSegmentRequestAjuPageModule.html" data-type="entity-link" >SegmentoSegmentRequestAjuPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-SegmentoSegmentRequestAjuPageModule-86659266f3b797f229c1771a2a939ef95e6cd4fb5d801924abfe067f383fac883eb92faf9f74fd1bff77063b8f3d45dd7763d19711b26c7cd4b9d49dcd1d1024"' : 'data-bs-target="#xs-components-links-module-SegmentoSegmentRequestAjuPageModule-86659266f3b797f229c1771a2a939ef95e6cd4fb5d801924abfe067f383fac883eb92faf9f74fd1bff77063b8f3d45dd7763d19711b26c7cd4b9d49dcd1d1024"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SegmentoSegmentRequestAjuPageModule-86659266f3b797f229c1771a2a939ef95e6cd4fb5d801924abfe067f383fac883eb92faf9f74fd1bff77063b8f3d45dd7763d19711b26c7cd4b9d49dcd1d1024"' :
                                            'id="xs-components-links-module-SegmentoSegmentRequestAjuPageModule-86659266f3b797f229c1771a2a939ef95e6cd4fb5d801924abfe067f383fac883eb92faf9f74fd1bff77063b8f3d45dd7763d19711b26c7cd4b9d49dcd1d1024"' }>
                                            <li class="link">
                                                <a href="components/SegmentoSegmentRequestAjuPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SegmentoSegmentRequestAjuPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SegmentoSegmentRequestAjuPageRoutingModule.html" data-type="entity-link" >SegmentoSegmentRequestAjuPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SegmentoSolicitantePageModule.html" data-type="entity-link" >SegmentoSolicitantePageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-SegmentoSolicitantePageModule-0791751c7fb36d8810e75f2ee5f450abf156d7604981442debd7ed5b8916b4f901b0b0d89dc3b04e424144967a5755a3f4cd2df59f3c7740abafe7c0cfa2e5d3"' : 'data-bs-target="#xs-components-links-module-SegmentoSolicitantePageModule-0791751c7fb36d8810e75f2ee5f450abf156d7604981442debd7ed5b8916b4f901b0b0d89dc3b04e424144967a5755a3f4cd2df59f3c7740abafe7c0cfa2e5d3"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SegmentoSolicitantePageModule-0791751c7fb36d8810e75f2ee5f450abf156d7604981442debd7ed5b8916b4f901b0b0d89dc3b04e424144967a5755a3f4cd2df59f3c7740abafe7c0cfa2e5d3"' :
                                            'id="xs-components-links-module-SegmentoSolicitantePageModule-0791751c7fb36d8810e75f2ee5f450abf156d7604981442debd7ed5b8916b4f901b0b0d89dc3b04e424144967a5755a3f4cd2df59f3c7740abafe7c0cfa2e5d3"' }>
                                            <li class="link">
                                                <a href="components/SegmentoSolicitantePage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SegmentoSolicitantePage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SegmentoSolicitantePageRoutingModule.html" data-type="entity-link" >SegmentoSolicitantePageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SegmentoVehiculoPageModule.html" data-type="entity-link" >SegmentoVehiculoPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-SegmentoVehiculoPageModule-8c25e2322051540695c9d7fa2f7d9503d5732716940d80a9d26806e41032914f7f5c2a6c0746af9b92018e49bab9a5f4af0dda4c7fe0abf676f24bb57ec5ec15"' : 'data-bs-target="#xs-components-links-module-SegmentoVehiculoPageModule-8c25e2322051540695c9d7fa2f7d9503d5732716940d80a9d26806e41032914f7f5c2a6c0746af9b92018e49bab9a5f4af0dda4c7fe0abf676f24bb57ec5ec15"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SegmentoVehiculoPageModule-8c25e2322051540695c9d7fa2f7d9503d5732716940d80a9d26806e41032914f7f5c2a6c0746af9b92018e49bab9a5f4af0dda4c7fe0abf676f24bb57ec5ec15"' :
                                            'id="xs-components-links-module-SegmentoVehiculoPageModule-8c25e2322051540695c9d7fa2f7d9503d5732716940d80a9d26806e41032914f7f5c2a6c0746af9b92018e49bab9a5f4af0dda4c7fe0abf676f24bb57ec5ec15"' }>
                                            <li class="link">
                                                <a href="components/SegmentoVehiculoPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SegmentoVehiculoPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SegmentoVehiculoPageRoutingModule.html" data-type="entity-link" >SegmentoVehiculoPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/Tab1PageModule.html" data-type="entity-link" >Tab1PageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-Tab1PageModule-ad63b7e43ae1d6ffa7a36a1e5903e263ae27aa35945c6a23dbcd544410b159a7acd2c1dfa904285d1ab16cebc7e9ad18d3d20a0bd763bad8ad65f29d9d1fa4d3"' : 'data-bs-target="#xs-components-links-module-Tab1PageModule-ad63b7e43ae1d6ffa7a36a1e5903e263ae27aa35945c6a23dbcd544410b159a7acd2c1dfa904285d1ab16cebc7e9ad18d3d20a0bd763bad8ad65f29d9d1fa4d3"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-Tab1PageModule-ad63b7e43ae1d6ffa7a36a1e5903e263ae27aa35945c6a23dbcd544410b159a7acd2c1dfa904285d1ab16cebc7e9ad18d3d20a0bd763bad8ad65f29d9d1fa4d3"' :
                                            'id="xs-components-links-module-Tab1PageModule-ad63b7e43ae1d6ffa7a36a1e5903e263ae27aa35945c6a23dbcd544410b159a7acd2c1dfa904285d1ab16cebc7e9ad18d3d20a0bd763bad8ad65f29d9d1fa4d3"' }>
                                            <li class="link">
                                                <a href="components/Tab1Page.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >Tab1Page</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#directives-links-module-Tab1PageModule-ad63b7e43ae1d6ffa7a36a1e5903e263ae27aa35945c6a23dbcd544410b159a7acd2c1dfa904285d1ab16cebc7e9ad18d3d20a0bd763bad8ad65f29d9d1fa4d3"' : 'data-bs-target="#xs-directives-links-module-Tab1PageModule-ad63b7e43ae1d6ffa7a36a1e5903e263ae27aa35945c6a23dbcd544410b159a7acd2c1dfa904285d1ab16cebc7e9ad18d3d20a0bd763bad8ad65f29d9d1fa4d3"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-Tab1PageModule-ad63b7e43ae1d6ffa7a36a1e5903e263ae27aa35945c6a23dbcd544410b159a7acd2c1dfa904285d1ab16cebc7e9ad18d3d20a0bd763bad8ad65f29d9d1fa4d3"' :
                                        'id="xs-directives-links-module-Tab1PageModule-ad63b7e43ae1d6ffa7a36a1e5903e263ae27aa35945c6a23dbcd544410b159a7acd2c1dfa904285d1ab16cebc7e9ad18d3d20a0bd763bad8ad65f29d9d1fa4d3"' }>
                                        <li class="link">
                                            <a href="directives/ParallaxHeader.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ParallaxHeader</a>
                                        </li>
                                    </ul>
                                </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#pipes-links-module-Tab1PageModule-ad63b7e43ae1d6ffa7a36a1e5903e263ae27aa35945c6a23dbcd544410b159a7acd2c1dfa904285d1ab16cebc7e9ad18d3d20a0bd763bad8ad65f29d9d1fa4d3"' : 'data-bs-target="#xs-pipes-links-module-Tab1PageModule-ad63b7e43ae1d6ffa7a36a1e5903e263ae27aa35945c6a23dbcd544410b159a7acd2c1dfa904285d1ab16cebc7e9ad18d3d20a0bd763bad8ad65f29d9d1fa4d3"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-Tab1PageModule-ad63b7e43ae1d6ffa7a36a1e5903e263ae27aa35945c6a23dbcd544410b159a7acd2c1dfa904285d1ab16cebc7e9ad18d3d20a0bd763bad8ad65f29d9d1fa4d3"' :
                                            'id="xs-pipes-links-module-Tab1PageModule-ad63b7e43ae1d6ffa7a36a1e5903e263ae27aa35945c6a23dbcd544410b159a7acd2c1dfa904285d1ab16cebc7e9ad18d3d20a0bd763bad8ad65f29d9d1fa4d3"' }>
                                            <li class="link">
                                                <a href="pipes/FilterPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FilterPipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/Tab1PageRoutingModule.html" data-type="entity-link" >Tab1PageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/Tab2PageModule.html" data-type="entity-link" >Tab2PageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-Tab2PageModule-5f46c4c181ed2da5722e3ce36ed7fbb48f352b115760e4de312806dacb5182570c4e57b66778e5fa383f45dabebcb71ba6aa26bf0cdc8dc8479a3a8700ec8aac"' : 'data-bs-target="#xs-components-links-module-Tab2PageModule-5f46c4c181ed2da5722e3ce36ed7fbb48f352b115760e4de312806dacb5182570c4e57b66778e5fa383f45dabebcb71ba6aa26bf0cdc8dc8479a3a8700ec8aac"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-Tab2PageModule-5f46c4c181ed2da5722e3ce36ed7fbb48f352b115760e4de312806dacb5182570c4e57b66778e5fa383f45dabebcb71ba6aa26bf0cdc8dc8479a3a8700ec8aac"' :
                                            'id="xs-components-links-module-Tab2PageModule-5f46c4c181ed2da5722e3ce36ed7fbb48f352b115760e4de312806dacb5182570c4e57b66778e5fa383f45dabebcb71ba6aa26bf0cdc8dc8479a3a8700ec8aac"' }>
                                            <li class="link">
                                                <a href="components/Tab2Page.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >Tab2Page</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/Tab2PageRoutingModule.html" data-type="entity-link" >Tab2PageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/Tab3PageModule.html" data-type="entity-link" >Tab3PageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-Tab3PageModule-5c5e52eec9ede0f3c7cdfc9fc883a0d263d52fcf4868b85f141d4234a94947b7faaa830a6e968e92e8f2dd35ca24cc0113f5387bb4233471460ecb5760465bb5"' : 'data-bs-target="#xs-components-links-module-Tab3PageModule-5c5e52eec9ede0f3c7cdfc9fc883a0d263d52fcf4868b85f141d4234a94947b7faaa830a6e968e92e8f2dd35ca24cc0113f5387bb4233471460ecb5760465bb5"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-Tab3PageModule-5c5e52eec9ede0f3c7cdfc9fc883a0d263d52fcf4868b85f141d4234a94947b7faaa830a6e968e92e8f2dd35ca24cc0113f5387bb4233471460ecb5760465bb5"' :
                                            'id="xs-components-links-module-Tab3PageModule-5c5e52eec9ede0f3c7cdfc9fc883a0d263d52fcf4868b85f141d4234a94947b7faaa830a6e968e92e8f2dd35ca24cc0113f5387bb4233471460ecb5760465bb5"' }>
                                            <li class="link">
                                                <a href="components/Tab3Page.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >Tab3Page</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/Tab3PageRoutingModule.html" data-type="entity-link" >Tab3PageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/TabsPageModule.html" data-type="entity-link" >TabsPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-TabsPageModule-9a82605f2e76bb229ee6cae8f1a3128303e07ff362318f0d51c5f7a750ded065a7196a39b737aedc5b06c775053525b64ee9d0713eb3f28ff651ad3ed0f26ce4"' : 'data-bs-target="#xs-components-links-module-TabsPageModule-9a82605f2e76bb229ee6cae8f1a3128303e07ff362318f0d51c5f7a750ded065a7196a39b737aedc5b06c775053525b64ee9d0713eb3f28ff651ad3ed0f26ce4"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-TabsPageModule-9a82605f2e76bb229ee6cae8f1a3128303e07ff362318f0d51c5f7a750ded065a7196a39b737aedc5b06c775053525b64ee9d0713eb3f28ff651ad3ed0f26ce4"' :
                                            'id="xs-components-links-module-TabsPageModule-9a82605f2e76bb229ee6cae8f1a3128303e07ff362318f0d51c5f7a750ded065a7196a39b737aedc5b06c775053525b64ee9d0713eb3f28ff651ad3ed0f26ce4"' }>
                                            <li class="link">
                                                <a href="components/TabsPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TabsPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/TabsPageRoutingModule.html" data-type="entity-link" >TabsPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/TallerhnPageModule.html" data-type="entity-link" >TallerhnPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-TallerhnPageModule-367622014e81f2332d1edd69731a52e27f8aa6734efa75f898758f119d71ce72d9707511523903b2eec5d5a528748a47ad3ad79130315647596534fbde2512f8"' : 'data-bs-target="#xs-components-links-module-TallerhnPageModule-367622014e81f2332d1edd69731a52e27f8aa6734efa75f898758f119d71ce72d9707511523903b2eec5d5a528748a47ad3ad79130315647596534fbde2512f8"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-TallerhnPageModule-367622014e81f2332d1edd69731a52e27f8aa6734efa75f898758f119d71ce72d9707511523903b2eec5d5a528748a47ad3ad79130315647596534fbde2512f8"' :
                                            'id="xs-components-links-module-TallerhnPageModule-367622014e81f2332d1edd69731a52e27f8aa6734efa75f898758f119d71ce72d9707511523903b2eec5d5a528748a47ad3ad79130315647596534fbde2512f8"' }>
                                            <li class="link">
                                                <a href="components/TallerhnPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TallerhnPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/TallerhnPageRoutingModule.html" data-type="entity-link" >TallerhnPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/TerceroPageModule.html" data-type="entity-link" >TerceroPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-TerceroPageModule-884e727ec058a6171ee30ec004e2c2aa7c1264610696032348f680020560199e0b5923129b715638e646692116affb0eec022cd04a9f8012e5c0de4a3f0e22f1"' : 'data-bs-target="#xs-components-links-module-TerceroPageModule-884e727ec058a6171ee30ec004e2c2aa7c1264610696032348f680020560199e0b5923129b715638e646692116affb0eec022cd04a9f8012e5c0de4a3f0e22f1"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-TerceroPageModule-884e727ec058a6171ee30ec004e2c2aa7c1264610696032348f680020560199e0b5923129b715638e646692116affb0eec022cd04a9f8012e5c0de4a3f0e22f1"' :
                                            'id="xs-components-links-module-TerceroPageModule-884e727ec058a6171ee30ec004e2c2aa7c1264610696032348f680020560199e0b5923129b715638e646692116affb0eec022cd04a9f8012e5c0de4a3f0e22f1"' }>
                                            <li class="link">
                                                <a href="components/TerceroPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TerceroPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/TerceroPageRoutingModule.html" data-type="entity-link" >TerceroPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/VitalCorePageModule.html" data-type="entity-link" >VitalCorePageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-VitalCorePageModule-d8fdd297eb52369daeafc79cf8a2fdd7816d9a75204256c8b2a129c133729355fe3b5ef1de4a423623f85fd4a8677bf9973b262c118a97d841bb6b9ec6adecc2"' : 'data-bs-target="#xs-components-links-module-VitalCorePageModule-d8fdd297eb52369daeafc79cf8a2fdd7816d9a75204256c8b2a129c133729355fe3b5ef1de4a423623f85fd4a8677bf9973b262c118a97d841bb6b9ec6adecc2"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-VitalCorePageModule-d8fdd297eb52369daeafc79cf8a2fdd7816d9a75204256c8b2a129c133729355fe3b5ef1de4a423623f85fd4a8677bf9973b262c118a97d841bb6b9ec6adecc2"' :
                                            'id="xs-components-links-module-VitalCorePageModule-d8fdd297eb52369daeafc79cf8a2fdd7816d9a75204256c8b2a129c133729355fe3b5ef1de4a423623f85fd4a8677bf9973b262c118a97d841bb6b9ec6adecc2"' }>
                                            <li class="link">
                                                <a href="components/VitalCorePage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >VitalCorePage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/VitalCorePageRoutingModule.html" data-type="entity-link" >VitalCorePageRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Formatos.html" data-type="entity-link" >Formatos</a>
                            </li>
                            <li class="link">
                                <a href="classes/Masks.html" data-type="entity-link" >Masks</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/ApiService.html" data-type="entity-link" >ApiService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthenticationService.html" data-type="entity-link" >AuthenticationService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CountrydataService.html" data-type="entity-link" >CountrydataService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DatabaseService.html" data-type="entity-link" >DatabaseService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FormatosService.html" data-type="entity-link" >FormatosService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/GlobalService.html" data-type="entity-link" >GlobalService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/HttpService.html" data-type="entity-link" >HttpService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LinkcheckService.html" data-type="entity-link" >LinkcheckService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LocateService.html" data-type="entity-link" >LocateService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PressDirective.html" data-type="entity-link" >PressDirective</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ReversegeoService.html" data-type="entity-link" >ReversegeoService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ScreenlockService.html" data-type="entity-link" >ScreenlockService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SignatureService.html" data-type="entity-link" >SignatureService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/StorageService.html" data-type="entity-link" >StorageService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ToastService.html" data-type="entity-link" >ToastService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/WalkguideService.html" data-type="entity-link" >WalkguideService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interceptors-links"' :
                            'data-bs-target="#xs-interceptors-links"' }>
                            <span class="icon ion-ios-swap"></span>
                            <span>Interceptors</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="interceptors-links"' : 'id="xs-interceptors-links"' }>
                            <li class="link">
                                <a href="interceptors/JwtInterceptor.html" data-type="entity-link" >JwtInterceptor</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#guards-links"' :
                            'data-bs-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AuthGuard.html" data-type="entity-link" >AuthGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/AutoLoginGuard.html" data-type="entity-link" >AutoLoginGuard</a>
                            </li>
                            <li class="link">
                                <a href="guards/IntroGuard.html" data-type="entity-link" >IntroGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Ajustador.html" data-type="entity-link" >Ajustador</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ajustadorHn.html" data-type="entity-link" >ajustadorHn</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Atenciones.html" data-type="entity-link" >Atenciones</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/clienteHn.html" data-type="entity-link" >clienteHn</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/culpable.html" data-type="entity-link" >culpable</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/danioVehiculo.html" data-type="entity-link" >danioVehiculo</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/datosTercero.html" data-type="entity-link" >datosTercero</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Expedientes.html" data-type="entity-link" >Expedientes</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Formulario.html" data-type="entity-link" >Formulario</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/foto.html" data-type="entity-link" >foto</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ImgFormularion.html" data-type="entity-link" >ImgFormularion</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Marca.html" data-type="entity-link" >Marca</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/personaHn.html" data-type="entity-link" >personaHn</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/PropiedadDaniadaSiniestro.html" data-type="entity-link" >PropiedadDaniadaSiniestro</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/propiedadPrivada.html" data-type="entity-link" >propiedadPrivada</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/propiedaPrivadaHn.html" data-type="entity-link" >propiedaPrivadaHn</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ResponseAtenciones.html" data-type="entity-link" >ResponseAtenciones</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ResponseUser.html" data-type="entity-link" >ResponseUser</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Siniestro.html" data-type="entity-link" >Siniestro</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Taller.html" data-type="entity-link" >Taller</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Tercero.html" data-type="entity-link" >Tercero</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/terceroSQL.html" data-type="entity-link" >terceroSQL</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TercerosSiniestro.html" data-type="entity-link" >TercerosSiniestro</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/tipoCombustible.html" data-type="entity-link" >tipoCombustible</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/tipoConductor.html" data-type="entity-link" >tipoConductor</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/tipoFirma.html" data-type="entity-link" >tipoFirma</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/tipofotos.html" data-type="entity-link" >tipofotos</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/tipoLicencia.html" data-type="entity-link" >tipoLicencia</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/TipoSiniestros.html" data-type="entity-link" >TipoSiniestros</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/tipoSolicitante.html" data-type="entity-link" >tipoSolicitante</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/User.html" data-type="entity-link" >User</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/User-1.html" data-type="entity-link" >User</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/vehiculoTercero.html" data-type="entity-link" >vehiculoTercero</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});