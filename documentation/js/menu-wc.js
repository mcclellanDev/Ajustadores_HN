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
                                <a href="modules/AjustadorPageModule.html" data-type="entity-link" >AjustadorPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-AjustadorPageModule-3f571e9af83074a455d0e6c236658aac4be1d69edd119f5b333be7e0e9a37d471708c5282756a6c7b8f3722efcc3c762e34511d5f99e490ec177a388f3fa4487"' : 'data-bs-target="#xs-components-links-module-AjustadorPageModule-3f571e9af83074a455d0e6c236658aac4be1d69edd119f5b333be7e0e9a37d471708c5282756a6c7b8f3722efcc3c762e34511d5f99e490ec177a388f3fa4487"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AjustadorPageModule-3f571e9af83074a455d0e6c236658aac4be1d69edd119f5b333be7e0e9a37d471708c5282756a6c7b8f3722efcc3c762e34511d5f99e490ec177a388f3fa4487"' :
                                            'id="xs-components-links-module-AjustadorPageModule-3f571e9af83074a455d0e6c236658aac4be1d69edd119f5b333be7e0e9a37d471708c5282756a6c7b8f3722efcc3c762e34511d5f99e490ec177a388f3fa4487"' }>
                                            <li class="link">
                                                <a href="components/AjustadorPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AjustadorPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AjustadorPageRoutingModule.html" data-type="entity-link" >AjustadorPageRoutingModule</a>
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
                                            'data-bs-target="#components-links-module-DeclaracionPageModule-afbb6c80b44dc216ccc19deb86b36b6080df894048427a806573f454515ea420d69ca4c899543b4e9adaf1c809347e9511b0b1e6c93159c2cce4c8c6c44da5e6"' : 'data-bs-target="#xs-components-links-module-DeclaracionPageModule-afbb6c80b44dc216ccc19deb86b36b6080df894048427a806573f454515ea420d69ca4c899543b4e9adaf1c809347e9511b0b1e6c93159c2cce4c8c6c44da5e6"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DeclaracionPageModule-afbb6c80b44dc216ccc19deb86b36b6080df894048427a806573f454515ea420d69ca4c899543b4e9adaf1c809347e9511b0b1e6c93159c2cce4c8c6c44da5e6"' :
                                            'id="xs-components-links-module-DeclaracionPageModule-afbb6c80b44dc216ccc19deb86b36b6080df894048427a806573f454515ea420d69ca4c899543b4e9adaf1c809347e9511b0b1e6c93159c2cce4c8c6c44da5e6"' }>
                                            <li class="link">
                                                <a href="components/DeclaracionPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DeclaracionPage</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#pipes-links-module-DeclaracionPageModule-afbb6c80b44dc216ccc19deb86b36b6080df894048427a806573f454515ea420d69ca4c899543b4e9adaf1c809347e9511b0b1e6c93159c2cce4c8c6c44da5e6"' : 'data-bs-target="#xs-pipes-links-module-DeclaracionPageModule-afbb6c80b44dc216ccc19deb86b36b6080df894048427a806573f454515ea420d69ca4c899543b4e9adaf1c809347e9511b0b1e6c93159c2cce4c8c6c44da5e6"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-DeclaracionPageModule-afbb6c80b44dc216ccc19deb86b36b6080df894048427a806573f454515ea420d69ca4c899543b4e9adaf1c809347e9511b0b1e6c93159c2cce4c8c6c44da5e6"' :
                                            'id="xs-pipes-links-module-DeclaracionPageModule-afbb6c80b44dc216ccc19deb86b36b6080df894048427a806573f454515ea420d69ca4c899543b4e9adaf1c809347e9511b0b1e6c93159c2cce4c8c6c44da5e6"' }>
                                            <li class="link">
                                                <a href="pipes/FilterPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FilterPipe</a>
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
                                        'data-bs-target="#directives-links-module-DirectivesModule-45a5beb74b7bf337836a64c5dd8a31c4902918a0dbc5ee07fdb43c4a31b4e9b935e4caa845a9c7a89ef56f84845025d4dc4ade8cb63813582db777927683e2c0"' : 'data-bs-target="#xs-directives-links-module-DirectivesModule-45a5beb74b7bf337836a64c5dd8a31c4902918a0dbc5ee07fdb43c4a31b4e9b935e4caa845a9c7a89ef56f84845025d4dc4ade8cb63813582db777927683e2c0"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-DirectivesModule-45a5beb74b7bf337836a64c5dd8a31c4902918a0dbc5ee07fdb43c4a31b4e9b935e4caa845a9c7a89ef56f84845025d4dc4ade8cb63813582db777927683e2c0"' :
                                        'id="xs-directives-links-module-DirectivesModule-45a5beb74b7bf337836a64c5dd8a31c4902918a0dbc5ee07fdb43c4a31b4e9b935e4caa845a9c7a89ef56f84845025d4dc4ade8cb63813582db777927683e2c0"' }>
                                        <li class="link">
                                            <a href="directives/PressDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PressDirective</a>
                                        </li>
                                    </ul>
                                </li>
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
                                            'data-bs-target="#components-links-module-FormularioPageModule-5f2b89ec26e2d3b5f093c7da9170db9632dde13dff9167292d9573f7905daf6a585d2cff370c6b006474fba3234286bbd3cd17ace27690d461265c6cf9cbe851"' : 'data-bs-target="#xs-components-links-module-FormularioPageModule-5f2b89ec26e2d3b5f093c7da9170db9632dde13dff9167292d9573f7905daf6a585d2cff370c6b006474fba3234286bbd3cd17ace27690d461265c6cf9cbe851"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-FormularioPageModule-5f2b89ec26e2d3b5f093c7da9170db9632dde13dff9167292d9573f7905daf6a585d2cff370c6b006474fba3234286bbd3cd17ace27690d461265c6cf9cbe851"' :
                                            'id="xs-components-links-module-FormularioPageModule-5f2b89ec26e2d3b5f093c7da9170db9632dde13dff9167292d9573f7905daf6a585d2cff370c6b006474fba3234286bbd3cd17ace27690d461265c6cf9cbe851"' }>
                                            <li class="link">
                                                <a href="components/FormularioPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FormularioPage</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#pipes-links-module-FormularioPageModule-5f2b89ec26e2d3b5f093c7da9170db9632dde13dff9167292d9573f7905daf6a585d2cff370c6b006474fba3234286bbd3cd17ace27690d461265c6cf9cbe851"' : 'data-bs-target="#xs-pipes-links-module-FormularioPageModule-5f2b89ec26e2d3b5f093c7da9170db9632dde13dff9167292d9573f7905daf6a585d2cff370c6b006474fba3234286bbd3cd17ace27690d461265c6cf9cbe851"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-FormularioPageModule-5f2b89ec26e2d3b5f093c7da9170db9632dde13dff9167292d9573f7905daf6a585d2cff370c6b006474fba3234286bbd3cd17ace27690d461265c6cf9cbe851"' :
                                            'id="xs-pipes-links-module-FormularioPageModule-5f2b89ec26e2d3b5f093c7da9170db9632dde13dff9167292d9573f7905daf6a585d2cff370c6b006474fba3234286bbd3cd17ace27690d461265c6cf9cbe851"' }>
                                            <li class="link">
                                                <a href="pipes/FilterPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FilterPipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/FormularioPageRoutingModule.html" data-type="entity-link" >FormularioPageRoutingModule</a>
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
                                            'data-bs-target="#components-links-module-FotoshnPageModule-b0ac445e6ac10045ccb4726825638d7402c43737992991369b22cfb94523c3fb295cf320855551b17860b7d7a61912231f1301150074c73fbd57cd06cf5c5064"' : 'data-bs-target="#xs-components-links-module-FotoshnPageModule-b0ac445e6ac10045ccb4726825638d7402c43737992991369b22cfb94523c3fb295cf320855551b17860b7d7a61912231f1301150074c73fbd57cd06cf5c5064"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-FotoshnPageModule-b0ac445e6ac10045ccb4726825638d7402c43737992991369b22cfb94523c3fb295cf320855551b17860b7d7a61912231f1301150074c73fbd57cd06cf5c5064"' :
                                            'id="xs-components-links-module-FotoshnPageModule-b0ac445e6ac10045ccb4726825638d7402c43737992991369b22cfb94523c3fb295cf320855551b17860b7d7a61912231f1301150074c73fbd57cd06cf5c5064"' }>
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
                                            'data-bs-target="#components-links-module-SegmentoCaracteristicasPageModule-146806a10d999421ecedea7f601f659a01ce4674cdae2741af587cf90de55307d3e7ade3dc9d1437b5e7e16566f91c942417ff3c8ded49288b496d1cdd68cbdb"' : 'data-bs-target="#xs-components-links-module-SegmentoCaracteristicasPageModule-146806a10d999421ecedea7f601f659a01ce4674cdae2741af587cf90de55307d3e7ade3dc9d1437b5e7e16566f91c942417ff3c8ded49288b496d1cdd68cbdb"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SegmentoCaracteristicasPageModule-146806a10d999421ecedea7f601f659a01ce4674cdae2741af587cf90de55307d3e7ade3dc9d1437b5e7e16566f91c942417ff3c8ded49288b496d1cdd68cbdb"' :
                                            'id="xs-components-links-module-SegmentoCaracteristicasPageModule-146806a10d999421ecedea7f601f659a01ce4674cdae2741af587cf90de55307d3e7ade3dc9d1437b5e7e16566f91c942417ff3c8ded49288b496d1cdd68cbdb"' }>
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
                                <a href="modules/SegmentoDanioPageModule.html" data-type="entity-link" >SegmentoDanioPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#components-links-module-SegmentoDanioPageModule-44e0545258fcc781592c6bb1eaa77294ebe8c5b4170881fbdc3d75e903ca53b131df60e9795b6a212174283ef4924ebbe6b484a74c9885fd004a78ad281ed50c"' : 'data-bs-target="#xs-components-links-module-SegmentoDanioPageModule-44e0545258fcc781592c6bb1eaa77294ebe8c5b4170881fbdc3d75e903ca53b131df60e9795b6a212174283ef4924ebbe6b484a74c9885fd004a78ad281ed50c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SegmentoDanioPageModule-44e0545258fcc781592c6bb1eaa77294ebe8c5b4170881fbdc3d75e903ca53b131df60e9795b6a212174283ef4924ebbe6b484a74c9885fd004a78ad281ed50c"' :
                                            'id="xs-components-links-module-SegmentoDanioPageModule-44e0545258fcc781592c6bb1eaa77294ebe8c5b4170881fbdc3d75e903ca53b131df60e9795b6a212174283ef4924ebbe6b484a74c9885fd004a78ad281ed50c"' }>
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
                                            'data-bs-target="#components-links-module-SegmentoFajustadorPageModule-96df6bab52b6912101f0cc378a78c9599db12bd62644fa780fc7607a292e07c8b71694cd37cea2fad1c6a0d64fd479f4cc6231a2437e8b744f10ab7538f34395"' : 'data-bs-target="#xs-components-links-module-SegmentoFajustadorPageModule-96df6bab52b6912101f0cc378a78c9599db12bd62644fa780fc7607a292e07c8b71694cd37cea2fad1c6a0d64fd479f4cc6231a2437e8b744f10ab7538f34395"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SegmentoFajustadorPageModule-96df6bab52b6912101f0cc378a78c9599db12bd62644fa780fc7607a292e07c8b71694cd37cea2fad1c6a0d64fd479f4cc6231a2437e8b744f10ab7538f34395"' :
                                            'id="xs-components-links-module-SegmentoFajustadorPageModule-96df6bab52b6912101f0cc378a78c9599db12bd62644fa780fc7607a292e07c8b71694cd37cea2fad1c6a0d64fd479f4cc6231a2437e8b744f10ab7538f34395"' }>
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
                                            'data-bs-target="#components-links-module-SegmentoFaseguradoPageModule-014da349a0ccded7713a414ff16675d157f05f6222a7c0f97665458edea42aac1ed1e607b5647f6153396746e3e10744593fb15fb759f893f9f903f794cdeb60"' : 'data-bs-target="#xs-components-links-module-SegmentoFaseguradoPageModule-014da349a0ccded7713a414ff16675d157f05f6222a7c0f97665458edea42aac1ed1e607b5647f6153396746e3e10744593fb15fb759f893f9f903f794cdeb60"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SegmentoFaseguradoPageModule-014da349a0ccded7713a414ff16675d157f05f6222a7c0f97665458edea42aac1ed1e607b5647f6153396746e3e10744593fb15fb759f893f9f903f794cdeb60"' :
                                            'id="xs-components-links-module-SegmentoFaseguradoPageModule-014da349a0ccded7713a414ff16675d157f05f6222a7c0f97665458edea42aac1ed1e607b5647f6153396746e3e10744593fb15fb759f893f9f903f794cdeb60"' }>
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
                                            'data-bs-target="#components-links-module-SegmentoSegmentRequestAjuPageModule-01e9e80fc3edaf8279289e7769d83dc04abb68aec8b0bbdcfd04540d2a7eedc05523e2e3a1796dd9f4d2a8e9ab9707d39335d6ee0f755999f3545129187a40d3"' : 'data-bs-target="#xs-components-links-module-SegmentoSegmentRequestAjuPageModule-01e9e80fc3edaf8279289e7769d83dc04abb68aec8b0bbdcfd04540d2a7eedc05523e2e3a1796dd9f4d2a8e9ab9707d39335d6ee0f755999f3545129187a40d3"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SegmentoSegmentRequestAjuPageModule-01e9e80fc3edaf8279289e7769d83dc04abb68aec8b0bbdcfd04540d2a7eedc05523e2e3a1796dd9f4d2a8e9ab9707d39335d6ee0f755999f3545129187a40d3"' :
                                            'id="xs-components-links-module-SegmentoSegmentRequestAjuPageModule-01e9e80fc3edaf8279289e7769d83dc04abb68aec8b0bbdcfd04540d2a7eedc05523e2e3a1796dd9f4d2a8e9ab9707d39335d6ee0f755999f3545129187a40d3"' }>
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
                                            'data-bs-target="#components-links-module-SegmentoSolicitantePageModule-2617a2877040bcc5bbd29e920b3ca2202d86c652a6c093a265eb4370326d6109457c919209d07b42e9b6fc5f1dbf524426e60a73916800a56a864f08ec15c7f0"' : 'data-bs-target="#xs-components-links-module-SegmentoSolicitantePageModule-2617a2877040bcc5bbd29e920b3ca2202d86c652a6c093a265eb4370326d6109457c919209d07b42e9b6fc5f1dbf524426e60a73916800a56a864f08ec15c7f0"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SegmentoSolicitantePageModule-2617a2877040bcc5bbd29e920b3ca2202d86c652a6c093a265eb4370326d6109457c919209d07b42e9b6fc5f1dbf524426e60a73916800a56a864f08ec15c7f0"' :
                                            'id="xs-components-links-module-SegmentoSolicitantePageModule-2617a2877040bcc5bbd29e920b3ca2202d86c652a6c093a265eb4370326d6109457c919209d07b42e9b6fc5f1dbf524426e60a73916800a56a864f08ec15c7f0"' }>
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
                                            'data-bs-target="#components-links-module-SegmentoVehiculoPageModule-6847554a9f51ae3c4efb9939ea3d773973cf1372942ad4401ee9507eebb04e39ec704dca12cba9995d055ba8f50c7604f8d592261cb6e25f3da02d74469369c9"' : 'data-bs-target="#xs-components-links-module-SegmentoVehiculoPageModule-6847554a9f51ae3c4efb9939ea3d773973cf1372942ad4401ee9507eebb04e39ec704dca12cba9995d055ba8f50c7604f8d592261cb6e25f3da02d74469369c9"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SegmentoVehiculoPageModule-6847554a9f51ae3c4efb9939ea3d773973cf1372942ad4401ee9507eebb04e39ec704dca12cba9995d055ba8f50c7604f8d592261cb6e25f3da02d74469369c9"' :
                                            'id="xs-components-links-module-SegmentoVehiculoPageModule-6847554a9f51ae3c4efb9939ea3d773973cf1372942ad4401ee9507eebb04e39ec704dca12cba9995d055ba8f50c7604f8d592261cb6e25f3da02d74469369c9"' }>
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
                                            'data-bs-target="#components-links-module-Tab1PageModule-b8f5a2cd1e3f919b795c9a7c6600c37e9911ac14d45568a3e8289ce3b4c551af6de3b2359d5c91e2a2a01406c444ac6ead44b2ab7f828ea3accec08e1bf52043"' : 'data-bs-target="#xs-components-links-module-Tab1PageModule-b8f5a2cd1e3f919b795c9a7c6600c37e9911ac14d45568a3e8289ce3b4c551af6de3b2359d5c91e2a2a01406c444ac6ead44b2ab7f828ea3accec08e1bf52043"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-Tab1PageModule-b8f5a2cd1e3f919b795c9a7c6600c37e9911ac14d45568a3e8289ce3b4c551af6de3b2359d5c91e2a2a01406c444ac6ead44b2ab7f828ea3accec08e1bf52043"' :
                                            'id="xs-components-links-module-Tab1PageModule-b8f5a2cd1e3f919b795c9a7c6600c37e9911ac14d45568a3e8289ce3b4c551af6de3b2359d5c91e2a2a01406c444ac6ead44b2ab7f828ea3accec08e1bf52043"' }>
                                            <li class="link">
                                                <a href="components/Tab1Page.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >Tab1Page</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#directives-links-module-Tab1PageModule-b8f5a2cd1e3f919b795c9a7c6600c37e9911ac14d45568a3e8289ce3b4c551af6de3b2359d5c91e2a2a01406c444ac6ead44b2ab7f828ea3accec08e1bf52043"' : 'data-bs-target="#xs-directives-links-module-Tab1PageModule-b8f5a2cd1e3f919b795c9a7c6600c37e9911ac14d45568a3e8289ce3b4c551af6de3b2359d5c91e2a2a01406c444ac6ead44b2ab7f828ea3accec08e1bf52043"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-Tab1PageModule-b8f5a2cd1e3f919b795c9a7c6600c37e9911ac14d45568a3e8289ce3b4c551af6de3b2359d5c91e2a2a01406c444ac6ead44b2ab7f828ea3accec08e1bf52043"' :
                                        'id="xs-directives-links-module-Tab1PageModule-b8f5a2cd1e3f919b795c9a7c6600c37e9911ac14d45568a3e8289ce3b4c551af6de3b2359d5c91e2a2a01406c444ac6ead44b2ab7f828ea3accec08e1bf52043"' }>
                                        <li class="link">
                                            <a href="directives/ParallaxHeader.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ParallaxHeader</a>
                                        </li>
                                    </ul>
                                </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#pipes-links-module-Tab1PageModule-b8f5a2cd1e3f919b795c9a7c6600c37e9911ac14d45568a3e8289ce3b4c551af6de3b2359d5c91e2a2a01406c444ac6ead44b2ab7f828ea3accec08e1bf52043"' : 'data-bs-target="#xs-pipes-links-module-Tab1PageModule-b8f5a2cd1e3f919b795c9a7c6600c37e9911ac14d45568a3e8289ce3b4c551af6de3b2359d5c91e2a2a01406c444ac6ead44b2ab7f828ea3accec08e1bf52043"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-Tab1PageModule-b8f5a2cd1e3f919b795c9a7c6600c37e9911ac14d45568a3e8289ce3b4c551af6de3b2359d5c91e2a2a01406c444ac6ead44b2ab7f828ea3accec08e1bf52043"' :
                                            'id="xs-pipes-links-module-Tab1PageModule-b8f5a2cd1e3f919b795c9a7c6600c37e9911ac14d45568a3e8289ce3b4c551af6de3b2359d5c91e2a2a01406c444ac6ead44b2ab7f828ea3accec08e1bf52043"' }>
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
                                            'data-bs-target="#components-links-module-Tab2PageModule-17f752be9a901d82bfcb6bf9c5f4e00d8538f93cd5b2325f165e7062a366e374787ffba29edd25712d4e9ae3fe23523ee5f866d0c886c7b03314cba1ad09e3c9"' : 'data-bs-target="#xs-components-links-module-Tab2PageModule-17f752be9a901d82bfcb6bf9c5f4e00d8538f93cd5b2325f165e7062a366e374787ffba29edd25712d4e9ae3fe23523ee5f866d0c886c7b03314cba1ad09e3c9"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-Tab2PageModule-17f752be9a901d82bfcb6bf9c5f4e00d8538f93cd5b2325f165e7062a366e374787ffba29edd25712d4e9ae3fe23523ee5f866d0c886c7b03314cba1ad09e3c9"' :
                                            'id="xs-components-links-module-Tab2PageModule-17f752be9a901d82bfcb6bf9c5f4e00d8538f93cd5b2325f165e7062a366e374787ffba29edd25712d4e9ae3fe23523ee5f866d0c886c7b03314cba1ad09e3c9"' }>
                                            <li class="link">
                                                <a href="components/Tab2Page.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >Tab2Page</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#pipes-links-module-Tab2PageModule-17f752be9a901d82bfcb6bf9c5f4e00d8538f93cd5b2325f165e7062a366e374787ffba29edd25712d4e9ae3fe23523ee5f866d0c886c7b03314cba1ad09e3c9"' : 'data-bs-target="#xs-pipes-links-module-Tab2PageModule-17f752be9a901d82bfcb6bf9c5f4e00d8538f93cd5b2325f165e7062a366e374787ffba29edd25712d4e9ae3fe23523ee5f866d0c886c7b03314cba1ad09e3c9"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-Tab2PageModule-17f752be9a901d82bfcb6bf9c5f4e00d8538f93cd5b2325f165e7062a366e374787ffba29edd25712d4e9ae3fe23523ee5f866d0c886c7b03314cba1ad09e3c9"' :
                                            'id="xs-pipes-links-module-Tab2PageModule-17f752be9a901d82bfcb6bf9c5f4e00d8538f93cd5b2325f165e7062a366e374787ffba29edd25712d4e9ae3fe23523ee5f866d0c886c7b03314cba1ad09e3c9"' }>
                                            <li class="link">
                                                <a href="pipes/FilterPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FilterPipe</a>
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