# .gitattributes

```
/mvnw text eol=lf
*.cmd text eol=crlf

```

# .gitignore

```
HELP.md
target/
.mvn/wrapper/maven-wrapper.jar
!**/src/main/**/target/
!**/src/test/**/target/

### STS ###
.apt_generated
.classpath
.factorypath
.project
.settings
.springBeans
.sts4-cache

### IntelliJ IDEA ###
.idea
*.iws
*.iml
*.ipr

### NetBeans ###
/nbproject/private/
/nbbuild/
/dist/
/nbdist/
/.nb-gradle/
build/
!**/src/main/**/build/
!**/src/test/**/build/

### VS Code ###
.vscode/

```

# .idea\.gitignore

```
# Default ignored files
/shelf/
/workspace.xml
# Editor-based HTTP Client requests
/httpRequests/
# Ignored default folder with query files
/queries/
# Datasource local storage ignored files
/dataSources/
/dataSources.local.xml

```

# .idea\compiler.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project version="4">
  <component name="CompilerConfiguration">
    <annotationProcessing>
      <profile name="Annotation profile for DigiPME" enabled="true">
        <sourceOutputDir name="target/generated-sources/annotations" />
        <sourceTestOutputDir name="target/generated-test-sources/test-annotations" />
        <outputRelativeToContentRoot value="true" />
        <processorPath useClasspath="false">
          <entry name="$MAVEN_REPOSITORY$/org/projectlombok/lombok/1.18.46/lombok-1.18.46.jar" />
        </processorPath>
        <module name="DigiPME" />
      </profile>
    </annotationProcessing>
  </component>
  <component name="JavacSettings">
    <option name="ADDITIONAL_OPTIONS_OVERRIDE">
      <module name="DigiPME" options="-parameters" />
    </option>
  </component>
</project>
```

# .idea\encodings.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project version="4">
  <component name="Encoding">
    <file url="file://$PROJECT_DIR$/src/main/java" charset="UTF-8" />
  </component>
</project>
```

# .idea\jarRepositories.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project version="4">
  <component name="RemoteRepositoriesConfiguration">
    <remote-repository>
      <option name="id" value="central" />
      <option name="name" value="Central Repository" />
      <option name="url" value="https://repo.maven.apache.org/maven2" />
    </remote-repository>
    <remote-repository>
      <option name="id" value="central" />
      <option name="name" value="Maven Central repository" />
      <option name="url" value="https://repo1.maven.org/maven2" />
    </remote-repository>
    <remote-repository>
      <option name="id" value="jboss.community" />
      <option name="name" value="JBoss Community repository" />
      <option name="url" value="https://repository.jboss.org/nexus/content/repositories/public/" />
    </remote-repository>
  </component>
</project>
```

# .idea\misc.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project version="4">
  <component name="ExternalStorageConfigurationManager" enabled="true" />
  <component name="MavenProjectsManager">
    <option name="originalFiles">
      <list>
        <option value="$PROJECT_DIR$/pom.xml" />
      </list>
    </option>
  </component>
  <component name="ProjectRootManager" version="2" languageLevel="JDK_21" default="true" project-jdk-name="21" project-jdk-type="JavaSDK">
    <output url="file://$PROJECT_DIR$/out" />
  </component>
</project>
```

# .idea\vcs.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project version="4">
  <component name="VcsDirectoryMappings">
    <mapping directory="$PROJECT_DIR$" vcs="Git" />
  </component>
</project>
```

# .idea\workspace.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project version="4">
  <component name="AutoImportSettings">
    <option name="autoReloadType" value="SELECTIVE" />
  </component>
  <component name="ChangeListManager">
    <list default="true" id="cf188629-4482-4d47-a9b3-2e1ec40c6c2d" name="Changes" comment="">
      <change afterPath="$PROJECT_DIR$/.gitattributes" afterDir="false" />
      <change afterPath="$PROJECT_DIR$/.gitignore" afterDir="false" />
      <change afterPath="$PROJECT_DIR$/.mvn/wrapper/maven-wrapper.properties" afterDir="false" />
      <change afterPath="$PROJECT_DIR$/mvnw" afterDir="false" />
      <change afterPath="$PROJECT_DIR$/mvnw.cmd" afterDir="false" />
      <change afterPath="$PROJECT_DIR$/pom.xml" afterDir="false" />
      <change afterPath="$PROJECT_DIR$/src/main/java/org/example/digipme/Controller/FreelancerController.java" afterDir="false" />
      <change afterPath="$PROJECT_DIR$/src/main/java/org/example/digipme/Controller/OfferController.java" afterDir="false" />
      <change afterPath="$PROJECT_DIR$/src/main/java/org/example/digipme/Controller/PMEController.java" afterDir="false" />
      <change afterPath="$PROJECT_DIR$/src/main/java/org/example/digipme/Controller/ProjectController.java" afterDir="false" />
      <change afterPath="$PROJECT_DIR$/src/main/java/org/example/digipme/Controller/ReviewController.java" afterDir="false" />
      <change afterPath="$PROJECT_DIR$/src/main/java/org/example/digipme/Controller/UserController.java" afterDir="false" />
      <change afterPath="$PROJECT_DIR$/src/main/java/org/example/digipme/DTOs/FreelancerRequest.java" afterDir="false" />
      <change afterPath="$PROJECT_DIR$/src/main/java/org/example/digipme/DTOs/FreelancerResponse.java" afterDir="false" />
      <change afterPath="$PROJECT_DIR$/src/main/java/org/example/digipme/DTOs/OfferRequest.java" afterDir="false" />
      <change afterPath="$PROJECT_DIR$/src/main/java/org/example/digipme/DTOs/OfferResponse.java" afterDir="false" />
      <change afterPath="$PROJECT_DIR$/src/main/java/org/example/digipme/DTOs/PMERequest.java" afterDir="false" />
      <change afterPath="$PROJECT_DIR$/src/main/java/org/example/digipme/DTOs/PMEResponse.java" afterDir="false" />
      <change afterPath="$PROJECT_DIR$/src/main/java/org/example/digipme/DTOs/ProjectRequest.java" afterDir="false" />
      <change afterPath="$PROJECT_DIR$/src/main/java/org/example/digipme/DTOs/ProjectResponse.java" afterDir="false" />
      <change afterPath="$PROJECT_DIR$/src/main/java/org/example/digipme/DTOs/ReviewRequest.java" afterDir="false" />
      <change afterPath="$PROJECT_DIR$/src/main/java/org/example/digipme/DTOs/ReviewResponse.java" afterDir="false" />
      <change afterPath="$PROJECT_DIR$/src/main/java/org/example/digipme/DTOs/UserRequest.java" afterDir="false" />
      <change afterPath="$PROJECT_DIR$/src/main/java/org/example/digipme/DTOs/UserResponse.java" afterDir="false" />
      <change afterPath="$PROJECT_DIR$/src/main/java/org/example/digipme/DigiPmeApplication.java" afterDir="false" />
      <change afterPath="$PROJECT_DIR$/src/main/java/org/example/digipme/Enums/ActiviteType.java" afterDir="false" />
      <change afterPath="$PROJECT_DIR$/src/main/java/org/example/digipme/Enums/OfferStatus.java" afterDir="false" />
      <change afterPath="$PROJECT_DIR$/src/main/java/org/example/digipme/Enums/ProjectStatus.java" afterDir="false" />
      <change afterPath="$PROJECT_DIR$/src/main/java/org/example/digipme/Enums/RoleUser.java" afterDir="false" />
      <change afterPath="$PROJECT_DIR$/src/main/java/org/example/digipme/Mappers/FreelancerMapper.java" afterDir="false" />
      <change afterPath="$PROJECT_DIR$/src/main/java/org/example/digipme/Mappers/OfferMapper.java" afterDir="false" />
      <change afterPath="$PROJECT_DIR$/src/main/java/org/example/digipme/Mappers/PMEMapper.java" afterDir="false" />
      <change afterPath="$PROJECT_DIR$/src/main/java/org/example/digipme/Mappers/ProjectMapper.java" afterDir="false" />
      <change afterPath="$PROJECT_DIR$/src/main/java/org/example/digipme/Mappers/ReviewMapper.java" afterDir="false" />
      <change afterPath="$PROJECT_DIR$/src/main/java/org/example/digipme/Mappers/UserMapper.java" afterDir="false" />
      <change afterPath="$PROJECT_DIR$/src/main/java/org/example/digipme/Model/Freelancer.java" afterDir="false" />
      <change afterPath="$PROJECT_DIR$/src/main/java/org/example/digipme/Model/Offer.java" afterDir="false" />
      <change afterPath="$PROJECT_DIR$/src/main/java/org/example/digipme/Model/PME.java" afterDir="false" />
      <change afterPath="$PROJECT_DIR$/src/main/java/org/example/digipme/Model/Project.java" afterDir="false" />
      <change afterPath="$PROJECT_DIR$/src/main/java/org/example/digipme/Model/Review.java" afterDir="false" />
      <change afterPath="$PROJECT_DIR$/src/main/java/org/example/digipme/Model/UserApp.java" afterDir="false" />
      <change afterPath="$PROJECT_DIR$/src/main/java/org/example/digipme/Repository/FreelancerRepository.java" afterDir="false" />
      <change afterPath="$PROJECT_DIR$/src/main/java/org/example/digipme/Repository/OfferRepository.java" afterDir="false" />
      <change afterPath="$PROJECT_DIR$/src/main/java/org/example/digipme/Repository/PMERepository.java" afterDir="false" />
      <change afterPath="$PROJECT_DIR$/src/main/java/org/example/digipme/Repository/ProjectRepository.java" afterDir="false" />
      <change afterPath="$PROJECT_DIR$/src/main/java/org/example/digipme/Repository/ReviewRepository.java" afterDir="false" />
      <change afterPath="$PROJECT_DIR$/src/main/java/org/example/digipme/Repository/UserAppRepository.java" afterDir="false" />
      <change afterPath="$PROJECT_DIR$/src/main/java/org/example/digipme/Service/FrelancerService.java" afterDir="false" />
      <change afterPath="$PROJECT_DIR$/src/main/java/org/example/digipme/Service/OfferService.java" afterDir="false" />
      <change afterPath="$PROJECT_DIR$/src/main/java/org/example/digipme/Service/PMEService.java" afterDir="false" />
      <change afterPath="$PROJECT_DIR$/src/main/java/org/example/digipme/Service/ProjectService.java" afterDir="false" />
      <change afterPath="$PROJECT_DIR$/src/main/java/org/example/digipme/Service/ReviewService.java" afterDir="false" />
      <change afterPath="$PROJECT_DIR$/src/main/java/org/example/digipme/Service/UserService.java" afterDir="false" />
      <change afterPath="$PROJECT_DIR$/src/main/java/org/example/digipme/auth/AuthController.java" afterDir="false" />
      <change afterPath="$PROJECT_DIR$/src/main/java/org/example/digipme/auth/AuthService.java" afterDir="false" />
      <change afterPath="$PROJECT_DIR$/src/main/java/org/example/digipme/auth/dto/TokenResponse.java" afterDir="false" />
      <change afterPath="$PROJECT_DIR$/src/main/java/org/example/digipme/auth/dto/UserLogin.java" afterDir="false" />
      <change afterPath="$PROJECT_DIR$/src/main/java/org/example/digipme/auth/dto/UserSignUp.java" afterDir="false" />
      <change afterPath="$PROJECT_DIR$/src/main/java/org/example/digipme/config/CacheConfig.java" afterDir="false" />
      <change afterPath="$PROJECT_DIR$/src/main/java/org/example/digipme/config/JwtFilter.java" afterDir="false" />
      <change afterPath="$PROJECT_DIR$/src/main/java/org/example/digipme/config/SecurityConfig.java" afterDir="false" />
      <change afterPath="$PROJECT_DIR$/src/main/java/org/example/digipme/security/CustomUserDetailsService.java" afterDir="false" />
      <change afterPath="$PROJECT_DIR$/src/main/java/org/example/digipme/security/JwtAuthenticationEntryPoint.java" afterDir="false" />
      <change afterPath="$PROJECT_DIR$/src/main/java/org/example/digipme/security/JwtService.java" afterDir="false" />
      <change afterPath="$PROJECT_DIR$/src/main/resources/application.properties" afterDir="false" />
      <change afterPath="$PROJECT_DIR$/src/test/java/org/example/digipme/DigiPmeApplicationTests.java" afterDir="false" />
    </list>
    <option name="SHOW_DIALOG" value="false" />
    <option name="HIGHLIGHT_CONFLICTS" value="true" />
    <option name="HIGHLIGHT_NON_ACTIVE_CHANGELIST" value="false" />
    <option name="LAST_RESOLUTION" value="IGNORE" />
  </component>
  <component name="CopilotPersistence">
    <persistenceIdMap>
      <entry key="_C:/Users/enaaj/OneDrive/Desktop/FileRouge/DigiPME" value="3HtBX8GbtS0P19tkJGArs0JQsD8" />
    </persistenceIdMap>
  </component>
  <component name="FileTemplateManagerImpl">
    <option name="RECENT_TEMPLATES">
      <list>
        <option value="Interface" />
        <option value="Class" />
        <option value="Enum" />
      </list>
    </option>
  </component>
  <component name="Git.Settings">
    <option name="RECENT_GIT_ROOT_PATH" value="$PROJECT_DIR$" />
  </component>
  <component name="MavenImportPreferences">
    <option name="generalSettings">
      <MavenGeneralSettings>
        <option name="mavenHomeTypeForPersistence" value="WRAPPER" />
      </MavenGeneralSettings>
    </option>
  </component>
  <component name="McpProjectServerCommands">
    <commands />
    <urls />
  </component>
  <component name="NextEditCompletionFeaturesState">
    <decayedCancelled>
      <entry key="MS100" value="0.0" />
      <entry key="MS500" value="1.8327777832444425E-83" />
      <entry key="S2" value="2.069080810649451E-21" />
      <entry key="S5" value="5.324894379011602E-9" />
      <entry key="S10" value="7.299655080396504E-5" />
      <entry key="S30" value="0.049231903348484755" />
      <entry key="S60" value="0.39260031993013506" />
      <entry key="M2" value="1.4155471579736254" />
      <entry key="M5" value="3.3112336731346153" />
      <entry key="M10" value="4.4461087037073925" />
      <entry key="M15" value="4.910631670405261" />
      <entry key="M30" value="5.426627994571257" />
      <entry key="H1" value="5.705747081215967" />
      <entry key="H2" value="5.850930954757168" />
      <entry key="H4" value="5.93485216878629" />
      <entry key="D1" value="37.26053062305506" />
      <entry key="W1" value="154.18758667324332" />
    </decayedCancelled>
    <decayedSelected>
      <entry key="MS100" value="1.0" />
      <entry key="MS500" value="1.0" />
      <entry key="S2" value="1.0000938359322478" />
      <entry key="S5" value="1.0244876816307669" />
      <entry key="S10" value="1.1564932303752642" />
      <entry key="S30" value="1.565477634286501" />
      <entry key="S60" value="2.0300185162480773" />
      <entry key="M2" value="3.00791392458858" />
      <entry key="M5" value="4.683920816664449" />
      <entry key="M10" value="5.6661058241809865" />
      <entry key="M15" value="6.065905571659215" />
      <entry key="M30" value="6.508892009754052" />
      <entry key="H1" value="6.748100508935029" />
      <entry key="H2" value="6.872421343983784" />
      <entry key="H4" value="6.94482198195752" />
      <entry key="D1" value="39.36855252665347" />
      <entry key="W1" value="166.3668157965012" />
    </decayedSelected>
    <decayedShown>
      <entry key="MS100" value="2.1135093202376162E-5" />
      <entry key="MS500" value="0.11614508428136414" />
      <entry key="S2" value="0.5837963617099047" />
      <entry key="S5" value="0.8180742556779201" />
      <entry key="S10" value="1.0065036271586434" />
      <entry key="S30" value="1.5145881889534352" />
      <entry key="S60" value="2.346491104436272" />
      <entry key="M2" value="4.361398945073493" />
      <entry key="M5" value="7.9548382790314225" />
      <entry key="M10" value="10.087615127212157" />
      <entry key="M15" value="10.958940220557816" />
      <entry key="M30" value="11.92606017574318" />
      <entry key="H1" value="12.448939521450715" />
      <entry key="H2" value="12.720852019905001" />
      <entry key="H4" value="12.878410480543268" />
      <entry key="D1" value="76.62782415323231" />
      <entry key="W1" value="320.55363068427465" />
    </decayedShown>
  </component>
  <component name="ProjectColorInfo">{
  &quot;associatedIndex&quot;: 5,
  &quot;fromUser&quot;: false
}</component>
  <component name="ProjectId" id="3HtBX8GbtS0P19tkJGArs0JQsD8" />
  <component name="ProjectViewState">
    <option name="hideEmptyMiddlePackages" value="true" />
    <option name="showLibraryContents" value="true" />
  </component>
  <component name="PropertiesComponent">{
  &quot;keyToString&quot;: {
    &quot;ModuleVcsDetector.initialDetectionPerformed&quot;: &quot;true&quot;,
    &quot;RunOnceActivity.MCP Project settings loaded&quot;: &quot;true&quot;,
    &quot;RunOnceActivity.ShowReadmeOnStart&quot;: &quot;true&quot;,
    &quot;RunOnceActivity.git.unshallow&quot;: &quot;true&quot;,
    &quot;RunOnceActivity.typescript.service.memoryLimit.init&quot;: &quot;true&quot;,
    &quot;codeWithMe.voiceChat.enabledByDefault&quot;: &quot;false&quot;,
    &quot;com.intellij.ml.llm.matterhorn.ej.ui.settings.DefaultModelSelectionForGA.v1&quot;: &quot;true&quot;,
    &quot;git-widget-placeholder&quot;: &quot;main&quot;,
    &quot;junie.onboarding.icon.badge.shown&quot;: &quot;true&quot;,
    &quot;kotlin-language-version-configured&quot;: &quot;true&quot;,
    &quot;last_opened_file_path&quot;: &quot;C:/Users/enaaj/OneDrive/Desktop/FileRouge/DigiPME/src/main/java/org/example/digipme&quot;,
    &quot;node.js.detected.package.eslint&quot;: &quot;true&quot;,
    &quot;node.js.detected.package.tslint&quot;: &quot;true&quot;,
    &quot;node.js.selected.package.eslint&quot;: &quot;(autodetect)&quot;,
    &quot;node.js.selected.package.tslint&quot;: &quot;(autodetect)&quot;,
    &quot;nodejs_package_manager_path&quot;: &quot;npm&quot;,
    &quot;to.speed.mode.migration.done&quot;: &quot;true&quot;
  }
}</component>
  <component name="RecentsManager">
    <key name="CopyFile.RECENT_KEYS">
      <recent name="C:\Users\enaaj\OneDrive\Desktop\FileRouge\DigiPME\src\main\java\org\example\digipme" />
    </key>
  </component>
  <component name="SharedIndexes">
    <attachedChunks>
      <set>
        <option value="bundled-jdk-30f59d01ecdd-37e91769500f-intellij.indexing.shared.core-IU-261.24374.151" />
        <option value="bundled-js-predefined-d6986cc7102b-31caf2ab9e3c-JavaScript-IU-261.24374.151" />
      </set>
    </attachedChunks>
  </component>
  <component name="TaskManager">
    <task active="true" id="Default" summary="Default task">
      <changelist id="cf188629-4482-4d47-a9b3-2e1ec40c6c2d" name="Changes" comment="" />
      <created>1786677522614</created>
      <option name="number" value="Default" />
      <option name="presentableId" value="Default" />
      <updated>1786677522614</updated>
    </task>
    <servers />
  </component>
  <component name="TypeScriptGeneratedFilesManager">
    <option name="version" value="3" />
  </component>
</project>
```

# .mvn\wrapper\maven-wrapper.properties

```properties
wrapperVersion=3.3.4
distributionType=only-script
distributionUrl=https://repo.maven.apache.org/maven2/org/apache/maven/apache-maven/3.9.16/apache-maven-3.9.16-bin.zip

```

# HELP.md

```md
# Getting Started

### Reference Documentation

For further reference, please consider the following sections:

* [Official Apache Maven documentation](https://maven.apache.org/guides/index.html)
* [Spring Boot Maven Plugin Reference Guide](https://docs.spring.io/spring-boot/4.1.0/maven-plugin)
* [Create an OCI image](https://docs.spring.io/spring-boot/4.1.0/maven-plugin/build-image.html)
* [Spring Data JPA](https://docs.spring.io/spring-boot/4.1.0/reference/data/sql.html#data.sql.jpa-and-spring-data)
* [Spring Security](https://docs.spring.io/spring-boot/4.1.0/reference/web/spring-security.html)
* [Spring Web](https://docs.spring.io/spring-boot/4.1.0/reference/web/servlet.html)
* [Spring Web Services](https://docs.spring.io/spring-boot/4.1.0/reference/io/webservices.html)

### Guides

The following guides illustrate how to use some features concretely:

* [Accessing Data with JPA](https://spring.io/guides/gs/accessing-data-jpa/)
* [Accessing data with MySQL](https://spring.io/guides/gs/accessing-data-mysql/)
* [Securing a Web Application](https://spring.io/guides/gs/securing-web/)
* [Spring Boot and OAuth2](https://spring.io/guides/tutorials/spring-boot-oauth2/)
* [Authenticating a User with LDAP](https://spring.io/guides/gs/authenticating-ldap/)
* [Building a RESTful Web Service](https://spring.io/guides/gs/rest-service/)
* [Serving Web Content with Spring MVC](https://spring.io/guides/gs/serving-web-content/)
* [Building REST services with Spring](https://spring.io/guides/tutorials/rest/)
* [Producing a SOAP web service](https://spring.io/guides/gs/producing-web-service/)

### Maven Parent overrides

Due to Maven's design, elements are inherited from the parent POM to the project POM.
While most of the inheritance is fine, it also inherits unwanted elements like `<license>` and `<developers>` from the
parent.
To prevent this, the project POM contains empty overrides for these elements.
If you manually switch to a different parent and actually want the inheritance, you need to remove those overrides.


```

# mvnw

```
#!/bin/sh
# ----------------------------------------------------------------------------
# Licensed to the Apache Software Foundation (ASF) under one
# or more contributor license agreements.  See the NOTICE file
# distributed with this work for additional information
# regarding copyright ownership.  The ASF licenses this file
# to you under the Apache License, Version 2.0 (the
# "License"); you may not use this file except in compliance
# with the License.  You may obtain a copy of the License at
#
#    http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing,
# software distributed under the License is distributed on an
# "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
# KIND, either express or implied.  See the License for the
# specific language governing permissions and limitations
# under the License.
# ----------------------------------------------------------------------------

# ----------------------------------------------------------------------------
# Apache Maven Wrapper startup batch script, version 3.3.4
#
# Optional ENV vars
# -----------------
#   JAVA_HOME - location of a JDK home dir, required when download maven via java source
#   MVNW_REPOURL - repo url base for downloading maven distribution
#   MVNW_USERNAME/MVNW_PASSWORD - user and password for downloading maven
#   MVNW_VERBOSE - true: enable verbose log; debug: trace the mvnw script; others: silence the output
# ----------------------------------------------------------------------------

set -euf
[ "${MVNW_VERBOSE-}" != debug ] || set -x

# OS specific support.
native_path() { printf %s\\n "$1"; }
case "$(uname)" in
CYGWIN* | MINGW*)
  [ -z "${JAVA_HOME-}" ] || JAVA_HOME="$(cygpath --unix "$JAVA_HOME")"
  native_path() { cygpath --path --windows "$1"; }
  ;;
esac

# set JAVACMD and JAVACCMD
set_java_home() {
  # For Cygwin and MinGW, ensure paths are in Unix format before anything is touched
  if [ -n "${JAVA_HOME-}" ]; then
    if [ -x "$JAVA_HOME/jre/sh/java" ]; then
      # IBM's JDK on AIX uses strange locations for the executables
      JAVACMD="$JAVA_HOME/jre/sh/java"
      JAVACCMD="$JAVA_HOME/jre/sh/javac"
    else
      JAVACMD="$JAVA_HOME/bin/java"
      JAVACCMD="$JAVA_HOME/bin/javac"

      if [ ! -x "$JAVACMD" ] || [ ! -x "$JAVACCMD" ]; then
        echo "The JAVA_HOME environment variable is not defined correctly, so mvnw cannot run." >&2
        echo "JAVA_HOME is set to \"$JAVA_HOME\", but \"\$JAVA_HOME/bin/java\" or \"\$JAVA_HOME/bin/javac\" does not exist." >&2
        return 1
      fi
    fi
  else
    JAVACMD="$(
      'set' +e
      'unset' -f command 2>/dev/null
      'command' -v java
    )" || :
    JAVACCMD="$(
      'set' +e
      'unset' -f command 2>/dev/null
      'command' -v javac
    )" || :

    if [ ! -x "${JAVACMD-}" ] || [ ! -x "${JAVACCMD-}" ]; then
      echo "The java/javac command does not exist in PATH nor is JAVA_HOME set, so mvnw cannot run." >&2
      return 1
    fi
  fi
}

# hash string like Java String::hashCode
hash_string() {
  str="${1:-}" h=0
  while [ -n "$str" ]; do
    char="${str%"${str#?}"}"
    h=$(((h * 31 + $(LC_CTYPE=C printf %d "'$char")) % 4294967296))
    str="${str#?}"
  done
  printf %x\\n $h
}

verbose() { :; }
[ "${MVNW_VERBOSE-}" != true ] || verbose() { printf %s\\n "${1-}"; }

die() {
  printf %s\\n "$1" >&2
  exit 1
}

trim() {
  # MWRAPPER-139:
  #   Trims trailing and leading whitespace, carriage returns, tabs, and linefeeds.
  #   Needed for removing poorly interpreted newline sequences when running in more
  #   exotic environments such as mingw bash on Windows.
  printf "%s" "${1}" | tr -d '[:space:]'
}

scriptDir="$(dirname "$0")"
scriptName="$(basename "$0")"

# parse distributionUrl and optional distributionSha256Sum, requires .mvn/wrapper/maven-wrapper.properties
while IFS="=" read -r key value; do
  case "${key-}" in
  distributionUrl) distributionUrl=$(trim "${value-}") ;;
  distributionSha256Sum) distributionSha256Sum=$(trim "${value-}") ;;
  esac
done <"$scriptDir/.mvn/wrapper/maven-wrapper.properties"
[ -n "${distributionUrl-}" ] || die "cannot read distributionUrl property in $scriptDir/.mvn/wrapper/maven-wrapper.properties"

case "${distributionUrl##*/}" in
maven-mvnd-*bin.*)
  MVN_CMD=mvnd.sh _MVNW_REPO_PATTERN=/maven/mvnd/
  case "${PROCESSOR_ARCHITECTURE-}${PROCESSOR_ARCHITEW6432-}:$(uname -a)" in
  *AMD64:CYGWIN* | *AMD64:MINGW*) distributionPlatform=windows-amd64 ;;
  :Darwin*x86_64) distributionPlatform=darwin-amd64 ;;
  :Darwin*arm64) distributionPlatform=darwin-aarch64 ;;
  :Linux*x86_64*) distributionPlatform=linux-amd64 ;;
  *)
    echo "Cannot detect native platform for mvnd on $(uname)-$(uname -m), use pure java version" >&2
    distributionPlatform=linux-amd64
    ;;
  esac
  distributionUrl="${distributionUrl%-bin.*}-$distributionPlatform.zip"
  ;;
maven-mvnd-*) MVN_CMD=mvnd.sh _MVNW_REPO_PATTERN=/maven/mvnd/ ;;
*) MVN_CMD="mvn${scriptName#mvnw}" _MVNW_REPO_PATTERN=/org/apache/maven/ ;;
esac

# apply MVNW_REPOURL and calculate MAVEN_HOME
# maven home pattern: ~/.m2/wrapper/dists/{apache-maven-<version>,maven-mvnd-<version>-<platform>}/<hash>
[ -z "${MVNW_REPOURL-}" ] || distributionUrl="$MVNW_REPOURL$_MVNW_REPO_PATTERN${distributionUrl#*"$_MVNW_REPO_PATTERN"}"
distributionUrlName="${distributionUrl##*/}"
distributionUrlNameMain="${distributionUrlName%.*}"
distributionUrlNameMain="${distributionUrlNameMain%-bin}"
MAVEN_USER_HOME="${MAVEN_USER_HOME:-${HOME}/.m2}"
MAVEN_HOME="${MAVEN_USER_HOME}/wrapper/dists/${distributionUrlNameMain-}/$(hash_string "$distributionUrl")"

exec_maven() {
  unset MVNW_VERBOSE MVNW_USERNAME MVNW_PASSWORD MVNW_REPOURL || :
  exec "$MAVEN_HOME/bin/$MVN_CMD" "$@" || die "cannot exec $MAVEN_HOME/bin/$MVN_CMD"
}

if [ -d "$MAVEN_HOME" ]; then
  verbose "found existing MAVEN_HOME at $MAVEN_HOME"
  exec_maven "$@"
fi

case "${distributionUrl-}" in
*?-bin.zip | *?maven-mvnd-?*-?*.zip) ;;
*) die "distributionUrl is not valid, must match *-bin.zip or maven-mvnd-*.zip, but found '${distributionUrl-}'" ;;
esac

# prepare tmp dir
if TMP_DOWNLOAD_DIR="$(mktemp -d)" && [ -d "$TMP_DOWNLOAD_DIR" ]; then
  clean() { rm -rf -- "$TMP_DOWNLOAD_DIR"; }
  trap clean HUP INT TERM EXIT
else
  die "cannot create temp dir"
fi

mkdir -p -- "${MAVEN_HOME%/*}"

# Download and Install Apache Maven
verbose "Couldn't find MAVEN_HOME, downloading and installing it ..."
verbose "Downloading from: $distributionUrl"
verbose "Downloading to: $TMP_DOWNLOAD_DIR/$distributionUrlName"

# select .zip or .tar.gz
if ! command -v unzip >/dev/null; then
  distributionUrl="${distributionUrl%.zip}.tar.gz"
  distributionUrlName="${distributionUrl##*/}"
fi

# verbose opt
__MVNW_QUIET_WGET=--quiet __MVNW_QUIET_CURL=--silent __MVNW_QUIET_UNZIP=-q __MVNW_QUIET_TAR=''
[ "${MVNW_VERBOSE-}" != true ] || __MVNW_QUIET_WGET='' __MVNW_QUIET_CURL='' __MVNW_QUIET_UNZIP='' __MVNW_QUIET_TAR=v

# normalize http auth
case "${MVNW_PASSWORD:+has-password}" in
'') MVNW_USERNAME='' MVNW_PASSWORD='' ;;
has-password) [ -n "${MVNW_USERNAME-}" ] || MVNW_USERNAME='' MVNW_PASSWORD='' ;;
esac

if [ -z "${MVNW_USERNAME-}" ] && command -v wget >/dev/null; then
  verbose "Found wget ... using wget"
  wget ${__MVNW_QUIET_WGET:+"$__MVNW_QUIET_WGET"} "$distributionUrl" -O "$TMP_DOWNLOAD_DIR/$distributionUrlName" || die "wget: Failed to fetch $distributionUrl"
elif [ -z "${MVNW_USERNAME-}" ] && command -v curl >/dev/null; then
  verbose "Found curl ... using curl"
  curl ${__MVNW_QUIET_CURL:+"$__MVNW_QUIET_CURL"} -f -L -o "$TMP_DOWNLOAD_DIR/$distributionUrlName" "$distributionUrl" || die "curl: Failed to fetch $distributionUrl"
elif set_java_home; then
  verbose "Falling back to use Java to download"
  javaSource="$TMP_DOWNLOAD_DIR/Downloader.java"
  targetZip="$TMP_DOWNLOAD_DIR/$distributionUrlName"
  cat >"$javaSource" <<-END
	public class Downloader extends java.net.Authenticator
	{
	  protected java.net.PasswordAuthentication getPasswordAuthentication()
	  {
	    return new java.net.PasswordAuthentication( System.getenv( "MVNW_USERNAME" ), System.getenv( "MVNW_PASSWORD" ).toCharArray() );
	  }
	  public static void main( String[] args ) throws Exception
	  {
	    setDefault( new Downloader() );
	    java.nio.file.Files.copy( java.net.URI.create( args[0] ).toURL().openStream(), java.nio.file.Paths.get( args[1] ).toAbsolutePath().normalize() );
	  }
	}
	END
  # For Cygwin/MinGW, switch paths to Windows format before running javac and java
  verbose " - Compiling Downloader.java ..."
  "$(native_path "$JAVACCMD")" "$(native_path "$javaSource")" || die "Failed to compile Downloader.java"
  verbose " - Running Downloader.java ..."
  "$(native_path "$JAVACMD")" -cp "$(native_path "$TMP_DOWNLOAD_DIR")" Downloader "$distributionUrl" "$(native_path "$targetZip")"
fi

# If specified, validate the SHA-256 sum of the Maven distribution zip file
if [ -n "${distributionSha256Sum-}" ]; then
  distributionSha256Result=false
  if [ "$MVN_CMD" = mvnd.sh ]; then
    echo "Checksum validation is not supported for maven-mvnd." >&2
    echo "Please disable validation by removing 'distributionSha256Sum' from your maven-wrapper.properties." >&2
    exit 1
  elif command -v sha256sum >/dev/null; then
    if echo "$distributionSha256Sum  $TMP_DOWNLOAD_DIR/$distributionUrlName" | sha256sum -c - >/dev/null 2>&1; then
      distributionSha256Result=true
    fi
  elif command -v shasum >/dev/null; then
    if echo "$distributionSha256Sum  $TMP_DOWNLOAD_DIR/$distributionUrlName" | shasum -a 256 -c >/dev/null 2>&1; then
      distributionSha256Result=true
    fi
  else
    echo "Checksum validation was requested but neither 'sha256sum' or 'shasum' are available." >&2
    echo "Please install either command, or disable validation by removing 'distributionSha256Sum' from your maven-wrapper.properties." >&2
    exit 1
  fi
  if [ $distributionSha256Result = false ]; then
    echo "Error: Failed to validate Maven distribution SHA-256, your Maven distribution might be compromised." >&2
    echo "If you updated your Maven version, you need to update the specified distributionSha256Sum property." >&2
    exit 1
  fi
fi

# unzip and move
if command -v unzip >/dev/null; then
  unzip ${__MVNW_QUIET_UNZIP:+"$__MVNW_QUIET_UNZIP"} "$TMP_DOWNLOAD_DIR/$distributionUrlName" -d "$TMP_DOWNLOAD_DIR" || die "failed to unzip"
else
  tar xzf${__MVNW_QUIET_TAR:+"$__MVNW_QUIET_TAR"} "$TMP_DOWNLOAD_DIR/$distributionUrlName" -C "$TMP_DOWNLOAD_DIR" || die "failed to untar"
fi

# Find the actual extracted directory name (handles snapshots where filename != directory name)
actualDistributionDir=""

# First try the expected directory name (for regular distributions)
if [ -d "$TMP_DOWNLOAD_DIR/$distributionUrlNameMain" ]; then
  if [ -f "$TMP_DOWNLOAD_DIR/$distributionUrlNameMain/bin/$MVN_CMD" ]; then
    actualDistributionDir="$distributionUrlNameMain"
  fi
fi

# If not found, search for any directory with the Maven executable (for snapshots)
if [ -z "$actualDistributionDir" ]; then
  # enable globbing to iterate over items
  set +f
  for dir in "$TMP_DOWNLOAD_DIR"/*; do
    if [ -d "$dir" ]; then
      if [ -f "$dir/bin/$MVN_CMD" ]; then
        actualDistributionDir="$(basename "$dir")"
        break
      fi
    fi
  done
  set -f
fi

if [ -z "$actualDistributionDir" ]; then
  verbose "Contents of $TMP_DOWNLOAD_DIR:"
  verbose "$(ls -la "$TMP_DOWNLOAD_DIR")"
  die "Could not find Maven distribution directory in extracted archive"
fi

verbose "Found extracted Maven distribution directory: $actualDistributionDir"
printf %s\\n "$distributionUrl" >"$TMP_DOWNLOAD_DIR/$actualDistributionDir/mvnw.url"
mv -- "$TMP_DOWNLOAD_DIR/$actualDistributionDir" "$MAVEN_HOME" || [ -d "$MAVEN_HOME" ] || die "fail to move MAVEN_HOME"

clean || :
exec_maven "$@"

```

# mvnw.cmd

```cmd
<# : batch portion
@REM ----------------------------------------------------------------------------
@REM Licensed to the Apache Software Foundation (ASF) under one
@REM or more contributor license agreements.  See the NOTICE file
@REM distributed with this work for additional information
@REM regarding copyright ownership.  The ASF licenses this file
@REM to you under the Apache License, Version 2.0 (the
@REM "License"); you may not use this file except in compliance
@REM with the License.  You may obtain a copy of the License at
@REM
@REM    http://www.apache.org/licenses/LICENSE-2.0
@REM
@REM Unless required by applicable law or agreed to in writing,
@REM software distributed under the License is distributed on an
@REM "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
@REM KIND, either express or implied.  See the License for the
@REM specific language governing permissions and limitations
@REM under the License.
@REM ----------------------------------------------------------------------------

@REM ----------------------------------------------------------------------------
@REM Apache Maven Wrapper startup batch script, version 3.3.4
@REM
@REM Optional ENV vars
@REM   MVNW_REPOURL - repo url base for downloading maven distribution
@REM   MVNW_USERNAME/MVNW_PASSWORD - user and password for downloading maven
@REM   MVNW_VERBOSE - true: enable verbose log; others: silence the output
@REM ----------------------------------------------------------------------------

@IF "%__MVNW_ARG0_NAME__%"=="" (SET __MVNW_ARG0_NAME__=%~nx0)
@SET __MVNW_CMD__=
@SET __MVNW_ERROR__=
@SET __MVNW_PSMODULEP_SAVE=%PSModulePath%
@SET PSModulePath=
@FOR /F "usebackq tokens=1* delims==" %%A IN (`powershell -noprofile "& {$scriptDir='%~dp0'; $script='%__MVNW_ARG0_NAME__%'; icm -ScriptBlock ([Scriptblock]::Create((Get-Content -Raw '%~f0'))) -NoNewScope}"`) DO @(
  IF "%%A"=="MVN_CMD" (set __MVNW_CMD__=%%B) ELSE IF "%%B"=="" (echo %%A) ELSE (echo %%A=%%B)
)
@SET PSModulePath=%__MVNW_PSMODULEP_SAVE%
@SET __MVNW_PSMODULEP_SAVE=
@SET __MVNW_ARG0_NAME__=
@SET MVNW_USERNAME=
@SET MVNW_PASSWORD=
@IF NOT "%__MVNW_CMD__%"=="" ("%__MVNW_CMD__%" %*)
@echo Cannot start maven from wrapper >&2 && exit /b 1
@GOTO :EOF
: end batch / begin powershell #>

$ErrorActionPreference = "Stop"
if ($env:MVNW_VERBOSE -eq "true") {
  $VerbosePreference = "Continue"
}

# calculate distributionUrl, requires .mvn/wrapper/maven-wrapper.properties
$distributionUrl = (Get-Content -Raw "$scriptDir/.mvn/wrapper/maven-wrapper.properties" | ConvertFrom-StringData).distributionUrl
if (!$distributionUrl) {
  Write-Error "cannot read distributionUrl property in $scriptDir/.mvn/wrapper/maven-wrapper.properties"
}

switch -wildcard -casesensitive ( $($distributionUrl -replace '^.*/','') ) {
  "maven-mvnd-*" {
    $USE_MVND = $true
    $distributionUrl = $distributionUrl -replace '-bin\.[^.]*$',"-windows-amd64.zip"
    $MVN_CMD = "mvnd.cmd"
    break
  }
  default {
    $USE_MVND = $false
    $MVN_CMD = $script -replace '^mvnw','mvn'
    break
  }
}

# apply MVNW_REPOURL and calculate MAVEN_HOME
# maven home pattern: ~/.m2/wrapper/dists/{apache-maven-<version>,maven-mvnd-<version>-<platform>}/<hash>
if ($env:MVNW_REPOURL) {
  $MVNW_REPO_PATTERN = if ($USE_MVND -eq $False) { "/org/apache/maven/" } else { "/maven/mvnd/" }
  $distributionUrl = "$env:MVNW_REPOURL$MVNW_REPO_PATTERN$($distributionUrl -replace "^.*$MVNW_REPO_PATTERN",'')"
}
$distributionUrlName = $distributionUrl -replace '^.*/',''
$distributionUrlNameMain = $distributionUrlName -replace '\.[^.]*$','' -replace '-bin$',''

$MAVEN_M2_PATH = "$HOME/.m2"
if ($env:MAVEN_USER_HOME) {
  $MAVEN_M2_PATH = "$env:MAVEN_USER_HOME"
}

if (-not (Test-Path -Path $MAVEN_M2_PATH)) {
    New-Item -Path $MAVEN_M2_PATH -ItemType Directory | Out-Null
}

$MAVEN_WRAPPER_DISTS = $null
if ((Get-Item $MAVEN_M2_PATH).Target[0] -eq $null) {
  $MAVEN_WRAPPER_DISTS = "$MAVEN_M2_PATH/wrapper/dists"
} else {
  $MAVEN_WRAPPER_DISTS = (Get-Item $MAVEN_M2_PATH).Target[0] + "/wrapper/dists"
}

$MAVEN_HOME_PARENT = "$MAVEN_WRAPPER_DISTS/$distributionUrlNameMain"
$MAVEN_HOME_NAME = ([System.Security.Cryptography.SHA256]::Create().ComputeHash([byte[]][char[]]$distributionUrl) | ForEach-Object {$_.ToString("x2")}) -join ''
$MAVEN_HOME = "$MAVEN_HOME_PARENT/$MAVEN_HOME_NAME"

if (Test-Path -Path "$MAVEN_HOME" -PathType Container) {
  Write-Verbose "found existing MAVEN_HOME at $MAVEN_HOME"
  Write-Output "MVN_CMD=$MAVEN_HOME/bin/$MVN_CMD"
  exit $?
}

if (! $distributionUrlNameMain -or ($distributionUrlName -eq $distributionUrlNameMain)) {
  Write-Error "distributionUrl is not valid, must end with *-bin.zip, but found $distributionUrl"
}

# prepare tmp dir
$TMP_DOWNLOAD_DIR_HOLDER = New-TemporaryFile
$TMP_DOWNLOAD_DIR = New-Item -Itemtype Directory -Path "$TMP_DOWNLOAD_DIR_HOLDER.dir"
$TMP_DOWNLOAD_DIR_HOLDER.Delete() | Out-Null
trap {
  if ($TMP_DOWNLOAD_DIR.Exists) {
    try { Remove-Item $TMP_DOWNLOAD_DIR -Recurse -Force | Out-Null }
    catch { Write-Warning "Cannot remove $TMP_DOWNLOAD_DIR" }
  }
}

New-Item -Itemtype Directory -Path "$MAVEN_HOME_PARENT" -Force | Out-Null

# Download and Install Apache Maven
Write-Verbose "Couldn't find MAVEN_HOME, downloading and installing it ..."
Write-Verbose "Downloading from: $distributionUrl"
Write-Verbose "Downloading to: $TMP_DOWNLOAD_DIR/$distributionUrlName"

$webclient = New-Object System.Net.WebClient
if ($env:MVNW_USERNAME -and $env:MVNW_PASSWORD) {
  $webclient.Credentials = New-Object System.Net.NetworkCredential($env:MVNW_USERNAME, $env:MVNW_PASSWORD)
}
[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12
$webclient.DownloadFile($distributionUrl, "$TMP_DOWNLOAD_DIR/$distributionUrlName") | Out-Null

# If specified, validate the SHA-256 sum of the Maven distribution zip file
$distributionSha256Sum = (Get-Content -Raw "$scriptDir/.mvn/wrapper/maven-wrapper.properties" | ConvertFrom-StringData).distributionSha256Sum
if ($distributionSha256Sum) {
  if ($USE_MVND) {
    Write-Error "Checksum validation is not supported for maven-mvnd. `nPlease disable validation by removing 'distributionSha256Sum' from your maven-wrapper.properties."
  }
  Import-Module $PSHOME\Modules\Microsoft.PowerShell.Utility -Function Get-FileHash
  if ((Get-FileHash "$TMP_DOWNLOAD_DIR/$distributionUrlName" -Algorithm SHA256).Hash.ToLower() -ne $distributionSha256Sum) {
    Write-Error "Error: Failed to validate Maven distribution SHA-256, your Maven distribution might be compromised. If you updated your Maven version, you need to update the specified distributionSha256Sum property."
  }
}

# unzip and move
Expand-Archive "$TMP_DOWNLOAD_DIR/$distributionUrlName" -DestinationPath "$TMP_DOWNLOAD_DIR" | Out-Null

# Find the actual extracted directory name (handles snapshots where filename != directory name)
$actualDistributionDir = ""

# First try the expected directory name (for regular distributions)
$expectedPath = Join-Path "$TMP_DOWNLOAD_DIR" "$distributionUrlNameMain"
$expectedMvnPath = Join-Path "$expectedPath" "bin/$MVN_CMD"
if ((Test-Path -Path $expectedPath -PathType Container) -and (Test-Path -Path $expectedMvnPath -PathType Leaf)) {
  $actualDistributionDir = $distributionUrlNameMain
}

# If not found, search for any directory with the Maven executable (for snapshots)
if (!$actualDistributionDir) {
  Get-ChildItem -Path "$TMP_DOWNLOAD_DIR" -Directory | ForEach-Object {
    $testPath = Join-Path $_.FullName "bin/$MVN_CMD"
    if (Test-Path -Path $testPath -PathType Leaf) {
      $actualDistributionDir = $_.Name
    }
  }
}

if (!$actualDistributionDir) {
  Write-Error "Could not find Maven distribution directory in extracted archive"
}

Write-Verbose "Found extracted Maven distribution directory: $actualDistributionDir"
Rename-Item -Path "$TMP_DOWNLOAD_DIR/$actualDistributionDir" -NewName $MAVEN_HOME_NAME | Out-Null
try {
  Move-Item -Path "$TMP_DOWNLOAD_DIR/$MAVEN_HOME_NAME" -Destination $MAVEN_HOME_PARENT | Out-Null
} catch {
  if (! (Test-Path -Path "$MAVEN_HOME" -PathType Container)) {
    Write-Error "fail to move MAVEN_HOME"
  }
} finally {
  try { Remove-Item $TMP_DOWNLOAD_DIR -Recurse -Force | Out-Null }
  catch { Write-Warning "Cannot remove $TMP_DOWNLOAD_DIR" }
}

Write-Output "MVN_CMD=$MAVEN_HOME/bin/$MVN_CMD"

```

# pom.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>
    <parent>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-parent</artifactId>
        <version>4.1.0</version>
        <relativePath/> <!-- lookup parent from repository -->
    </parent>
    <groupId>org.example</groupId>
    <artifactId>DigiPME</artifactId>
    <version>0.0.1-SNAPSHOT</version>
    <name>DigiPME</name>
    <description>DigiPME</description>
    <url/>
    <licenses>
        <license/>
    </licenses>
    <developers>
        <developer/>
    </developers>
    <scm>
        <connection/>
        <developerConnection/>
        <tag/>
        <url/>
    </scm>
    <properties>
        <java.version>17</java.version>
    </properties>
    <dependencies>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-h2console</artifactId>
        </dependency>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-data-jpa</artifactId>
        </dependency>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-security</artifactId>
        </dependency>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-webmvc</artifactId>
        </dependency>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-webservices</artifactId>
        </dependency>

        <dependency>
            <groupId>com.h2database</groupId>
            <artifactId>h2</artifactId>
            <scope>runtime</scope>
        </dependency>
        <dependency>
            <groupId>com.mysql</groupId>
            <artifactId>mysql-connector-j</artifactId>
            <scope>runtime</scope>
        </dependency>
        <dependency>
            <groupId>org.projectlombok</groupId>
            <artifactId>lombok</artifactId>
            <optional>true</optional>
        </dependency>
        <dependency>
            <groupId>org.projectlombok</groupId>
            <artifactId>lombok</artifactId>
            <version>1.18.30</version>
            <scope>provided</scope>
        </dependency>
        <dependency>
            <groupId>jakarta.validation</groupId>
            <artifactId>jakarta.validation-api</artifactId>
            <version>3.1.1</version>
        </dependency>


        <dependency>
            <groupId>org.mapstruct</groupId>
            <artifactId>mapstruct</artifactId>
            <version>1.5.5.Final</version>
        </dependency>

        <dependency>
            <groupId>org.mapstruct</groupId>
            <artifactId>mapstruct-processor</artifactId>
            <version>1.5.5.Final</version>
            <scope>provided</scope>
        </dependency>

        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-data-jpa-test</artifactId>
            <scope>test</scope>
        </dependency>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-security-test</artifactId>
            <scope>test</scope>
        </dependency>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-webmvc-test</artifactId>
            <scope>test</scope>
        </dependency>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-webservices-test</artifactId>
            <scope>test</scope>
        </dependency>

        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-cache</artifactId>
        </dependency>

        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-data-redis</artifactId>
        </dependency>

    </dependencies>

    <build>
        <plugins>
            <plugin>
                <groupId>org.springframework.boot</groupId>
                <artifactId>spring-boot-maven-plugin</artifactId>
            </plugin>
            <plugin>
                <groupId>org.apache.maven.plugins</groupId>
                <artifactId>maven-compiler-plugin</artifactId>
                <executions>
                    <execution>
                        <id>default-compile</id>
                        <phase>compile</phase>
                        <goals>
                            <goal>compile</goal>
                        </goals>
                        <configuration>
                            <annotationProcessorPaths>
                                <path>
                                    <groupId>org.projectlombok</groupId>
                                    <artifactId>lombok</artifactId>
                                </path>
                            </annotationProcessorPaths>
                        </configuration>
                    </execution>
                    <execution>
                        <id>default-testCompile</id>
                        <phase>test-compile</phase>
                        <goals>
                            <goal>testCompile</goal>
                        </goals>
                        <configuration>
                            <annotationProcessorPaths>
                                <path>
                                    <groupId>org.projectlombok</groupId>
                                    <artifactId>lombok</artifactId>
                                </path>
                            </annotationProcessorPaths>
                        </configuration>
                    </execution>
                </executions>
            </plugin>
        </plugins>
    </build>

</project>

```

# src\main\java\org\example\digipme\auth\AuthController.java

```java
package org.example.digipme.auth;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.example.digipme.auth.dto.UserLogin;
import org.example.digipme.auth.dto.TokenResponse;
import org.example.digipme.auth.dto.UserSignUp;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/auth")
public class AuthController {

    private final AuthService authService;

    @PostMapping("/register")
    public ResponseEntity<TokenResponse> register(@Valid @RequestBody UserSignUp userSignUp) {
        TokenResponse response = authService.register(userSignUp);
        return ResponseEntity.ok(response);
    }

    @PostMapping("/login")
    public ResponseEntity<TokenResponse> login(@Valid @RequestBody UserLogin userLogin) {
        TokenResponse response = authService.login(userLogin);
        return ResponseEntity.ok(response);
    }

}

```

# src\main\java\org\example\digipme\auth\AuthService.java

```java
package org.example.digipme.auth;

import lombok.RequiredArgsConstructor;
import org.example.digipme.Enums.RoleUser;
import org.example.digipme.Model.Freelancer;
import org.example.digipme.Model.PME;
import org.example.digipme.Model.UserApp;
import org.example.digipme.Repository.PMERepository;
import org.example.digipme.Repository.FreelancerRepository;
import org.example.digipme.Repository.UserAppRepository;
import org.example.digipme.auth.dto.UserLogin;
import org.example.digipme.auth.dto.TokenResponse;
import org.example.digipme.auth.dto.UserSignUp;
import org.example.digipme.security.CustomUserDetailsService;
import org.example.digipme.security.JwtService;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthService {

    private final UserAppRepository userAppRepository;
    private final JwtService jwtService;
    private final PasswordEncoder motdePasseEncoder;
    private final AuthenticationManager authenticationManager;
    private final CustomUserDetailsService customUserDetailsService;
    private final FreelancerRepository freelancerRepository;
    private final PMERepository pmeRepository;

     public TokenResponse register(UserSignUp userSignUp){
         if(userAppRepository.findUserAppByNom(userSignUp.getNom()) != null){
             throw new RuntimeException("Nom déjà utilisé");
         }
         if (userAppRepository.findUserAppByEmail(userSignUp.getEmail())!=null){
             throw new RuntimeException("Email déjà utilisé");
         }
         isEmailRegistered(userSignUp);

         if (userSignUp.getRole() == RoleUser.PME){
             PME pme = new PME();
             pme.setNom(userSignUp.getNom());
             pme.setEmail(userSignUp.getEmail());
             pme.setPassword(motdePasseEncoder.encode(userSignUp.getPassword()));
             pme.setTelephone(userSignUp.getTelephone());
             pme.setAdresse(userSignUp.getAdresse());
             pme.setRole(RoleUser.PME);
             pme.setRC(userSignUp.getRC());
             pme.setActivite(userSignUp.getActivite());
             pmeRepository.save(pme);

             UserDetails userDetails = customUserDetailsService.loadUserByUsername(pme.getEmail());
             String token = jwtService.generateToken(userDetails);
             return new TokenResponse(token);
         } else if (userSignUp.getRole() == RoleUser.ADMIN) {
             UserApp User = new UserApp();
             User.setNom(userSignUp.getNom());
             User.setEmail(userSignUp.getEmail());
             User.setPassword(motdePasseEncoder.encode(userSignUp.getPassword()));
             User.setTelephone(userSignUp.getTelephone());
             User.setAdresse(userSignUp.getAdresse());
             User.setRole(RoleUser.ADMIN);
             userAppRepository.save(User);

             UserDetails userDetails = customUserDetailsService.loadUserByUsername(User.getEmail());
             String token = jwtService.generateToken(userDetails);
             return new TokenResponse(token);
         } else {
             Freelancer freelancer = new Freelancer();
             freelancer.setNom(userSignUp.getNom());
             freelancer.setEmail(userSignUp.getEmail());
             freelancer.setPassword(motdePasseEncoder.encode(userSignUp.getPassword()));
             freelancer.setTelephone(userSignUp.getTelephone());
             freelancer.setAdresse(userSignUp.getAdresse());
             freelancer.setRole(RoleUser.FREELANCER);
             freelancer.setSpecialite(userSignUp.getSpecialite());
             freelancerRepository.save(freelancer);

             UserDetails userDetails = customUserDetailsService.loadUserByUsername(freelancer.getEmail());
             String token = jwtService.generateToken(userDetails);
             return new TokenResponse(token);
         }
     }

    public TokenResponse login(UserLogin userLogin) {
        UserApp user = userAppRepository.findUserAppByEmail(userLogin.getEmail());
        if (user == null || !motdePasseEncoder.matches(userLogin.getPassword(), user.getPassword())) {
            throw new RuntimeException("Email ou mot de passe incorrect");
        }
        UserDetails userDetails = customUserDetailsService.loadUserByUsername(user.getEmail());
        String token = jwtService.generateToken(userDetails);
        return new TokenResponse(token);
    }

    public TokenResponse authenticat(String nom, String password) {
        UserApp userApp = userAppRepository.findUserAppByNom(nom);
        if (userApp == null || !motdePasseEncoder.matches(password, userApp.getPassword())) {
            throw new RuntimeException("Nom ou mot de passe incorrect");
        }
        UserDetails userDetails = customUserDetailsService.loadUserByUsername(userApp.getNom());
        return new TokenResponse(jwtService.generateToken(userDetails));
    }

    public TokenResponse loginBYNom(UserLogin request) {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.getEmail(), request.getPassword())
        );
        UserDetails userDetails =
                (UserDetails) authentication.getPrincipal();
        String token = jwtService.generateToken(userDetails);
        return new TokenResponse(token);
    }


    public void isEmailRegistered(UserSignUp userSignUp) {
        if(userAppRepository.findByEmail(userSignUp.getEmail())){
            throw new RuntimeException("Email déjà utilisé");
        }
        if(pmeRepository.findByEmail(userSignUp.getEmail())){
            throw new RuntimeException("Email déjà utilisé par une PME");
        }
        if(freelancerRepository.findByEmail(userSignUp.getEmail())){
            throw new RuntimeException("Email déjà utilisé par un Freelancer");
        }
    }


}

```

# src\main\java\org\example\digipme\auth\dto\TokenResponse.java

```java
package org.example.digipme.auth.dto;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class TokenResponse {

    private String token;

}

```

# src\main\java\org\example\digipme\auth\dto\UserLogin.java

```java
package org.example.digipme.auth.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserLogin {
    @NotBlank
    private String email;
    @NotBlank
    @Size(min = 4)
    private String password;
}

```

# src\main\java\org\example\digipme\auth\dto\UserSignUp.java

```java
package org.example.digipme.auth.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.example.digipme.Enums.RoleUser;


@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserSignUp {

    @NotBlank
    private String nom;
    @NotBlank
    @Email
    private String email;
    @NotBlank
    @Size(min = 4)
    private String password;
    @NotBlank
    private String telephone;
    private String adresse;

    private RoleUser role;

    private String RC;
    private String activite ;

    private String specialite ;






}

```

# src\main\java\org\example\digipme\config\CacheConfig.java

```java
package org.example.digipme.config;

import org.springframework.cache.annotation.EnableCaching;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.redis.cache.RedisCacheConfiguration;
import org.springframework.data.redis.cache.RedisCacheManager;
import org.springframework.data.redis.connection.RedisConnectionFactory;

import java.time.Duration;

@EnableCaching
@Configuration
public class CacheConfig {

    @Bean
    public RedisCacheManager cacheManager(RedisConnectionFactory connectionFactory) {
        RedisCacheConfiguration cacheConfig = RedisCacheConfiguration.defaultCacheConfig()
                .entryTtl(Duration.ofHours(1));

        return RedisCacheManager.builder(connectionFactory)
//                .cacheDefaults(cacheConfig)
                .withCacheConfiguration("users", cacheConfig)
                .build();
    }
}

```

# src\main\java\org\example\digipme\config\JwtFilter.java

```java
package org.example.digipme.config;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.example.digipme.security.CustomUserDetailsService;
import org.example.digipme.security.JwtService;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;

@Component
@RequiredArgsConstructor
public class JwtFilter extends OncePerRequestFilter {

    private final JwtService jwtService;
    private final CustomUserDetailsService userDetailsService;

    @Override
    protected void doFilterInternal(HttpServletRequest request,
                                    HttpServletResponse response,
                                    FilterChain filterChain) throws ServletException, IOException {

        String authHeader = request.getHeader("Authorization");

        if (authHeader == null || !authHeader.startsWith("Bearer ")) {
            filterChain.doFilter(request, response);
            return;
        }

        String token = authHeader.substring(7);
        String username = jwtService.extractUsername(token);

        if (username != null && SecurityContextHolder.getContext().getAuthentication() == null) {
            UserDetails userDetails = userDetailsService.loadUserByUsername(username);

            if (jwtService.isTokenValid(token, userDetails)) {
                UsernamePasswordAuthenticationToken authToken =
                        new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());
                authToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
                SecurityContextHolder.getContext().setAuthentication(authToken);
            }
        }
        filterChain.doFilter(request, response);
    }
}
```

# src\main\java\org\example\digipme\config\SecurityConfig.java

```java
package org.example.digipme.config;

import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.List;

@EnableMethodSecurity(prePostEnabled = true)
@Configuration
@RequiredArgsConstructor
public class SecurityConfig {

    private final org.example.digipme.config.JwtFilter jwtFilter;

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .cors(cors -> cors.configurationSource(corsConfigurationSource()))
                .csrf(csrf -> csrf.disable())
                .authorizeHttpRequests(auth -> auth
                        .requestMatchers("/auth/**").permitAll()
                        .requestMatchers("/error").permitAll()
                        .requestMatchers("/favicon.ico").permitAll()
                        .requestMatchers("/static/**", "/css/**", "/js/**", "/images/**", "/webjars/**").permitAll()
                        .anyRequest().authenticated()
                )
                .exceptionHandling(e -> e.authenticationEntryPoint(new org.springframework.security.web.authentication.Http403ForbiddenEntryPoint()))
                .sessionManagement(s -> s.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
                .addFilterBefore(jwtFilter, UsernamePasswordAuthenticationFilter.class);

        return http.build();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration config) throws Exception {
        return config.getAuthenticationManager();
    }

    @Bean
    public CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();
        configuration.setAllowedOrigins(List.of(
                "http://localhost:8082",
                "http://localhost:5174"
        ));
        configuration.setAllowedMethods(List.of("GET", "POST", "PUT", "DELETE", "PATCH"));
        configuration.setAllowedHeaders(List.of("*"));
        configuration.setAllowCredentials(true);

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);
        return source;
    }




}
```

# src\main\java\org\example\digipme\Controller\FreelancerController.java

```java
package org.example.digipme.Controller;

import lombok.RequiredArgsConstructor;
import org.example.digipme.DTOs.FreelancerRequest;
import org.example.digipme.DTOs.FreelancerResponse;
import org.example.digipme.DTOs.OfferResponse;
import org.example.digipme.DTOs.ProjectResponse;
import org.example.digipme.Service.FreelancerService;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/freelancers")
@RequiredArgsConstructor
public class FreelancerController {

    private final FreelancerService freelancerService;


    @GetMapping("/me")
    @PreAuthorize("hasRole('FREELANCER')")
    public ResponseEntity<FreelancerResponse> getMyProfile(
            Authentication authentication
    ) {
        return ResponseEntity.ok(
                freelancerService.getMyProfile(authentication)
        );
    }


    @PutMapping("/me")
    @PreAuthorize("hasRole('FREELANCER')")
    public ResponseEntity<FreelancerResponse> updateMyProfile(
            @RequestBody FreelancerRequest request,
            Authentication authentication
    ) {
        return ResponseEntity.ok(
                freelancerService.updateMyProfile(
                        request,
                        authentication
                )
        );
    }


    @GetMapping("/projects")
    @PreAuthorize("hasRole('FREELANCER')")
    public ResponseEntity<Page<ProjectResponse>> getAvailableProjects(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size
    ) {
        return ResponseEntity.ok(
                freelancerService.getAvailableProjects(
                        page,
                        size
                )
        );
    }


    @GetMapping("/my-offers")
    @PreAuthorize("hasRole('FREELANCER')")
    public ResponseEntity<Page<OfferResponse>> getMyOffers(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            Authentication authentication
    ) {
        return ResponseEntity.ok(
                freelancerService.getMyOffers(
                        page,
                        size,
                        authentication
                )
        );
    }
}
```

# src\main\java\org\example\digipme\Controller\OfferController.java

```java
package org.example.digipme.Controller;

import lombok.RequiredArgsConstructor;
import org.example.digipme.DTOs.OfferRequest;
import org.example.digipme.DTOs.OfferResponse;
import org.example.digipme.Service.OfferService;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/offers")
@RequiredArgsConstructor
public class OfferController {

    private final OfferService offerService;


    @PostMapping
    @PreAuthorize("hasRole('FREELANCER')")
    public ResponseEntity<OfferResponse> createOffer(
            @RequestBody OfferRequest request,
            Authentication authentication
    ) {

        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(offerService.createOffer(request, authentication));
    }


    @GetMapping
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<Page<OfferResponse>> getAllOffers(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size
    ) {

        return ResponseEntity.ok(
                offerService.getAllOffers(page, size)
        );
    }


    @GetMapping("/{id}")
    @PreAuthorize("hasAnyRole('PME', 'FREELANCER', 'ADMIN')")
    public ResponseEntity<OfferResponse> getOfferById(
            @PathVariable Long id
    ) {

        return ResponseEntity.ok(
                offerService.getOfferById(id)
        );
    }

    @GetMapping("/project/{projectId}")
    @PreAuthorize("hasAnyRole('PME', 'ADMIN')")
    public ResponseEntity<Page<OfferResponse>> getOffersByProject(
            @PathVariable Long projectId,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size
    ) {

        return ResponseEntity.ok(
                offerService.getOffersByProject(
                        projectId,
                        page,
                        size
                )
        );
    }

    @GetMapping("/my-offers")
    @PreAuthorize("hasRole('FREELANCER')")
    public ResponseEntity<Page<OfferResponse>> getMyOffers(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            Authentication authentication
    ) {

        return ResponseEntity.ok(
                offerService.getMyOffers(page, size, authentication)
        );
    }


    @DeleteMapping("/{id}")
    @PreAuthorize("hasRole('FREELANCER')")
    public ResponseEntity<Void> deleteOffer(
            @PathVariable Long id ,
            Authentication authentication
    ) {

        offerService.deleteOffer(id, authentication);

        return ResponseEntity.noContent().build();
    }
}
```

# src\main\java\org\example\digipme\Controller\PMEController.java

```java
package org.example.digipme.Controller;

import lombok.RequiredArgsConstructor;
import org.example.digipme.DTOs.OfferResponse;
import org.example.digipme.DTOs.PMERequest;
import org.example.digipme.DTOs.PMEResponse;
import org.example.digipme.Service.PMEService;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/pme")
@RequiredArgsConstructor
public class PMEController {

    private final PMEService pmeService;

    @GetMapping("/me")
    @PreAuthorize("hasRole('PME')")
    public ResponseEntity<PMEResponse> getMyProfile(
            Authentication authentication
    ) {
        return ResponseEntity.ok(
                pmeService.getMyProfile(authentication)
        );
    }

    @PutMapping("/me")
    @PreAuthorize("hasRole('PME')")
    public ResponseEntity<PMEResponse> updateMyProfile(
            @RequestBody PMERequest request,
            Authentication authentication
    ) {
        return ResponseEntity.ok(
                pmeService.updateMyProfile(request, authentication)
        );
    }

    @GetMapping("/projects/{projectId}/offers")
    @PreAuthorize("hasRole('PME')")
    public ResponseEntity<Page<OfferResponse>> getProjectOffers(
            @PathVariable Long projectId,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            Authentication authentication
    ) {
        return ResponseEntity.ok(
                pmeService.getProjectOffers(
                        projectId,
                        page,
                        size,
                        authentication
                )
        );
    }

    @PutMapping("/offers/{offerId}/accept")
    @PreAuthorize("hasRole('PME')")
    public ResponseEntity<OfferResponse> acceptOffer(
            @PathVariable Long offerId,
            Authentication authentication
    ) {
        return ResponseEntity.ok(
                pmeService.acceptOffer(
                        offerId,
                        authentication
                )
        );
    }
}
```

# src\main\java\org\example\digipme\Controller\ProjectController.java

```java
package org.example.digipme.Controller;

import lombok.RequiredArgsConstructor;
import org.example.digipme.DTOs.ProjectRequest;
import org.example.digipme.DTOs.ProjectResponse;
import org.example.digipme.Service.ProjectService;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/projects")
@RequiredArgsConstructor
public class ProjectController {

    private final ProjectService projectService;

    @PostMapping
    @PreAuthorize("hasRole('PME')")
    public ResponseEntity<ProjectResponse> createProject(
            @RequestBody ProjectRequest request,
            Authentication authentication
    ) {

        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(projectService.createProject(request, authentication));
    }

    @GetMapping
    @PreAuthorize("hasAnyRole('PME', 'FREELANCER', 'ADMIN')")
    public ResponseEntity<Page<ProjectResponse>> getAllProjects(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size
    ) {

        return ResponseEntity.ok(
                projectService.getAllProjects(page, size)
        );
    }


    @GetMapping("/{id}")
    @PreAuthorize("hasAnyRole('PME', 'FREELANCER', 'ADMIN')")
    public ResponseEntity<ProjectResponse> getProjectById(
            @PathVariable Long id
    ) {

        return ResponseEntity.ok(
                projectService.getProjectById(id)
        );
    }


    @GetMapping("/my-projects")
    @PreAuthorize("hasRole('PME')")
    public ResponseEntity<Page<ProjectResponse>> getMyProjects(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            Authentication authentication
    ) {

        return ResponseEntity.ok(
                projectService.getMyProjects(page, size, authentication)
        );
    }


    @PutMapping("/{id}")
    @PreAuthorize("hasRole('PME')")
    public ResponseEntity<ProjectResponse> updateProject(
            @PathVariable Long id,
            @RequestBody ProjectRequest request,
            Authentication authentication
    ) {

        return ResponseEntity.ok(
                projectService.updateProject(id, request, authentication)
        );
    }

    @DeleteMapping("/{id}")
    @PreAuthorize("hasAnyRole('PME', 'ADMIN')")
    public ResponseEntity<Void> deleteProject(
            @PathVariable Long id,
            Authentication authentication
    ) {

        projectService.deleteProject(id, authentication);

        return ResponseEntity.noContent().build();
    }
}


```

# src\main\java\org\example\digipme\Controller\ReviewController.java

```java
package org.example.digipme.Controller;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.example.digipme.DTOs.ReviewRequest;
import org.example.digipme.DTOs.ReviewResponse;
import org.example.digipme.Service.ReviewService;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/reviews")
@RequiredArgsConstructor
public class ReviewController {

    private final ReviewService reviewService;


    // =========================
    // CREER UNE REVIEW
    // =========================

    @PostMapping
    @PreAuthorize("hasRole('PME')")
    public ResponseEntity<ReviewResponse> createReview(
            @Valid @RequestBody ReviewRequest request,
            Authentication authentication
    ) {

        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(
                        reviewService.createReview(
                                request,
                                authentication
                        )
                );
    }


    // =========================
    // CONSULTER UNE REVIEW
    // =========================

    @GetMapping("/{id}")
    @PreAuthorize("hasAnyRole('PME', 'FREELANCER', 'ADMIN')")
    public ResponseEntity<ReviewResponse> getReviewById(
            @PathVariable Long id
    ) {

        return ResponseEntity.ok(
                reviewService.getReviewById(id)
        );
    }


    // =========================
    // TOUTES LES REVIEWS
    // =========================

    @GetMapping
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<Page<ReviewResponse>> getAllReviews(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size
    ) {

        return ResponseEntity.ok(
                reviewService.getAllReviews(page, size)
        );
    }


    // =========================
    // REVIEWS D'UN FREELANCER
    // =========================

    @GetMapping("/freelancer/{freelancerId}")
    @PreAuthorize("hasAnyRole('PME', 'FREELANCER', 'ADMIN')")
    public ResponseEntity<Page<ReviewResponse>> getReviewsByFreelancer(
            @PathVariable Long freelancerId,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size
    ) {

        return ResponseEntity.ok(
                reviewService.getReviewsByFreelancer(
                        freelancerId,
                        page,
                        size
                )
        );
    }


    // =========================
    // SUPPRIMER UNE REVIEW
    // =========================

    @DeleteMapping("/{id}")
    @PreAuthorize("hasAnyRole('PME', 'ADMIN')")
    public ResponseEntity<Void> deleteReview(
            @PathVariable Long id,
            Authentication authentication
    ) {

        reviewService.deleteReview(
                id,
                authentication
        );

        return ResponseEntity.noContent().build();
    }
}

```

# src\main\java\org\example\digipme\Controller\UserController.java

```java
package org.example.digipme.Controller;

import lombok.RequiredArgsConstructor;
import org.example.digipme.DTOs.UserRequest;
import org.example.digipme.DTOs.UserResponse;
import org.example.digipme.Enums.RoleUser;
import org.example.digipme.Service.UserService;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;

    @GetMapping
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<Page<UserResponse>> getAllUsers(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size
    ) {
        return ResponseEntity.ok(
                userService.getAllUsers(page, size)
        );
    }


    @GetMapping("/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<UserResponse> getUserById(
            @PathVariable Long id
    ) {
        return ResponseEntity.ok(
                userService.getUserById(id)
        );
    }


    @GetMapping("/role/{role}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<Page<UserResponse>> getUsersByRole(
            @PathVariable RoleUser role,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size
    ) {
        return ResponseEntity.ok(
                userService.getUsersByRole(role, page, size)
        );
    }

    @DeleteMapping("/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<Void> deleteUser(
            @PathVariable Long id
    ) {
        userService.deleteUser(id);

        return ResponseEntity.noContent().build();
    }

    @PostMapping("/add")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<UserResponse> addUser(
            @RequestBody UserRequest userRequest
    ) {

        return ResponseEntity.ok(
                userService.addUser(userRequest)
        );
    }
}

```

# src\main\java\org\example\digipme\DigiPmeApplication.java

```java
package org.example.digipme;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class DigiPmeApplication {

    public static void main(String[] args) {
        SpringApplication.run(DigiPmeApplication.class, args);
    }

}

```

# src\main\java\org\example\digipme\DTOs\FreelancerRequest.java

```java
package org.example.digipme.DTOs;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class FreelancerRequest {

    @NotBlank(message = "Le nom est obligatoire")
    private String nom;

    @NotBlank(message = "L'email est obligatoire")
    @Email(message = "L'email doit être valide")
    private String email;

    @NotBlank(message = "Le téléphone est obligatoire")
    private String telephone;

    private String adresse;

    @NotBlank(message = "La spécialité est obligatoire")
    private String specialite;
}

```

# src\main\java\org\example\digipme\DTOs\FreelancerResponse.java

```java
package org.example.digipme.DTOs;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class FreelancerResponse {

    private Long id;
    private String nom;
    private String email;
    private String telephone;
    private String adresse;
    private String specialite;
}

```

# src\main\java\org\example\digipme\DTOs\OfferRequest.java

```java
package org.example.digipme.DTOs;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.PositiveOrZero;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class OfferRequest {

    @NotBlank(message = "La description est obligatoire")
    private String description;

    @NotNull(message = "Le prix proposé est obligatoire")
    @PositiveOrZero(message = "Le prix doit être positif")
    private Double prixProposer;

    @NotNull(message = "La date de livraison est obligatoire")
    private LocalDate dateLivraison;

    @NotNull(message = "Le projet est obligatoire")
    private Long projectId;

    @NotNull(message = "Le freelancer est obligatoire")
    private Long freelancerId;
}

```

# src\main\java\org\example\digipme\DTOs\OfferResponse.java

```java
package org.example.digipme.DTOs;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class OfferResponse {

    private Long id;
    private String description;
    private Double prixProposer;
    private LocalDate dateLivraison;
    private Long projectId;
    private Long freelancerId;

}

```

# src\main\java\org\example\digipme\DTOs\PMERequest.java

```java
package org.example.digipme.DTOs;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class PMERequest {

    @NotBlank(message = "Le nom est obligatoire")
    private String nom;

    @NotBlank(message = "Le RC est obligatoire")
    private String rc;

    @NotBlank(message = "L'email est obligatoire")
    @Email(message = "L'email doit être valide")
    private String email;

    @NotBlank(message = "Le téléphone est obligatoire")
    private String telephone;

    private String adresse;

    @NotBlank(message = "L'activité est obligatoire")
    private String activite;
}
```

# src\main\java\org\example\digipme\DTOs\PMEResponse.java

```java
package org.example.digipme.DTOs;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class PMEResponse {

    private Long id;
    private String nom;
    private String rc;
    private String email;
    private String telephone;
    private String adresse;
    private String activite;
}
```

# src\main\java\org\example\digipme\DTOs\ProjectRequest.java

```java
package org.example.digipme.DTOs;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.PositiveOrZero;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.example.digipme.Enums.ActiviteType;

import java.time.LocalDate;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ProjectRequest {

    @NotBlank(message = "Le titre est obligatoire")
    private String titre;

    @NotNull(message = "Le type est obligatoire")
    private ActiviteType type;

    private String description;

    @NotNull(message = "Le prix est obligatoire")
    @PositiveOrZero(message = "Le prix doit être positif")
    private Double prix;

    @NotNull(message = "La date est obligatoire")
    private LocalDate date;
}

```

# src\main\java\org\example\digipme\DTOs\ProjectResponse.java

```java
package org.example.digipme.DTOs;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.example.digipme.Enums.ActiviteType;

import java.time.LocalDate;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ProjectResponse {

    private Long id;
    private String titre;
    private ActiviteType type;
    private String description;
    private Double prix;
    private LocalDate date;
}
```

# src\main\java\org\example\digipme\DTOs\ReviewRequest.java

```java
package org.example.digipme.DTOs;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ReviewRequest {

    @NotNull
    private Long note;
    @NotBlank
    private String commentaire;

    @NotNull(message = "Le projet est obligatoire")
    private Long projectId;

    @NotNull(message = "Le PME est obligatoire")
    private Long pmeId;

    @NotNull(message = "Le freelancer est obligatoire")
    private Long freelancerId;


}

```

# src\main\java\org\example\digipme\DTOs\ReviewResponse.java

```java
package org.example.digipme.DTOs;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ReviewResponse {
    private Long id;
    private Long note;
    private String commentaire;
    private Long projectId;
    private Long pmeId;
    private Long freelancerId;
}

```

# src\main\java\org\example\digipme\DTOs\UserRequest.java

```java
package org.example.digipme.DTOs;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UserRequest {

    @NotBlank(message = "Le nom est obligatoire")
    private String nom;

    @NotBlank(message = "L'email est obligatoire")
    @Email(message = "L'email doit être valide")
    private String email;

    @NotBlank(message = "Le mot de passe est obligatoire")
    private String password;

    @NotBlank(message = "Le téléphone est obligatoire")
    private String telephone;

    private String adresse;
}

```

# src\main\java\org\example\digipme\DTOs\UserResponse.java

```java
package org.example.digipme.DTOs;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class UserResponse {

    private Long id;
    private String nom;
    private String email;
    private String telephone;
    private String adresse;
}

```

# src\main\java\org\example\digipme\Enums\ActiviteType.java

```java
package org.example.digipme.Enums;

public enum ActiviteType {
    
}

```

# src\main\java\org\example\digipme\Enums\OfferStatus.java

```java
package org.example.digipme.Enums;

public enum OfferStatus {

    EN_ATTENTE,
    ACCEPTEE,
    REFUSEE
}

```

# src\main\java\org\example\digipme\Enums\ProjectStatus.java

```java
package org.example.digipme.Enums;

public enum ProjectStatus {

    EN_ATTENTE,
    EN_COURS,
    TERMINE
}
```

# src\main\java\org\example\digipme\Enums\RoleUser.java

```java
package org.example.digipme.Enums;

public enum RoleUser {
    ADMIN,
    PME,
    FREELANCER
}


```

# src\main\java\org\example\digipme\Mappers\FreelancerMapper.java

```java
package org.example.digipme.Mappers;

import org.example.digipme.DTOs.FreelancerRequest;
import org.example.digipme.DTOs.FreelancerResponse;
import org.example.digipme.Model.Freelancer;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface FreelancerMapper {
    Freelancer toEntity(FreelancerRequest request);
    FreelancerResponse toResponse(Freelancer freelancer);

    void updateEntity(FreelancerRequest request, Freelancer freelancer);
}



```

# src\main\java\org\example\digipme\Mappers\OfferMapper.java

```java
package org.example.digipme.Mappers;

import org.example.digipme.DTOs.OfferRequest;
import org.example.digipme.DTOs.OfferResponse;
import org.example.digipme.Model.Offer;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface OfferMapper {
    Offer toEntity(OfferRequest request);
    OfferResponse toResponse(Offer offer);
}

```

# src\main\java\org\example\digipme\Mappers\PMEMapper.java

```java
package org.example.digipme.Mappers;

import org.example.digipme.DTOs.PMERequest;
import org.example.digipme.DTOs.PMEResponse;
import org.example.digipme.Model.PME;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface PMEMapper {
    PME toEntity(PMERequest request);
    PMEResponse toResponse(PME pme);

    void updateEntity(PMERequest request, PME pme);
}


```

# src\main\java\org\example\digipme\Mappers\ProjectMapper.java

```java
package org.example.digipme.Mappers;

import org.example.digipme.DTOs.ProjectRequest;
import org.example.digipme.DTOs.ProjectResponse;
import org.example.digipme.Model.Project;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface ProjectMapper {
    Project toEntity(ProjectRequest request);
    ProjectResponse toResponse(Project project);

    void updateEntity(ProjectRequest request, Project project);
}

```

# src\main\java\org\example\digipme\Mappers\ReviewMapper.java

```java
package org.example.digipme.Mappers;

import org.example.digipme.DTOs.ReviewRequest;
import org.example.digipme.DTOs.ReviewResponse;
import org.example.digipme.Model.Review;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface ReviewMapper {
    Review toEntity(ReviewRequest reviewRequest);
    ReviewResponse toResponse(Review review);

}

```

# src\main\java\org\example\digipme\Mappers\UserMapper.java

```java
package org.example.digipme.Mappers;

import org.example.digipme.DTOs.UserRequest;
import org.example.digipme.DTOs.UserResponse;
import org.example.digipme.Model.UserApp;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface UserMapper {

    UserApp toEntity(UserRequest request);

    UserResponse toResponse(UserApp userApp);
}

```

# src\main\java\org\example\digipme\Model\Freelancer.java

```java
package org.example.digipme.Model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Entity
@Builder
@DiscriminatorValue("FREELANCER")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Freelancer extends UserApp{


    @NotBlank
    private String specialite ;

    @OneToMany(mappedBy = "freelancer")
    @Builder.Default
    private List<Offer> offers = new ArrayList<>();





//    @Id
//    @GeneratedValue
//    private Long id;
//    @NotBlank
//    private String nom;
//    @NotBlank
//    @Email
//    private String email;
//    @NotBlank
//    private String password;
//    @NotBlank
//    private String telephone;
//    private String adresse;


}

```

# src\main\java\org\example\digipme\Model\Offer.java

```java
package org.example.digipme.Model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.example.digipme.Enums.OfferStatus;

import java.time.LocalDate;

@Entity
@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Offer {
    @Id
    @GeneratedValue
    private Long id;
    @NotBlank
    private String description;
    @NotNull
    private Double prixProposer;
    @NotNull
    private LocalDate dateLivraison;
    @Enumerated(EnumType.STRING)
    private OfferStatus status;

    @ManyToOne
    @JoinColumn(name = "project_id", nullable = false)
    private Project project;

    @ManyToOne
    @JoinColumn(name = "freelancer_id", nullable = false)
    private Freelancer freelancer;

}

```

# src\main\java\org\example\digipme\Model\PME.java

```java
package org.example.digipme.Model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Entity
@Builder
@DiscriminatorValue("PME")
@NoArgsConstructor
@AllArgsConstructor
@Data
public class PME extends UserApp {

    @NotBlank
    private String RC;
    @NotBlank
    private String activite ;

    @OneToMany(mappedBy = "pme")
    private List<Project> projects;



//    @Id
//    @GeneratedValue
//    private Long id;
//    @NotBlank
//    private String nom;
//    @NotBlank
//    @Email
//    private String email;
//    @NotBlank
//    private String password;
//    @NotBlank
//    private String telephone;
//    private String adresse;



}

```

# src\main\java\org\example\digipme\Model\Project.java

```java
package org.example.digipme.Model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.example.digipme.Enums.ActiviteType;
import org.example.digipme.Enums.ProjectStatus;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Entity
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Project {
    @Id
    @GeneratedValue
    private Long id;
    @NotBlank
    private String titre;
    @NotNull
    private ActiviteType type ;
    private String description;
    @NotNull
    private Double prix;
    @NotNull
    private LocalDate dateCreation;
    @Enumerated(EnumType.STRING)
    private ProjectStatus status;

    @ManyToOne
    @JoinColumn(name = "pme_id")
    private PME pme;
    @OneToMany(
            mappedBy = "project",
            cascade = CascadeType.ALL,
            orphanRemoval = true)
    @Builder.Default
    private List<Offer> offers = new ArrayList<>();

}

```

# src\main\java\org\example\digipme\Model\Review.java

```java
package org.example.digipme.Model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Review {
    @Id
    @GeneratedValue
    private Long id;
    @NotNull
    private Long note;
    @NotBlank
    private String commentaire;

    @ManyToOne
    @JoinColumn(name = "project_id")
    private Project project;

    @ManyToOne
    @JoinColumn(name = "pme_id")
    private PME pme;

    @ManyToOne
    @JoinColumn(name = "freelancer_id")
    private Freelancer freelancer;



}

```

# src\main\java\org\example\digipme\Model\UserApp.java

```java
package org.example.digipme.Model;

import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.example.digipme.Enums.RoleUser;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.List;

@Entity
@Builder
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
@DiscriminatorColumn(name = "user_type", discriminatorType = DiscriminatorType.STRING)
@DiscriminatorValue("ADMIN")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserApp implements UserDetails {
        @Id
        @GeneratedValue
        private Long id;
        @NotBlank
        private String nom;
        @NotBlank
        @Email
        @Column(unique = true)
        private String email;
        @NotBlank
        private String password;
        @NotBlank
        private String telephone;
        private String adresse;

        @Enumerated(EnumType.STRING)
        private RoleUser role;

        @Override
        public Collection<? extends GrantedAuthority> getAuthorities() {
                return List.of(
                        new SimpleGrantedAuthority("ROLE_" + role.name())
                );
        }

        @Override
        public String getUsername() {
                return email;
        }

}

```

# src\main\java\org\example\digipme\Repository\FreelancerRepository.java

```java
package org.example.digipme.Repository;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import org.example.digipme.Model.Freelancer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FreelancerRepository extends JpaRepository<Freelancer, Long> {
    boolean findByEmail(@NotBlank @Email String email);
}

```

# src\main\java\org\example\digipme\Repository\OfferRepository.java

```java
package org.example.digipme.Repository;

import org.example.digipme.Model.Offer;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.nio.channels.FileChannel;

public interface OfferRepository extends JpaRepository<Offer, Long> {
    Page<Offer> findByProjectId(Long projectId, Pageable pageable);

    Page<Offer> findByFreelancerId(Long id, Pageable pageable);

    boolean existsByProjectIdAndFreelancerId(Long id, Long id1);
}

```

# src\main\java\org\example\digipme\Repository\PMERepository.java

```java
package org.example.digipme.Repository;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import org.example.digipme.Model.PME;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PMERepository extends JpaRepository<PME,Long> {
    boolean findByEmail(@NotBlank @Email String email);
}

```

# src\main\java\org\example\digipme\Repository\ProjectRepository.java

```java
package org.example.digipme.Repository;

import org.example.digipme.Model.Project;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.nio.channels.FileChannel;

public interface ProjectRepository extends JpaRepository<Project, Long> {
    Page<Project> findByPmeId(Long id, Pageable pageable);
}

```

# src\main\java\org\example\digipme\Repository\ReviewRepository.java

```java
package org.example.digipme.Repository;

import org.example.digipme.DTOs.ReviewResponse;
import org.example.digipme.Model.Review;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.nio.channels.FileChannel;

public interface ReviewRepository extends JpaRepository<Review, Long> {
    boolean existsByProjectIdAndFreelancerId(Long id, Long id1);

    Page<Review> findByFreelancerId(Long freelancerId, Pageable pageable);
}

```

# src\main\java\org\example\digipme\Repository\UserAppRepository.java

```java
package org.example.digipme.Repository;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import org.example.digipme.Enums.RoleUser;
import org.example.digipme.Model.UserApp;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.nio.channels.FileChannel;

public interface UserAppRepository extends JpaRepository<UserApp,Long> {
    boolean findByEmail(@NotBlank @Email String email);

    UserApp findUserAppByNom(@NotBlank String nom);

    UserApp findUserAppByEmail(@NotBlank @Email String email);

    Page<UserApp> findByRole(RoleUser role, Pageable pageable);
}

```

# src\main\java\org\example\digipme\security\CustomUserDetailsService.java

```java
package org.example.digipme.security;

import lombok.RequiredArgsConstructor;
import org.example.digipme.Model.UserApp;
import org.example.digipme.Repository.UserAppRepository;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;

@Service
@RequiredArgsConstructor
public class CustomUserDetailsService implements UserDetailsService {

    private final UserAppRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        UserApp user = userRepository.findUserAppByEmail(email);
        if (user == null) {
            throw new UsernameNotFoundException("Utilisateur introuvable");
        }
        List<SimpleGrantedAuthority> authorities = Collections.singletonList(
                new SimpleGrantedAuthority("ROLE_" + user.getRole().name())
        );

        return org.springframework.security.core.userdetails.User
                .withUsername(user.getEmail())
                .password(user.getPassword())
                .authorities( authorities)
                .build();

    }






//    public UserDetails loadUserByEmail(String email) throws UsernameNotFoundException {
//        UserApp user = userRepository.findUserByEmail(email);
//        if (user == null) {
//            throw new UsernameNotFoundException("Utilisateur introuvable");
//        }
//
//
//        return new org.springframework.security.core.userdetails.UserApp
//                (user.getNom(),user.getPassword(),new ArrayList<>());
//    }


}

```

# src\main\java\org\example\digipme\security\JwtAuthenticationEntryPoint.java

```java
package org.example.digipme.security;

public class JwtAuthenticationEntryPoint {
}

```

# src\main\java\org\example\digipme\security\JwtService.java

```java
package org.example.digipme.security;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import javax.crypto.SecretKey;
import java.util.Date;


@Service
@RequiredArgsConstructor
public class JwtService {

    private final String secretKey = "mySecretKeymySecretKeymySecretKeymySecretKey";
    private final long expiration = 2592000000L;


    private SecretKey getKey() {
             return Keys.hmacShaKeyFor(secretKey.getBytes());}


    public String generateToken(UserDetails userApp) {
        return Jwts.builder()
                .setSubject(userApp.getUsername())
                .claim("role", userApp.getAuthorities())
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + expiration))
                .signWith(getKey())
                .compact();
    }
    public String extractUsername(String token) {
        return Jwts.parserBuilder().setSigningKey(getKey())
                .build().parseClaimsJws(token)
                .getBody().getSubject();
    }


//    public boolean validateToken(String token){
//        try{
//            Jwts.parserBuilder().setSigningKey(getKey()).build().parseClaimsJws(token);
//            return true;
//        } catch (RuntimeException e) {
//            return false;
//        }
//    }

    public boolean isTokenValid(String token, UserDetails userDetails) {
        try {
            String username = extractUsername(token);
            return username.equals(userDetails.getUsername()) && !isTokenExpired(token);
        } catch (Exception e) {
            return false;
        }
    }

    public Date extractExpiration(String token){
        return Jwts.parserBuilder().setSigningKey(getKey())
                .build().parseClaimsJws(token)
                .getBody().getExpiration();
    }

    public boolean isTokenExpired(String token) {
        return extractExpiration(token).before(new Date());
    }

//
//package com.healthcare.security;
//
//import io.jsonwebtoken.*;
//import io.jsonwebtoken.security.Keys;
//import org.springframework.beans.factory.annotation.Value;
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.stereotype.Service;
//
//import javax.crypto.SecretKey;
//import java.util.Date;
//
//@Service
//public class JwtService {
//
//    @Value("${jwt.secret}")
//    private String secret;
//
//    @Value("${jwt.expiration}")
//    private long expiration;
//
//    private SecretKey getKey() {
//        return Keys.hmacShaKeyFor(secret.getBytes());
//    }
//
//    // Générer le token
//    public String generateToken(String username) {
//        return Jwts.builder()
//                .setSubject(username)
//                .setIssuedAt(new Date())
//                .setExpiration(new Date(System.currentTimeMillis() + expiration))
//                .signWith(getKey())
//                .compact();
//    }
//
//    // Extraire le username
//    public String extractUsername(String token) {
//        return Jwts.parserBuilder()
//                .setSigningKey(getKey()).build()
//                .parseClaimsJws(token).getBody().getSubject();
//    }
//
//    // Valider le token
//
//
//    private boolean isExpired(String token) {
//        Date exp = Jwts.parserBuilder().setSigningKey(getKey()).build()
//                .parseClaimsJws(token).getBody().getExpiration();
//        return exp.before(new Date());
//    }
//}
//

//    public boolean validatToken(String token) {
//        try {
//            Jwts.parserBuilder().setSigningKey(getKey()).build().parseClaimsJws(token);
//            return true;
//        } catch (Exception e) {
//            return false;
//        }
//    }
//
//    public Date extratExpiration(String token) {
//        return Jwts.parserBuilder()
//                .setSigningKey(getKey())
//                .build()
//                .parseClaimsJws(token)
//                .getBody()
//                .getExpiration();
//    }





}

```

# src\main\java\org\example\digipme\Service\FreelancerService.java

```java
package org.example.digipme.Service;

import lombok.RequiredArgsConstructor;
import org.example.digipme.DTOs.FreelancerRequest;
import org.example.digipme.DTOs.FreelancerResponse;
import org.example.digipme.DTOs.OfferResponse;
import org.example.digipme.DTOs.ProjectResponse;
import org.example.digipme.Mappers.FreelancerMapper;
import org.example.digipme.Mappers.OfferMapper;
import org.example.digipme.Mappers.ProjectMapper;
import org.example.digipme.Model.Freelancer;
import org.example.digipme.Model.UserApp;
import org.example.digipme.Repository.OfferRepository;
import org.example.digipme.Repository.ProjectRepository;
import org.example.digipme.Repository.UserAppRepository;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class FreelancerService {

    private final UserAppRepository userRepository;
    private final ProjectRepository projectRepository;
    private final OfferRepository offerRepository;

    private final FreelancerMapper freelancerMapper;
    private final OfferMapper offerMapper;
    private final ProjectMapper projectMapper;



    @Cacheable(
            value = "freelancer",
            key = "'profile:' + #authentication.name"
    )
    public FreelancerResponse getMyProfile(
            Authentication authentication
    ) {

        Freelancer freelancer =
                getCurrentFreelancer(authentication);

        return freelancerMapper.toResponse(freelancer);
    }


    // =========================
    // MODIFIER PROFIL
    // =========================

    @CacheEvict(
            value = "freelancer",
            key = "'profile:' + #authentication.name"
    )
    public FreelancerResponse updateMyProfile(
            FreelancerRequest request,
            Authentication authentication
    ) {

        Freelancer freelancer =
                getCurrentFreelancer(authentication);

        freelancerMapper.updateEntity(
                request,
                freelancer
        );

        Freelancer updated =
                userRepository.save(freelancer);

        return freelancerMapper.toResponse(updated);
    }


    // =========================
    // PROJETS DISPONIBLES
    // =========================

    @Cacheable(
            value = "projects",
            key = "'available:page:' + #page + ':size:' + #size"
    )
    public Page<ProjectResponse> getAvailableProjects(
            int page,
            int size
    ) {

        Pageable pageable =
                PageRequest.of(page, size);

        return projectRepository
                .findAll(pageable)
                .map(projectMapper::toResponse);
    }


    // =========================
    // MES OFFRES
    // =========================

    @Cacheable(
            value = "offers",
            key = "'freelancer:' + #authentication.name + ':page:' + #page + ':size:' + #size"
    )
    public Page<OfferResponse> getMyOffers(
            int page,
            int size,
            Authentication authentication
    ) {

        Freelancer freelancer =
                getCurrentFreelancer(authentication);

        Pageable pageable =
                PageRequest.of(page, size);

        return offerRepository
                .findByFreelancerId(
                        freelancer.getId(),
                        pageable
                )
                .map(offerMapper::toResponse);
    }


    // =========================
    // UTILITAIRE
    // =========================

    private Freelancer getCurrentFreelancer(
            Authentication authentication
    ) {

        String email = authentication.getName();

        UserApp user = userRepository
                .findUserAppByEmail(email);

        if (!(user instanceof Freelancer freelancer)) {
            throw new AccessDeniedException(
                    "Vous devez être un freelancer"
            );
        }

        return freelancer;
    }
}

```

# src\main\java\org\example\digipme\Service\OfferService.java

```java
package org.example.digipme.Service;

import lombok.RequiredArgsConstructor;
import org.example.digipme.Model.Freelancer;
import org.example.digipme.Model.Offer;
import org.example.digipme.Model.Project;
import org.example.digipme.DTOs.OfferRequest;
import org.example.digipme.DTOs.OfferResponse;
import org.example.digipme.Mappers.OfferMapper;
import org.example.digipme.Repository.OfferRepository;
import org.example.digipme.Repository.ProjectRepository;
import org.example.digipme.Repository.UserAppRepository;
import org.example.digipme.Model.UserApp;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class OfferService {

    private final OfferRepository offerRepository;
    private final ProjectRepository projectRepository;
    private final UserAppRepository userRepository;
    private final OfferMapper offerMapper;


    @CacheEvict(value = "offers", allEntries = true)
    public OfferResponse createOffer(
            OfferRequest request,
            Authentication authentication) {

        UserApp user = getCurrentUser(authentication);
        if (!(user instanceof Freelancer freelancer)) {
            throw new AccessDeniedException(
                    "Seul un freelancer peut créer une offre"
            );
        }
        Project project = projectRepository
                .findById(request.getProjectId())
                .orElseThrow(() ->
                        new RuntimeException(
                                "Projet introuvable avec l'id : "
                                        + request.getProjectId()
                        ));

        Offer offer = offerMapper.toEntity(request);
        offer.setProject(project);
        offer.setFreelancer(freelancer);
        Offer savedOffer = offerRepository.save(offer);
        return offerMapper.toResponse(savedOffer);
    }


    @Cacheable(value = "offers", key = "'page:' + #page + ':size:' + #size")
    public Page<OfferResponse> getAllOffers(int page, int size) {
        Pageable pageable = PageRequest.of(page, size);
        return offerRepository
                .findAll(pageable)
                .map(offerMapper::toResponse);
    }


    @Cacheable(value = "offers", key = "'id:' + #id")
    public OfferResponse getOfferById(Long id) {
        Offer offer = offerRepository.findById(id)
                .orElseThrow(() ->
                        new RuntimeException(
                                "Offre introuvable avec l'id : " + id
                        ));
        return offerMapper.toResponse(offer);
    }


    @Cacheable(value = "offers",
            key = "'project:' + #projectId + ':page:' + #page + ':size:' + #size")
    public Page<OfferResponse> getOffersByProject(Long projectId, int page, int size) {
        if (!projectRepository.existsById(projectId)) {
            throw new RuntimeException(
                    "Projet introuvable avec l'id : " + projectId
            );
        }
        Pageable pageable = PageRequest.of(page, size);
        return offerRepository
                .findByProjectId(projectId, pageable)
                .map(offerMapper::toResponse);
    }


    public Page<OfferResponse> getMyOffers( int page, int size, Authentication authentication) {
        UserApp user = getCurrentUser(authentication);
        if (!(user instanceof Freelancer freelancer)) {
            throw new AccessDeniedException(
                    "Seul un freelancer peut consulter ses offres"
            );
        }
        Pageable pageable = PageRequest.of(page, size);
        return offerRepository
                .findByFreelancerId(freelancer.getId(), pageable)
                .map(offerMapper::toResponse);
    }


    @CacheEvict(value = "offers", allEntries = true)
    public void deleteOffer( Long id, Authentication authentication) {
        UserApp user = getCurrentUser(authentication);
        if (!(user instanceof Freelancer freelancer)) {
            throw new AccessDeniedException(
                    "Seul un freelancer peut supprimer une offre"
            );
        }
        Offer offer = offerRepository.findById(id)
                .orElseThrow(() ->
                        new RuntimeException(
                                "Offre introuvable avec l'id : " + id
                        )
                );
        if (!offer.getFreelancer()
                .getId()
                .equals(freelancer.getId())) {
            throw new AccessDeniedException(
                    "Vous ne pouvez pas supprimer cette offre"
            );
        }
        offerRepository.delete(offer);
    }


    private UserApp getCurrentUser(Authentication authentication) {
        String email = authentication.getName();
        return userRepository.findUserAppByEmail(email);

    }
}
```

# src\main\java\org\example\digipme\Service\PMEService.java

```java
package org.example.digipme.Service;

import lombok.RequiredArgsConstructor;
import org.example.digipme.DTOs.OfferResponse;
import org.example.digipme.DTOs.PMERequest;
import org.example.digipme.DTOs.PMEResponse;
import org.example.digipme.Enums.OfferStatus;
import org.example.digipme.Mappers.OfferMapper;
import org.example.digipme.Mappers.PMEMapper;
import org.example.digipme.Model.Offer;
import org.example.digipme.Model.PME;
import org.example.digipme.Model.Project;
import org.example.digipme.Model.UserApp;
import org.example.digipme.Repository.OfferRepository;
import org.example.digipme.Repository.ProjectRepository;
import org.example.digipme.Repository.UserAppRepository;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class PMEService {

    private final UserAppRepository userRepository;
    private final ProjectRepository projectRepository;
    private final OfferRepository offerRepository;

    private final PMEMapper pmeMapper;
    private final OfferMapper offerMapper;


    @Cacheable(value = "pme", key = "'profile:' + #authentication.name"
    )
    public PMEResponse getMyProfile(
            Authentication authentication
    ) {

        PME pme = getCurrentPME(authentication);

        return pmeMapper.toResponse(pme);
    }



    @CacheEvict(
            value = "pme",
            key = "'profile:' + #authentication.name"
    )
    public PMEResponse updateMyProfile(
            PMERequest request,
            Authentication authentication
    ) {

        PME pme = getCurrentPME(authentication);

        pmeMapper.updateEntity(request, pme);

        PME updatedPME = userRepository.save(pme);

        return pmeMapper.toResponse(updatedPME);
    }


    @Cacheable(
            value = "offers",
            key = "'pme-project:' + #projectId + ':page:' + #page + ':size:' + #size"
    )
    public Page<OfferResponse> getProjectOffers(
            Long projectId,
            int page,
            int size,
            Authentication authentication
    ) {

        PME pme = getCurrentPME(authentication);

        Project project = projectRepository.findById(projectId)
                .orElseThrow(() ->
                        new RuntimeException(
                                "Projet introuvable"
                        )
                );

        // Vérifier que le projet appartient bien à cette PME
        if (!project.getPme().getId().equals(pme.getId())) {
            throw new AccessDeniedException(
                    "Ce projet ne vous appartient pas"
            );
        }

        Pageable pageable = PageRequest.of(page, size);

        return offerRepository
                .findByProjectId(projectId, pageable)
                .map(offerMapper::toResponse);
    }



    @CacheEvict(
            value = "offers",
            allEntries = true
    )
    public OfferResponse acceptOffer(
            Long offerId,
            Authentication authentication
    ) {

        PME pme = getCurrentPME(authentication);

        Offer offer = offerRepository.findById(offerId)
                .orElseThrow(() ->
                        new RuntimeException(
                                "Offre introuvable"
                        )
                );

        Project project = offer.getProject();

        // Vérifier que le projet appartient à la PME
        if (!project.getPme().getId().equals(pme.getId())) {
            throw new AccessDeniedException(
                    "Vous ne pouvez pas accepter cette offre"
            );
        }

        offer.setStatus(OfferStatus.ACCEPTEE);

        Offer updatedOffer = offerRepository.save(offer);

        return offerMapper.toResponse(updatedOffer);
    }

    private PME getCurrentPME(
            Authentication authentication
    ) {

        String email = authentication.getName();

        UserApp user = userRepository
                .findUserAppByEmail(email);

        if (!(user instanceof PME pme)) {
            throw new AccessDeniedException(
                    "Vous devez être une PME"
            );
        }

        return pme;
    }
}
```

# src\main\java\org\example\digipme\Service\ProjectService.java

```java
package org.example.digipme.Service;

import lombok.RequiredArgsConstructor;
import org.example.digipme.Model.PME;
import org.example.digipme.Model.Project;
import org.example.digipme.Model.UserApp;
import org.example.digipme.DTOs.ProjectRequest;
import org.example.digipme.DTOs.ProjectResponse;
import org.example.digipme.Mappers.ProjectMapper;
import org.example.digipme.Repository.ProjectRepository;
import org.example.digipme.Repository.UserAppRepository;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ProjectService {

    private final ProjectRepository projectRepository;
    private final UserAppRepository userRepository;
    private final ProjectMapper projectMapper;


    @CacheEvict(value = "projects", allEntries = true)
    public ProjectResponse createProject(
            ProjectRequest request,
            Authentication authentication
    ) {

        UserApp user = getCurrentUser(authentication);

        if (!(user instanceof PME pme)) {
            throw new AccessDeniedException(
                    "Seule une PME peut créer un projet"
            );
        }

        Project project = projectMapper.toEntity(request);

        project.setPme(pme);

        Project savedProject = projectRepository.save(project);

        return projectMapper.toResponse(savedProject);
    }

    @Cacheable(
            value = "projects",
            key = "'page:' + #page + ':size:' + #size"
    )
    public Page<ProjectResponse> getAllProjects(
            int page,
            int size
    ) {

        Pageable pageable = PageRequest.of(page, size);

        return projectRepository
                .findAll(pageable)
                .map(projectMapper::toResponse);
    }


    // =========================
    // GET PROJECT BY ID
    // =========================

    @Cacheable(
            value = "projects",
            key = "'id:' + #id"
    )
    public ProjectResponse getProjectById(Long id) {

        Project project = projectRepository.findById(id)
                .orElseThrow(() ->
                        new RuntimeException(
                                "Projet introuvable avec l'id : " + id
                        )
                );

        return projectMapper.toResponse(project);
    }


    // =========================
    // GET MY PROJECTS
    // =========================

    public Page<ProjectResponse> getMyProjects(
            int page,
            int size,
            Authentication authentication
    ) {

        UserApp user = getCurrentUser(authentication);

        if (!(user instanceof PME pme)) {
            throw new AccessDeniedException(
                    "Seule une PME peut consulter ses projets"
            );
        }

        Pageable pageable = PageRequest.of(page, size);

        return projectRepository
                .findByPmeId(pme.getId(), pageable)
                .map(projectMapper::toResponse);
    }


    @CacheEvict(value = "projects", allEntries = true)
    public ProjectResponse updateProject(
            Long id,
            ProjectRequest request,
            Authentication authentication
    ) {

        UserApp user = getCurrentUser(authentication);

        Project project = projectRepository.findById(id)
                .orElseThrow(() ->
                        new RuntimeException(
                                "Projet introuvable avec l'id : " + id
                        )
                );

        if (user.getRole().name().equals("ADMIN")) {

            projectMapper.updateEntity(request, project);

        } else {

            if (!(user instanceof PME pme)) {
                throw new AccessDeniedException(
                        "Accès refusé"
                );
            }

            if (!project.getPme().getId().equals(pme.getId())) {
                throw new AccessDeniedException(
                        "Vous ne pouvez pas modifier ce projet"
                );
            }

            projectMapper.updateEntity(request, project);
        }
        Project updatedProject = projectRepository.save(project);
        return projectMapper.toResponse(updatedProject);
    }


    @CacheEvict(value = "projects", allEntries = true)
    public void deleteProject(
            Long id,
            Authentication authentication
    ) {
        UserApp user = getCurrentUser(authentication);
        Project project = projectRepository.findById(id)
                .orElseThrow(() ->
                        new RuntimeException(
                                "Projet introuvable avec l'id : " + id
                        )
                );

        if (user.getRole().name().equals("ADMIN")) {
            projectRepository.delete(project);
            return;
        }

        if (!(user instanceof PME pme)) {
            throw new AccessDeniedException(
                    "Accès refusé"
            );
        }

        if (!project.getPme().getId().equals(pme.getId())) {
            throw new AccessDeniedException(
                    "Vous ne pouvez pas supprimer ce projet"
            );
        }
        projectRepository.delete(project);
    }


    private UserApp getCurrentUser(Authentication authentication) {
        String email = authentication.getName();
        return userRepository.findUserAppByEmail(email);

    }
}

```

# src\main\java\org\example\digipme\Service\ReviewService.java

```java
package org.example.digipme.Service;

import lombok.RequiredArgsConstructor;
import org.example.digipme.DTOs.ReviewRequest;
import org.example.digipme.DTOs.ReviewResponse;
import org.example.digipme.Enums.RoleUser;
import org.example.digipme.Model.*;
import org.example.digipme.Repository.*;
import org.example.digipme.Mappers.ReviewMapper;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ReviewService {

    private final ReviewRepository reviewRepository;
    private final UserAppRepository userRepository;
    private final ProjectRepository projectRepository;
    private final OfferRepository offerRepository;

    private final ReviewMapper reviewMapper;


    @CacheEvict(value = "reviews", allEntries = true)
    public ReviewResponse createReview(
            ReviewRequest request,
            Authentication authentication
    ) {

        // Récupérer l'utilisateur connecté
        UserApp user = getCurrentUser(authentication);

        // Vérifier que c'est une PME
        if (!(user instanceof PME pme)) {
            throw new AccessDeniedException(
                    "Seule une PME peut créer une review"
            );
        }


        // Vérifier le projet
        Project project = projectRepository
                .findById(request.getProjectId())
                .orElseThrow(() ->
                        new RuntimeException(
                                "Projet introuvable avec l'id : "
                                        + request.getProjectId()
                        )
                );


        // Vérifier que le projet appartient à la PME
        if (!project.getPme().getId().equals(pme.getId())) {

            throw new AccessDeniedException(
                    "Ce projet ne vous appartient pas"
            );
        }


        // Vérifier que le freelancer existe
        UserApp freelancerUser = userRepository
                .findById(request.getFreelancerId())
                .orElseThrow(() ->
                        new RuntimeException(
                                "Freelancer introuvable"
                        )
                );


        if (!(freelancerUser instanceof Freelancer freelancer)) {

            throw new RuntimeException(
                    "L'utilisateur sélectionné n'est pas un freelancer"
            );
        }


        // Vérifier que le freelancer a bien fait une offre
        boolean hasOffer = offerRepository
                .existsByProjectIdAndFreelancerId(
                        project.getId(),
                        freelancer.getId()
                );


        if (!hasOffer) {

            throw new AccessDeniedException(
                    "Vous ne pouvez pas évaluer ce freelancer " +
                            "car il n'a pas fait d'offre sur ce projet"
            );
        }


        // Vérifier si une review existe déjà
        boolean alreadyReviewed =
                reviewRepository.existsByProjectIdAndFreelancerId(
                        project.getId(),
                        freelancer.getId()
                );


        if (alreadyReviewed) {

            throw new RuntimeException(
                    "Vous avez déjà évalué ce freelancer pour ce projet"
            );
        }


        // Créer la review
        Review review = reviewMapper.toEntity(request);

        review.setPme(pme);
        review.setProject(project);
        review.setFreelancer(freelancer);


        Review savedReview =
                reviewRepository.save(review);


        return reviewMapper.toResponse(savedReview);
    }


    // =========================
    // CONSULTER UNE REVIEW
    // =========================

    @Cacheable(
            value = "reviews",
            key = "'id:' + #id"
    )
    public ReviewResponse getReviewById(Long id) {

        Review review = reviewRepository
                .findById(id)
                .orElseThrow(() ->
                        new RuntimeException(
                                "Review introuvable avec l'id : "
                                        + id
                        )
                );

        return reviewMapper.toResponse(review);
    }


    // =========================
    // TOUTES LES REVIEWS
    // =========================

    @Cacheable(
            value = "reviews",
            key = "'page:' + #page + ':size:' + #size"
    )
    public Page<ReviewResponse> getAllReviews(
            int page,
            int size
    ) {

        Pageable pageable =
                PageRequest.of(page, size);

        return reviewRepository
                .findAll(pageable)
                .map(reviewMapper::toResponse);
    }


    // =========================
    // REVIEWS D'UN FREELANCER
    // =========================

    @Cacheable(
            value = "reviews",
            key = "'freelancer:' + #freelancerId + ':page:' + #page + ':size:' + #size" )
    public Page<ReviewResponse> getReviewsByFreelancer(
            Long freelancerId,
            int page,
            int size
    ) {

        // Vérifier que le freelancer existe
        UserApp user = userRepository
                .findById(freelancerId)
                .orElseThrow(() ->
                        new RuntimeException(
                                "Freelancer introuvable"
                        )
                );


        if (!(user instanceof Freelancer)) {

            throw new RuntimeException(
                    "L'utilisateur n'est pas un freelancer"
            );
        }


        Pageable pageable =
                PageRequest.of(page, size);


        return reviewRepository
                .findByFreelancerId(
                        freelancerId,
                        pageable)
                .map(reviewMapper::toResponse);
    }


    // =========================
    // SUPPRIMER UNE REVIEW
    // =========================

    @CacheEvict(
            value = "reviews",
            allEntries = true
    )
    public void deleteReview(
            Long id,
            Authentication authentication
    ) {

        UserApp user =
                getCurrentUser(authentication);


        Review review = reviewRepository
                .findById(id)
                .orElseThrow(() ->
                        new RuntimeException(
                                "Review introuvable"
                        )
                );


        // ADMIN peut supprimer
        if (user.getRole() == RoleUser.ADMIN) {

            reviewRepository.delete(review);
            return;
        }


        // PME uniquement
        if (!(user instanceof PME pme)) {

            throw new AccessDeniedException(
                    "Accès refusé"
            );
        }


        // Vérifier que la review appartient à cette PME
        if (!review.getPme().getId().equals(pme.getId())) {

            throw new AccessDeniedException(
                    "Vous ne pouvez pas supprimer cette review"
            );
        }


        reviewRepository.delete(review);
    }




    private UserApp getCurrentUser(
            Authentication authentication
    ) {

        String email = authentication.getName();

        return userRepository
                .findUserAppByEmail(email);
    }
}
```

# src\main\java\org\example\digipme\Service\UserService.java

```java
package org.example.digipme.Service;

import lombok.RequiredArgsConstructor;
import org.example.digipme.DTOs.UserRequest;
import org.example.digipme.DTOs.UserResponse;
import org.example.digipme.Enums.RoleUser;
import org.example.digipme.Model.UserApp;
import org.example.digipme.Mappers.UserMapper;
import org.example.digipme.Repository.UserAppRepository;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserAppRepository userRepository;
    private final UserMapper userMapper;



    @Cacheable(value = "users", key = "'page:' + #page + ':size:' + #size")
    public Page<UserResponse> getAllUsers(int page, int size) {

        Pageable pageable = PageRequest.of(page, size);

        return userRepository.findAll(pageable)
                .map(userMapper::toResponse);
    }


    @Cacheable(value = "users", key = "'id:' + #id")
    public UserResponse getUserById(Long id) {

        UserApp user = userRepository.findById(id)
                .orElseThrow(() ->
                        new RuntimeException("Utilisateur introuvable avec l'id : " + id)
                );

        return userMapper.toResponse(user);
    }


    @Cacheable(value = "users", key = "'role:' + #role + ':page:' + #page + ':size:' + #size")
    public Page<UserResponse> getUsersByRole(
            RoleUser role, int page, int size) {

        Pageable pageable = PageRequest.of(page, size);

        return userRepository.findByRole(role, pageable)
                .map(userMapper::toResponse);
    }


    @CacheEvict(value = "users", allEntries = true)
    public void deleteUser(Long id) {

        if (!userRepository.existsById(id)) {
            throw new RuntimeException(
                    "Utilisateur introuvable avec l'id : " + id
            );}
        userRepository.deleteById(id);
    }

    public UserResponse addUser(UserRequest userRequest) {

        UserApp user = userMapper.toEntity(userRequest);
        return userMapper.toResponse(userRepository.save(user));
    }
}

```

# src\main\resources\application.properties

```properties
spring.application.name=DigiPME



```

# src\test\java\org\example\digipme\DigiPmeApplicationTests.java

```java
package org.example.digipme;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class DigiPmeApplicationTests {

    @Test
    void contextLoads() {
    }

}

```

