# .gitattributes

```
/mvnw text eol=lf
*.cmd text eol=crlf

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
      <profile default="true" name="Default" enabled="true" />
      <profile name="Annotation profile for DigiPME" enabled="true">
        <sourceOutputDir name="target/generated-sources/annotations" />
        <sourceTestOutputDir name="target/generated-test-sources/test-annotations" />
        <outputRelativeToContentRoot value="true" />
        <processorPath useClasspath="false">
          <entry name="$MAVEN_REPOSITORY$/org/projectlombok/lombok/1.18.46/lombok-1.18.46.jar" />
          <entry name="$MAVEN_REPOSITORY$/org/mapstruct/mapstruct-processor/1.5.5.Final/mapstruct-processor-1.5.5.Final.jar" />
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

# .idea\dataSources.local.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project version="4">
  <component name="dataSourceStorageLocal" created-in="IU-261.24374.151">
    <data-source name="digipme_db@localhost" uuid="f192f766-c8e8-4bf9-baf3-74750656e74f">
      <database-info product="MySQL" version="8.0.44" jdbc-version="4.2" driver-name="MySQL Connector/J" driver-version="mysql-connector-j-9.5.0 (Revision: a7b3c94f50efbddb9f0dd69b3e0d1aaa25305cd6)" dbms="MYSQL" exact-version="8.0.44" exact-driver-version="9.5">
        <extra-name-characters>$</extra-name-characters>
        <identifier-quote-string>`</identifier-quote-string>
      </database-info>
      <case-sensitivity plain-identifiers="lower" quoted-identifiers="lower" />
      <secret-storage>master_key</secret-storage>
      <user-name>root</user-name>
      <schema-mapping>
        <introspection-scope>
          <node kind="schema" qname="@" />
        </introspection-scope>
      </schema-mapping>
    </data-source>
    <data-source name="digipme_db@localhost [2]" uuid="1053d535-dee1-4ba7-a6d2-6646bf142abc">
      <database-info product="MySQL" version="8.0.44" jdbc-version="4.2" driver-name="MySQL Connector/J" driver-version="mysql-connector-j-9.5.0 (Revision: a7b3c94f50efbddb9f0dd69b3e0d1aaa25305cd6)" dbms="MYSQL" exact-version="8.0.44" exact-driver-version="9.5">
        <extra-name-characters>$</extra-name-characters>
        <identifier-quote-string>`</identifier-quote-string>
      </database-info>
      <case-sensitivity plain-identifiers="lower" quoted-identifiers="lower" />
      <secret-storage>master_key</secret-storage>
      <user-name>root</user-name>
      <schema-mapping>
        <introspection-scope>
          <node kind="schema" qname="@" />
        </introspection-scope>
      </schema-mapping>
    </data-source>
  </component>
</project>
```

# .idea\dataSources.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project version="4">
  <component name="DataSourceManagerImpl" format="xml" multifile-model="true">
    <data-source source="LOCAL" name="digipme_db@localhost" uuid="f192f766-c8e8-4bf9-baf3-74750656e74f">
      <driver-ref>mysql.8</driver-ref>
      <synchronize>true</synchronize>
      <jdbc-driver>com.mysql.cj.jdbc.Driver</jdbc-driver>
      <jdbc-url>jdbc:mysql://localhost:3307/digipme_db</jdbc-url>
      <working-dir>$ProjectFileDir$</working-dir>
    </data-source>
    <data-source source="LOCAL" name="digipme_db@localhost [2]" uuid="1053d535-dee1-4ba7-a6d2-6646bf142abc">
      <driver-ref>mysql.8</driver-ref>
      <synchronize>true</synchronize>
      <jdbc-driver>com.mysql.cj.jdbc.Driver</jdbc-driver>
      <jdbc-url>jdbc:mysql://localhost:3307/digipme_db</jdbc-url>
      <working-dir>$ProjectFileDir$</working-dir>
    </data-source>
  </component>
</project>
```

# .idea\dataSources\1053d535-dee1-4ba7-a6d2-6646bf142abc.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<dataSource name="digipme_db@localhost [2]">
  <database-model serializer="dbm" dbms="MYSQL" family-id="MYSQL" format-version="4.55">
    <root id="1">
      <DefaultAuthPlugin>caching_sha2_password</DefaultAuthPlugin>
      <DefaultCasing>lower/lower</DefaultCasing>
      <DefaultEngine>InnoDB</DefaultEngine>
      <DefaultTmpEngine>InnoDB</DefaultTmpEngine>
      <Grants>|root||root|localhost|ALTER|G
|root||root|localhost|ALTER ROUTINE|G
|root||root|localhost|APPLICATION_PASSWORD_ADMIN|G
|root||mysql.infoschema|localhost|AUDIT_ABORT_EXEMPT|G
|root||mysql.session|localhost|AUDIT_ABORT_EXEMPT|G
|root||mysql.sys|localhost|AUDIT_ABORT_EXEMPT|G
|root||root|localhost|AUDIT_ABORT_EXEMPT|G
|root||root|localhost|AUDIT_ADMIN|G
|root||mysql.session|localhost|AUTHENTICATION_POLICY_ADMIN|G
|root||root|localhost|AUTHENTICATION_POLICY_ADMIN|G
|root||mysql.session|localhost|BACKUP_ADMIN|G
|root||root|localhost|BACKUP_ADMIN|G
|root||root|localhost|BINLOG_ADMIN|G
|root||root|localhost|BINLOG_ENCRYPTION_ADMIN|G
|root||mysql.session|localhost|CLONE_ADMIN|G
|root||root|localhost|CLONE_ADMIN|G
|root||mysql.session|localhost|CONNECTION_ADMIN|G
|root||root|localhost|CONNECTION_ADMIN|G
|root||root|localhost|CREATE|G
|root||root|localhost|CREATE ROLE|G
|root||root|localhost|CREATE ROUTINE|G
|root||root|localhost|CREATE TABLESPACE|G
|root||root|localhost|CREATE TEMPORARY TABLES|G
|root||root|localhost|CREATE USER|G
|root||root|localhost|CREATE VIEW|G
|root||root|localhost|DELETE|G
|root||root|localhost|DROP|G
|root||root|localhost|DROP ROLE|G
|root||root|localhost|ENCRYPTION_KEY_ADMIN|G
|root||root|localhost|EVENT|G
|root||root|localhost|EXECUTE|G
|root||root|localhost|FILE|G
|root||mysql.infoschema|localhost|FIREWALL_EXEMPT|G
|root||mysql.session|localhost|FIREWALL_EXEMPT|G
|root||mysql.sys|localhost|FIREWALL_EXEMPT|G
|root||root|localhost|FIREWALL_EXEMPT|G
|root||root|localhost|FLUSH_OPTIMIZER_COSTS|G
|root||root|localhost|FLUSH_STATUS|G
|root||root|localhost|FLUSH_TABLES|G
|root||root|localhost|FLUSH_USER_RESOURCES|G
|root||root|localhost|GROUP_REPLICATION_ADMIN|G
|root||root|localhost|GROUP_REPLICATION_STREAM|G
|root||root|localhost|INDEX|G
|root||root|localhost|INNODB_REDO_LOG_ARCHIVE|G
|root||root|localhost|INNODB_REDO_LOG_ENABLE|G
|root||root|localhost|INSERT|G
|root||root|localhost|LOCK TABLES|G
|root||root|localhost|PASSWORDLESS_USER_ADMIN|G
|root||mysql.session|localhost|PERSIST_RO_VARIABLES_ADMIN|G
|root||root|localhost|PERSIST_RO_VARIABLES_ADMIN|G
|root||root|localhost|PROCESS|G
|root||root|localhost|REFERENCES|G
|root||root|localhost|RELOAD|G
|root||root|localhost|REPLICATION CLIENT|G
|root||root|localhost|REPLICATION SLAVE|G
|root||root|localhost|REPLICATION_APPLIER|G
|root||root|localhost|REPLICATION_SLAVE_ADMIN|G
|root||root|localhost|RESOURCE_GROUP_ADMIN|G
|root||root|localhost|RESOURCE_GROUP_USER|G
|root||root|localhost|ROLE_ADMIN|G
|root||mysql.infoschema|localhost|SELECT|G
|root||root|localhost|SELECT|G
|root||root|localhost|SENSITIVE_VARIABLES_OBSERVER|G
|root||root|localhost|SERVICE_CONNECTION_ADMIN|G
|root||mysql.session|localhost|SESSION_VARIABLES_ADMIN|G
|root||root|localhost|SESSION_VARIABLES_ADMIN|G
|root||root|localhost|SET_USER_ID|G
|root||root|localhost|SHOW DATABASES|G
|root||root|localhost|SHOW VIEW|G
|root||root|localhost|SHOW_ROUTINE|G
|root||mysql.session|localhost|SHUTDOWN|G
|root||root|localhost|SHUTDOWN|G
|root||mysql.session|localhost|SUPER|G
|root||root|localhost|SUPER|G
|root||mysql.infoschema|localhost|SYSTEM_USER|G
|root||mysql.session|localhost|SYSTEM_USER|G
|root||mysql.sys|localhost|SYSTEM_USER|G
|root||root|localhost|SYSTEM_USER|G
|root||mysql.session|localhost|SYSTEM_VARIABLES_ADMIN|G
|root||root|localhost|SYSTEM_VARIABLES_ADMIN|G
|root||root|localhost|TABLE_ENCRYPTION_ADMIN|G
|root||root|localhost|TELEMETRY_LOG_ADMIN|G
|root||root|localhost|TRIGGER|G
|root||root|localhost|UPDATE|G
|root||root|localhost|XA_RECOVER_ADMIN|G
|root||root|localhost|grant option|G
performance_schema|schema||mysql.session|localhost|SELECT|G
sys|schema||mysql.sys|localhost|TRIGGER|G</Grants>
      <ServerVersion>8.0.44</ServerVersion>
    </root>
    <collation id="2" parent="1" name="armscii8_bin">
      <Charset>armscii8</Charset>
    </collation>
    <collation id="3" parent="1" name="armscii8_general_ci">
      <Charset>armscii8</Charset>
      <DefaultForCharset>1</DefaultForCharset>
    </collation>
    <collation id="4" parent="1" name="ascii_bin">
      <Charset>ascii</Charset>
    </collation>
    <collation id="5" parent="1" name="ascii_general_ci">
      <Charset>ascii</Charset>
      <DefaultForCharset>1</DefaultForCharset>
    </collation>
    <collation id="6" parent="1" name="big5_bin">
      <Charset>big5</Charset>
    </collation>
    <collation id="7" parent="1" name="big5_chinese_ci">
      <Charset>big5</Charset>
      <DefaultForCharset>1</DefaultForCharset>
    </collation>
    <collation id="8" parent="1" name="binary">
      <Charset>binary</Charset>
      <DefaultForCharset>1</DefaultForCharset>
    </collation>
    <collation id="9" parent="1" name="cp1250_bin">
      <Charset>cp1250</Charset>
    </collation>
    <collation id="10" parent="1" name="cp1250_croatian_ci">
      <Charset>cp1250</Charset>
    </collation>
    <collation id="11" parent="1" name="cp1250_czech_cs">
      <Charset>cp1250</Charset>
    </collation>
    <collation id="12" parent="1" name="cp1250_general_ci">
      <Charset>cp1250</Charset>
      <DefaultForCharset>1</DefaultForCharset>
    </collation>
    <collation id="13" parent="1" name="cp1250_polish_ci">
      <Charset>cp1250</Charset>
    </collation>
    <collation id="14" parent="1" name="cp1251_bin">
      <Charset>cp1251</Charset>
    </collation>
    <collation id="15" parent="1" name="cp1251_bulgarian_ci">
      <Charset>cp1251</Charset>
    </collation>
    <collation id="16" parent="1" name="cp1251_general_ci">
      <Charset>cp1251</Charset>
      <DefaultForCharset>1</DefaultForCharset>
    </collation>
    <collation id="17" parent="1" name="cp1251_general_cs">
      <Charset>cp1251</Charset>
    </collation>
    <collation id="18" parent="1" name="cp1251_ukrainian_ci">
      <Charset>cp1251</Charset>
    </collation>
    <collation id="19" parent="1" name="cp1256_bin">
      <Charset>cp1256</Charset>
    </collation>
    <collation id="20" parent="1" name="cp1256_general_ci">
      <Charset>cp1256</Charset>
      <DefaultForCharset>1</DefaultForCharset>
    </collation>
    <collation id="21" parent="1" name="cp1257_bin">
      <Charset>cp1257</Charset>
    </collation>
    <collation id="22" parent="1" name="cp1257_general_ci">
      <Charset>cp1257</Charset>
      <DefaultForCharset>1</DefaultForCharset>
    </collation>
    <collation id="23" parent="1" name="cp1257_lithuanian_ci">
      <Charset>cp1257</Charset>
    </collation>
    <collation id="24" parent="1" name="cp850_bin">
      <Charset>cp850</Charset>
    </collation>
    <collation id="25" parent="1" name="cp850_general_ci">
      <Charset>cp850</Charset>
      <DefaultForCharset>1</DefaultForCharset>
    </collation>
    <collation id="26" parent="1" name="cp852_bin">
      <Charset>cp852</Charset>
    </collation>
    <collation id="27" parent="1" name="cp852_general_ci">
      <Charset>cp852</Charset>
      <DefaultForCharset>1</DefaultForCharset>
    </collation>
    <collation id="28" parent="1" name="cp866_bin">
      <Charset>cp866</Charset>
    </collation>
    <collation id="29" parent="1" name="cp866_general_ci">
      <Charset>cp866</Charset>
      <DefaultForCharset>1</DefaultForCharset>
    </collation>
    <collation id="30" parent="1" name="cp932_bin">
      <Charset>cp932</Charset>
    </collation>
    <collation id="31" parent="1" name="cp932_japanese_ci">
      <Charset>cp932</Charset>
      <DefaultForCharset>1</DefaultForCharset>
    </collation>
    <collation id="32" parent="1" name="dec8_bin">
      <Charset>dec8</Charset>
    </collation>
    <collation id="33" parent="1" name="dec8_swedish_ci">
      <Charset>dec8</Charset>
      <DefaultForCharset>1</DefaultForCharset>
    </collation>
    <collation id="34" parent="1" name="eucjpms_bin">
      <Charset>eucjpms</Charset>
    </collation>
    <collation id="35" parent="1" name="eucjpms_japanese_ci">
      <Charset>eucjpms</Charset>
      <DefaultForCharset>1</DefaultForCharset>
    </collation>
    <collation id="36" parent="1" name="euckr_bin">
      <Charset>euckr</Charset>
    </collation>
    <collation id="37" parent="1" name="euckr_korean_ci">
      <Charset>euckr</Charset>
      <DefaultForCharset>1</DefaultForCharset>
    </collation>
    <collation id="38" parent="1" name="gb18030_bin">
      <Charset>gb18030</Charset>
    </collation>
    <collation id="39" parent="1" name="gb18030_chinese_ci">
      <Charset>gb18030</Charset>
      <DefaultForCharset>1</DefaultForCharset>
    </collation>
    <collation id="40" parent="1" name="gb18030_unicode_520_ci">
      <Charset>gb18030</Charset>
    </collation>
    <collation id="41" parent="1" name="gb2312_bin">
      <Charset>gb2312</Charset>
    </collation>
    <collation id="42" parent="1" name="gb2312_chinese_ci">
      <Charset>gb2312</Charset>
      <DefaultForCharset>1</DefaultForCharset>
    </collation>
    <collation id="43" parent="1" name="gbk_bin">
      <Charset>gbk</Charset>
    </collation>
    <collation id="44" parent="1" name="gbk_chinese_ci">
      <Charset>gbk</Charset>
      <DefaultForCharset>1</DefaultForCharset>
    </collation>
    <collation id="45" parent="1" name="geostd8_bin">
      <Charset>geostd8</Charset>
    </collation>
    <collation id="46" parent="1" name="geostd8_general_ci">
      <Charset>geostd8</Charset>
      <DefaultForCharset>1</DefaultForCharset>
    </collation>
    <collation id="47" parent="1" name="greek_bin">
      <Charset>greek</Charset>
    </collation>
    <collation id="48" parent="1" name="greek_general_ci">
      <Charset>greek</Charset>
      <DefaultForCharset>1</DefaultForCharset>
    </collation>
    <collation id="49" parent="1" name="hebrew_bin">
      <Charset>hebrew</Charset>
    </collation>
    <collation id="50" parent="1" name="hebrew_general_ci">
      <Charset>hebrew</Charset>
      <DefaultForCharset>1</DefaultForCharset>
    </collation>
    <collation id="51" parent="1" name="hp8_bin">
      <Charset>hp8</Charset>
    </collation>
    <collation id="52" parent="1" name="hp8_english_ci">
      <Charset>hp8</Charset>
      <DefaultForCharset>1</DefaultForCharset>
    </collation>
    <collation id="53" parent="1" name="keybcs2_bin">
      <Charset>keybcs2</Charset>
    </collation>
    <collation id="54" parent="1" name="keybcs2_general_ci">
      <Charset>keybcs2</Charset>
      <DefaultForCharset>1</DefaultForCharset>
    </collation>
    <collation id="55" parent="1" name="koi8r_bin">
      <Charset>koi8r</Charset>
    </collation>
    <collation id="56" parent="1" name="koi8r_general_ci">
      <Charset>koi8r</Charset>
      <DefaultForCharset>1</DefaultForCharset>
    </collation>
    <collation id="57" parent="1" name="koi8u_bin">
      <Charset>koi8u</Charset>
    </collation>
    <collation id="58" parent="1" name="koi8u_general_ci">
      <Charset>koi8u</Charset>
      <DefaultForCharset>1</DefaultForCharset>
    </collation>
    <collation id="59" parent="1" name="latin1_bin">
      <Charset>latin1</Charset>
    </collation>
    <collation id="60" parent="1" name="latin1_danish_ci">
      <Charset>latin1</Charset>
    </collation>
    <collation id="61" parent="1" name="latin1_general_ci">
      <Charset>latin1</Charset>
    </collation>
    <collation id="62" parent="1" name="latin1_general_cs">
      <Charset>latin1</Charset>
    </collation>
    <collation id="63" parent="1" name="latin1_german1_ci">
      <Charset>latin1</Charset>
    </collation>
    <collation id="64" parent="1" name="latin1_german2_ci">
      <Charset>latin1</Charset>
    </collation>
    <collation id="65" parent="1" name="latin1_spanish_ci">
      <Charset>latin1</Charset>
    </collation>
    <collation id="66" parent="1" name="latin1_swedish_ci">
      <Charset>latin1</Charset>
      <DefaultForCharset>1</DefaultForCharset>
    </collation>
    <collation id="67" parent="1" name="latin2_bin">
      <Charset>latin2</Charset>
    </collation>
    <collation id="68" parent="1" name="latin2_croatian_ci">
      <Charset>latin2</Charset>
    </collation>
    <collation id="69" parent="1" name="latin2_czech_cs">
      <Charset>latin2</Charset>
    </collation>
    <collation id="70" parent="1" name="latin2_general_ci">
      <Charset>latin2</Charset>
      <DefaultForCharset>1</DefaultForCharset>
    </collation>
    <collation id="71" parent="1" name="latin2_hungarian_ci">
      <Charset>latin2</Charset>
    </collation>
    <collation id="72" parent="1" name="latin5_bin">
      <Charset>latin5</Charset>
    </collation>
    <collation id="73" parent="1" name="latin5_turkish_ci">
      <Charset>latin5</Charset>
      <DefaultForCharset>1</DefaultForCharset>
    </collation>
    <collation id="74" parent="1" name="latin7_bin">
      <Charset>latin7</Charset>
    </collation>
    <collation id="75" parent="1" name="latin7_estonian_cs">
      <Charset>latin7</Charset>
    </collation>
    <collation id="76" parent="1" name="latin7_general_ci">
      <Charset>latin7</Charset>
      <DefaultForCharset>1</DefaultForCharset>
    </collation>
    <collation id="77" parent="1" name="latin7_general_cs">
      <Charset>latin7</Charset>
    </collation>
    <collation id="78" parent="1" name="macce_bin">
      <Charset>macce</Charset>
    </collation>
    <collation id="79" parent="1" name="macce_general_ci">
      <Charset>macce</Charset>
      <DefaultForCharset>1</DefaultForCharset>
    </collation>
    <collation id="80" parent="1" name="macroman_bin">
      <Charset>macroman</Charset>
    </collation>
    <collation id="81" parent="1" name="macroman_general_ci">
      <Charset>macroman</Charset>
      <DefaultForCharset>1</DefaultForCharset>
    </collation>
    <collation id="82" parent="1" name="sjis_bin">
      <Charset>sjis</Charset>
    </collation>
    <collation id="83" parent="1" name="sjis_japanese_ci">
      <Charset>sjis</Charset>
      <DefaultForCharset>1</DefaultForCharset>
    </collation>
    <collation id="84" parent="1" name="swe7_bin">
      <Charset>swe7</Charset>
    </collation>
    <collation id="85" parent="1" name="swe7_swedish_ci">
      <Charset>swe7</Charset>
      <DefaultForCharset>1</DefaultForCharset>
    </collation>
    <collation id="86" parent="1" name="tis620_bin">
      <Charset>tis620</Charset>
    </collation>
    <collation id="87" parent="1" name="tis620_thai_ci">
      <Charset>tis620</Charset>
      <DefaultForCharset>1</DefaultForCharset>
    </collation>
    <collation id="88" parent="1" name="ucs2_bin">
      <Charset>ucs2</Charset>
    </collation>
    <collation id="89" parent="1" name="ucs2_croatian_ci">
      <Charset>ucs2</Charset>
    </collation>
    <collation id="90" parent="1" name="ucs2_czech_ci">
      <Charset>ucs2</Charset>
    </collation>
    <collation id="91" parent="1" name="ucs2_danish_ci">
      <Charset>ucs2</Charset>
    </collation>
    <collation id="92" parent="1" name="ucs2_esperanto_ci">
      <Charset>ucs2</Charset>
    </collation>
    <collation id="93" parent="1" name="ucs2_estonian_ci">
      <Charset>ucs2</Charset>
    </collation>
    <collation id="94" parent="1" name="ucs2_general_ci">
      <Charset>ucs2</Charset>
      <DefaultForCharset>1</DefaultForCharset>
    </collation>
    <collation id="95" parent="1" name="ucs2_general_mysql500_ci">
      <Charset>ucs2</Charset>
    </collation>
    <collation id="96" parent="1" name="ucs2_german2_ci">
      <Charset>ucs2</Charset>
    </collation>
    <collation id="97" parent="1" name="ucs2_hungarian_ci">
      <Charset>ucs2</Charset>
    </collation>
    <collation id="98" parent="1" name="ucs2_icelandic_ci">
      <Charset>ucs2</Charset>
    </collation>
    <collation id="99" parent="1" name="ucs2_latvian_ci">
      <Charset>ucs2</Charset>
    </collation>
    <collation id="100" parent="1" name="ucs2_lithuanian_ci">
      <Charset>ucs2</Charset>
    </collation>
    <collation id="101" parent="1" name="ucs2_persian_ci">
      <Charset>ucs2</Charset>
    </collation>
    <collation id="102" parent="1" name="ucs2_polish_ci">
      <Charset>ucs2</Charset>
    </collation>
    <collation id="103" parent="1" name="ucs2_roman_ci">
      <Charset>ucs2</Charset>
    </collation>
    <collation id="104" parent="1" name="ucs2_romanian_ci">
      <Charset>ucs2</Charset>
    </collation>
    <collation id="105" parent="1" name="ucs2_sinhala_ci">
      <Charset>ucs2</Charset>
    </collation>
    <collation id="106" parent="1" name="ucs2_slovak_ci">
      <Charset>ucs2</Charset>
    </collation>
    <collation id="107" parent="1" name="ucs2_slovenian_ci">
      <Charset>ucs2</Charset>
    </collation>
    <collation id="108" parent="1" name="ucs2_spanish2_ci">
      <Charset>ucs2</Charset>
    </collation>
    <collation id="109" parent="1" name="ucs2_spanish_ci">
      <Charset>ucs2</Charset>
    </collation>
    <collation id="110" parent="1" name="ucs2_swedish_ci">
      <Charset>ucs2</Charset>
    </collation>
    <collation id="111" parent="1" name="ucs2_turkish_ci">
      <Charset>ucs2</Charset>
    </collation>
    <collation id="112" parent="1" name="ucs2_unicode_520_ci">
      <Charset>ucs2</Charset>
    </collation>
    <collation id="113" parent="1" name="ucs2_unicode_ci">
      <Charset>ucs2</Charset>
    </collation>
    <collation id="114" parent="1" name="ucs2_vietnamese_ci">
      <Charset>ucs2</Charset>
    </collation>
    <collation id="115" parent="1" name="ujis_bin">
      <Charset>ujis</Charset>
    </collation>
    <collation id="116" parent="1" name="ujis_japanese_ci">
      <Charset>ujis</Charset>
      <DefaultForCharset>1</DefaultForCharset>
    </collation>
    <collation id="117" parent="1" name="utf16_bin">
      <Charset>utf16</Charset>
    </collation>
    <collation id="118" parent="1" name="utf16_croatian_ci">
      <Charset>utf16</Charset>
    </collation>
    <collation id="119" parent="1" name="utf16_czech_ci">
      <Charset>utf16</Charset>
    </collation>
    <collation id="120" parent="1" name="utf16_danish_ci">
      <Charset>utf16</Charset>
    </collation>
    <collation id="121" parent="1" name="utf16_esperanto_ci">
      <Charset>utf16</Charset>
    </collation>
    <collation id="122" parent="1" name="utf16_estonian_ci">
      <Charset>utf16</Charset>
    </collation>
    <collation id="123" parent="1" name="utf16_general_ci">
      <Charset>utf16</Charset>
      <DefaultForCharset>1</DefaultForCharset>
    </collation>
    <collation id="124" parent="1" name="utf16_german2_ci">
      <Charset>utf16</Charset>
    </collation>
    <collation id="125" parent="1" name="utf16_hungarian_ci">
      <Charset>utf16</Charset>
    </collation>
    <collation id="126" parent="1" name="utf16_icelandic_ci">
      <Charset>utf16</Charset>
    </collation>
    <collation id="127" parent="1" name="utf16_latvian_ci">
      <Charset>utf16</Charset>
    </collation>
    <collation id="128" parent="1" name="utf16_lithuanian_ci">
      <Charset>utf16</Charset>
    </collation>
    <collation id="129" parent="1" name="utf16_persian_ci">
      <Charset>utf16</Charset>
    </collation>
    <collation id="130" parent="1" name="utf16_polish_ci">
      <Charset>utf16</Charset>
    </collation>
    <collation id="131" parent="1" name="utf16_roman_ci">
      <Charset>utf16</Charset>
    </collation>
    <collation id="132" parent="1" name="utf16_romanian_ci">
      <Charset>utf16</Charset>
    </collation>
    <collation id="133" parent="1" name="utf16_sinhala_ci">
      <Charset>utf16</Charset>
    </collation>
    <collation id="134" parent="1" name="utf16_slovak_ci">
      <Charset>utf16</Charset>
    </collation>
    <collation id="135" parent="1" name="utf16_slovenian_ci">
      <Charset>utf16</Charset>
    </collation>
    <collation id="136" parent="1" name="utf16_spanish2_ci">
      <Charset>utf16</Charset>
    </collation>
    <collation id="137" parent="1" name="utf16_spanish_ci">
      <Charset>utf16</Charset>
    </collation>
    <collation id="138" parent="1" name="utf16_swedish_ci">
      <Charset>utf16</Charset>
    </collation>
    <collation id="139" parent="1" name="utf16_turkish_ci">
      <Charset>utf16</Charset>
    </collation>
    <collation id="140" parent="1" name="utf16_unicode_520_ci">
      <Charset>utf16</Charset>
    </collation>
    <collation id="141" parent="1" name="utf16_unicode_ci">
      <Charset>utf16</Charset>
    </collation>
    <collation id="142" parent="1" name="utf16_vietnamese_ci">
      <Charset>utf16</Charset>
    </collation>
    <collation id="143" parent="1" name="utf16le_bin">
      <Charset>utf16le</Charset>
    </collation>
    <collation id="144" parent="1" name="utf16le_general_ci">
      <Charset>utf16le</Charset>
      <DefaultForCharset>1</DefaultForCharset>
    </collation>
    <collation id="145" parent="1" name="utf32_bin">
      <Charset>utf32</Charset>
    </collation>
    <collation id="146" parent="1" name="utf32_croatian_ci">
      <Charset>utf32</Charset>
    </collation>
    <collation id="147" parent="1" name="utf32_czech_ci">
      <Charset>utf32</Charset>
    </collation>
    <collation id="148" parent="1" name="utf32_danish_ci">
      <Charset>utf32</Charset>
    </collation>
    <collation id="149" parent="1" name="utf32_esperanto_ci">
      <Charset>utf32</Charset>
    </collation>
    <collation id="150" parent="1" name="utf32_estonian_ci">
      <Charset>utf32</Charset>
    </collation>
    <collation id="151" parent="1" name="utf32_general_ci">
      <Charset>utf32</Charset>
      <DefaultForCharset>1</DefaultForCharset>
    </collation>
    <collation id="152" parent="1" name="utf32_german2_ci">
      <Charset>utf32</Charset>
    </collation>
    <collation id="153" parent="1" name="utf32_hungarian_ci">
      <Charset>utf32</Charset>
    </collation>
    <collation id="154" parent="1" name="utf32_icelandic_ci">
      <Charset>utf32</Charset>
    </collation>
    <collation id="155" parent="1" name="utf32_latvian_ci">
      <Charset>utf32</Charset>
    </collation>
    <collation id="156" parent="1" name="utf32_lithuanian_ci">
      <Charset>utf32</Charset>
    </collation>
    <collation id="157" parent="1" name="utf32_persian_ci">
      <Charset>utf32</Charset>
    </collation>
    <collation id="158" parent="1" name="utf32_polish_ci">
      <Charset>utf32</Charset>
    </collation>
    <collation id="159" parent="1" name="utf32_roman_ci">
      <Charset>utf32</Charset>
    </collation>
    <collation id="160" parent="1" name="utf32_romanian_ci">
      <Charset>utf32</Charset>
    </collation>
    <collation id="161" parent="1" name="utf32_sinhala_ci">
      <Charset>utf32</Charset>
    </collation>
    <collation id="162" parent="1" name="utf32_slovak_ci">
      <Charset>utf32</Charset>
    </collation>
    <collation id="163" parent="1" name="utf32_slovenian_ci">
      <Charset>utf32</Charset>
    </collation>
    <collation id="164" parent="1" name="utf32_spanish2_ci">
      <Charset>utf32</Charset>
    </collation>
    <collation id="165" parent="1" name="utf32_spanish_ci">
      <Charset>utf32</Charset>
    </collation>
    <collation id="166" parent="1" name="utf32_swedish_ci">
      <Charset>utf32</Charset>
    </collation>
    <collation id="167" parent="1" name="utf32_turkish_ci">
      <Charset>utf32</Charset>
    </collation>
    <collation id="168" parent="1" name="utf32_unicode_520_ci">
      <Charset>utf32</Charset>
    </collation>
    <collation id="169" parent="1" name="utf32_unicode_ci">
      <Charset>utf32</Charset>
    </collation>
    <collation id="170" parent="1" name="utf32_vietnamese_ci">
      <Charset>utf32</Charset>
    </collation>
    <collation id="171" parent="1" name="utf8mb3_bin">
      <Charset>utf8mb3</Charset>
    </collation>
    <collation id="172" parent="1" name="utf8mb3_croatian_ci">
      <Charset>utf8mb3</Charset>
    </collation>
    <collation id="173" parent="1" name="utf8mb3_czech_ci">
      <Charset>utf8mb3</Charset>
    </collation>
    <collation id="174" parent="1" name="utf8mb3_danish_ci">
      <Charset>utf8mb3</Charset>
    </collation>
    <collation id="175" parent="1" name="utf8mb3_esperanto_ci">
      <Charset>utf8mb3</Charset>
    </collation>
    <collation id="176" parent="1" name="utf8mb3_estonian_ci">
      <Charset>utf8mb3</Charset>
    </collation>
    <collation id="177" parent="1" name="utf8mb3_general_ci">
      <Charset>utf8mb3</Charset>
      <DefaultForCharset>1</DefaultForCharset>
    </collation>
    <collation id="178" parent="1" name="utf8mb3_general_mysql500_ci">
      <Charset>utf8mb3</Charset>
    </collation>
    <collation id="179" parent="1" name="utf8mb3_german2_ci">
      <Charset>utf8mb3</Charset>
    </collation>
    <collation id="180" parent="1" name="utf8mb3_hungarian_ci">
      <Charset>utf8mb3</Charset>
    </collation>
    <collation id="181" parent="1" name="utf8mb3_icelandic_ci">
      <Charset>utf8mb3</Charset>
    </collation>
    <collation id="182" parent="1" name="utf8mb3_latvian_ci">
      <Charset>utf8mb3</Charset>
    </collation>
    <collation id="183" parent="1" name="utf8mb3_lithuanian_ci">
      <Charset>utf8mb3</Charset>
    </collation>
    <collation id="184" parent="1" name="utf8mb3_persian_ci">
      <Charset>utf8mb3</Charset>
    </collation>
    <collation id="185" parent="1" name="utf8mb3_polish_ci">
      <Charset>utf8mb3</Charset>
    </collation>
    <collation id="186" parent="1" name="utf8mb3_roman_ci">
      <Charset>utf8mb3</Charset>
    </collation>
    <collation id="187" parent="1" name="utf8mb3_romanian_ci">
      <Charset>utf8mb3</Charset>
    </collation>
    <collation id="188" parent="1" name="utf8mb3_sinhala_ci">
      <Charset>utf8mb3</Charset>
    </collation>
    <collation id="189" parent="1" name="utf8mb3_slovak_ci">
      <Charset>utf8mb3</Charset>
    </collation>
    <collation id="190" parent="1" name="utf8mb3_slovenian_ci">
      <Charset>utf8mb3</Charset>
    </collation>
    <collation id="191" parent="1" name="utf8mb3_spanish2_ci">
      <Charset>utf8mb3</Charset>
    </collation>
    <collation id="192" parent="1" name="utf8mb3_spanish_ci">
      <Charset>utf8mb3</Charset>
    </collation>
    <collation id="193" parent="1" name="utf8mb3_swedish_ci">
      <Charset>utf8mb3</Charset>
    </collation>
    <collation id="194" parent="1" name="utf8mb3_tolower_ci">
      <Charset>utf8mb3</Charset>
    </collation>
    <collation id="195" parent="1" name="utf8mb3_turkish_ci">
      <Charset>utf8mb3</Charset>
    </collation>
    <collation id="196" parent="1" name="utf8mb3_unicode_520_ci">
      <Charset>utf8mb3</Charset>
    </collation>
    <collation id="197" parent="1" name="utf8mb3_unicode_ci">
      <Charset>utf8mb3</Charset>
    </collation>
    <collation id="198" parent="1" name="utf8mb3_vietnamese_ci">
      <Charset>utf8mb3</Charset>
    </collation>
    <collation id="199" parent="1" name="utf8mb4_0900_ai_ci">
      <Charset>utf8mb4</Charset>
      <DefaultForCharset>1</DefaultForCharset>
    </collation>
    <collation id="200" parent="1" name="utf8mb4_0900_as_ci">
      <Charset>utf8mb4</Charset>
    </collation>
    <collation id="201" parent="1" name="utf8mb4_0900_as_cs">
      <Charset>utf8mb4</Charset>
    </collation>
    <collation id="202" parent="1" name="utf8mb4_0900_bin">
      <Charset>utf8mb4</Charset>
    </collation>
    <collation id="203" parent="1" name="utf8mb4_bg_0900_ai_ci">
      <Charset>utf8mb4</Charset>
    </collation>
    <collation id="204" parent="1" name="utf8mb4_bg_0900_as_cs">
      <Charset>utf8mb4</Charset>
    </collation>
    <collation id="205" parent="1" name="utf8mb4_bin">
      <Charset>utf8mb4</Charset>
    </collation>
    <collation id="206" parent="1" name="utf8mb4_bs_0900_ai_ci">
      <Charset>utf8mb4</Charset>
    </collation>
    <collation id="207" parent="1" name="utf8mb4_bs_0900_as_cs">
      <Charset>utf8mb4</Charset>
    </collation>
    <collation id="208" parent="1" name="utf8mb4_croatian_ci">
      <Charset>utf8mb4</Charset>
    </collation>
    <collation id="209" parent="1" name="utf8mb4_cs_0900_ai_ci">
      <Charset>utf8mb4</Charset>
    </collation>
    <collation id="210" parent="1" name="utf8mb4_cs_0900_as_cs">
      <Charset>utf8mb4</Charset>
    </collation>
    <collation id="211" parent="1" name="utf8mb4_czech_ci">
      <Charset>utf8mb4</Charset>
    </collation>
    <collation id="212" parent="1" name="utf8mb4_da_0900_ai_ci">
      <Charset>utf8mb4</Charset>
    </collation>
    <collation id="213" parent="1" name="utf8mb4_da_0900_as_cs">
      <Charset>utf8mb4</Charset>
    </collation>
    <collation id="214" parent="1" name="utf8mb4_danish_ci">
      <Charset>utf8mb4</Charset>
    </collation>
    <collation id="215" parent="1" name="utf8mb4_de_pb_0900_ai_ci">
      <Charset>utf8mb4</Charset>
    </collation>
    <collation id="216" parent="1" name="utf8mb4_de_pb_0900_as_cs">
      <Charset>utf8mb4</Charset>
    </collation>
    <collation id="217" parent="1" name="utf8mb4_eo_0900_ai_ci">
      <Charset>utf8mb4</Charset>
    </collation>
    <collation id="218" parent="1" name="utf8mb4_eo_0900_as_cs">
      <Charset>utf8mb4</Charset>
    </collation>
    <collation id="219" parent="1" name="utf8mb4_es_0900_ai_ci">
      <Charset>utf8mb4</Charset>
    </collation>
    <collation id="220" parent="1" name="utf8mb4_es_0900_as_cs">
      <Charset>utf8mb4</Charset>
    </collation>
    <collation id="221" parent="1" name="utf8mb4_es_trad_0900_ai_ci">
      <Charset>utf8mb4</Charset>
    </collation>
    <collation id="222" parent="1" name="utf8mb4_es_trad_0900_as_cs">
      <Charset>utf8mb4</Charset>
    </collation>
    <collation id="223" parent="1" name="utf8mb4_esperanto_ci">
      <Charset>utf8mb4</Charset>
    </collation>
    <collation id="224" parent="1" name="utf8mb4_estonian_ci">
      <Charset>utf8mb4</Charset>
    </collation>
    <collation id="225" parent="1" name="utf8mb4_et_0900_ai_ci">
      <Charset>utf8mb4</Charset>
    </collation>
    <collation id="226" parent="1" name="utf8mb4_et_0900_as_cs">
      <Charset>utf8mb4</Charset>
    </collation>
    <collation id="227" parent="1" name="utf8mb4_general_ci">
      <Charset>utf8mb4</Charset>
    </collation>
    <collation id="228" parent="1" name="utf8mb4_german2_ci">
      <Charset>utf8mb4</Charset>
    </collation>
    <collation id="229" parent="1" name="utf8mb4_gl_0900_ai_ci">
      <Charset>utf8mb4</Charset>
    </collation>
    <collation id="230" parent="1" name="utf8mb4_gl_0900_as_cs">
      <Charset>utf8mb4</Charset>
    </collation>
    <collation id="231" parent="1" name="utf8mb4_hr_0900_ai_ci">
      <Charset>utf8mb4</Charset>
    </collation>
    <collation id="232" parent="1" name="utf8mb4_hr_0900_as_cs">
      <Charset>utf8mb4</Charset>
    </collation>
    <collation id="233" parent="1" name="utf8mb4_hu_0900_ai_ci">
      <Charset>utf8mb4</Charset>
    </collation>
    <collation id="234" parent="1" name="utf8mb4_hu_0900_as_cs">
      <Charset>utf8mb4</Charset>
    </collation>
    <collation id="235" parent="1" name="utf8mb4_hungarian_ci">
      <Charset>utf8mb4</Charset>
    </collation>
    <collation id="236" parent="1" name="utf8mb4_icelandic_ci">
      <Charset>utf8mb4</Charset>
    </collation>
    <collation id="237" parent="1" name="utf8mb4_is_0900_ai_ci">
      <Charset>utf8mb4</Charset>
    </collation>
    <collation id="238" parent="1" name="utf8mb4_is_0900_as_cs">
      <Charset>utf8mb4</Charset>
    </collation>
    <collation id="239" parent="1" name="utf8mb4_ja_0900_as_cs">
      <Charset>utf8mb4</Charset>
    </collation>
    <collation id="240" parent="1" name="utf8mb4_ja_0900_as_cs_ks">
      <Charset>utf8mb4</Charset>
    </collation>
    <collation id="241" parent="1" name="utf8mb4_la_0900_ai_ci">
      <Charset>utf8mb4</Charset>
    </collation>
    <collation id="242" parent="1" name="utf8mb4_la_0900_as_cs">
      <Charset>utf8mb4</Charset>
    </collation>
    <collation id="243" parent="1" name="utf8mb4_latvian_ci">
      <Charset>utf8mb4</Charset>
    </collation>
    <collation id="244" parent="1" name="utf8mb4_lithuanian_ci">
      <Charset>utf8mb4</Charset>
    </collation>
    <collation id="245" parent="1" name="utf8mb4_lt_0900_ai_ci">
      <Charset>utf8mb4</Charset>
    </collation>
    <collation id="246" parent="1" name="utf8mb4_lt_0900_as_cs">
      <Charset>utf8mb4</Charset>
    </collation>
    <collation id="247" parent="1" name="utf8mb4_lv_0900_ai_ci">
      <Charset>utf8mb4</Charset>
    </collation>
    <collation id="248" parent="1" name="utf8mb4_lv_0900_as_cs">
      <Charset>utf8mb4</Charset>
    </collation>
    <collation id="249" parent="1" name="utf8mb4_mn_cyrl_0900_ai_ci">
      <Charset>utf8mb4</Charset>
    </collation>
    <collation id="250" parent="1" name="utf8mb4_mn_cyrl_0900_as_cs">
      <Charset>utf8mb4</Charset>
    </collation>
    <collation id="251" parent="1" name="utf8mb4_nb_0900_ai_ci">
      <Charset>utf8mb4</Charset>
    </collation>
    <collation id="252" parent="1" name="utf8mb4_nb_0900_as_cs">
      <Charset>utf8mb4</Charset>
    </collation>
    <collation id="253" parent="1" name="utf8mb4_nn_0900_ai_ci">
      <Charset>utf8mb4</Charset>
    </collation>
    <collation id="254" parent="1" name="utf8mb4_nn_0900_as_cs">
      <Charset>utf8mb4</Charset>
    </collation>
    <collation id="255" parent="1" name="utf8mb4_persian_ci">
      <Charset>utf8mb4</Charset>
    </collation>
    <collation id="256" parent="1" name="utf8mb4_pl_0900_ai_ci">
      <Charset>utf8mb4</Charset>
    </collation>
    <collation id="257" parent="1" name="utf8mb4_pl_0900_as_cs">
      <Charset>utf8mb4</Charset>
    </collation>
    <collation id="258" parent="1" name="utf8mb4_polish_ci">
      <Charset>utf8mb4</Charset>
    </collation>
    <collation id="259" parent="1" name="utf8mb4_ro_0900_ai_ci">
      <Charset>utf8mb4</Charset>
    </collation>
    <collation id="260" parent="1" name="utf8mb4_ro_0900_as_cs">
      <Charset>utf8mb4</Charset>
    </collation>
    <collation id="261" parent="1" name="utf8mb4_roman_ci">
      <Charset>utf8mb4</Charset>
    </collation>
    <collation id="262" parent="1" name="utf8mb4_romanian_ci">
      <Charset>utf8mb4</Charset>
    </collation>
    <collation id="263" parent="1" name="utf8mb4_ru_0900_ai_ci">
      <Charset>utf8mb4</Charset>
    </collation>
    <collation id="264" parent="1" name="utf8mb4_ru_0900_as_cs">
      <Charset>utf8mb4</Charset>
    </collation>
    <collation id="265" parent="1" name="utf8mb4_sinhala_ci">
      <Charset>utf8mb4</Charset>
    </collation>
    <collation id="266" parent="1" name="utf8mb4_sk_0900_ai_ci">
      <Charset>utf8mb4</Charset>
    </collation>
    <collation id="267" parent="1" name="utf8mb4_sk_0900_as_cs">
      <Charset>utf8mb4</Charset>
    </collation>
    <collation id="268" parent="1" name="utf8mb4_sl_0900_ai_ci">
      <Charset>utf8mb4</Charset>
    </collation>
    <collation id="269" parent="1" name="utf8mb4_sl_0900_as_cs">
      <Charset>utf8mb4</Charset>
    </collation>
    <collation id="270" parent="1" name="utf8mb4_slovak_ci">
      <Charset>utf8mb4</Charset>
    </collation>
    <collation id="271" parent="1" name="utf8mb4_slovenian_ci">
      <Charset>utf8mb4</Charset>
    </collation>
    <collation id="272" parent="1" name="utf8mb4_spanish2_ci">
      <Charset>utf8mb4</Charset>
    </collation>
    <collation id="273" parent="1" name="utf8mb4_spanish_ci">
      <Charset>utf8mb4</Charset>
    </collation>
    <collation id="274" parent="1" name="utf8mb4_sr_latn_0900_ai_ci">
      <Charset>utf8mb4</Charset>
    </collation>
    <collation id="275" parent="1" name="utf8mb4_sr_latn_0900_as_cs">
      <Charset>utf8mb4</Charset>
    </collation>
    <collation id="276" parent="1" name="utf8mb4_sv_0900_ai_ci">
      <Charset>utf8mb4</Charset>
    </collation>
    <collation id="277" parent="1" name="utf8mb4_sv_0900_as_cs">
      <Charset>utf8mb4</Charset>
    </collation>
    <collation id="278" parent="1" name="utf8mb4_swedish_ci">
      <Charset>utf8mb4</Charset>
    </collation>
    <collation id="279" parent="1" name="utf8mb4_tr_0900_ai_ci">
      <Charset>utf8mb4</Charset>
    </collation>
    <collation id="280" parent="1" name="utf8mb4_tr_0900_as_cs">
      <Charset>utf8mb4</Charset>
    </collation>
    <collation id="281" parent="1" name="utf8mb4_turkish_ci">
      <Charset>utf8mb4</Charset>
    </collation>
    <collation id="282" parent="1" name="utf8mb4_unicode_520_ci">
      <Charset>utf8mb4</Charset>
    </collation>
    <collation id="283" parent="1" name="utf8mb4_unicode_ci">
      <Charset>utf8mb4</Charset>
    </collation>
    <collation id="284" parent="1" name="utf8mb4_vi_0900_ai_ci">
      <Charset>utf8mb4</Charset>
    </collation>
    <collation id="285" parent="1" name="utf8mb4_vi_0900_as_cs">
      <Charset>utf8mb4</Charset>
    </collation>
    <collation id="286" parent="1" name="utf8mb4_vietnamese_ci">
      <Charset>utf8mb4</Charset>
    </collation>
    <collation id="287" parent="1" name="utf8mb4_zh_0900_as_cs">
      <Charset>utf8mb4</Charset>
    </collation>
    <schema id="288" parent="1" name="bibliothèque">
      <CollationName>utf8mb4_0900_ai_ci</CollationName>
    </schema>
    <schema id="289" parent="1" name="cinema">
      <CollationName>utf8mb4_0900_ai_ci</CollationName>
    </schema>
    <schema id="290" parent="1" name="cnss">
      <CollationName>utf8mb4_0900_ai_ci</CollationName>
    </schema>
    <schema id="291" parent="1" name="company_aerienne">
      <CollationName>utf8mb4_0900_ai_ci</CollationName>
    </schema>
    <schema id="292" parent="1" name="digipme_db">
      <AutoIntrospectionLevel>3</AutoIntrospectionLevel>
      <Current>1</Current>
      <LastIntrospectionLevel>3</LastIntrospectionLevel>
      <LastIntrospectionLocalTimestamp>2026-09-22.15:05:01</LastIntrospectionLocalTimestamp>
      <CollationName>utf8mb4_0900_ai_ci</CollationName>
    </schema>
    <schema id="293" parent="1" name="finpay_db">
      <CollationName>utf8mb4_0900_ai_ci</CollationName>
    </schema>
    <schema id="294" parent="1" name="fleetflow">
      <CollationName>utf8mb4_0900_ai_ci</CollationName>
    </schema>
    <schema id="295" parent="1" name="fleetflow_db">
      <CollationName>utf8mb4_0900_ai_ci</CollationName>
    </schema>
    <schema id="296" parent="1" name="flywaytest1">
      <CollationName>utf8mb4_0900_ai_ci</CollationName>
    </schema>
    <schema id="297" parent="1" name="healthcare">
      <CollationName>utf8mb4_0900_ai_ci</CollationName>
    </schema>
    <schema id="298" parent="1" name="healthcare_db">
      <CollationName>utf8mb4_0900_ai_ci</CollationName>
    </schema>
    <schema id="299" parent="1" name="information_schema">
      <CollationName>utf8mb3_general_ci</CollationName>
    </schema>
    <schema id="300" parent="1" name="logitrack_db">
      <CollationName>utf8mb4_0900_ai_ci</CollationName>
    </schema>
    <schema id="301" parent="1" name="mysql">
      <CollationName>utf8mb4_0900_ai_ci</CollationName>
    </schema>
    <schema id="302" parent="1" name="performance_schema">
      <CollationName>utf8mb4_0900_ai_ci</CollationName>
    </schema>
    <schema id="303" parent="1" name="supplyflow">
      <CollationName>utf8mb4_0900_ai_ci</CollationName>
    </schema>
    <schema id="304" parent="1" name="sys">
      <CollationName>utf8mb4_0900_ai_ci</CollationName>
    </schema>
    <schema id="305" parent="1" name="test">
      <CollationName>utf8mb4_0900_ai_ci</CollationName>
    </schema>
    <user id="306" parent="1" name="mysql.infoschema">
      <CanLogin>0</CanLogin>
      <Host>localhost</Host>
    </user>
    <user id="307" parent="1" name="mysql.session">
      <CanLogin>0</CanLogin>
      <Host>localhost</Host>
    </user>
    <user id="308" parent="1" name="mysql.sys">
      <CanLogin>0</CanLogin>
      <Host>localhost</Host>
    </user>
    <user id="309" parent="1" name="root">
      <Host>localhost</Host>
    </user>
  </database-model>
</dataSource>
```

# .idea\dataSources\1053d535-dee1-4ba7-a6d2-6646bf142abc\storage_v2\_src_\schema\information_schema.FNRwLQ.meta

```meta
#n:information_schema
!<md> [null, 0, null, null, -2147483648, -2147483648]

```

# .idea\dataSources\1053d535-dee1-4ba7-a6d2-6646bf142abc\storage_v2\_src_\schema\mysql.osA4Bg.meta

```meta
#n:mysql
!<md> [null, 0, null, null, -2147483648, -2147483648]

```

# .idea\dataSources\1053d535-dee1-4ba7-a6d2-6646bf142abc\storage_v2\_src_\schema\performance_schema.kIw0nw.meta

```meta
#n:performance_schema
!<md> [null, 0, null, null, -2147483648, -2147483648]

```

# .idea\dataSources\1053d535-dee1-4ba7-a6d2-6646bf142abc\storage_v2\_src_\schema\sys.zb4BAA.meta

```meta
#n:sys
!<md> [null, 0, null, null, -2147483648, -2147483648]

```

# .idea\dataSources\data_sources_history.xml

```xml
<DataSourcesHistory>
  <DataSourceFromHistory isRemovedFromProject="false">
    <data-source source="LOCAL" name="digipme_db@localhost" uuid="f192f766-c8e8-4bf9-baf3-74750656e74f">
      <database-info product="MySQL" version="8.0.44" jdbc-version="4.2" driver-name="MySQL Connector/J" driver-version="mysql-connector-j-9.5.0 (Revision: a7b3c94f50efbddb9f0dd69b3e0d1aaa25305cd6)" dbms="MYSQL" exact-version="8.0.44" exact-driver-version="9.5">
        <extra-name-characters>$</extra-name-characters>
        <identifier-quote-string>`</identifier-quote-string>
      </database-info>
      <case-sensitivity plain-identifiers="lower" quoted-identifiers="lower" />
      <driver-ref>mysql.8</driver-ref>
      <synchronize>true</synchronize>
      <jdbc-driver>com.mysql.cj.jdbc.Driver</jdbc-driver>
      <jdbc-url>jdbc:mysql://localhost:3307/digipme_db</jdbc-url>
      <secret-storage>master_key</secret-storage>
      <user-name>root</user-name>
      <schema-mapping>
        <introspection-scope>
          <node kind="schema" qname="@" />
        </introspection-scope>
      </schema-mapping>
      <working-dir>$ProjectFileDir$</working-dir>
    </data-source>
  </DataSourceFromHistory>
  <DataSourceFromHistory isRemovedFromProject="false">
    <data-source source="LOCAL" name="digipme_db@localhost [2]" uuid="1053d535-dee1-4ba7-a6d2-6646bf142abc">
      <database-info product="MySQL" version="8.0.44" jdbc-version="4.2" driver-name="MySQL Connector/J" driver-version="mysql-connector-j-9.5.0 (Revision: a7b3c94f50efbddb9f0dd69b3e0d1aaa25305cd6)" dbms="MYSQL" exact-version="8.0.44" exact-driver-version="9.5">
        <extra-name-characters>$</extra-name-characters>
        <identifier-quote-string>`</identifier-quote-string>
      </database-info>
      <case-sensitivity plain-identifiers="lower" quoted-identifiers="lower" />
      <driver-ref>mysql.8</driver-ref>
      <synchronize>true</synchronize>
      <jdbc-driver>com.mysql.cj.jdbc.Driver</jdbc-driver>
      <jdbc-url>jdbc:mysql://localhost:3307/digipme_db</jdbc-url>
      <secret-storage>master_key</secret-storage>
      <user-name>root</user-name>
      <schema-mapping>
        <introspection-scope>
          <node kind="schema" qname="@" />
        </introspection-scope>
      </schema-mapping>
      <working-dir>$ProjectFileDir$</working-dir>
    </data-source>
  </DataSourceFromHistory>
</DataSourcesHistory>
```

# .idea\dataSources\f192f766-c8e8-4bf9-baf3-74750656e74f.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<dataSource name="digipme_db@localhost">
  <database-model serializer="dbm" dbms="MYSQL" family-id="MYSQL" format-version="4.55">
    <root id="1">
      <DefaultAuthPlugin>caching_sha2_password</DefaultAuthPlugin>
      <DefaultCasing>lower/lower</DefaultCasing>
      <DefaultEngine>InnoDB</DefaultEngine>
      <DefaultTmpEngine>InnoDB</DefaultTmpEngine>
      <Grants>|root||root|localhost|ALTER|G
|root||root|localhost|ALTER ROUTINE|G
|root||root|localhost|APPLICATION_PASSWORD_ADMIN|G
|root||mysql.infoschema|localhost|AUDIT_ABORT_EXEMPT|G
|root||mysql.session|localhost|AUDIT_ABORT_EXEMPT|G
|root||mysql.sys|localhost|AUDIT_ABORT_EXEMPT|G
|root||root|localhost|AUDIT_ABORT_EXEMPT|G
|root||root|localhost|AUDIT_ADMIN|G
|root||mysql.session|localhost|AUTHENTICATION_POLICY_ADMIN|G
|root||root|localhost|AUTHENTICATION_POLICY_ADMIN|G
|root||mysql.session|localhost|BACKUP_ADMIN|G
|root||root|localhost|BACKUP_ADMIN|G
|root||root|localhost|BINLOG_ADMIN|G
|root||root|localhost|BINLOG_ENCRYPTION_ADMIN|G
|root||mysql.session|localhost|CLONE_ADMIN|G
|root||root|localhost|CLONE_ADMIN|G
|root||mysql.session|localhost|CONNECTION_ADMIN|G
|root||root|localhost|CONNECTION_ADMIN|G
|root||root|localhost|CREATE|G
|root||root|localhost|CREATE ROLE|G
|root||root|localhost|CREATE ROUTINE|G
|root||root|localhost|CREATE TABLESPACE|G
|root||root|localhost|CREATE TEMPORARY TABLES|G
|root||root|localhost|CREATE USER|G
|root||root|localhost|CREATE VIEW|G
|root||root|localhost|DELETE|G
|root||root|localhost|DROP|G
|root||root|localhost|DROP ROLE|G
|root||root|localhost|ENCRYPTION_KEY_ADMIN|G
|root||root|localhost|EVENT|G
|root||root|localhost|EXECUTE|G
|root||root|localhost|FILE|G
|root||mysql.infoschema|localhost|FIREWALL_EXEMPT|G
|root||mysql.session|localhost|FIREWALL_EXEMPT|G
|root||mysql.sys|localhost|FIREWALL_EXEMPT|G
|root||root|localhost|FIREWALL_EXEMPT|G
|root||root|localhost|FLUSH_OPTIMIZER_COSTS|G
|root||root|localhost|FLUSH_STATUS|G
|root||root|localhost|FLUSH_TABLES|G
|root||root|localhost|FLUSH_USER_RESOURCES|G
|root||root|localhost|GROUP_REPLICATION_ADMIN|G
|root||root|localhost|GROUP_REPLICATION_STREAM|G
|root||root|localhost|INDEX|G
|root||root|localhost|INNODB_REDO_LOG_ARCHIVE|G
|root||root|localhost|INNODB_REDO_LOG_ENABLE|G
|root||root|localhost|INSERT|G
|root||root|localhost|LOCK TABLES|G
|root||root|localhost|PASSWORDLESS_USER_ADMIN|G
|root||mysql.session|localhost|PERSIST_RO_VARIABLES_ADMIN|G
|root||root|localhost|PERSIST_RO_VARIABLES_ADMIN|G
|root||root|localhost|PROCESS|G
|root||root|localhost|REFERENCES|G
|root||root|localhost|RELOAD|G
|root||root|localhost|REPLICATION CLIENT|G
|root||root|localhost|REPLICATION SLAVE|G
|root||root|localhost|REPLICATION_APPLIER|G
|root||root|localhost|REPLICATION_SLAVE_ADMIN|G
|root||root|localhost|RESOURCE_GROUP_ADMIN|G
|root||root|localhost|RESOURCE_GROUP_USER|G
|root||root|localhost|ROLE_ADMIN|G
|root||mysql.infoschema|localhost|SELECT|G
|root||root|localhost|SELECT|G
|root||root|localhost|SENSITIVE_VARIABLES_OBSERVER|G
|root||root|localhost|SERVICE_CONNECTION_ADMIN|G
|root||mysql.session|localhost|SESSION_VARIABLES_ADMIN|G
|root||root|localhost|SESSION_VARIABLES_ADMIN|G
|root||root|localhost|SET_USER_ID|G
|root||root|localhost|SHOW DATABASES|G
|root||root|localhost|SHOW VIEW|G
|root||root|localhost|SHOW_ROUTINE|G
|root||mysql.session|localhost|SHUTDOWN|G
|root||root|localhost|SHUTDOWN|G
|root||mysql.session|localhost|SUPER|G
|root||root|localhost|SUPER|G
|root||mysql.infoschema|localhost|SYSTEM_USER|G
|root||mysql.session|localhost|SYSTEM_USER|G
|root||mysql.sys|localhost|SYSTEM_USER|G
|root||root|localhost|SYSTEM_USER|G
|root||mysql.session|localhost|SYSTEM_VARIABLES_ADMIN|G
|root||root|localhost|SYSTEM_VARIABLES_ADMIN|G
|root||root|localhost|TABLE_ENCRYPTION_ADMIN|G
|root||root|localhost|TELEMETRY_LOG_ADMIN|G
|root||root|localhost|TRIGGER|G
|root||root|localhost|UPDATE|G
|root||root|localhost|XA_RECOVER_ADMIN|G
|root||root|localhost|grant option|G
performance_schema|schema||mysql.session|localhost|SELECT|G
sys|schema||mysql.sys|localhost|TRIGGER|G</Grants>
      <ServerVersion>8.0.44</ServerVersion>
    </root>
    <collation id="2" parent="1" name="armscii8_bin">
      <Charset>armscii8</Charset>
    </collation>
    <collation id="3" parent="1" name="armscii8_general_ci">
      <Charset>armscii8</Charset>
      <DefaultForCharset>1</DefaultForCharset>
    </collation>
    <collation id="4" parent="1" name="ascii_bin">
      <Charset>ascii</Charset>
    </collation>
    <collation id="5" parent="1" name="ascii_general_ci">
      <Charset>ascii</Charset>
      <DefaultForCharset>1</DefaultForCharset>
    </collation>
    <collation id="6" parent="1" name="big5_bin">
      <Charset>big5</Charset>
    </collation>
    <collation id="7" parent="1" name="big5_chinese_ci">
      <Charset>big5</Charset>
      <DefaultForCharset>1</DefaultForCharset>
    </collation>
    <collation id="8" parent="1" name="binary">
      <Charset>binary</Charset>
      <DefaultForCharset>1</DefaultForCharset>
    </collation>
    <collation id="9" parent="1" name="cp1250_bin">
      <Charset>cp1250</Charset>
    </collation>
    <collation id="10" parent="1" name="cp1250_croatian_ci">
      <Charset>cp1250</Charset>
    </collation>
    <collation id="11" parent="1" name="cp1250_czech_cs">
      <Charset>cp1250</Charset>
    </collation>
    <collation id="12" parent="1" name="cp1250_general_ci">
      <Charset>cp1250</Charset>
      <DefaultForCharset>1</DefaultForCharset>
    </collation>
    <collation id="13" parent="1" name="cp1250_polish_ci">
      <Charset>cp1250</Charset>
    </collation>
    <collation id="14" parent="1" name="cp1251_bin">
      <Charset>cp1251</Charset>
    </collation>
    <collation id="15" parent="1" name="cp1251_bulgarian_ci">
      <Charset>cp1251</Charset>
    </collation>
    <collation id="16" parent="1" name="cp1251_general_ci">
      <Charset>cp1251</Charset>
      <DefaultForCharset>1</DefaultForCharset>
    </collation>
    <collation id="17" parent="1" name="cp1251_general_cs">
      <Charset>cp1251</Charset>
    </collation>
    <collation id="18" parent="1" name="cp1251_ukrainian_ci">
      <Charset>cp1251</Charset>
    </collation>
    <collation id="19" parent="1" name="cp1256_bin">
      <Charset>cp1256</Charset>
    </collation>
    <collation id="20" parent="1" name="cp1256_general_ci">
      <Charset>cp1256</Charset>
      <DefaultForCharset>1</DefaultForCharset>
    </collation>
    <collation id="21" parent="1" name="cp1257_bin">
      <Charset>cp1257</Charset>
    </collation>
    <collation id="22" parent="1" name="cp1257_general_ci">
      <Charset>cp1257</Charset>
      <DefaultForCharset>1</DefaultForCharset>
    </collation>
    <collation id="23" parent="1" name="cp1257_lithuanian_ci">
      <Charset>cp1257</Charset>
    </collation>
    <collation id="24" parent="1" name="cp850_bin">
      <Charset>cp850</Charset>
    </collation>
    <collation id="25" parent="1" name="cp850_general_ci">
      <Charset>cp850</Charset>
      <DefaultForCharset>1</DefaultForCharset>
    </collation>
    <collation id="26" parent="1" name="cp852_bin">
      <Charset>cp852</Charset>
    </collation>
    <collation id="27" parent="1" name="cp852_general_ci">
      <Charset>cp852</Charset>
      <DefaultForCharset>1</DefaultForCharset>
    </collation>
    <collation id="28" parent="1" name="cp866_bin">
      <Charset>cp866</Charset>
    </collation>
    <collation id="29" parent="1" name="cp866_general_ci">
      <Charset>cp866</Charset>
      <DefaultForCharset>1</DefaultForCharset>
    </collation>
    <collation id="30" parent="1" name="cp932_bin">
      <Charset>cp932</Charset>
    </collation>
    <collation id="31" parent="1" name="cp932_japanese_ci">
      <Charset>cp932</Charset>
      <DefaultForCharset>1</DefaultForCharset>
    </collation>
    <collation id="32" parent="1" name="dec8_bin">
      <Charset>dec8</Charset>
    </collation>
    <collation id="33" parent="1" name="dec8_swedish_ci">
      <Charset>dec8</Charset>
      <DefaultForCharset>1</DefaultForCharset>
    </collation>
    <collation id="34" parent="1" name="eucjpms_bin">
      <Charset>eucjpms</Charset>
    </collation>
    <collation id="35" parent="1" name="eucjpms_japanese_ci">
      <Charset>eucjpms</Charset>
      <DefaultForCharset>1</DefaultForCharset>
    </collation>
    <collation id="36" parent="1" name="euckr_bin">
      <Charset>euckr</Charset>
    </collation>
    <collation id="37" parent="1" name="euckr_korean_ci">
      <Charset>euckr</Charset>
      <DefaultForCharset>1</DefaultForCharset>
    </collation>
    <collation id="38" parent="1" name="gb18030_bin">
      <Charset>gb18030</Charset>
    </collation>
    <collation id="39" parent="1" name="gb18030_chinese_ci">
      <Charset>gb18030</Charset>
      <DefaultForCharset>1</DefaultForCharset>
    </collation>
    <collation id="40" parent="1" name="gb18030_unicode_520_ci">
      <Charset>gb18030</Charset>
    </collation>
    <collation id="41" parent="1" name="gb2312_bin">
      <Charset>gb2312</Charset>
    </collation>
    <collation id="42" parent="1" name="gb2312_chinese_ci">
      <Charset>gb2312</Charset>
      <DefaultForCharset>1</DefaultForCharset>
    </collation>
    <collation id="43" parent="1" name="gbk_bin">
      <Charset>gbk</Charset>
    </collation>
    <collation id="44" parent="1" name="gbk_chinese_ci">
      <Charset>gbk</Charset>
      <DefaultForCharset>1</DefaultForCharset>
    </collation>
    <collation id="45" parent="1" name="geostd8_bin">
      <Charset>geostd8</Charset>
    </collation>
    <collation id="46" parent="1" name="geostd8_general_ci">
      <Charset>geostd8</Charset>
      <DefaultForCharset>1</DefaultForCharset>
    </collation>
    <collation id="47" parent="1" name="greek_bin">
      <Charset>greek</Charset>
    </collation>
    <collation id="48" parent="1" name="greek_general_ci">
      <Charset>greek</Charset>
      <DefaultForCharset>1</DefaultForCharset>
    </collation>
    <collation id="49" parent="1" name="hebrew_bin">
      <Charset>hebrew</Charset>
    </collation>
    <collation id="50" parent="1" name="hebrew_general_ci">
      <Charset>hebrew</Charset>
      <DefaultForCharset>1</DefaultForCharset>
    </collation>
    <collation id="51" parent="1" name="hp8_bin">
      <Charset>hp8</Charset>
    </collation>
    <collation id="52" parent="1" name="hp8_english_ci">
      <Charset>hp8</Charset>
      <DefaultForCharset>1</DefaultForCharset>
    </collation>
    <collation id="53" parent="1" name="keybcs2_bin">
      <Charset>keybcs2</Charset>
    </collation>
    <collation id="54" parent="1" name="keybcs2_general_ci">
      <Charset>keybcs2</Charset>
      <DefaultForCharset>1</DefaultForCharset>
    </collation>
    <collation id="55" parent="1" name="koi8r_bin">
      <Charset>koi8r</Charset>
    </collation>
    <collation id="56" parent="1" name="koi8r_general_ci">
      <Charset>koi8r</Charset>
      <DefaultForCharset>1</DefaultForCharset>
    </collation>
    <collation id="57" parent="1" name="koi8u_bin">
      <Charset>koi8u</Charset>
    </collation>
    <collation id="58" parent="1" name="koi8u_general_ci">
      <Charset>koi8u</Charset>
      <DefaultForCharset>1</DefaultForCharset>
    </collation>
    <collation id="59" parent="1" name="latin1_bin">
      <Charset>latin1</Charset>
    </collation>
    <collation id="60" parent="1" name="latin1_danish_ci">
      <Charset>latin1</Charset>
    </collation>
    <collation id="61" parent="1" name="latin1_general_ci">
      <Charset>latin1</Charset>
    </collation>
    <collation id="62" parent="1" name="latin1_general_cs">
      <Charset>latin1</Charset>
    </collation>
    <collation id="63" parent="1" name="latin1_german1_ci">
      <Charset>latin1</Charset>
    </collation>
    <collation id="64" parent="1" name="latin1_german2_ci">
      <Charset>latin1</Charset>
    </collation>
    <collation id="65" parent="1" name="latin1_spanish_ci">
      <Charset>latin1</Charset>
    </collation>
    <collation id="66" parent="1" name="latin1_swedish_ci">
      <Charset>latin1</Charset>
      <DefaultForCharset>1</DefaultForCharset>
    </collation>
    <collation id="67" parent="1" name="latin2_bin">
      <Charset>latin2</Charset>
    </collation>
    <collation id="68" parent="1" name="latin2_croatian_ci">
      <Charset>latin2</Charset>
    </collation>
    <collation id="69" parent="1" name="latin2_czech_cs">
      <Charset>latin2</Charset>
    </collation>
    <collation id="70" parent="1" name="latin2_general_ci">
      <Charset>latin2</Charset>
      <DefaultForCharset>1</DefaultForCharset>
    </collation>
    <collation id="71" parent="1" name="latin2_hungarian_ci">
      <Charset>latin2</Charset>
    </collation>
    <collation id="72" parent="1" name="latin5_bin">
      <Charset>latin5</Charset>
    </collation>
    <collation id="73" parent="1" name="latin5_turkish_ci">
      <Charset>latin5</Charset>
      <DefaultForCharset>1</DefaultForCharset>
    </collation>
    <collation id="74" parent="1" name="latin7_bin">
      <Charset>latin7</Charset>
    </collation>
    <collation id="75" parent="1" name="latin7_estonian_cs">
      <Charset>latin7</Charset>
    </collation>
    <collation id="76" parent="1" name="latin7_general_ci">
      <Charset>latin7</Charset>
      <DefaultForCharset>1</DefaultForCharset>
    </collation>
    <collation id="77" parent="1" name="latin7_general_cs">
      <Charset>latin7</Charset>
    </collation>
    <collation id="78" parent="1" name="macce_bin">
      <Charset>macce</Charset>
    </collation>
    <collation id="79" parent="1" name="macce_general_ci">
      <Charset>macce</Charset>
      <DefaultForCharset>1</DefaultForCharset>
    </collation>
    <collation id="80" parent="1" name="macroman_bin">
      <Charset>macroman</Charset>
    </collation>
    <collation id="81" parent="1" name="macroman_general_ci">
      <Charset>macroman</Charset>
      <DefaultForCharset>1</DefaultForCharset>
    </collation>
    <collation id="82" parent="1" name="sjis_bin">
      <Charset>sjis</Charset>
    </collation>
    <collation id="83" parent="1" name="sjis_japanese_ci">
      <Charset>sjis</Charset>
      <DefaultForCharset>1</DefaultForCharset>
    </collation>
    <collation id="84" parent="1" name="swe7_bin">
      <Charset>swe7</Charset>
    </collation>
    <collation id="85" parent="1" name="swe7_swedish_ci">
      <Charset>swe7</Charset>
      <DefaultForCharset>1</DefaultForCharset>
    </collation>
    <collation id="86" parent="1" name="tis620_bin">
      <Charset>tis620</Charset>
    </collation>
    <collation id="87" parent="1" name="tis620_thai_ci">
      <Charset>tis620</Charset>
      <DefaultForCharset>1</DefaultForCharset>
    </collation>
    <collation id="88" parent="1" name="ucs2_bin">
      <Charset>ucs2</Charset>
    </collation>
    <collation id="89" parent="1" name="ucs2_croatian_ci">
      <Charset>ucs2</Charset>
    </collation>
    <collation id="90" parent="1" name="ucs2_czech_ci">
      <Charset>ucs2</Charset>
    </collation>
    <collation id="91" parent="1" name="ucs2_danish_ci">
      <Charset>ucs2</Charset>
    </collation>
    <collation id="92" parent="1" name="ucs2_esperanto_ci">
      <Charset>ucs2</Charset>
    </collation>
    <collation id="93" parent="1" name="ucs2_estonian_ci">
      <Charset>ucs2</Charset>
    </collation>
    <collation id="94" parent="1" name="ucs2_general_ci">
      <Charset>ucs2</Charset>
      <DefaultForCharset>1</DefaultForCharset>
    </collation>
    <collation id="95" parent="1" name="ucs2_general_mysql500_ci">
      <Charset>ucs2</Charset>
    </collation>
    <collation id="96" parent="1" name="ucs2_german2_ci">
      <Charset>ucs2</Charset>
    </collation>
    <collation id="97" parent="1" name="ucs2_hungarian_ci">
      <Charset>ucs2</Charset>
    </collation>
    <collation id="98" parent="1" name="ucs2_icelandic_ci">
      <Charset>ucs2</Charset>
    </collation>
    <collation id="99" parent="1" name="ucs2_latvian_ci">
      <Charset>ucs2</Charset>
    </collation>
    <collation id="100" parent="1" name="ucs2_lithuanian_ci">
      <Charset>ucs2</Charset>
    </collation>
    <collation id="101" parent="1" name="ucs2_persian_ci">
      <Charset>ucs2</Charset>
    </collation>
    <collation id="102" parent="1" name="ucs2_polish_ci">
      <Charset>ucs2</Charset>
    </collation>
    <collation id="103" parent="1" name="ucs2_roman_ci">
      <Charset>ucs2</Charset>
    </collation>
    <collation id="104" parent="1" name="ucs2_romanian_ci">
      <Charset>ucs2</Charset>
    </collation>
    <collation id="105" parent="1" name="ucs2_sinhala_ci">
      <Charset>ucs2</Charset>
    </collation>
    <collation id="106" parent="1" name="ucs2_slovak_ci">
      <Charset>ucs2</Charset>
    </collation>
    <collation id="107" parent="1" name="ucs2_slovenian_ci">
      <Charset>ucs2</Charset>
    </collation>
    <collation id="108" parent="1" name="ucs2_spanish2_ci">
      <Charset>ucs2</Charset>
    </collation>
    <collation id="109" parent="1" name="ucs2_spanish_ci">
      <Charset>ucs2</Charset>
    </collation>
    <collation id="110" parent="1" name="ucs2_swedish_ci">
      <Charset>ucs2</Charset>
    </collation>
    <collation id="111" parent="1" name="ucs2_turkish_ci">
      <Charset>ucs2</Charset>
    </collation>
    <collation id="112" parent="1" name="ucs2_unicode_520_ci">
      <Charset>ucs2</Charset>
    </collation>
    <collation id="113" parent="1" name="ucs2_unicode_ci">
      <Charset>ucs2</Charset>
    </collation>
    <collation id="114" parent="1" name="ucs2_vietnamese_ci">
      <Charset>ucs2</Charset>
    </collation>
    <collation id="115" parent="1" name="ujis_bin">
      <Charset>ujis</Charset>
    </collation>
    <collation id="116" parent="1" name="ujis_japanese_ci">
      <Charset>ujis</Charset>
      <DefaultForCharset>1</DefaultForCharset>
    </collation>
    <collation id="117" parent="1" name="utf16_bin">
      <Charset>utf16</Charset>
    </collation>
    <collation id="118" parent="1" name="utf16_croatian_ci">
      <Charset>utf16</Charset>
    </collation>
    <collation id="119" parent="1" name="utf16_czech_ci">
      <Charset>utf16</Charset>
    </collation>
    <collation id="120" parent="1" name="utf16_danish_ci">
      <Charset>utf16</Charset>
    </collation>
    <collation id="121" parent="1" name="utf16_esperanto_ci">
      <Charset>utf16</Charset>
    </collation>
    <collation id="122" parent="1" name="utf16_estonian_ci">
      <Charset>utf16</Charset>
    </collation>
    <collation id="123" parent="1" name="utf16_general_ci">
      <Charset>utf16</Charset>
      <DefaultForCharset>1</DefaultForCharset>
    </collation>
    <collation id="124" parent="1" name="utf16_german2_ci">
      <Charset>utf16</Charset>
    </collation>
    <collation id="125" parent="1" name="utf16_hungarian_ci">
      <Charset>utf16</Charset>
    </collation>
    <collation id="126" parent="1" name="utf16_icelandic_ci">
      <Charset>utf16</Charset>
    </collation>
    <collation id="127" parent="1" name="utf16_latvian_ci">
      <Charset>utf16</Charset>
    </collation>
    <collation id="128" parent="1" name="utf16_lithuanian_ci">
      <Charset>utf16</Charset>
    </collation>
    <collation id="129" parent="1" name="utf16_persian_ci">
      <Charset>utf16</Charset>
    </collation>
    <collation id="130" parent="1" name="utf16_polish_ci">
      <Charset>utf16</Charset>
    </collation>
    <collation id="131" parent="1" name="utf16_roman_ci">
      <Charset>utf16</Charset>
    </collation>
    <collation id="132" parent="1" name="utf16_romanian_ci">
      <Charset>utf16</Charset>
    </collation>
    <collation id="133" parent="1" name="utf16_sinhala_ci">
      <Charset>utf16</Charset>
    </collation>
    <collation id="134" parent="1" name="utf16_slovak_ci">
      <Charset>utf16</Charset>
    </collation>
    <collation id="135" parent="1" name="utf16_slovenian_ci">
      <Charset>utf16</Charset>
    </collation>
    <collation id="136" parent="1" name="utf16_spanish2_ci">
      <Charset>utf16</Charset>
    </collation>
    <collation id="137" parent="1" name="utf16_spanish_ci">
      <Charset>utf16</Charset>
    </collation>
    <collation id="138" parent="1" name="utf16_swedish_ci">
      <Charset>utf16</Charset>
    </collation>
    <collation id="139" parent="1" name="utf16_turkish_ci">
      <Charset>utf16</Charset>
    </collation>
    <collation id="140" parent="1" name="utf16_unicode_520_ci">
      <Charset>utf16</Charset>
    </collation>
    <collation id="141" parent="1" name="utf16_unicode_ci">
      <Charset>utf16</Charset>
    </collation>
    <collation id="142" parent="1" name="utf16_vietnamese_ci">
      <Charset>utf16</Charset>
    </collation>
    <collation id="143" parent="1" name="utf16le_bin">
      <Charset>utf16le</Charset>
    </collation>
    <collation id="144" parent="1" name="utf16le_general_ci">
      <Charset>utf16le</Charset>
      <DefaultForCharset>1</DefaultForCharset>
    </collation>
    <collation id="145" parent="1" name="utf32_bin">
      <Charset>utf32</Charset>
    </collation>
    <collation id="146" parent="1" name="utf32_croatian_ci">
      <Charset>utf32</Charset>
    </collation>
    <collation id="147" parent="1" name="utf32_czech_ci">
      <Charset>utf32</Charset>
    </collation>
    <collation id="148" parent="1" name="utf32_danish_ci">
      <Charset>utf32</Charset>
    </collation>
    <collation id="149" parent="1" name="utf32_esperanto_ci">
      <Charset>utf32</Charset>
    </collation>
    <collation id="150" parent="1" name="utf32_estonian_ci">
      <Charset>utf32</Charset>
    </collation>
    <collation id="151" parent="1" name="utf32_general_ci">
      <Charset>utf32</Charset>
      <DefaultForCharset>1</DefaultForCharset>
    </collation>
    <collation id="152" parent="1" name="utf32_german2_ci">
      <Charset>utf32</Charset>
    </collation>
    <collation id="153" parent="1" name="utf32_hungarian_ci">
      <Charset>utf32</Charset>
    </collation>
    <collation id="154" parent="1" name="utf32_icelandic_ci">
      <Charset>utf32</Charset>
    </collation>
    <collation id="155" parent="1" name="utf32_latvian_ci">
      <Charset>utf32</Charset>
    </collation>
    <collation id="156" parent="1" name="utf32_lithuanian_ci">
      <Charset>utf32</Charset>
    </collation>
    <collation id="157" parent="1" name="utf32_persian_ci">
      <Charset>utf32</Charset>
    </collation>
    <collation id="158" parent="1" name="utf32_polish_ci">
      <Charset>utf32</Charset>
    </collation>
    <collation id="159" parent="1" name="utf32_roman_ci">
      <Charset>utf32</Charset>
    </collation>
    <collation id="160" parent="1" name="utf32_romanian_ci">
      <Charset>utf32</Charset>
    </collation>
    <collation id="161" parent="1" name="utf32_sinhala_ci">
      <Charset>utf32</Charset>
    </collation>
    <collation id="162" parent="1" name="utf32_slovak_ci">
      <Charset>utf32</Charset>
    </collation>
    <collation id="163" parent="1" name="utf32_slovenian_ci">
      <Charset>utf32</Charset>
    </collation>
    <collation id="164" parent="1" name="utf32_spanish2_ci">
      <Charset>utf32</Charset>
    </collation>
    <collation id="165" parent="1" name="utf32_spanish_ci">
      <Charset>utf32</Charset>
    </collation>
    <collation id="166" parent="1" name="utf32_swedish_ci">
      <Charset>utf32</Charset>
    </collation>
    <collation id="167" parent="1" name="utf32_turkish_ci">
      <Charset>utf32</Charset>
    </collation>
    <collation id="168" parent="1" name="utf32_unicode_520_ci">
      <Charset>utf32</Charset>
    </collation>
    <collation id="169" parent="1" name="utf32_unicode_ci">
      <Charset>utf32</Charset>
    </collation>
    <collation id="170" parent="1" name="utf32_vietnamese_ci">
      <Charset>utf32</Charset>
    </collation>
    <collation id="171" parent="1" name="utf8mb3_bin">
      <Charset>utf8mb3</Charset>
    </collation>
    <collation id="172" parent="1" name="utf8mb3_croatian_ci">
      <Charset>utf8mb3</Charset>
    </collation>
    <collation id="173" parent="1" name="utf8mb3_czech_ci">
      <Charset>utf8mb3</Charset>
    </collation>
    <collation id="174" parent="1" name="utf8mb3_danish_ci">
      <Charset>utf8mb3</Charset>
    </collation>
    <collation id="175" parent="1" name="utf8mb3_esperanto_ci">
      <Charset>utf8mb3</Charset>
    </collation>
    <collation id="176" parent="1" name="utf8mb3_estonian_ci">
      <Charset>utf8mb3</Charset>
    </collation>
    <collation id="177" parent="1" name="utf8mb3_general_ci">
      <Charset>utf8mb3</Charset>
      <DefaultForCharset>1</DefaultForCharset>
    </collation>
    <collation id="178" parent="1" name="utf8mb3_general_mysql500_ci">
      <Charset>utf8mb3</Charset>
    </collation>
    <collation id="179" parent="1" name="utf8mb3_german2_ci">
      <Charset>utf8mb3</Charset>
    </collation>
    <collation id="180" parent="1" name="utf8mb3_hungarian_ci">
      <Charset>utf8mb3</Charset>
    </collation>
    <collation id="181" parent="1" name="utf8mb3_icelandic_ci">
      <Charset>utf8mb3</Charset>
    </collation>
    <collation id="182" parent="1" name="utf8mb3_latvian_ci">
      <Charset>utf8mb3</Charset>
    </collation>
    <collation id="183" parent="1" name="utf8mb3_lithuanian_ci">
      <Charset>utf8mb3</Charset>
    </collation>
    <collation id="184" parent="1" name="utf8mb3_persian_ci">
      <Charset>utf8mb3</Charset>
    </collation>
    <collation id="185" parent="1" name="utf8mb3_polish_ci">
      <Charset>utf8mb3</Charset>
    </collation>
    <collation id="186" parent="1" name="utf8mb3_roman_ci">
      <Charset>utf8mb3</Charset>
    </collation>
    <collation id="187" parent="1" name="utf8mb3_romanian_ci">
      <Charset>utf8mb3</Charset>
    </collation>
    <collation id="188" parent="1" name="utf8mb3_sinhala_ci">
      <Charset>utf8mb3</Charset>
    </collation>
    <collation id="189" parent="1" name="utf8mb3_slovak_ci">
      <Charset>utf8mb3</Charset>
    </collation>
    <collation id="190" parent="1" name="utf8mb3_slovenian_ci">
      <Charset>utf8mb3</Charset>
    </collation>
    <collation id="191" parent="1" name="utf8mb3_spanish2_ci">
      <Charset>utf8mb3</Charset>
    </collation>
    <collation id="192" parent="1" name="utf8mb3_spanish_ci">
      <Charset>utf8mb3</Charset>
    </collation>
    <collation id="193" parent="1" name="utf8mb3_swedish_ci">
      <Charset>utf8mb3</Charset>
    </collation>
    <collation id="194" parent="1" name="utf8mb3_tolower_ci">
      <Charset>utf8mb3</Charset>
    </collation>
    <collation id="195" parent="1" name="utf8mb3_turkish_ci">
      <Charset>utf8mb3</Charset>
    </collation>
    <collation id="196" parent="1" name="utf8mb3_unicode_520_ci">
      <Charset>utf8mb3</Charset>
    </collation>
    <collation id="197" parent="1" name="utf8mb3_unicode_ci">
      <Charset>utf8mb3</Charset>
    </collation>
    <collation id="198" parent="1" name="utf8mb3_vietnamese_ci">
      <Charset>utf8mb3</Charset>
    </collation>
    <collation id="199" parent="1" name="utf8mb4_0900_ai_ci">
      <Charset>utf8mb4</Charset>
      <DefaultForCharset>1</DefaultForCharset>
    </collation>
    <collation id="200" parent="1" name="utf8mb4_0900_as_ci">
      <Charset>utf8mb4</Charset>
    </collation>
    <collation id="201" parent="1" name="utf8mb4_0900_as_cs">
      <Charset>utf8mb4</Charset>
    </collation>
    <collation id="202" parent="1" name="utf8mb4_0900_bin">
      <Charset>utf8mb4</Charset>
    </collation>
    <collation id="203" parent="1" name="utf8mb4_bg_0900_ai_ci">
      <Charset>utf8mb4</Charset>
    </collation>
    <collation id="204" parent="1" name="utf8mb4_bg_0900_as_cs">
      <Charset>utf8mb4</Charset>
    </collation>
    <collation id="205" parent="1" name="utf8mb4_bin">
      <Charset>utf8mb4</Charset>
    </collation>
    <collation id="206" parent="1" name="utf8mb4_bs_0900_ai_ci">
      <Charset>utf8mb4</Charset>
    </collation>
    <collation id="207" parent="1" name="utf8mb4_bs_0900_as_cs">
      <Charset>utf8mb4</Charset>
    </collation>
    <collation id="208" parent="1" name="utf8mb4_croatian_ci">
      <Charset>utf8mb4</Charset>
    </collation>
    <collation id="209" parent="1" name="utf8mb4_cs_0900_ai_ci">
      <Charset>utf8mb4</Charset>
    </collation>
    <collation id="210" parent="1" name="utf8mb4_cs_0900_as_cs">
      <Charset>utf8mb4</Charset>
    </collation>
    <collation id="211" parent="1" name="utf8mb4_czech_ci">
      <Charset>utf8mb4</Charset>
    </collation>
    <collation id="212" parent="1" name="utf8mb4_da_0900_ai_ci">
      <Charset>utf8mb4</Charset>
    </collation>
    <collation id="213" parent="1" name="utf8mb4_da_0900_as_cs">
      <Charset>utf8mb4</Charset>
    </collation>
    <collation id="214" parent="1" name="utf8mb4_danish_ci">
      <Charset>utf8mb4</Charset>
    </collation>
    <collation id="215" parent="1" name="utf8mb4_de_pb_0900_ai_ci">
      <Charset>utf8mb4</Charset>
    </collation>
    <collation id="216" parent="1" name="utf8mb4_de_pb_0900_as_cs">
      <Charset>utf8mb4</Charset>
    </collation>
    <collation id="217" parent="1" name="utf8mb4_eo_0900_ai_ci">
      <Charset>utf8mb4</Charset>
    </collation>
    <collation id="218" parent="1" name="utf8mb4_eo_0900_as_cs">
      <Charset>utf8mb4</Charset>
    </collation>
    <collation id="219" parent="1" name="utf8mb4_es_0900_ai_ci">
      <Charset>utf8mb4</Charset>
    </collation>
    <collation id="220" parent="1" name="utf8mb4_es_0900_as_cs">
      <Charset>utf8mb4</Charset>
    </collation>
    <collation id="221" parent="1" name="utf8mb4_es_trad_0900_ai_ci">
      <Charset>utf8mb4</Charset>
    </collation>
    <collation id="222" parent="1" name="utf8mb4_es_trad_0900_as_cs">
      <Charset>utf8mb4</Charset>
    </collation>
    <collation id="223" parent="1" name="utf8mb4_esperanto_ci">
      <Charset>utf8mb4</Charset>
    </collation>
    <collation id="224" parent="1" name="utf8mb4_estonian_ci">
      <Charset>utf8mb4</Charset>
    </collation>
    <collation id="225" parent="1" name="utf8mb4_et_0900_ai_ci">
      <Charset>utf8mb4</Charset>
    </collation>
    <collation id="226" parent="1" name="utf8mb4_et_0900_as_cs">
      <Charset>utf8mb4</Charset>
    </collation>
    <collation id="227" parent="1" name="utf8mb4_general_ci">
      <Charset>utf8mb4</Charset>
    </collation>
    <collation id="228" parent="1" name="utf8mb4_german2_ci">
      <Charset>utf8mb4</Charset>
    </collation>
    <collation id="229" parent="1" name="utf8mb4_gl_0900_ai_ci">
      <Charset>utf8mb4</Charset>
    </collation>
    <collation id="230" parent="1" name="utf8mb4_gl_0900_as_cs">
      <Charset>utf8mb4</Charset>
    </collation>
    <collation id="231" parent="1" name="utf8mb4_hr_0900_ai_ci">
      <Charset>utf8mb4</Charset>
    </collation>
    <collation id="232" parent="1" name="utf8mb4_hr_0900_as_cs">
      <Charset>utf8mb4</Charset>
    </collation>
    <collation id="233" parent="1" name="utf8mb4_hu_0900_ai_ci">
      <Charset>utf8mb4</Charset>
    </collation>
    <collation id="234" parent="1" name="utf8mb4_hu_0900_as_cs">
      <Charset>utf8mb4</Charset>
    </collation>
    <collation id="235" parent="1" name="utf8mb4_hungarian_ci">
      <Charset>utf8mb4</Charset>
    </collation>
    <collation id="236" parent="1" name="utf8mb4_icelandic_ci">
      <Charset>utf8mb4</Charset>
    </collation>
    <collation id="237" parent="1" name="utf8mb4_is_0900_ai_ci">
      <Charset>utf8mb4</Charset>
    </collation>
    <collation id="238" parent="1" name="utf8mb4_is_0900_as_cs">
      <Charset>utf8mb4</Charset>
    </collation>
    <collation id="239" parent="1" name="utf8mb4_ja_0900_as_cs">
      <Charset>utf8mb4</Charset>
    </collation>
    <collation id="240" parent="1" name="utf8mb4_ja_0900_as_cs_ks">
      <Charset>utf8mb4</Charset>
    </collation>
    <collation id="241" parent="1" name="utf8mb4_la_0900_ai_ci">
      <Charset>utf8mb4</Charset>
    </collation>
    <collation id="242" parent="1" name="utf8mb4_la_0900_as_cs">
      <Charset>utf8mb4</Charset>
    </collation>
    <collation id="243" parent="1" name="utf8mb4_latvian_ci">
      <Charset>utf8mb4</Charset>
    </collation>
    <collation id="244" parent="1" name="utf8mb4_lithuanian_ci">
      <Charset>utf8mb4</Charset>
    </collation>
    <collation id="245" parent="1" name="utf8mb4_lt_0900_ai_ci">
      <Charset>utf8mb4</Charset>
    </collation>
    <collation id="246" parent="1" name="utf8mb4_lt_0900_as_cs">
      <Charset>utf8mb4</Charset>
    </collation>
    <collation id="247" parent="1" name="utf8mb4_lv_0900_ai_ci">
      <Charset>utf8mb4</Charset>
    </collation>
    <collation id="248" parent="1" name="utf8mb4_lv_0900_as_cs">
      <Charset>utf8mb4</Charset>
    </collation>
    <collation id="249" parent="1" name="utf8mb4_mn_cyrl_0900_ai_ci">
      <Charset>utf8mb4</Charset>
    </collation>
    <collation id="250" parent="1" name="utf8mb4_mn_cyrl_0900_as_cs">
      <Charset>utf8mb4</Charset>
    </collation>
    <collation id="251" parent="1" name="utf8mb4_nb_0900_ai_ci">
      <Charset>utf8mb4</Charset>
    </collation>
    <collation id="252" parent="1" name="utf8mb4_nb_0900_as_cs">
      <Charset>utf8mb4</Charset>
    </collation>
    <collation id="253" parent="1" name="utf8mb4_nn_0900_ai_ci">
      <Charset>utf8mb4</Charset>
    </collation>
    <collation id="254" parent="1" name="utf8mb4_nn_0900_as_cs">
      <Charset>utf8mb4</Charset>
    </collation>
    <collation id="255" parent="1" name="utf8mb4_persian_ci">
      <Charset>utf8mb4</Charset>
    </collation>
    <collation id="256" parent="1" name="utf8mb4_pl_0900_ai_ci">
      <Charset>utf8mb4</Charset>
    </collation>
    <collation id="257" parent="1" name="utf8mb4_pl_0900_as_cs">
      <Charset>utf8mb4</Charset>
    </collation>
    <collation id="258" parent="1" name="utf8mb4_polish_ci">
      <Charset>utf8mb4</Charset>
    </collation>
    <collation id="259" parent="1" name="utf8mb4_ro_0900_ai_ci">
      <Charset>utf8mb4</Charset>
    </collation>
    <collation id="260" parent="1" name="utf8mb4_ro_0900_as_cs">
      <Charset>utf8mb4</Charset>
    </collation>
    <collation id="261" parent="1" name="utf8mb4_roman_ci">
      <Charset>utf8mb4</Charset>
    </collation>
    <collation id="262" parent="1" name="utf8mb4_romanian_ci">
      <Charset>utf8mb4</Charset>
    </collation>
    <collation id="263" parent="1" name="utf8mb4_ru_0900_ai_ci">
      <Charset>utf8mb4</Charset>
    </collation>
    <collation id="264" parent="1" name="utf8mb4_ru_0900_as_cs">
      <Charset>utf8mb4</Charset>
    </collation>
    <collation id="265" parent="1" name="utf8mb4_sinhala_ci">
      <Charset>utf8mb4</Charset>
    </collation>
    <collation id="266" parent="1" name="utf8mb4_sk_0900_ai_ci">
      <Charset>utf8mb4</Charset>
    </collation>
    <collation id="267" parent="1" name="utf8mb4_sk_0900_as_cs">
      <Charset>utf8mb4</Charset>
    </collation>
    <collation id="268" parent="1" name="utf8mb4_sl_0900_ai_ci">
      <Charset>utf8mb4</Charset>
    </collation>
    <collation id="269" parent="1" name="utf8mb4_sl_0900_as_cs">
      <Charset>utf8mb4</Charset>
    </collation>
    <collation id="270" parent="1" name="utf8mb4_slovak_ci">
      <Charset>utf8mb4</Charset>
    </collation>
    <collation id="271" parent="1" name="utf8mb4_slovenian_ci">
      <Charset>utf8mb4</Charset>
    </collation>
    <collation id="272" parent="1" name="utf8mb4_spanish2_ci">
      <Charset>utf8mb4</Charset>
    </collation>
    <collation id="273" parent="1" name="utf8mb4_spanish_ci">
      <Charset>utf8mb4</Charset>
    </collation>
    <collation id="274" parent="1" name="utf8mb4_sr_latn_0900_ai_ci">
      <Charset>utf8mb4</Charset>
    </collation>
    <collation id="275" parent="1" name="utf8mb4_sr_latn_0900_as_cs">
      <Charset>utf8mb4</Charset>
    </collation>
    <collation id="276" parent="1" name="utf8mb4_sv_0900_ai_ci">
      <Charset>utf8mb4</Charset>
    </collation>
    <collation id="277" parent="1" name="utf8mb4_sv_0900_as_cs">
      <Charset>utf8mb4</Charset>
    </collation>
    <collation id="278" parent="1" name="utf8mb4_swedish_ci">
      <Charset>utf8mb4</Charset>
    </collation>
    <collation id="279" parent="1" name="utf8mb4_tr_0900_ai_ci">
      <Charset>utf8mb4</Charset>
    </collation>
    <collation id="280" parent="1" name="utf8mb4_tr_0900_as_cs">
      <Charset>utf8mb4</Charset>
    </collation>
    <collation id="281" parent="1" name="utf8mb4_turkish_ci">
      <Charset>utf8mb4</Charset>
    </collation>
    <collation id="282" parent="1" name="utf8mb4_unicode_520_ci">
      <Charset>utf8mb4</Charset>
    </collation>
    <collation id="283" parent="1" name="utf8mb4_unicode_ci">
      <Charset>utf8mb4</Charset>
    </collation>
    <collation id="284" parent="1" name="utf8mb4_vi_0900_ai_ci">
      <Charset>utf8mb4</Charset>
    </collation>
    <collation id="285" parent="1" name="utf8mb4_vi_0900_as_cs">
      <Charset>utf8mb4</Charset>
    </collation>
    <collation id="286" parent="1" name="utf8mb4_vietnamese_ci">
      <Charset>utf8mb4</Charset>
    </collation>
    <collation id="287" parent="1" name="utf8mb4_zh_0900_as_cs">
      <Charset>utf8mb4</Charset>
    </collation>
    <schema id="288" parent="1" name="bibliothèque">
      <CollationName>utf8mb4_0900_ai_ci</CollationName>
    </schema>
    <schema id="289" parent="1" name="cinema">
      <CollationName>utf8mb4_0900_ai_ci</CollationName>
    </schema>
    <schema id="290" parent="1" name="cnss">
      <CollationName>utf8mb4_0900_ai_ci</CollationName>
    </schema>
    <schema id="291" parent="1" name="company_aerienne">
      <CollationName>utf8mb4_0900_ai_ci</CollationName>
    </schema>
    <schema id="292" parent="1" name="digipme_db">
      <AutoIntrospectionLevel>3</AutoIntrospectionLevel>
      <Current>1</Current>
      <LastIntrospectionLevel>3</LastIntrospectionLevel>
      <LastIntrospectionLocalTimestamp>2026-09-17.14:39:55</LastIntrospectionLocalTimestamp>
      <CollationName>utf8mb4_0900_ai_ci</CollationName>
    </schema>
    <schema id="293" parent="1" name="finpay_db">
      <CollationName>utf8mb4_0900_ai_ci</CollationName>
    </schema>
    <schema id="294" parent="1" name="fleetflow">
      <CollationName>utf8mb4_0900_ai_ci</CollationName>
    </schema>
    <schema id="295" parent="1" name="fleetflow_db">
      <CollationName>utf8mb4_0900_ai_ci</CollationName>
    </schema>
    <schema id="296" parent="1" name="flywaytest1">
      <CollationName>utf8mb4_0900_ai_ci</CollationName>
    </schema>
    <schema id="297" parent="1" name="healthcare">
      <CollationName>utf8mb4_0900_ai_ci</CollationName>
    </schema>
    <schema id="298" parent="1" name="healthcare_db">
      <CollationName>utf8mb4_0900_ai_ci</CollationName>
    </schema>
    <schema id="299" parent="1" name="information_schema">
      <CollationName>utf8mb3_general_ci</CollationName>
    </schema>
    <schema id="300" parent="1" name="logitrack_db">
      <CollationName>utf8mb4_0900_ai_ci</CollationName>
    </schema>
    <schema id="301" parent="1" name="mysql">
      <CollationName>utf8mb4_0900_ai_ci</CollationName>
    </schema>
    <schema id="302" parent="1" name="performance_schema">
      <CollationName>utf8mb4_0900_ai_ci</CollationName>
    </schema>
    <schema id="303" parent="1" name="supplyflow">
      <CollationName>utf8mb4_0900_ai_ci</CollationName>
    </schema>
    <schema id="304" parent="1" name="sys">
      <CollationName>utf8mb4_0900_ai_ci</CollationName>
    </schema>
    <schema id="305" parent="1" name="test">
      <CollationName>utf8mb4_0900_ai_ci</CollationName>
    </schema>
    <user id="306" parent="1" name="mysql.infoschema">
      <CanLogin>0</CanLogin>
      <Host>localhost</Host>
    </user>
    <user id="307" parent="1" name="mysql.session">
      <CanLogin>0</CanLogin>
      <Host>localhost</Host>
    </user>
    <user id="308" parent="1" name="mysql.sys">
      <CanLogin>0</CanLogin>
      <Host>localhost</Host>
    </user>
    <user id="309" parent="1" name="root">
      <Host>localhost</Host>
    </user>
    <table id="310" parent="292" name="flyway_schema_history">
      <DetailsLevel>3</DetailsLevel>
      <Engine>InnoDB</Engine>
      <CollationName>utf8mb4_0900_ai_ci</CollationName>
    </table>
    <table id="311" parent="292" name="offer">
      <DetailsLevel>3</DetailsLevel>
      <Engine>InnoDB</Engine>
      <CollationName>utf8mb4_0900_ai_ci</CollationName>
    </table>
    <table id="312" parent="292" name="project">
      <DetailsLevel>3</DetailsLevel>
      <Engine>InnoDB</Engine>
      <CollationName>utf8mb4_0900_ai_ci</CollationName>
    </table>
    <table id="313" parent="292" name="review">
      <DetailsLevel>3</DetailsLevel>
      <Engine>InnoDB</Engine>
      <CollationName>utf8mb4_0900_ai_ci</CollationName>
    </table>
    <table id="314" parent="292" name="user_app">
      <DetailsLevel>3</DetailsLevel>
      <Engine>InnoDB</Engine>
      <CollationName>utf8mb4_0900_ai_ci</CollationName>
    </table>
    <column id="315" parent="310" name="installed_rank">
      <NotNull>1</NotNull>
      <Position>1</Position>
      <StoredType>int|0s</StoredType>
    </column>
    <column id="316" parent="310" name="version">
      <Position>2</Position>
      <StoredType>varchar(50)|0s</StoredType>
    </column>
    <column id="317" parent="310" name="description">
      <NotNull>1</NotNull>
      <Position>3</Position>
      <StoredType>varchar(200)|0s</StoredType>
    </column>
    <column id="318" parent="310" name="type">
      <NotNull>1</NotNull>
      <Position>4</Position>
      <StoredType>varchar(20)|0s</StoredType>
    </column>
    <column id="319" parent="310" name="script">
      <NotNull>1</NotNull>
      <Position>5</Position>
      <StoredType>varchar(1000)|0s</StoredType>
    </column>
    <column id="320" parent="310" name="checksum">
      <Position>6</Position>
      <StoredType>int|0s</StoredType>
    </column>
    <column id="321" parent="310" name="installed_by">
      <NotNull>1</NotNull>
      <Position>7</Position>
      <StoredType>varchar(100)|0s</StoredType>
    </column>
    <column id="322" parent="310" name="installed_on">
      <DefaultExpression>CURRENT_TIMESTAMP</DefaultExpression>
      <NotNull>1</NotNull>
      <Position>8</Position>
      <StoredType>timestamp|0s</StoredType>
    </column>
    <column id="323" parent="310" name="execution_time">
      <NotNull>1</NotNull>
      <Position>9</Position>
      <StoredType>int|0s</StoredType>
    </column>
    <column id="324" parent="310" name="success">
      <NotNull>1</NotNull>
      <Position>10</Position>
      <StoredType>tinyint(1)|0s</StoredType>
    </column>
    <index id="325" parent="310" name="PRIMARY">
      <ColNames>installed_rank</ColNames>
      <Type>btree</Type>
      <Unique>1</Unique>
    </index>
    <index id="326" parent="310" name="flyway_schema_history_s_idx">
      <ColNames>success</ColNames>
      <Type>btree</Type>
    </index>
    <key id="327" parent="310" name="PRIMARY">
      <NameSurrogate>1</NameSurrogate>
      <Primary>1</Primary>
      <UnderlyingIndexName>PRIMARY</UnderlyingIndexName>
    </key>
    <column id="328" parent="311" name="id">
      <AutoIncrement>8</AutoIncrement>
      <NotNull>1</NotNull>
      <Position>1</Position>
      <StoredType>bigint|0s</StoredType>
    </column>
    <column id="329" parent="311" name="description">
      <NotNull>1</NotNull>
      <Position>2</Position>
      <StoredType>varchar(2000)|0s</StoredType>
    </column>
    <column id="330" parent="311" name="prix_proposer">
      <NotNull>1</NotNull>
      <Position>3</Position>
      <StoredType>double|0s</StoredType>
    </column>
    <column id="331" parent="311" name="date_livraison">
      <NotNull>1</NotNull>
      <Position>4</Position>
      <StoredType>date|0s</StoredType>
    </column>
    <column id="332" parent="311" name="status">
      <NotNull>1</NotNull>
      <Position>5</Position>
      <StoredType>varchar(20)|0s</StoredType>
    </column>
    <column id="333" parent="311" name="project_id">
      <NotNull>1</NotNull>
      <Position>6</Position>
      <StoredType>bigint|0s</StoredType>
    </column>
    <column id="334" parent="311" name="freelancer_id">
      <NotNull>1</NotNull>
      <Position>7</Position>
      <StoredType>bigint|0s</StoredType>
    </column>
    <foreign-key id="335" parent="311" name="fk_offer_project">
      <ColNames>project_id</ColNames>
      <OnDelete>cascade</OnDelete>
      <RefColNames>id</RefColNames>
      <RefTableName>project</RefTableName>
    </foreign-key>
    <foreign-key id="336" parent="311" name="fk_offer_freelancer">
      <ColNames>freelancer_id</ColNames>
      <OnDelete>cascade</OnDelete>
      <RefColNames>id</RefColNames>
      <RefTableName>user_app</RefTableName>
    </foreign-key>
    <index id="337" parent="311" name="PRIMARY">
      <ColNames>id</ColNames>
      <Type>btree</Type>
      <Unique>1</Unique>
    </index>
    <index id="338" parent="311" name="idx_offer_status">
      <ColNames>status</ColNames>
      <Type>btree</Type>
    </index>
    <index id="339" parent="311" name="idx_offer_project_id">
      <ColNames>project_id</ColNames>
      <Type>btree</Type>
    </index>
    <index id="340" parent="311" name="idx_offer_freelancer_id">
      <ColNames>freelancer_id</ColNames>
      <Type>btree</Type>
    </index>
    <key id="341" parent="311" name="PRIMARY">
      <NameSurrogate>1</NameSurrogate>
      <Primary>1</Primary>
      <UnderlyingIndexName>PRIMARY</UnderlyingIndexName>
    </key>
    <column id="342" parent="312" name="id">
      <AutoIncrement>7</AutoIncrement>
      <NotNull>1</NotNull>
      <Position>1</Position>
      <StoredType>bigint|0s</StoredType>
    </column>
    <column id="343" parent="312" name="titre">
      <NotNull>1</NotNull>
      <Position>2</Position>
      <StoredType>varchar(255)|0s</StoredType>
    </column>
    <column id="344" parent="312" name="type">
      <NotNull>1</NotNull>
      <Position>3</Position>
      <StoredType>varchar(50)|0s</StoredType>
    </column>
    <column id="345" parent="312" name="description">
      <Position>4</Position>
      <StoredType>varchar(2000)|0s</StoredType>
    </column>
    <column id="346" parent="312" name="prix">
      <NotNull>1</NotNull>
      <Position>5</Position>
      <StoredType>double|0s</StoredType>
    </column>
    <column id="347" parent="312" name="date_creation">
      <NotNull>1</NotNull>
      <Position>6</Position>
      <StoredType>date|0s</StoredType>
    </column>
    <column id="348" parent="312" name="status">
      <NotNull>1</NotNull>
      <Position>7</Position>
      <StoredType>varchar(20)|0s</StoredType>
    </column>
    <column id="349" parent="312" name="pme_id">
      <Position>8</Position>
      <StoredType>bigint|0s</StoredType>
    </column>
    <foreign-key id="350" parent="312" name="fk_project_pme">
      <ColNames>pme_id</ColNames>
      <OnDelete>cascade</OnDelete>
      <RefColNames>id</RefColNames>
      <RefTableName>user_app</RefTableName>
    </foreign-key>
    <index id="351" parent="312" name="PRIMARY">
      <ColNames>id</ColNames>
      <Type>btree</Type>
      <Unique>1</Unique>
    </index>
    <index id="352" parent="312" name="idx_project_date_creation">
      <ColNames>date_creation</ColNames>
      <Type>btree</Type>
    </index>
    <index id="353" parent="312" name="idx_project_status">
      <ColNames>status</ColNames>
      <Type>btree</Type>
    </index>
    <index id="354" parent="312" name="idx_project_pme_id">
      <ColNames>pme_id</ColNames>
      <Type>btree</Type>
    </index>
    <key id="355" parent="312" name="PRIMARY">
      <NameSurrogate>1</NameSurrogate>
      <Primary>1</Primary>
      <UnderlyingIndexName>PRIMARY</UnderlyingIndexName>
    </key>
    <column id="356" parent="313" name="id">
      <AutoIncrement>3</AutoIncrement>
      <NotNull>1</NotNull>
      <Position>1</Position>
      <StoredType>bigint|0s</StoredType>
    </column>
    <column id="357" parent="313" name="note">
      <NotNull>1</NotNull>
      <Position>2</Position>
      <StoredType>bigint|0s</StoredType>
    </column>
    <column id="358" parent="313" name="commentaire">
      <NotNull>1</NotNull>
      <Position>3</Position>
      <StoredType>varchar(2000)|0s</StoredType>
    </column>
    <column id="359" parent="313" name="project_id">
      <Position>4</Position>
      <StoredType>bigint|0s</StoredType>
    </column>
    <column id="360" parent="313" name="pme_id">
      <Position>5</Position>
      <StoredType>bigint|0s</StoredType>
    </column>
    <column id="361" parent="313" name="freelancer_id">
      <Position>6</Position>
      <StoredType>bigint|0s</StoredType>
    </column>
    <foreign-key id="362" parent="313" name="fk_review_project">
      <ColNames>project_id</ColNames>
      <OnDelete>cascade</OnDelete>
      <RefColNames>id</RefColNames>
      <RefTableName>project</RefTableName>
    </foreign-key>
    <foreign-key id="363" parent="313" name="fk_review_pme">
      <ColNames>pme_id</ColNames>
      <OnDelete>cascade</OnDelete>
      <RefColNames>id</RefColNames>
      <RefTableName>user_app</RefTableName>
    </foreign-key>
    <foreign-key id="364" parent="313" name="fk_review_freelancer">
      <ColNames>freelancer_id</ColNames>
      <OnDelete>cascade</OnDelete>
      <RefColNames>id</RefColNames>
      <RefTableName>user_app</RefTableName>
    </foreign-key>
    <index id="365" parent="313" name="PRIMARY">
      <ColNames>id</ColNames>
      <Type>btree</Type>
      <Unique>1</Unique>
    </index>
    <index id="366" parent="313" name="idx_review_project_id">
      <ColNames>project_id</ColNames>
      <Type>btree</Type>
    </index>
    <index id="367" parent="313" name="idx_review_pme_id">
      <ColNames>pme_id</ColNames>
      <Type>btree</Type>
    </index>
    <index id="368" parent="313" name="idx_review_freelancer_id">
      <ColNames>freelancer_id</ColNames>
      <Type>btree</Type>
    </index>
    <key id="369" parent="313" name="PRIMARY">
      <NameSurrogate>1</NameSurrogate>
      <Primary>1</Primary>
      <UnderlyingIndexName>PRIMARY</UnderlyingIndexName>
    </key>
    <column id="370" parent="314" name="id">
      <AutoIncrement>8</AutoIncrement>
      <NotNull>1</NotNull>
      <Position>1</Position>
      <StoredType>bigint|0s</StoredType>
    </column>
    <column id="371" parent="314" name="user_type">
      <NotNull>1</NotNull>
      <Position>2</Position>
      <StoredType>varchar(31)|0s</StoredType>
    </column>
    <column id="372" parent="314" name="nom">
      <NotNull>1</NotNull>
      <Position>3</Position>
      <StoredType>varchar(255)|0s</StoredType>
    </column>
    <column id="373" parent="314" name="email">
      <NotNull>1</NotNull>
      <Position>4</Position>
      <StoredType>varchar(255)|0s</StoredType>
    </column>
    <column id="374" parent="314" name="password">
      <NotNull>1</NotNull>
      <Position>5</Position>
      <StoredType>varchar(255)|0s</StoredType>
    </column>
    <column id="375" parent="314" name="telephone">
      <NotNull>1</NotNull>
      <Position>6</Position>
      <StoredType>varchar(50)|0s</StoredType>
    </column>
    <column id="376" parent="314" name="adresse">
      <Position>7</Position>
      <StoredType>varchar(255)|0s</StoredType>
    </column>
    <column id="377" parent="314" name="role">
      <NotNull>1</NotNull>
      <Position>8</Position>
      <StoredType>varchar(20)|0s</StoredType>
    </column>
    <column id="378" parent="314" name="rc">
      <Position>9</Position>
      <StoredType>varchar(100)|0s</StoredType>
    </column>
    <column id="379" parent="314" name="activite">
      <Position>10</Position>
      <StoredType>varchar(255)|0s</StoredType>
    </column>
    <column id="380" parent="314" name="specialite">
      <Position>11</Position>
      <StoredType>varchar(255)|0s</StoredType>
    </column>
    <column id="381" parent="314" name="note_moyenne">
      <Position>12</Position>
      <StoredType>double|0s</StoredType>
    </column>
    <index id="382" parent="314" name="PRIMARY">
      <ColNames>id</ColNames>
      <Type>btree</Type>
      <Unique>1</Unique>
    </index>
    <index id="383" parent="314" name="uk_user_app_email">
      <ColNames>email</ColNames>
      <Type>btree</Type>
      <Unique>1</Unique>
    </index>
    <index id="384" parent="314" name="idx_user_app_user_type">
      <ColNames>user_type</ColNames>
      <Type>btree</Type>
    </index>
    <index id="385" parent="314" name="idx_user_app_role">
      <ColNames>role</ColNames>
      <Type>btree</Type>
    </index>
    <key id="386" parent="314" name="PRIMARY">
      <NameSurrogate>1</NameSurrogate>
      <Primary>1</Primary>
      <UnderlyingIndexName>PRIMARY</UnderlyingIndexName>
    </key>
    <key id="387" parent="314" name="uk_user_app_email">
      <UnderlyingIndexName>uk_user_app_email</UnderlyingIndexName>
    </key>
  </database-model>
</dataSource>
```

# .idea\dataSources\f192f766-c8e8-4bf9-baf3-74750656e74f\storage_v2\_src_\schema\information_schema.FNRwLQ.meta

```meta
#n:information_schema
!<md> [null, 0, null, null, -2147483648, -2147483648]

```

# .idea\dataSources\f192f766-c8e8-4bf9-baf3-74750656e74f\storage_v2\_src_\schema\mysql.osA4Bg.meta

```meta
#n:mysql
!<md> [null, 0, null, null, -2147483648, -2147483648]

```

# .idea\dataSources\f192f766-c8e8-4bf9-baf3-74750656e74f\storage_v2\_src_\schema\performance_schema.kIw0nw.meta

```meta
#n:performance_schema
!<md> [null, 0, null, null, -2147483648, -2147483648]

```

# .idea\dataSources\f192f766-c8e8-4bf9-baf3-74750656e74f\storage_v2\_src_\schema\sys.zb4BAA.meta

```meta
#n:sys
!<md> [null, 0, null, null, -2147483648, -2147483648]

```

# .idea\db-forest-config.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project version="4">
  <component name="db-forest-configuration">
    <data version="2">.
	----------------------------------------
	1:0:f192f766-c8e8-4bf9-baf3-74750656e74f
	2:0:1053d535-dee1-4ba7-a6d2-6646bf142abc
		.</data>
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

# .idea\sqldialects.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project version="4">
  <component name="SqlDialectMappings">
    <file url="file://$PROJECT_DIR$/src/main/resources/db/migration/V1__create_tables.sql" dialect="MySQL" />
  </component>
</project>
```

# .idea\vcs.xml

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project version="4">
  <component name="VcsDirectoryMappings">
    <mapping directory="$PROJECT_DIR$/.." vcs="Git" />
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
      <change afterPath="$PROJECT_DIR$/src/main/java/org/example/digipme/DTOs/ProfileUpdateResponse.java" afterDir="false" />
      <change afterPath="$PROJECT_DIR$/src/main/java/org/example/digipme/DTOs/UserUpdateRequest.java" afterDir="false" />
      <change afterPath="$PROJECT_DIR$/src/main/java/org/example/digipme/exception/ApiException.java" afterDir="false" />
      <change afterPath="$PROJECT_DIR$/src/main/java/org/example/digipme/exception/GlobalExceptionHandler.java" afterDir="false" />
      <change afterPath="$PROJECT_DIR$/src/main/resources/db/migration/V1__create_tables.sql" afterDir="false" />
      <change afterPath="$PROJECT_DIR$/src/main/resources/db/migration/V2__seed_test_data.sql" afterDir="false" />
      <change afterPath="$PROJECT_DIR$/src/test/java/org/example/digipme/Service/ProjectServiceTest.java" afterDir="false" />
      <change afterPath="$PROJECT_DIR$/../digipmefront/Dockerfile" afterDir="false" />
      <change afterPath="$PROJECT_DIR$/../digipmefront/src/Admin/Admin.css" afterDir="false" />
      <change afterPath="$PROJECT_DIR$/../digipmefront/src/Admin/UserForm.jsx" afterDir="false" />
      <change afterPath="$PROJECT_DIR$/../digipmefront/src/Admin/UsersList.jsx" afterDir="false" />
      <change afterPath="$PROJECT_DIR$/../digipmefront/src/Profile/Profile.css" afterDir="false" />
      <change afterPath="$PROJECT_DIR$/../digipmefront/src/Profile/Profile.jsx" afterDir="false" />
      <change afterPath="$PROJECT_DIR$/../digipmefront/src/guards/AuthGuard.jsx" afterDir="false" />
      <change afterPath="$PROJECT_DIR$/../digipmefront/src/guards/AuthRedirect.jsx" afterDir="false" />
      <change afterPath="$PROJECT_DIR$/../digipmefront/src/guards/RoleGuard.jsx" afterDir="false" />
      <change beforePath="$PROJECT_DIR$/../.gitignore" beforeDir="false" afterPath="$PROJECT_DIR$/../.gitignore" afterDir="false" />
      <change beforePath="$PROJECT_DIR$/codebase.md" beforeDir="false" afterPath="$PROJECT_DIR$/codebase.md" afterDir="false" />
      <change beforePath="$PROJECT_DIR$/pom.xml" beforeDir="false" afterPath="$PROJECT_DIR$/pom.xml" afterDir="false" />
      <change beforePath="$PROJECT_DIR$/src/main/java/org/example/digipme/Controller/ProjectController.java" beforeDir="false" afterPath="$PROJECT_DIR$/src/main/java/org/example/digipme/Controller/ProjectController.java" afterDir="false" />
      <change beforePath="$PROJECT_DIR$/src/main/java/org/example/digipme/Controller/UserController.java" beforeDir="false" afterPath="$PROJECT_DIR$/src/main/java/org/example/digipme/Controller/UserController.java" afterDir="false" />
      <change beforePath="$PROJECT_DIR$/src/main/java/org/example/digipme/DTOs/ReviewRequest.java" beforeDir="false" afterPath="$PROJECT_DIR$/src/main/java/org/example/digipme/DTOs/ReviewRequest.java" afterDir="false" />
      <change beforePath="$PROJECT_DIR$/src/main/java/org/example/digipme/DTOs/UserRequest.java" beforeDir="false" afterPath="$PROJECT_DIR$/src/main/java/org/example/digipme/DTOs/UserRequest.java" afterDir="false" />
      <change beforePath="$PROJECT_DIR$/src/main/java/org/example/digipme/DTOs/UserResponse.java" beforeDir="false" afterPath="$PROJECT_DIR$/src/main/java/org/example/digipme/DTOs/UserResponse.java" afterDir="false" />
      <change beforePath="$PROJECT_DIR$/src/main/java/org/example/digipme/Mappers/FreelancerMapper.java" beforeDir="false" afterPath="$PROJECT_DIR$/src/main/java/org/example/digipme/Mappers/FreelancerMapper.java" afterDir="false" />
      <change beforePath="$PROJECT_DIR$/src/main/java/org/example/digipme/Mappers/PMEMapper.java" beforeDir="false" afterPath="$PROJECT_DIR$/src/main/java/org/example/digipme/Mappers/PMEMapper.java" afterDir="false" />
      <change beforePath="$PROJECT_DIR$/src/main/java/org/example/digipme/Mappers/ProjectMapper.java" beforeDir="false" afterPath="$PROJECT_DIR$/src/main/java/org/example/digipme/Mappers/ProjectMapper.java" afterDir="false" />
      <change beforePath="$PROJECT_DIR$/src/main/java/org/example/digipme/Mappers/UserMapper.java" beforeDir="false" afterPath="$PROJECT_DIR$/src/main/java/org/example/digipme/Mappers/UserMapper.java" afterDir="false" />
      <change beforePath="$PROJECT_DIR$/src/main/java/org/example/digipme/Model/Freelancer.java" beforeDir="false" afterPath="$PROJECT_DIR$/src/main/java/org/example/digipme/Model/Freelancer.java" afterDir="false" />
      <change beforePath="$PROJECT_DIR$/src/main/java/org/example/digipme/Model/Offer.java" beforeDir="false" afterPath="$PROJECT_DIR$/src/main/java/org/example/digipme/Model/Offer.java" afterDir="false" />
      <change beforePath="$PROJECT_DIR$/src/main/java/org/example/digipme/Model/PME.java" beforeDir="false" afterPath="$PROJECT_DIR$/src/main/java/org/example/digipme/Model/PME.java" afterDir="false" />
      <change beforePath="$PROJECT_DIR$/src/main/java/org/example/digipme/Model/Project.java" beforeDir="false" afterPath="$PROJECT_DIR$/src/main/java/org/example/digipme/Model/Project.java" afterDir="false" />
      <change beforePath="$PROJECT_DIR$/src/main/java/org/example/digipme/Model/Review.java" beforeDir="false" afterPath="$PROJECT_DIR$/src/main/java/org/example/digipme/Model/Review.java" afterDir="false" />
      <change beforePath="$PROJECT_DIR$/src/main/java/org/example/digipme/Model/UserApp.java" beforeDir="false" afterPath="$PROJECT_DIR$/src/main/java/org/example/digipme/Model/UserApp.java" afterDir="false" />
      <change beforePath="$PROJECT_DIR$/src/main/java/org/example/digipme/Repository/FreelancerRepository.java" beforeDir="false" afterPath="$PROJECT_DIR$/src/main/java/org/example/digipme/Repository/FreelancerRepository.java" afterDir="false" />
      <change beforePath="$PROJECT_DIR$/src/main/java/org/example/digipme/Repository/PMERepository.java" beforeDir="false" afterPath="$PROJECT_DIR$/src/main/java/org/example/digipme/Repository/PMERepository.java" afterDir="false" />
      <change beforePath="$PROJECT_DIR$/src/main/java/org/example/digipme/Repository/UserAppRepository.java" beforeDir="false" afterPath="$PROJECT_DIR$/src/main/java/org/example/digipme/Repository/UserAppRepository.java" afterDir="false" />
      <change beforePath="$PROJECT_DIR$/src/main/java/org/example/digipme/Service/FreelancerService.java" beforeDir="false" afterPath="$PROJECT_DIR$/src/main/java/org/example/digipme/Service/FreelancerService.java" afterDir="false" />
      <change beforePath="$PROJECT_DIR$/src/main/java/org/example/digipme/Service/OfferService.java" beforeDir="false" afterPath="$PROJECT_DIR$/src/main/java/org/example/digipme/Service/OfferService.java" afterDir="false" />
      <change beforePath="$PROJECT_DIR$/src/main/java/org/example/digipme/Service/PMEService.java" beforeDir="false" afterPath="$PROJECT_DIR$/src/main/java/org/example/digipme/Service/PMEService.java" afterDir="false" />
      <change beforePath="$PROJECT_DIR$/src/main/java/org/example/digipme/Service/ProjectService.java" beforeDir="false" afterPath="$PROJECT_DIR$/src/main/java/org/example/digipme/Service/ProjectService.java" afterDir="false" />
      <change beforePath="$PROJECT_DIR$/src/main/java/org/example/digipme/Service/ReviewService.java" beforeDir="false" afterPath="$PROJECT_DIR$/src/main/java/org/example/digipme/Service/ReviewService.java" afterDir="false" />
      <change beforePath="$PROJECT_DIR$/src/main/java/org/example/digipme/Service/UserService.java" beforeDir="false" afterPath="$PROJECT_DIR$/src/main/java/org/example/digipme/Service/UserService.java" afterDir="false" />
      <change beforePath="$PROJECT_DIR$/src/main/java/org/example/digipme/auth/AuthService.java" beforeDir="false" afterPath="$PROJECT_DIR$/src/main/java/org/example/digipme/auth/AuthService.java" afterDir="false" />
      <change beforePath="$PROJECT_DIR$/src/main/java/org/example/digipme/config/JwtFilter.java" beforeDir="false" afterPath="$PROJECT_DIR$/src/main/java/org/example/digipme/config/JwtFilter.java" afterDir="false" />
      <change beforePath="$PROJECT_DIR$/src/main/java/org/example/digipme/config/SecurityConfig.java" beforeDir="false" afterPath="$PROJECT_DIR$/src/main/java/org/example/digipme/config/SecurityConfig.java" afterDir="false" />
      <change beforePath="$PROJECT_DIR$/src/main/java/org/example/digipme/security/JwtService.java" beforeDir="false" afterPath="$PROJECT_DIR$/src/main/java/org/example/digipme/security/JwtService.java" afterDir="false" />
      <change beforePath="$PROJECT_DIR$/src/main/resources/application.properties" beforeDir="false" afterPath="$PROJECT_DIR$/src/main/resources/application.properties" afterDir="false" />
      <change beforePath="$PROJECT_DIR$/../digipmefront/codebase.md" beforeDir="false" afterPath="$PROJECT_DIR$/../digipmefront/codebase.md" afterDir="false" />
      <change beforePath="$PROJECT_DIR$/../digipmefront/src/App.css" beforeDir="false" afterPath="$PROJECT_DIR$/../digipmefront/src/App.css" afterDir="false" />
      <change beforePath="$PROJECT_DIR$/../digipmefront/src/App.jsx" beforeDir="false" afterPath="$PROJECT_DIR$/../digipmefront/src/App.jsx" afterDir="false" />
      <change beforePath="$PROJECT_DIR$/../digipmefront/src/Dashboard/Admin/AdminDashboard.jsx" beforeDir="false" afterPath="$PROJECT_DIR$/../digipmefront/src/Dashboard/Admin/AdminDashboard.jsx" afterDir="false" />
      <change beforePath="$PROJECT_DIR$/../digipmefront/src/Dashboard/Dashboard.css" beforeDir="false" afterPath="$PROJECT_DIR$/../digipmefront/src/Dashboard/Dashboard.css" afterDir="false" />
      <change beforePath="$PROJECT_DIR$/../digipmefront/src/Dashboard/DashboardLayout.jsx" beforeDir="false" afterPath="$PROJECT_DIR$/../digipmefront/src/Dashboard/DashboardLayout.jsx" afterDir="false" />
      <change beforePath="$PROJECT_DIR$/../digipmefront/src/Dashboard/Freelancer/FreelancerDashboard.jsx" beforeDir="false" afterPath="$PROJECT_DIR$/../digipmefront/src/Dashboard/Freelancer/FreelancerDashboard.jsx" afterDir="false" />
      <change beforePath="$PROJECT_DIR$/../digipmefront/src/Dashboard/PME/PMEDashboard.jsx" beforeDir="false" afterPath="$PROJECT_DIR$/../digipmefront/src/Dashboard/PME/PMEDashboard.jsx" afterDir="false" />
      <change beforePath="$PROJECT_DIR$/../digipmefront/src/LandingPage/Hero.jsx" beforeDir="false" afterPath="$PROJECT_DIR$/../digipmefront/src/LandingPage/Hero.jsx" afterDir="false" />
      <change beforePath="$PROJECT_DIR$/../digipmefront/src/Offers/MyOffers.jsx" beforeDir="false" afterPath="$PROJECT_DIR$/../digipmefront/src/Offers/MyOffers.jsx" afterDir="false" />
      <change beforePath="$PROJECT_DIR$/../digipmefront/src/Projects/FreelancerOfferBox.jsx" beforeDir="false" afterPath="$PROJECT_DIR$/../digipmefront/src/Projects/FreelancerOfferBox.jsx" afterDir="false" />
      <change beforePath="$PROJECT_DIR$/../digipmefront/src/Projects/MyProjects.jsx" beforeDir="false" afterPath="$PROJECT_DIR$/../digipmefront/src/Projects/MyProjects.jsx" afterDir="false" />
      <change beforePath="$PROJECT_DIR$/../digipmefront/src/Projects/ProjectDetails.jsx" beforeDir="false" afterPath="$PROJECT_DIR$/../digipmefront/src/Projects/ProjectDetails.jsx" afterDir="false" />
      <change beforePath="$PROJECT_DIR$/../digipmefront/src/Projects/ProjectForm.jsx" beforeDir="false" afterPath="$PROJECT_DIR$/../digipmefront/src/Projects/ProjectForm.jsx" afterDir="false" />
      <change beforePath="$PROJECT_DIR$/../digipmefront/src/Projects/Projects.css" beforeDir="false" afterPath="$PROJECT_DIR$/../digipmefront/src/Projects/Projects.css" afterDir="false" />
      <change beforePath="$PROJECT_DIR$/../digipmefront/src/Projects/ProjectsList.jsx" beforeDir="false" afterPath="$PROJECT_DIR$/../digipmefront/src/Projects/ProjectsList.jsx" afterDir="false" />
      <change beforePath="$PROJECT_DIR$/../digipmefront/src/Reviews/MyReviews.jsx" beforeDir="false" afterPath="$PROJECT_DIR$/../digipmefront/src/Reviews/MyReviews.jsx" afterDir="false" />
      <change beforePath="$PROJECT_DIR$/../digipmefront/src/api/axios.jsx" beforeDir="false" afterPath="$PROJECT_DIR$/../digipmefront/src/api/axios.jsx" afterDir="false" />
      <change beforePath="$PROJECT_DIR$/../digipmefront/src/index.css" beforeDir="false" afterPath="$PROJECT_DIR$/../digipmefront/src/index.css" afterDir="false" />
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
        <option value="Enum" />
        <option value="Class" />
      </list>
    </option>
  </component>
  <component name="Git.Settings">
    <option name="RECENT_GIT_ROOT_PATH" value="$PROJECT_DIR$/.." />
  </component>
  <component name="GitHubPullRequestSearchHistory">{
  &quot;lastFilter&quot;: {
    &quot;state&quot;: &quot;OPEN&quot;,
    &quot;assignee&quot;: &quot;Ryhane1&quot;
  }
}</component>
  <component name="GithubPullRequestsUISettings">{
  &quot;selectedUrlAndAccountId&quot;: {
    &quot;url&quot;: &quot;https://github.com/Ryhane1/DigiPME.git&quot;,
    &quot;accountId&quot;: &quot;9496ee63-fbfc-4ad7-95b3-3d1bf0661724&quot;
  }
}</component>
  <component name="MavenImportPreferences">
    <option name="generalSettings">
      <MavenGeneralSettings>
        <option name="mavenHomeTypeForPersistence" value="WRAPPER" />
      </MavenGeneralSettings>
    </option>
  </component>
  <component name="MavenRunner">
    <option name="skipTests" value="true" />
  </component>
  <component name="McpProjectServerCommands">
    <commands />
    <urls />
  </component>
  <component name="NextEditCompletionFeaturesState">
    <decayedCancelled>
      <entry key="MS100" value="1.0" />
      <entry key="MS500" value="1.0000026091339003" />
      <entry key="S2" value="1.0416362624685345" />
      <entry key="S5" value="1.3495904869136484" />
      <entry key="S10" value="1.7962112597933184" />
      <entry key="S30" value="2.4537808237612766" />
      <entry key="S60" value="2.7025503919383502" />
      <entry key="M2" value="2.844583912556991" />
      <entry key="M5" value="2.936150050229338" />
      <entry key="M10" value="2.972329187936847" />
      <entry key="M15" value="3.022188802920426" />
      <entry key="M30" value="3.4411066931554637" />
      <entry key="H1" value="4.485673385338966" />
      <entry key="H2" value="5.730090371042544" />
      <entry key="H4" value="7.385909779230579" />
      <entry key="D1" value="52.43511962100534" />
      <entry key="W1" value="200.20719998142482" />
    </decayedCancelled>
    <decayedSelected>
      <entry key="MS100" value="0.0" />
      <entry key="MS500" value="0.0" />
      <entry key="S2" value="0.0" />
      <entry key="S5" value="0.0" />
      <entry key="S10" value="0.0" />
      <entry key="S30" value="0.0" />
      <entry key="S60" value="0.0" />
      <entry key="M2" value="2.704983242440733E-214" />
      <entry key="M5" value="3.8611090569795276E-86" />
      <entry key="M10" value="2.2959298726455125E-43" />
      <entry key="M15" value="4.6637382677776784E-29" />
      <entry key="M30" value="1.3801974878520133E-14" />
      <entry key="H1" value="3.483883148205723E-7" />
      <entry key="H2" value="0.0021546653478528646" />
      <entry key="H4" value="0.19466727812423532" />
      <entry key="D1" value="22.755496959294437" />
      <entry key="W1" value="159.04594590857425" />
    </decayedSelected>
    <decayedShown>
      <entry key="MS100" value="6.498606832026934E-26" />
      <entry key="MS500" value="9.17411706098596E-6" />
      <entry key="S2" value="0.05710376125601339" />
      <entry key="S5" value="0.4385641146549649" />
      <entry key="S10" value="1.0580697031477793" />
      <entry key="S30" value="2.081479443432939" />
      <entry key="S60" value="2.4934151595870238" />
      <entry key="M2" value="2.733528989117728" />
      <entry key="M5" value="2.890065238326243" />
      <entry key="M10" value="2.9489960266647635" />
      <entry key="M15" value="3.006539284110873" />
      <entry key="M30" value="3.433078848035765" />
      <entry key="H1" value="4.481427581376475" />
      <entry key="H2" value="5.72998475441352" />
      <entry key="H4" value="7.579340467348334" />
      <entry key="D1" value="75.18953892115006" />
      <entry key="W1" value="359.2523388773559" />
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
  <component name="PropertiesComponent"><![CDATA[{
  "keyToString": {
    "JUnit.ProjectServiceTest.deleteProject_devraitReussir_quandLaPmeEstProprietaire.executor": "Run",
    "JUnit.ProjectServiceTest.executor": "Run",
    "Maven.DigiPME [clean].executor": "Run",
    "ModuleVcsDetector.initialDetectionPerformed": "true",
    "RunOnceActivity.MCP Project settings loaded": "true",
    "RunOnceActivity.ShowReadmeOnStart": "true",
    "RunOnceActivity.TerminalTabsStorage.copyFrom.TerminalArrangementManager.252": "true",
    "RunOnceActivity.git.unshallow": "true",
    "RunOnceActivity.typescript.service.memoryLimit.init": "true",
    "Spring Boot.DigiPmeApplication.executor": "Run",
    "codeWithMe.voiceChat.enabledByDefault": "false",
    "com.intellij.ml.llm.matterhorn.ej.ui.settings.DefaultModelSelectionForGA.v1": "true",
    "git-widget-placeholder": "main",
    "junie.onboarding.icon.badge.shown": "true",
    "kotlin-language-version-configured": "true",
    "last_opened_file_path": "C:/Users/enaaj/OneDrive/Desktop/FileRouge/DigiPME/src/main/resources",
    "node.js.detected.package.eslint": "true",
    "node.js.detected.package.tslint": "true",
    "node.js.selected.package.eslint": "(autodetect)",
    "node.js.selected.package.tslint": "(autodetect)",
    "nodejs_package_manager_path": "npm",
    "settings.editor.selected.configurable": "project.propVCSSupport.DirectoryMappings",
    "to.speed.mode.migration.done": "true"
  },
  "keyToStringList": {
    "DatabaseDriversLRU": [
      "mysql"
    ]
  }
}]]></component>
  <component name="RecentsManager">
    <key name="CopyFile.RECENT_KEYS">
      <recent name="C:\Users\enaaj\OneDrive\Desktop\FileRouge\DigiPME\src\main\resources" />
      <recent name="C:\Users\enaaj\OneDrive\Desktop\FileRouge\DigiPME\src\main\java\org\example\digipme" />
    </key>
  </component>
  <component name="RunManager" selected="Spring Boot.DigiPmeApplication">
    <configuration name="ProjectServiceTest" type="JUnit" factoryName="JUnit" temporary="true" nameIsGenerated="true">
      <module name="DigiPME" />
      <extension name="coverage">
        <pattern>
          <option name="PATTERN" value="org.example.digipme.Service.*" />
          <option name="ENABLED" value="true" />
        </pattern>
      </extension>
      <option name="PACKAGE_NAME" value="org.example.digipme.Service" />
      <option name="MAIN_CLASS_NAME" value="org.example.digipme.Service.ProjectServiceTest" />
      <option name="TEST_OBJECT" value="class" />
      <method v="2">
        <option name="Make" enabled="true" />
      </method>
    </configuration>
    <configuration name="ProjectServiceTest.deleteProject_devraitReussir_quandLaPmeEstProprietaire" type="JUnit" factoryName="JUnit" temporary="true" nameIsGenerated="true">
      <module name="DigiPME" />
      <extension name="coverage">
        <pattern>
          <option name="PATTERN" value="org.example.digipme.Service.*" />
          <option name="ENABLED" value="true" />
        </pattern>
      </extension>
      <option name="PACKAGE_NAME" value="org.example.digipme.Service" />
      <option name="MAIN_CLASS_NAME" value="org.example.digipme.Service.ProjectServiceTest" />
      <option name="METHOD_NAME" value="deleteProject_devraitReussir_quandLaPmeEstProprietaire" />
      <option name="TEST_OBJECT" value="method" />
      <method v="2">
        <option name="Make" enabled="true" />
      </method>
    </configuration>
    <configuration name="DigiPmeApplication" type="SpringBootApplicationConfigurationType" factoryName="Spring Boot" temporary="true" nameIsGenerated="true">
      <option name="FRAME_DEACTIVATION_UPDATE_POLICY" value="UnknownPolicyInFreeMode" />
      <module name="DigiPME" />
      <option name="SPRING_BOOT_MAIN_CLASS" value="org.example.digipme.DigiPmeApplication" />
      <extension name="coverage">
        <pattern>
          <option name="PATTERN" value="org.example.digipme.*" />
          <option name="ENABLED" value="true" />
        </pattern>
      </extension>
      <method v="2">
        <option name="Make" enabled="true" />
      </method>
    </configuration>
    <recent_temporary>
      <list>
        <item itemvalue="Spring Boot.DigiPmeApplication" />
        <item itemvalue="JUnit.ProjectServiceTest.deleteProject_devraitReussir_quandLaPmeEstProprietaire" />
        <item itemvalue="JUnit.ProjectServiceTest" />
      </list>
    </recent_temporary>
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
  <component name="VcsManagerConfiguration">
    <ignored-roots>
      <path value="$PROJECT_DIR$" />
    </ignored-roots>
  </component>
  <component name="XDebuggerManager">
    <breakpoint-manager>
      <breakpoints>
        <line-breakpoint enabled="true" type="java-line">
          <url>file://$PROJECT_DIR$/src/main/java/org/example/digipme/config/SecurityConfig.java</url>
          <line>46</line>
          <option name="timeStamp" value="2" />
        </line-breakpoint>
      </breakpoints>
    </breakpoint-manager>
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

        <dependency>
            <groupId>io.jsonwebtoken</groupId>
            <artifactId>jjwt-api</artifactId>
            <version>0.11.5</version>
        </dependency>

        <dependency>
            <groupId>io.jsonwebtoken</groupId>
            <artifactId>jjwt-impl</artifactId>
            <version>0.11.5</version>
            <scope>runtime</scope>
        </dependency>

        <dependency>
            <groupId>io.jsonwebtoken</groupId>
            <artifactId>jjwt-jackson</artifactId>
            <version>0.11.5</version>
            <scope>runtime</scope>
        </dependency>
        <dependency>
            <groupId>org.flywaydb</groupId>
            <artifactId>flyway-mysql</artifactId>
        </dependency>

        <dependency>
            <groupId>com.mysql</groupId>
            <artifactId>mysql-connector-j</artifactId>
            <scope>runtime</scope>
        </dependency>

        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-flyway</artifactId>
        </dependency>

        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-flyway-test</artifactId>
            <scope>test</scope>
        </dependency>

        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-test</artifactId>
            <scope>test</scope>
        </dependency>

    </dependencies>

    <build>
        <plugins>
            <plugin>
                <groupId>org.springframework.boot</groupId>
                <artifactId>spring-boot-maven-plugin</artifactId>
            </plugin>
            <plugin>
                <groupId>org.flywaydb</groupId>
                <artifactId>flyway-maven-plugin</artifactId>
                <configuration>
                    <url>jdbc:mysql://localhost:3307/digipme_db?createDatabaseIfNotExist=true&amp;useSSL=false&amp;allowPublicKeyRetrieval=true&amp;serverTimezone=UTC</url>
                    <user>root</user>
                    <password>uxui2025</password>
                    <locations>
                        <location>filesystem:src/main/resources/db/migration</location>
                    </locations>
                </configuration>
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
                                <path>
                                    <groupId>org.mapstruct</groupId>
                                    <artifactId>mapstruct-processor</artifactId>
                                    <version>1.5.5.Final</version>
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
                                <path>
                                    <groupId>org.mapstruct</groupId>
                                    <artifactId>mapstruct-processor</artifactId>
                                    <version>1.5.5.Final</version>
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
//         if (userAppRepository.findUserAppByEmail(userSignUp.getEmail())!=null){
//             throw new RuntimeException("Email déjà utilisé");
//         }
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
         } else if (userSignUp.getRole() == RoleUser.FREELANCER) {
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
         } else {
             throw new RuntimeException("Role est incorrect");
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
        if(userAppRepository.existsByEmail(userSignUp.getEmail())){
            throw new RuntimeException("Email déjà utilisé");
        }
        if(pmeRepository.existsByEmail(userSignUp.getEmail())){
            throw new RuntimeException("Email déjà utilisé par une PME");
        }
        if(freelancerRepository.existsByEmail(userSignUp.getEmail())){
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
                .entryTtl(Duration.ofMinutes(15));

        return RedisCacheManager.builder(connectionFactory)
                .cacheDefaults(cacheConfig)
                .withCacheConfiguration("users", cacheConfig.entryTtl(Duration.ofHours(1)))
                .build();
    }
}

```

# src\main\java\org\example\digipme\config\JwtFilter.java

```java
package org.example.digipme.config;

import io.jsonwebtoken.JwtException;
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
import org.springframework.security.core.userdetails.UsernameNotFoundException;
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
        try {
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
        } catch (JwtException | UsernameNotFoundException | IllegalArgumentException e) {
            SecurityContextHolder.clearContext();
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
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.HttpStatusEntryPoint;
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
                .exceptionHandling(e -> e.authenticationEntryPoint(new HttpStatusEntryPoint(HttpStatus.UNAUTHORIZED)))
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
                "http://localhost:5173",
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

# src\main\java\org\example\digipme\Controller\AdminController.java

```java
package org.example.digipme.Controller;

import lombok.RequiredArgsConstructor;
import org.example.digipme.DTOs.Dashboard.AdminDashboardResponse;
import org.example.digipme.Service.AdminService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/admin")
@RequiredArgsConstructor
public class AdminController {

    private final AdminService adminService;

    @GetMapping("/dashboard")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<AdminDashboardResponse> getDashboard() {
        return ResponseEntity.ok(adminService.getDashboard());
    }
}
```

# src\main\java\org\example\digipme\Controller\FreelancerController.java

```java
package org.example.digipme.Controller;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.example.digipme.DTOs.Dashboard.FreelancerDashboardResponse;
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
            @Valid @RequestBody FreelancerRequest request,
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



    @GetMapping("/dashboard")
    @PreAuthorize("hasRole('FREELANCER')")
    public ResponseEntity<FreelancerDashboardResponse> getDashboard(Authentication authentication) {
        return ResponseEntity.ok(freelancerService.getDashboard(authentication));
    }
}
```

# src\main\java\org\example\digipme\Controller\OfferController.java

```java
package org.example.digipme.Controller;

import jakarta.validation.Valid;
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
            @Valid @RequestBody OfferRequest request,
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

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.example.digipme.DTOs.Dashboard.PMEDashboardResponse;
import org.example.digipme.DTOs.FreelancerResponse;
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
            @Valid @RequestBody PMERequest request,
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


    @GetMapping("/freelancers")
    @PreAuthorize("hasRole('PME')")
    public ResponseEntity<Page<FreelancerResponse>> getFreelancers(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size
    ) {
        return ResponseEntity.ok(pmeService.getFreelancers(page, size));
    }


    @GetMapping("/dashboard")
    @PreAuthorize("hasRole('PME')")
    public ResponseEntity<PMEDashboardResponse> getDashboard(Authentication authentication) {
        return ResponseEntity.ok(pmeService.getDashboard(authentication));
    }
}
```

# src\main\java\org\example\digipme\Controller\ProjectController.java

```java
package org.example.digipme.Controller;

import jakarta.validation.Valid;
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
            @Valid @RequestBody ProjectRequest request,
            Authentication authentication) {
        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(projectService.createProject(request, authentication));
    }



    @GetMapping
    @PreAuthorize("hasAnyRole('PME', 'FREELANCER', 'ADMIN')")
    public ResponseEntity<Page<ProjectResponse>> getAllProjects(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size) {

        return ResponseEntity.ok(projectService.getAllProjects(page, size));
    }



    @GetMapping("/{id}")
    @PreAuthorize("hasAnyRole('PME', 'FREELANCER', 'ADMIN')")
    public ResponseEntity<ProjectResponse> getProjectById(
            @PathVariable Long id) {

        return ResponseEntity.ok(projectService.getProjectById(id));
    }


    @GetMapping("/my-projects")
    @PreAuthorize("hasRole('PME')")
    public ResponseEntity<Page<ProjectResponse>> getMyProjects(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            Authentication authentication) {

        return ResponseEntity.ok(projectService.getMyProjects(page, size, authentication));
    }


    @PutMapping("/{id}")
    @PreAuthorize("hasRole('PME')")
    public ResponseEntity<ProjectResponse> updateProject(
            @PathVariable Long id,
            @Valid @RequestBody ProjectRequest request,
            Authentication authentication) {

        return ResponseEntity.ok(projectService.updateProject(id, request, authentication));
    }

    @DeleteMapping("/{id}")
    @PreAuthorize("hasAnyRole('PME', 'ADMIN')")
    public ResponseEntity<Void> deleteProject(
            @PathVariable Long id,
            Authentication authentication) {

        projectService.deleteProject(id, authentication);
        return ResponseEntity.noContent().build();
    }

    @PutMapping("/{id}/complete")
    @PreAuthorize("hasRole('PME')")
    public ResponseEntity<ProjectResponse> completeProject(@PathVariable Long id,
                                                           Authentication authentication) throws Exception {
        return ResponseEntity.ok(projectService.completeProject(id, authentication));
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



    @GetMapping("/{id}")
    @PreAuthorize("hasAnyRole('PME', 'FREELANCER', 'ADMIN')")
    public ResponseEntity<ReviewResponse> getReviewById(
            @PathVariable Long id
    ) {

        return ResponseEntity.ok(
                reviewService.getReviewById(id)
        );
    }


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

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.example.digipme.DTOs.ProfileUpdateResponse;
import org.example.digipme.DTOs.UserRequest;
import org.example.digipme.DTOs.UserResponse;
import org.example.digipme.DTOs.UserUpdateRequest;
import org.example.digipme.Enums.RoleUser;
import org.example.digipme.Service.UserService;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;


    @GetMapping("/me")
    @PreAuthorize("isAuthenticated()")
    public ResponseEntity<UserResponse> getMyProfile(Authentication authentication) {
        return ResponseEntity.ok(userService.getMyProfile(authentication));
    }

    @PutMapping("/me")
    @PreAuthorize("isAuthenticated()")
    public ResponseEntity<ProfileUpdateResponse> updateMyProfile(
            @Valid @RequestBody UserUpdateRequest request,
            Authentication authentication) {
        return ResponseEntity.ok(userService.updateMyProfile(request, authentication));
    }

    // ---------- Admin ----------

    @GetMapping
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<Page<UserResponse>> getAllUsers(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size) {
        return ResponseEntity.ok(userService.getAllUsers(page, size));
    }

    @GetMapping("/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<UserResponse> getUserById(@PathVariable Long id) {
        return ResponseEntity.ok(userService.getUserById(id));
    }

    @GetMapping("/role/{role}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<Page<UserResponse>> getUsersByRole(
            @PathVariable RoleUser role,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size) {
        return ResponseEntity.ok(userService.getUsersByRole(role, page, size));
    }

    @PostMapping
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<UserResponse> addUser(@Valid @RequestBody UserRequest request) {
        return ResponseEntity.status(HttpStatus.CREATED).body(userService.addUser(request));
    }

    @PutMapping("/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<UserResponse> updateUser(
            @PathVariable Long id,
            @Valid @RequestBody UserUpdateRequest request) {
        return ResponseEntity.ok(userService.updateUser(id, request));
    }

    @DeleteMapping("/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<Void> deleteUser(@PathVariable Long id, Authentication authentication) {
        userService.deleteUser(id, authentication);
        return ResponseEntity.noContent().build();
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

# src\main\java\org\example\digipme\DTOs\Dashboard\AdminDashboardResponse.java

```java
package org.example.digipme.DTOs.Dashboard;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.example.digipme.DTOs.ProjectResponse;
import org.example.digipme.Enums.RoleUser;

import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AdminDashboardResponse {

    private long totalUsers;
    private long totalPME;
    private long totalFreelancers;
    private long totalProjects;

    private List<UserSummary> recentUsers;
    private List<ProjectResponse> recentProjects;

    @Data
    @Builder
    @NoArgsConstructor
    @AllArgsConstructor
    public static class UserSummary {
        private Long id;
        private String nom;
        private String email;
        private RoleUser role;
    }
}
```

# src\main\java\org\example\digipme\DTOs\Dashboard\FreelancerDashboardResponse.java

```java
package org.example.digipme.DTOs.Dashboard;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.example.digipme.DTOs.FreelancerResponse;
import org.example.digipme.DTOs.OfferResponse;
import org.example.digipme.DTOs.ProjectResponse;

import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class FreelancerDashboardResponse {

    private FreelancerResponse profile;

    private long projetsDisponibles;
    private long propositionsEnvoyees;
    private long missionsEnCours;
    private Double noteMoyenne;

    private List<ProjectResponse> recommendedProjects;
    private List<OfferResponse> recentOffers;
}
```

# src\main\java\org\example\digipme\DTOs\Dashboard\PMEDashboardResponse.java

```java
package org.example.digipme.DTOs.Dashboard;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.example.digipme.DTOs.PMEResponse;
import org.example.digipme.DTOs.ProjectResponse;

import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class PMEDashboardResponse {

    private PMEResponse profile;

    private long totalProjets;
    private long projetsEnCours;
    private long projetsTermines;
    private long totalOffresRecues;

    private List<ProjectResponse> recentProjects;
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
    private Double noteMoyenne;

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

}

```

# src\main\java\org\example\digipme\DTOs\OfferResponse.java

```java
package org.example.digipme.DTOs;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.example.digipme.Enums.OfferStatus;

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
    private OfferStatus status;

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

# src\main\java\org\example\digipme\DTOs\ProfileUpdateResponse.java

```java
package org.example.digipme.DTOs;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.example.digipme.Enums.RoleUser;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ProfileUpdateResponse {
    private UserResponse user;
    private String token;
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
import org.example.digipme.Enums.ProjectStatus;

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

    private ProjectStatus status;
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
import org.example.digipme.Enums.ProjectStatus;

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
    private ProjectStatus status;
}
```

# src\main\java\org\example\digipme\DTOs\ReviewRequest.java

```java
package org.example.digipme.DTOs;

import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
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

    @NotNull(message = "La note est obligatoire")
    @Min(value = 1, message = "La note minimale est 1")
    @Max(value = 5, message = "La note maximale est 5")
    private Long note;

    @NotBlank
    private String commentaire;

    @NotNull(message = "Le projet est obligatoire")
    private Long projectId;

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
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.example.digipme.Enums.RoleUser;

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
    @Size(min = 4, message = "Le mot de passe doit contenir au moins 4 caractères")
    private String password;

    @NotBlank(message = "Le téléphone est obligatoire")
    private String telephone;

    private String adresse;

    @NotNull(message = "Le rôle est obligatoire")
    private RoleUser role;

    private String rc;
    private String activite;

    private String specialite;


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
    private String role;

    private String rc;
    private String activite;
    private String specialite;
    private Double noteMoyenne;
}

```

# src\main\java\org\example\digipme\DTOs\UserUpdateRequest.java

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
public class UserUpdateRequest {

    @NotBlank(message = "Le nom est obligatoire")
    private String nom;

    @NotBlank(message = "L'email est obligatoire")
    @Email(message = "L'email doit être valide")
    private String email;

    @NotBlank(message = "Le téléphone est obligatoire")
    private String telephone;

    private String adresse;

    /** Optionnel, utilisé uniquement par l'admin (vide = inchangé). Ignoré pour /me. */
    private String password;

    private String rc;
    private String activite;
    private String specialite;
}
```

# src\main\java\org\example\digipme\Enums\ActiviteType.java

```java
package org.example.digipme.Enums;

public enum ActiviteType {
    DEVELOPPEMENT_WEB,
    APPLICATION_MOBILE,
    MARKETING_DIGITAL,
    CRM_ERP,
    CYBERSECURITE,
    CLOUD_HEBERGEMENT,
    AUTOMATISATION,
    DESIGN_UI_UX,
    AUTRE
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

# src\main\java\org\example\digipme\exception\ApiException.java

```java
package org.example.digipme.exception;

import lombok.Getter;
import org.springframework.http.HttpStatus;

import static io.lettuce.core.pubsub.PubSubOutput.Type.message;

@Getter
public class ApiException extends RuntimeException {

    private final HttpStatus status;

    public ApiException(HttpStatus status, String message) {
        super(message);
        this.status = status;
    }

}
```

# src\main\java\org\example\digipme\exception\GlobalExceptionHandler.java

```java
package org.example.digipme.exception;

import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.util.Map;

@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(ApiException.class)
    public ResponseEntity<Map<String, String>> handleApi(ApiException ex) {
        return ResponseEntity.status(ex.getStatus()).body(Map.of("message", ex.getMessage()));
    }

    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<Map<String, String>> handleValidation(MethodArgumentNotValidException ex) {
        String message = ex.getBindingResult().getFieldErrors().stream()
                .map(FieldError::getDefaultMessage)
                .findFirst()
                .orElse("Données invalides");
        return ResponseEntity.badRequest().body(Map.of("message", message));
    }
}
```

# src\main\java\org\example\digipme\Mappers\FreelancerMapper.java

```java
package org.example.digipme.Mappers;

import org.example.digipme.DTOs.FreelancerRequest;
import org.example.digipme.DTOs.FreelancerResponse;
import org.example.digipme.Model.Freelancer;
import org.mapstruct.Mapper;
import org.mapstruct.MappingTarget;

@Mapper(componentModel = "spring")
public interface FreelancerMapper {
    Freelancer toEntity(FreelancerRequest request);
    FreelancerResponse toResponse(Freelancer freelancer);

    void updateEntity(FreelancerRequest request, @MappingTarget Freelancer freelancer);
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
import org.mapstruct.MappingTarget;

@Mapper(componentModel = "spring")
public interface PMEMapper {
    PME toEntity(PMERequest request);
    PMEResponse toResponse(PME pme);

    void updateEntity(PMERequest request, @MappingTarget PME pme);
}


```

# src\main\java\org\example\digipme\Mappers\ProjectMapper.java

```java
package org.example.digipme.Mappers;

import org.example.digipme.DTOs.ProjectRequest;
import org.example.digipme.DTOs.ProjectResponse;
import org.example.digipme.Model.Project;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingTarget;

@Mapper(componentModel = "spring")
public interface ProjectMapper {

    @Mapping(target = "dateCreation", source = "date")
    @Mapping(target = "id", ignore = true)
    @Mapping(target = "status", ignore = true)
    @Mapping(target = "pme", ignore = true)
    @Mapping(target = "offers", ignore = true)
    Project toEntity(ProjectRequest request);

    @Mapping(target = "date", source = "dateCreation")
    ProjectResponse toResponse(Project project);

    @Mapping(target = "dateCreation", source = "date")
    @Mapping(target = "id", ignore = true)
    @Mapping(target = "status", ignore = true)
    @Mapping(target = "pme", ignore = true)
    @Mapping(target = "offers", ignore = true)
    void updateEntity(ProjectRequest request, @MappingTarget Project project);
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

import org.example.digipme.DTOs.UserResponse;
import org.example.digipme.Model.Freelancer;
import org.example.digipme.Model.PME;
import org.example.digipme.Model.UserApp;
import org.springframework.stereotype.Component;

@Component
public class UserMapper {

    public UserResponse toResponse(UserApp user) {
        UserResponse.UserResponseBuilder builder = UserResponse.builder()
                .id(user.getId())
                .nom(user.getNom())
                .email(user.getEmail())
                .telephone(user.getTelephone())
                .adresse(user.getAdresse())
                .role(user.getRole().name());

        if (user instanceof PME pme) {
            builder.rc(pme.getRC()).activite(pme.getActivite());
        } else if (user instanceof Freelancer f) {
            builder.specialite(f.getSpecialite()).noteMoyenne(f.getNoteMoyenne());
        }
        return builder.build();
    }
}
```

# src\main\java\org\example\digipme\Model\Freelancer.java

```java
package org.example.digipme.Model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.*;
import lombok.experimental.SuperBuilder;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import java.util.ArrayList;
import java.util.List;

@Entity
@SuperBuilder
@DiscriminatorValue("FREELANCER")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Freelancer extends UserApp{


    @NotBlank
    private String specialite ;

    private Double noteMoyenne;

    @OneToMany(mappedBy = "freelancer")
    @OnDelete(action = OnDeleteAction.CASCADE)
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
import lombok.*;
import org.example.digipme.Enums.OfferStatus;

import java.time.LocalDate;

@Entity
@Builder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Offer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
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
import lombok.*;
import lombok.experimental.SuperBuilder;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import java.util.ArrayList;
import java.util.List;

@Entity
@SuperBuilder
@DiscriminatorValue("PME")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class PME extends UserApp {

    @NotBlank
    private String RC;
    @NotBlank
    private String activite ;

    @OneToMany(mappedBy = "pme")
    @OnDelete(action = OnDeleteAction.CASCADE)
    @Builder.Default
    private List<Project> projects = new ArrayList<>();



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
import lombok.*;
import org.example.digipme.Enums.ActiviteType;
import org.example.digipme.Enums.ProjectStatus;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Project {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @NotBlank
    private String titre;
    @NotNull
    @Enumerated(EnumType.STRING)
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
import lombok.*;

@Entity
@Builder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Review {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
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
import lombok.*;
import lombok.experimental.SuperBuilder;
import org.example.digipme.Enums.RoleUser;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.List;

@Entity
@SuperBuilder
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
@DiscriminatorColumn(name = "user_type", discriminatorType = DiscriminatorType.STRING)
@DiscriminatorValue("ADMIN")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class UserApp implements UserDetails {
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
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
    boolean existsByEmail(@NotBlank @Email String email);
}

```

# src\main\java\org\example\digipme\Repository\OfferRepository.java

```java
package org.example.digipme.Repository;

import org.example.digipme.Enums.OfferStatus;
import org.example.digipme.Model.Offer;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface OfferRepository extends JpaRepository<Offer, Long> {
    Page<Offer> findByProjectId(Long projectId, Pageable pageable);

    Page<Offer> findByFreelancerId(Long id, Pageable pageable);

    boolean existsByProjectIdAndFreelancerId(Long id, Long id1);

    long countByFreelancerId(Long freelancerId);
    long countByFreelancerIdAndStatus(Long freelancerId, OfferStatus status);
    long countByProject_Pme_Id(Long pmeId);

    List<Offer> findTop5ByFreelancerIdOrderByIdDesc(Long freelancerId);
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
    boolean existsByEmail(@NotBlank @Email String email);
}

```

# src\main\java\org\example\digipme\Repository\ProjectRepository.java

```java
package org.example.digipme.Repository;

import org.example.digipme.Enums.ProjectStatus;
import org.example.digipme.Model.Project;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ProjectRepository extends JpaRepository<Project, Long> {
    Page<Project> findByPmeId(Long id, Pageable pageable);

    long countByPmeId(Long pmeId);
    long countByPmeIdAndStatus(Long pmeId, ProjectStatus status);

    List<Project> findTop5ByPmeIdOrderByDateCreationDesc(Long pmeId);
    List<Project> findTop5ByOrderByDateCreationDesc();
}
```

# src\main\java\org\example\digipme\Repository\ReviewRepository.java

```java
package org.example.digipme.Repository;

import org.example.digipme.Model.Review;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface ReviewRepository extends JpaRepository<Review, Long> {
    boolean existsByProjectIdAndFreelancerId(Long id, Long id1);

    Page<Review> findByFreelancerId(Long freelancerId, Pageable pageable);

    @Query("SELECT AVG(r.note) FROM Review r WHERE r.freelancer.id = :freelancerId")
    Double findAverageNoteByFreelancerId(@Param("freelancerId") Long freelancerId);
}
```

# src\main\java\org\example\digipme\Repository\UserAppRepository.java

```java
package org.example.digipme.Repository;

import org.example.digipme.Enums.RoleUser;
import org.example.digipme.Model.UserApp;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface UserAppRepository extends JpaRepository<UserApp, Long> {
    boolean existsByEmail(String email);

    UserApp findUserAppByNom(String nom);

    UserApp findUserAppByEmail(String email);

    Page<UserApp> findByRole(RoleUser role, Pageable pageable);

    long countByRole(RoleUser role);

    List<UserApp> findTop5ByOrderByIdDesc();
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
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

import javax.crypto.SecretKey;
import java.util.Date;


@Service
public class JwtService {

    private final String secretKey="sdXKFTPKtSMaNV8G9fZdT3kKEsiJlCZTzF46RxXMQhnPUKhcA==";
    private final long expiration = 2592000000L;

//    public JwtService(@Value("${jwt.secret}") String secretKey) {
//        this.secretKey = secretKey;
//    }


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




}

```

# src\main\java\org\example\digipme\Service\AdminService.java

```java
package org.example.digipme.Service;

import lombok.RequiredArgsConstructor;
import org.example.digipme.DTOs.Dashboard.AdminDashboardResponse;
import org.example.digipme.DTOs.ProjectResponse;
import org.example.digipme.Enums.RoleUser;
import org.example.digipme.Mappers.ProjectMapper;
import org.example.digipme.Model.UserApp;
import org.example.digipme.Repository.ProjectRepository;
import org.example.digipme.Repository.UserAppRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class AdminService {

    private final UserAppRepository userRepository;
    private final ProjectRepository projectRepository;
    private final ProjectMapper projectMapper;

    public AdminDashboardResponse getDashboard() {

        long totalUsers = userRepository.count();
        long totalPME = userRepository.countByRole(RoleUser.PME);
        long totalFreelancers = userRepository.countByRole(RoleUser.FREELANCER);
        long totalProjects = projectRepository.count();

        List<AdminDashboardResponse.UserSummary> recentUsers = userRepository
                .findTop5ByOrderByIdDesc()
                .stream()
                .map(this::toSummary)
                .toList();

        List<ProjectResponse> recentProjects = projectRepository
                .findTop5ByOrderByDateCreationDesc()
                .stream()
                .map(projectMapper::toResponse)
                .toList();

        return AdminDashboardResponse.builder()
                .totalUsers(totalUsers)
                .totalPME(totalPME)
                .totalFreelancers(totalFreelancers)
                .totalProjects(totalProjects)
                .recentUsers(recentUsers)
                .recentProjects(recentProjects)
                .build();
    }

    private AdminDashboardResponse.UserSummary toSummary(UserApp user) {
        return AdminDashboardResponse.UserSummary.builder()
                .id(user.getId())
                .nom(user.getNom())
                .email(user.getEmail())
                .role(user.getRole())
                .build();
    }
}
```

# src\main\java\org\example\digipme\Service\FreelancerService.java

```java
package org.example.digipme.Service;

import lombok.RequiredArgsConstructor;
import org.example.digipme.DTOs.Dashboard.FreelancerDashboardResponse;
import org.example.digipme.DTOs.FreelancerRequest;
import org.example.digipme.DTOs.FreelancerResponse;
import org.example.digipme.DTOs.OfferResponse;
import org.example.digipme.DTOs.ProjectResponse;
import org.example.digipme.Enums.OfferStatus;
import org.example.digipme.Mappers.FreelancerMapper;
import org.example.digipme.Mappers.OfferMapper;
import org.example.digipme.Mappers.ProjectMapper;
import org.example.digipme.Model.Freelancer;
import org.example.digipme.Model.UserApp;
import org.example.digipme.Repository.*;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class FreelancerService {

    private final UserAppRepository userRepository;
    private final ProjectRepository projectRepository;
    private final OfferRepository offerRepository;
    private final ReviewRepository reviewRepository;
    private final FreelancerRepository freelancerRepository;

    private final FreelancerMapper freelancerMapper;
    private final OfferMapper offerMapper;
    private final ProjectMapper projectMapper;



//    @Cacheable(value = "freelancer", key = "'profile:' + #authentication.name")
    public FreelancerResponse getMyProfile(Authentication authentication) {

        Freelancer freelancer = getCurrentFreelancer(authentication);
        return freelancerMapper.toResponse(freelancer);
    }




//    @CacheEvict(value = "freelancer", key = "'profile:' + #authentication.name")
    public FreelancerResponse updateMyProfile(FreelancerRequest request,
                                               Authentication authentication) {
        Freelancer freelancer = getCurrentFreelancer(authentication);
        freelancerMapper.updateEntity(request, freelancer);
        Freelancer updated = userRepository.save(freelancer);

        return freelancerMapper.toResponse(updated);
    }

//
//    @Cacheable(value = "projects",
//               key = "'available:page:' + #page + ':size:' + #size")
    public Page<ProjectResponse> getAvailableProjects(int page, int size) {
        Pageable pageable =
                PageRequest.of(page, size);
        return projectRepository
                .findAll(pageable)
                .map(projectMapper::toResponse);
    }


//
//    @Cacheable(value = "offers",
//                key = "'freelancer:' + #authentication.name + ':page:' + #page + ':size:' + #size")
    public Page<OfferResponse> getMyOffers(int page, int size,
                                             Authentication authentication) {
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




//    @Cacheable(value = "freelancer", key = "'dashboard:' + #authentication.name")
    public FreelancerDashboardResponse getDashboard(Authentication authentication) {

        Freelancer freelancer = getCurrentFreelancer(authentication);

        long disponibles = projectRepository.count();
        long envoyees = offerRepository.countByFreelancerId(freelancer.getId());
        long enCours = offerRepository.countByFreelancerIdAndStatus(freelancer.getId(), OfferStatus.ACCEPTEE);
        Double note = reviewRepository.findAverageNoteByFreelancerId(freelancer.getId());

        List<ProjectResponse> recommended = projectRepository
                .findTop5ByOrderByDateCreationDesc()
                .stream()
                .map(projectMapper::toResponse)
                .toList();

        List<OfferResponse> recentOffers = offerRepository
                .findTop5ByFreelancerIdOrderByIdDesc(freelancer.getId())
                .stream()
                .map(offerMapper::toResponse)
                .toList();

        return FreelancerDashboardResponse.builder()
                .profile(freelancerMapper.toResponse(freelancer))
                .projetsDisponibles(disponibles)
                .propositionsEnvoyees(envoyees)
                .missionsEnCours(enCours)
                .noteMoyenne(note)
                .recommendedProjects(recommended)
                .recentOffers(recentOffers)
                .build();
    }
}

```

# src\main\java\org\example\digipme\Service\OfferService.java

```java
package org.example.digipme.Service;

import lombok.RequiredArgsConstructor;
import org.example.digipme.Enums.OfferStatus;
import org.example.digipme.Enums.ProjectStatus;
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
import org.example.digipme.exception.ApiException;
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


//    @CacheEvict(value = {"offers", "freelancer"}, allEntries = true)
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

        if (project.getStatus() != ProjectStatus.EN_ATTENTE) {
            throw new RuntimeException("Ce projet n'accepte plus d'offres");
        }
        if (offerRepository.existsByProjectIdAndFreelancerId(project.getId(), freelancer.getId())) {
            throw new RuntimeException("Vous avez déjà postulé à ce projet");
        }

        Offer offer = offerMapper.toEntity(request);
        offer.setStatus(OfferStatus.EN_ATTENTE);
        offer.setProject(project);
        offer.setFreelancer(freelancer);
        Offer savedOffer = offerRepository.save(offer);
        return offerMapper.toResponse(savedOffer);
    }


//    @Cacheable(value = "offers", key = "'page:' + #page + ':size:' + #size")
    public Page<OfferResponse> getAllOffers(int page, int size) {
        Pageable pageable = PageRequest.of(page, size);
        return offerRepository
                .findAll(pageable)
                .map(offerMapper::toResponse);
    }


//    @Cacheable(value = "offers", key = "'id:' + #id")
    public OfferResponse getOfferById(Long id) {
        Offer offer = offerRepository.findById(id)
                .orElseThrow(() ->
                        new RuntimeException(
                                "Offre introuvable avec l'id : " + id
                        ));
        return offerMapper.toResponse(offer);
    }


//    @Cacheable(value = "offers",
//            key = "'project:' + #projectId + ':page:' + #page + ':size:' + #size")
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


//    @CacheEvict(value = {"offers", "freelancer"}, allEntries = true)
    public void deleteOffer( Long id, Authentication authentication) {
        UserApp user = getCurrentUser(authentication);
        if (!(user instanceof Freelancer freelancer)) {
            throw new AccessDeniedException(
                    "Seul un freelancer peut supprimer une offre"
            );
        }
        Offer offer = offerRepository.findById(id)
                .orElseThrow(() ->
                        new RuntimeException("Offre introuvable avec l'id : " + id));
        if (!offer.getFreelancer()
                .getId()
                .equals(freelancer.getId())) {
            throw new AccessDeniedException("Vous ne pouvez pas supprimer cette offre");
        }
        if (offer.getStatus() != OfferStatus.EN_ATTENTE) {
            throw new RuntimeException("Seule une offre en attente peut être supprimée");
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

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.example.digipme.DTOs.*;
import org.example.digipme.DTOs.Dashboard.PMEDashboardResponse;
import org.example.digipme.Enums.OfferStatus;
import org.example.digipme.Enums.ProjectStatus;
import org.example.digipme.Mappers.OfferMapper;
import org.example.digipme.Mappers.PMEMapper;
import org.example.digipme.Mappers.ProjectMapper;
import org.example.digipme.Model.Offer;
import org.example.digipme.Model.PME;
import org.example.digipme.Model.Project;
import org.example.digipme.Model.UserApp;
import org.example.digipme.Repository.*;
import org.example.digipme.exception.ApiException;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class PMEService {

    private final UserAppRepository userRepository;
    private final ProjectRepository projectRepository;
    private final OfferRepository offerRepository;
    private final FreelancerRepository freelancerRepository;
    private final ReviewRepository reviewRepository;

    private final PMEMapper pmeMapper;
    private final OfferMapper offerMapper;
    private final ProjectMapper projectMapper;


//    @Cacheable(value = "pme", key = "'profile:' + #authentication.name")
    public PMEResponse getMyProfile(Authentication authentication) {
        PME pme = getCurrentPME(authentication);
        return pmeMapper.toResponse(pme);
    }



//    @CacheEvict(value = "pme", key = "'profile:' + #authentication.name")
    public PMEResponse updateMyProfile(PMERequest request,
                                        Authentication authentication) {
        PME pme = getCurrentPME(authentication);
        pmeMapper.updateEntity(request, pme);
        PME updatedPME = userRepository.save(pme);
        return pmeMapper.toResponse(updatedPME);
    }

//
//    @Cacheable(value = "offers",
//               key = "'pme-project:' + #projectId + ':page:' + #page + ':size:' + #size")
    public Page<OfferResponse> getProjectOffers(Long projectId, int page, int size,
                                                 Authentication authentication) {
        PME pme = getCurrentPME(authentication);
        Project project = projectRepository.findById(projectId)
                .orElseThrow(() -> new RuntimeException("Projet introuvable"));
        if (!project.getPme().getId().equals(pme.getId())) {
            throw new AccessDeniedException("Ce projet ne vous appartient pas");
        }
        Pageable pageable = PageRequest.of(page, size);
        return offerRepository
                .findByProjectId(projectId, pageable)
                .map(offerMapper::toResponse);
    }


//    @Cacheable(value = "freelancersList", key = "'page:' + #page + ':size:' + #size")
    public Page<FreelancerResponse> getFreelancers(int page, int size) {
        Pageable pageable = PageRequest.of(page, size);

        return freelancerRepository.findAll(pageable)
                .map(f -> FreelancerResponse.builder()
                        .id(f.getId())
                        .nom(f.getNom())
                        .specialite(f.getSpecialite())
                        .telephone(f.getTelephone())
                        .adresse(f.getAdresse())
                        .noteMoyenne(reviewRepository.findAverageNoteByFreelancerId(f.getId()))
                        .build());
    }




//    @CacheEvict(value = {"offers", "pme", "freelancer"}, allEntries = true)
    @Transactional
    public OfferResponse acceptOffer(Long offerId, Authentication authentication) {
        PME pme = getCurrentPME(authentication);
        Offer offer = offerRepository.findById(offerId)
                .orElseThrow(() -> new RuntimeException("Offre introuvable"));
        Project project = offer.getProject();

        if (!project.getPme().getId().equals(pme.getId())) {
            throw new AccessDeniedException("Vous ne pouvez pas accepter cette offre");
        }
        if (project.getStatus() != ProjectStatus.EN_ATTENTE || offer.getStatus() != OfferStatus.EN_ATTENTE) {
            throw new RuntimeException("Cette offre ne peut plus être acceptée");
        }

        offer.setStatus(OfferStatus.ACCEPTEE);
        project.getOffers().stream()
                .filter(o -> !o.getId().equals(offerId))
                .forEach(o -> o.setStatus(OfferStatus.REFUSEE));
        project.setStatus(ProjectStatus.EN_COURS);

        return offerMapper.toResponse(offer);
    }



    private PME getCurrentPME(
            Authentication authentication) {
        String email = authentication.getName();
        UserApp user = userRepository.findUserAppByEmail(email);
        if (!(user instanceof PME pme)) {
            throw new AccessDeniedException("Vous devez être une PME");}
        return pme;
    }


//    @Cacheable(value = "pme", key = "'dashboard:' + #authentication.name")
    public PMEDashboardResponse getDashboard(Authentication authentication) {

        PME pme = getCurrentPME(authentication);

        long total = projectRepository.countByPmeId(pme.getId());
        long enCours = projectRepository.countByPmeIdAndStatus(pme.getId(), ProjectStatus.EN_COURS);
        long termines = projectRepository.countByPmeIdAndStatus(pme.getId(), ProjectStatus.TERMINE);
        long totalOffres = offerRepository.countByProject_Pme_Id(pme.getId());

        List<ProjectResponse> recentProjects = projectRepository
                .findTop5ByPmeIdOrderByDateCreationDesc(pme.getId())
                .stream()
                .map(projectMapper::toResponse)
                .toList();

        return PMEDashboardResponse.builder()
                .profile(pmeMapper.toResponse(pme))
                .totalProjets(total)
                .projetsEnCours(enCours)
                .projetsTermines(termines)
                .totalOffresRecues(totalOffres)
                .recentProjects(recentProjects)
                .build();
    }
}
```

# src\main\java\org\example\digipme\Service\ProjectService.java

```java
package org.example.digipme.Service;

import jakarta.transaction.Transactional;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.example.digipme.Enums.ProjectStatus;
import org.example.digipme.Model.PME;
import org.example.digipme.Model.Project;
import org.example.digipme.Model.UserApp;
import org.example.digipme.DTOs.ProjectRequest;
import org.example.digipme.DTOs.ProjectResponse;
import org.example.digipme.Mappers.ProjectMapper;
import org.example.digipme.Repository.ProjectRepository;
import org.example.digipme.Repository.UserAppRepository;
import org.example.digipme.exception.ApiException;
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


//    @CacheEvict(value = {"projects", "pme"}, allEntries = true)
    public ProjectResponse createProject(ProjectRequest request,
                                         Authentication authentication) {
        UserApp user = getCurrentUser(authentication);
        if (!(user instanceof PME pme)) {
            throw new AccessDeniedException("Seule une PME peut créer un projet");
        }
        Project project = projectMapper.toEntity(request);
        project.setPme(pme);
        project.setStatus(org.example.digipme.Enums.ProjectStatus.EN_ATTENTE);
        Project savedProject = projectRepository.save(project);
        return projectMapper.toResponse(savedProject);
    }



//    @Cacheable(value = "projects", key = "'page:' + #page + ':size:' + #size")
    public Page<ProjectResponse> getAllProjects(int page, int size) {

        Pageable pageable = PageRequest.of(page, size);

        return projectRepository
                .findAll(pageable)
                .map(projectMapper::toResponse);
    }



//    @Cacheable(value = "projects", key = "'id:' + #id")
    public ProjectResponse getProjectById(Long id) {
        Project project = projectRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Projet introuvable avec l'id : " + id));

        return projectMapper.toResponse(project);
    }



    public Page<ProjectResponse> getMyProjects(int page, int size,
                                            Authentication authentication) {
        UserApp user = getCurrentUser(authentication);
        if (!(user instanceof PME pme)) {
            throw new AccessDeniedException("Seule une PME peut consulter ses projets");}
        Pageable pageable = PageRequest.of(page, size);
        return projectRepository
                .findByPmeId(pme.getId(), pageable)
                .map(projectMapper::toResponse);
    }


//    @CacheEvict(value = {"projects", "pme"}, allEntries = true)
    public ProjectResponse updateProject(Long id, ProjectRequest request,
                                         Authentication authentication) {
        UserApp user = getCurrentUser(authentication);
        Project project = projectRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Projet introuvable avec l'id : " + id));

        if (user.getRole().name().equals("ADMIN")) {
            projectMapper.updateEntity(request, project);
        } else {
            if (!(user instanceof PME pme)) {
                throw new AccessDeniedException("Accès refusé");
            }
            if (!project.getPme().getId().equals(pme.getId())) {
                throw new AccessDeniedException("Vous ne pouvez pas modifier ce projet");
            }
            projectMapper.updateEntity(request, project);
        }
        Project updatedProject = projectRepository.save(project);
        return projectMapper.toResponse(updatedProject);
    }


//    @CacheEvict(value = "projects", allEntries = true)
    public void deleteProject(Long id, Authentication authentication) {
        UserApp user = getCurrentUser(authentication);
        Project project = projectRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Projet introuvable avec l'id : " + id));

        if (user.getRole().name().equals("ADMIN")) {
            projectRepository.delete(project);
            return;
        }

        if (!(user instanceof PME pme)) {
            throw new AccessDeniedException("Accès refusé");
        }

        if (!project.getPme().getId().equals(pme.getId())) {
            throw new AccessDeniedException("Vous ne pouvez pas supprimer ce projet");
        }
        projectRepository.delete(project);
    }


    @Transactional
    public ProjectResponse completeProject(Long id, Authentication authentication) throws Exception {
        UserApp user = getCurrentUser(authentication);
        Project project = projectRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Projet introuvable avec l'id : " + id));

        if (!(user instanceof PME pme) || !project.getPme().getId().equals(pme.getId())) {
            throw new AccessDeniedException("Ce projet ne vous appartient pas");
        }
        if (project.getStatus() != ProjectStatus.EN_COURS) {
            throw new RuntimeException("Seul un projet en cours peut être terminé");
        }
        project.setStatus(ProjectStatus.TERMINE);
        return projectMapper.toResponse(projectRepository.save(project));
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
import org.example.digipme.Enums.ProjectStatus;
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


//    @CacheEvict(value = "reviews", allEntries = true)
    public ReviewResponse createReview(ReviewRequest request,
                                       Authentication authentication) {

        UserApp user = getCurrentUser(authentication);

        if (!(user instanceof PME pme)) {
            throw new AccessDeniedException("Seule une PME peut créer une review");
        }

        Project project = projectRepository
                .findById(request.getProjectId())
                .orElseThrow(() -> new RuntimeException(
                                "Projet introuvable avec l'id : " + request.getProjectId()));

        if (project.getStatus() != ProjectStatus.TERMINE) {
            throw new RuntimeException
                    ("Vous ne pouvez évaluer un freelancer qu'une fois le projet terminé");
        }

        if (!project.getPme().getId().equals(pme.getId())) {
            throw new AccessDeniedException("Ce projet ne vous appartient pas");
        }

        UserApp freelancerUser = userRepository
                .findById(request.getFreelancerId())
                .orElseThrow(() -> new RuntimeException("Freelancer introuvable"));


        if (!(freelancerUser instanceof Freelancer freelancer)) {
            throw new RuntimeException("L'utilisateur sélectionné n'est pas un freelancer");
        }

        boolean hasOffer = offerRepository
            .existsByProjectIdAndFreelancerId(project.getId(), freelancer.getId());

        if (!hasOffer) {
            throw new AccessDeniedException(
                    "Vous ne pouvez pas évaluer ce freelancer " +
                            "car il n'a pas fait d'offre sur ce projet");
        }

        boolean alreadyReviewed = reviewRepository
            .existsByProjectIdAndFreelancerId(project.getId(), freelancer.getId());


        if (alreadyReviewed) {
            throw new RuntimeException("Vous avez déjà évalué ce freelancer pour ce projet");
        }

        Review review = reviewMapper.toEntity(request);

        review.setPme(pme);
        review.setProject(project);
        review.setFreelancer(freelancer);

        Review savedReview = reviewRepository.save(review);
        refreshAverage(freelancer);

        return reviewMapper.toResponse(savedReview);
    }



//    @Cacheable(value = "reviews", key = "'id:' + #id")
    public ReviewResponse getReviewById(Long id) {

        Review review = reviewRepository.findById(id)
                .orElseThrow(() ->
                        new RuntimeException("Review introuvable avec l'id : " + id));

        return reviewMapper.toResponse(review);
    }



//    @Cacheable(value = "reviews", key = "'page:' + #page + ':size:' + #size")
    public Page<ReviewResponse> getAllReviews(int page, int size) {

        Pageable pageable = PageRequest.of(page, size);
        return reviewRepository.findAll(pageable).map(reviewMapper::toResponse);
    }



//    @Cacheable(value = "reviews",
//            key = "'freelancer:' + #freelancerId + ':page:' + #page + ':size:' + #size" )
    public Page<ReviewResponse> getReviewsByFreelancer(Long freelancerId,
                                                       int page, int size) {

        UserApp user = userRepository.findById(freelancerId)
                .orElseThrow(() -> new RuntimeException("Freelancer introuvable"));

        if (!(user instanceof Freelancer)) {
            throw new RuntimeException("L'utilisateur n'est pas un freelancer");
        }

        Pageable pageable = PageRequest.of(page, size);

        return reviewRepository.findByFreelancerId(freelancerId, pageable)
                .map(reviewMapper::toResponse);
    }



//    @CacheEvict(value = "reviews", allEntries = true)
    public void deleteReview(Long id,
                             Authentication authentication) {

        UserApp user = getCurrentUser(authentication);
        Review review = reviewRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Review introuvable"));

        if (user.getRole() == RoleUser.ADMIN) {
            reviewRepository.delete(review);
            return;
        }

        if (!(user instanceof PME pme)) {
            throw new AccessDeniedException("Accès refusé");
        }

        if (!review.getPme().getId().equals(pme.getId())) {
            throw new AccessDeniedException("Vous ne pouvez pas supprimer cette review");
        }

        reviewRepository.delete(review);
        reviewRepository.flush();
        refreshAverage(review.getFreelancer());
    }


    private void refreshAverage(Freelancer freelancer) {
        freelancer.setNoteMoyenne(reviewRepository.findAverageNoteByFreelancerId(freelancer.getId()));
        userRepository.save(freelancer);
    }



    private UserApp getCurrentUser(Authentication authentication) {

        String email = authentication.getName();
        return userRepository.findUserAppByEmail(email);
    }
}
```

# src\main\java\org\example\digipme\Service\UserService.java

```java
package org.example.digipme.Service;

import lombok.RequiredArgsConstructor;
import org.example.digipme.DTOs.ProfileUpdateResponse;
import org.example.digipme.DTOs.UserRequest;
import org.example.digipme.DTOs.UserResponse;
import org.example.digipme.DTOs.UserUpdateRequest;
import org.example.digipme.Enums.RoleUser;
import org.example.digipme.Mappers.UserMapper;
import org.example.digipme.Model.Freelancer;
import org.example.digipme.Model.PME;
import org.example.digipme.Model.UserApp;
import org.example.digipme.Repository.UserAppRepository;
import org.example.digipme.exception.ApiException;
import org.example.digipme.security.CustomUserDetailsService;
import org.example.digipme.security.JwtService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserAppRepository userRepository;
    private final UserMapper userMapper;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final CustomUserDetailsService userDetailsService;

    // =====================================================
    //  PROFIL (utilisateur connecté, tous rôles)
    // =====================================================

    public UserResponse getMyProfile(Authentication authentication) {
        return userMapper.toResponse(getCurrentUser(authentication));
    }

    @Transactional
    public ProfileUpdateResponse updateMyProfile(UserUpdateRequest request,
                                                 Authentication authentication) {
        UserApp user = getCurrentUser(authentication);
        String oldEmail = user.getEmail();

        applyUpdates(user, request);   // le mot de passe est volontairement ignoré ici
        UserApp saved = userRepository.save(user);

        String newToken = null;
        if (!oldEmail.equals(saved.getEmail())) {
            UserDetails details = userDetailsService.loadUserByUsername(saved.getEmail());
            newToken = jwtService.generateToken(details);
        }
        return new ProfileUpdateResponse(userMapper.toResponse(saved), newToken);
    }

    // =====================================================
    //  ADMIN
    // =====================================================

    public Page<UserResponse> getAllUsers(int page, int size) {
        return userRepository.findAll(pageable(page, size)).map(userMapper::toResponse);
    }

    public UserResponse getUserById(Long id) {
        return userMapper.toResponse(findOrThrow(id));
    }

    public Page<UserResponse> getUsersByRole(RoleUser role, int page, int size) {
        return userRepository.findByRole(role, pageable(page, size)).map(userMapper::toResponse);
    }

    @Transactional
    public UserResponse addUser(UserRequest request) {
        checkEmailAvailable(request.getEmail(), null);
        checkNomAvailable(request.getNom(), null);

        UserApp user;
        switch (request.getRole()) {
            case PME -> {
                requireText(request.getRc(), "Le RC est obligatoire pour une PME");
                requireText(request.getActivite(), "L'activité est obligatoire pour une PME");
                PME pme = new PME();
                pme.setRC(request.getRc());
                pme.setActivite(request.getActivite());
                user = pme;
            }
            case FREELANCER -> {
                requireText(request.getSpecialite(), "La spécialité est obligatoire pour un freelancer");
                Freelancer freelancer = new Freelancer();
                freelancer.setSpecialite(request.getSpecialite());
                user = freelancer;
            }
            default -> user = new UserApp();   // ADMIN
        }

        user.setNom(request.getNom());
        user.setEmail(request.getEmail());
        user.setPassword(passwordEncoder.encode(request.getPassword()));
        user.setTelephone(request.getTelephone());
        user.setAdresse(request.getAdresse());
        user.setRole(request.getRole());

        return userMapper.toResponse(userRepository.save(user));
    }

    @Transactional
    public UserResponse updateUser(Long id, UserUpdateRequest request) {
        UserApp user = findOrThrow(id);
        applyUpdates(user, request);

        String newPassword = request.getPassword();
        if (newPassword != null && !newPassword.isBlank()) {
            if (newPassword.length() < 4) {
                throw new ApiException(HttpStatus.BAD_REQUEST,
                        "Le mot de passe doit contenir au moins 4 caractères");
            }
            user.setPassword(passwordEncoder.encode(newPassword));
        }
        return userMapper.toResponse(userRepository.save(user));
    }

    @Transactional
    public void deleteUser(Long id, Authentication authentication) {
        UserApp user = findOrThrow(id);
        if (user.getEmail().equals(authentication.getName())) {
            throw new ApiException(HttpStatus.CONFLICT,
                    "Vous ne pouvez pas supprimer votre propre compte");
        }
        userRepository.delete(user);
    }

    // =====================================================
    //  Helpers
    // =====================================================

    /** Champs communs + champs propres au type (PME / Freelancer). Le rôle n'est jamais modifié. */
    private void applyUpdates(UserApp user, UserUpdateRequest request) {
        checkEmailAvailable(request.getEmail(), user.getId());
        checkNomAvailable(request.getNom(), user.getId());

        user.setNom(request.getNom());
        user.setEmail(request.getEmail());
        user.setTelephone(request.getTelephone());
        user.setAdresse(request.getAdresse());

        if (user instanceof PME pme) {
            requireText(request.getRc(), "Le RC est obligatoire");
            requireText(request.getActivite(), "L'activité est obligatoire");
            pme.setRC(request.getRc());
            pme.setActivite(request.getActivite());
        } else if (user instanceof Freelancer freelancer) {
            requireText(request.getSpecialite(), "La spécialité est obligatoire");
            freelancer.setSpecialite(request.getSpecialite());
        }
    }

    private UserApp getCurrentUser(Authentication authentication) {
        UserApp user = userRepository.findUserAppByEmail(authentication.getName());
        if (user == null) {
            throw new ApiException(HttpStatus.NOT_FOUND, "Utilisateur introuvable");
        }
        return user;
    }

    private UserApp findOrThrow(Long id) {
        return userRepository.findById(id)
                .orElseThrow(() -> new ApiException(HttpStatus.NOT_FOUND,
                        "Utilisateur introuvable avec l'id : " + id));
    }

    private void checkEmailAvailable(String email, Long currentId) {
        UserApp existing = userRepository.findUserAppByEmail(email);
        if (existing != null && !existing.getId().equals(currentId)) {
            throw new ApiException(HttpStatus.CONFLICT, "Cet email est déjà utilisé");
        }
    }

    // AuthService.register() refuse déjà les noms en double : on reste cohérent
    private void checkNomAvailable(String nom, Long currentId) {
        UserApp existing = userRepository.findUserAppByNom(nom);
        if (existing != null && !existing.getId().equals(currentId)) {
            throw new ApiException(HttpStatus.CONFLICT, "Ce nom est déjà utilisé");
        }
    }

    private void requireText(String value, String message) {
        if (value == null || value.isBlank()) {
            throw new ApiException(HttpStatus.BAD_REQUEST, message);
        }
    }

    private Pageable pageable(int page, int size) {
        return PageRequest.of(page, size, Sort.by(Sort.Direction.DESC, "id"));
    }
}
```

# src\main\resources\application.properties

```properties
spring.application.name=DigiPME

spring.datasource.url=${DB_URL:jdbc:mysql://localhost:3307/digipme_db?createDatabaseIfNotExist=true}
spring.datasource.username=${DB_USERNAME:root}
spring.datasource.password=${DB_PASSWORD:uxui2025}

server.port=8083
jwt.secret=${JWT_SECRET:sdXKFTPKtSMaNV8G9fZdT3kKEsiJlCZTzF46RxXMQhnPUKhcA==}

spring.jpa.hibernate.ddl-auto=validate

spring.flyway.enabled=true
spring.flyway.locations=classpath:db/migration

logging.level.org.flywaydb=DEBUG
logging.level.org.flywaydb.core.internal.command=DEBUG

```

# src\main\resources\db\migration\V1__create_tables.sql

```sql
CREATE TABLE user_app (
                          id             BIGINT AUTO_INCREMENT PRIMARY KEY,
                          user_type      VARCHAR(31)     NOT NULL,
                          nom            VARCHAR(255)    NOT NULL,
                          email          VARCHAR(255)    NOT NULL,
                          password       VARCHAR(255)    NOT NULL,
                          telephone      VARCHAR(50)     NOT NULL,
                          adresse        VARCHAR(255),
                          role           VARCHAR(20)     NOT NULL,

                          rc             VARCHAR(100),
                          activite       VARCHAR(255),

                          specialite     VARCHAR(255),
                          note_moyenne   DOUBLE,

                          CONSTRAINT uk_user_app_email UNIQUE (email)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE INDEX idx_user_app_role ON user_app (role);
CREATE INDEX idx_user_app_user_type ON user_app (user_type);


CREATE TABLE project (
                         id              BIGINT AUTO_INCREMENT PRIMARY KEY,
                         titre           VARCHAR(255)   NOT NULL,
                         type            VARCHAR(50)    NOT NULL,
                         description     VARCHAR(2000),
                         prix            DOUBLE         NOT NULL,
                         date_creation   DATE           NOT NULL,
                         status          VARCHAR(20)    NOT NULL,
                         pme_id          BIGINT,

                         CONSTRAINT fk_project_pme FOREIGN KEY (pme_id) REFERENCES user_app (id)
                             ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE INDEX idx_project_pme_id ON project (pme_id);
CREATE INDEX idx_project_status ON project (status);
CREATE INDEX idx_project_date_creation ON project (date_creation);


CREATE TABLE offer (
                       id               BIGINT AUTO_INCREMENT PRIMARY KEY,
                       description      VARCHAR(2000)  NOT NULL,
                       prix_proposer    DOUBLE         NOT NULL,
                       date_livraison   DATE           NOT NULL,
                       status           VARCHAR(20)    NOT NULL,
                       project_id       BIGINT         NOT NULL,
                       freelancer_id    BIGINT         NOT NULL,

                       CONSTRAINT fk_offer_project FOREIGN KEY (project_id) REFERENCES project (id)
                           ON DELETE CASCADE,
                       CONSTRAINT fk_offer_freelancer FOREIGN KEY (freelancer_id) REFERENCES user_app (id)
                           ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE INDEX idx_offer_project_id ON offer (project_id);
CREATE INDEX idx_offer_freelancer_id ON offer (freelancer_id);
CREATE INDEX idx_offer_status ON offer (status);


CREATE TABLE review (
                        id             BIGINT AUTO_INCREMENT PRIMARY KEY,
                        note           BIGINT         NOT NULL,
                        commentaire    VARCHAR(2000)  NOT NULL,
                        project_id     BIGINT,
                        pme_id         BIGINT,
                        freelancer_id  BIGINT,

                        CONSTRAINT fk_review_project FOREIGN KEY (project_id) REFERENCES project (id)
                            ON DELETE CASCADE,
                        CONSTRAINT fk_review_pme FOREIGN KEY (pme_id) REFERENCES user_app (id)
                            ON DELETE CASCADE,
                        CONSTRAINT fk_review_freelancer FOREIGN KEY (freelancer_id) REFERENCES user_app (id)
                            ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE INDEX idx_review_freelancer_id ON review (freelancer_id);
CREATE INDEX idx_review_pme_id ON review (pme_id);
CREATE INDEX idx_review_project_id ON review (project_id);
```

# src\main\resources\db\migration\V2__seed_test_data.sql

```sql
-- Mot de passe de tous les comptes : Password123!
INSERT INTO user_app (id, user_type, nom, email, password, telephone, adresse, role) VALUES
    (1, 'ADMIN', 'Youssef El Amrani', 'admin@mail.com',
     '$2b$10$ixjSsGCuo9dFlWjm.2nrLOu8XGwJPEycJzPLrW5KuVgFE/6Ey82zu', '0611223344', 'Rabat', 'ADMIN');

INSERT INTO user_app (id, user_type, nom, email, password, telephone, adresse, role, rc, activite) VALUES
   (2, 'PME', 'Digital Maroc SARL', 'contact@digitalmaroc.ma',
    '$2b$10$ixjSsGCuo9dFlWjm.2nrLOu8XGwJPEycJzPLrW5KuVgFE/6Ey82zu', '0522334455', 'Casablanca', 'PME', 'RC123456', 'Commerce et distribution'),
   (3, 'PME', 'Atlas Industrie', 'contact@atlasindustrie.ma',
    '$2b$10$ixjSsGCuo9dFlWjm.2nrLOu8XGwJPEycJzPLrW5KuVgFE/6Ey82zu', '0523445566', 'Beni Mellal', 'PME', 'RC223344', 'Industrie agroalimentaire'),
   (4, 'PME', 'Sahara Textile', 'contact@saharatextile.ma',
    '$2b$10$ixjSsGCuo9dFlWjm.2nrLOu8XGwJPEycJzPLrW5KuVgFE/6Ey82zu', '0524556677', 'Marrakech', 'PME', 'RC334455', 'Textile et confection');

INSERT INTO user_app (id, user_type, nom, email, password, telephone, adresse, role, specialite, note_moyenne) VALUES
   (5, 'FREELANCER', 'Sara Benjelloun', 'sara.benjelloun@mail.com',
    '$2b$10$ixjSsGCuo9dFlWjm.2nrLOu8XGwJPEycJzPLrW5KuVgFE/6Ey82zu', '0622334455', 'Fès', 'FREELANCER', 'Design UI/UX', 5.0),
   (6, 'FREELANCER', 'Karim Ziani', 'karim.ziani@mail.com',
    '$2b$10$ixjSsGCuo9dFlWjm.2nrLOu8XGwJPEycJzPLrW5KuVgFE/6Ey82zu', '0633445566', 'Tanger', 'FREELANCER', 'Cybersécurité', 4.0),
   (7, 'FREELANCER', 'Imane Radi', 'imane.radi@mail.com',
    '$2b$10$ixjSsGCuo9dFlWjm.2nrLOu8XGwJPEycJzPLrW5KuVgFE/6Ey82zu', '0644556677', 'Agadir', 'FREELANCER', 'Marketing Digital', NULL);

INSERT INTO project (id, titre, type, description, prix, date_creation, status, pme_id) VALUES
    (1, 'Refonte du site e-commerce', 'DEVELOPPEMENT_WEB', 'Refonte complète du site vitrine et ajout d''un module e-commerce.', 25000, '2026-08-01', 'TERMINE', 2),
    (2, 'Application mobile de suivi de commandes', 'APPLICATION_MOBILE', 'Application iOS/Android pour suivre les livraisons.', 40000, '2026-08-15', 'EN_COURS', 2),
    (3, 'Mise en place d''un ERP', 'CRM_ERP', 'ERP pour la gestion des stocks et de la production.', 60000, '2026-07-10', 'TERMINE', 3),
    (4, 'Audit de cybersécurité', 'CYBERSECURITE', 'Audit de l''infrastructure réseau et recommandations.', 15000, '2026-09-01', 'EN_ATTENTE', 3),
    (5, 'Campagne marketing digital', 'MARKETING_DIGITAL', 'Stratégie et réseaux sociaux sur 3 mois.', 12000, '2026-09-05', 'EN_ATTENTE', 4),
    (6, 'Refonte identité visuelle', 'DESIGN_UI_UX', 'Nouveau logo, charte graphique et maquettes.', 18000, '2026-08-20', 'EN_COURS', 4);

INSERT INTO offer (id, description, prix_proposer, date_livraison, status, project_id, freelancer_id) VALUES
      (1, 'Refonte avec maquettes Figma et intégration React.', 24000, '2026-09-15', 'ACCEPTEE', 1, 5),
      (2, 'Campagne de lancement et SEO inclus.', 26000, '2026-09-10', 'REFUSEE', 1, 7),
      (3, 'Interface mobile soignée avec suivi temps réel.', 38000, '2026-10-01', 'ACCEPTEE', 2, 5),
      (4, 'Déploiement Odoo ERP avec formation des équipes.', 58000, '2026-08-30', 'ACCEPTEE', 3, 6),
      (5, 'Audit réseau + rapport de vulnérabilités.', 14500, '2026-09-25', 'EN_ATTENTE', 4, 6),
      (6, 'Stratégie social media + contenu.', 11500, '2026-09-30', 'EN_ATTENTE', 5, 7),
      (7, 'Nouvelle identité visuelle + maquettes Figma.', 17000, '2026-09-20', 'ACCEPTEE', 6, 5);

INSERT INTO review (id, note, commentaire, project_id, pme_id, freelancer_id) VALUES
      (1, 5, 'Excellent travail, livré dans les délais.', 1, 2, 5),
      (2, 4, 'Bonne mise en place, quelques ajustements après livraison.', 3, 3, 6);
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

# src\test\java\org\example\digipme\Service\ProjectServiceTest.java

```java
package org.example.digipme.Service;

import org.example.digipme.DTOs.ProjectRequest;
import org.example.digipme.DTOs.ProjectResponse;
import org.example.digipme.Enums.ActiviteType;
import org.example.digipme.Enums.ProjectStatus;
import org.example.digipme.Mappers.ProjectMapper;
import org.example.digipme.Model.Freelancer;
import org.example.digipme.Model.PME;
import org.example.digipme.Model.Project;
import org.example.digipme.Repository.ProjectRepository;
import org.example.digipme.Repository.UserAppRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.core.Authentication;

import java.time.LocalDate;
import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatThrownBy;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class ProjectServiceTest {

    @Mock
    private ProjectRepository projectRepository;

    @Mock
    private UserAppRepository userRepository;

    @Mock
    private ProjectMapper projectMapper;

    @Mock
    private Authentication authentication;

    @InjectMocks
    private ProjectService projectService;

    private PME pme;
    private Project project;
    private ProjectRequest request;

    @BeforeEach
    void setUp() {
        pme = new PME();
        pme.setId(1L);
        pme.setNom("Digital Maroc SARL");
        pme.setEmail("contact@digitalmaroc.ma");

        project = Project.builder()
                .id(10L)
                .titre("Refonte site web")
                .type(ActiviteType.DEVELOPPEMENT_WEB)
                .prix(15000.0)
                .dateCreation(LocalDate.now())
                .status(ProjectStatus.EN_ATTENTE)
                .pme(pme)
                .build();

        request = ProjectRequest.builder()
                .titre("Refonte site web")
                .type(ActiviteType.DEVELOPPEMENT_WEB)
                .prix(15000.0)
                .date(LocalDate.now())
                .build();
    }

    @Test
    void createProject_devraitReussir_quandUtilisateurEstPME() {
        when(authentication.getName()).thenReturn(pme.getEmail());
        when(userRepository.findUserAppByEmail(pme.getEmail())).thenReturn(pme);
        when(projectMapper.toEntity(request)).thenReturn(project);
        when(projectRepository.save(any(Project.class))).thenReturn(project);
        when(projectMapper.toResponse(project)).thenReturn(
                ProjectResponse.builder().id(10L).titre("Refonte site web").build()
        );

        ProjectResponse response = projectService.createProject(request, authentication);

        assertThat(response).isNotNull();
        assertThat(response.getTitre()).isEqualTo("Refonte site web");
        verify(projectRepository, times(1)).save(any(Project.class));
    }

    @Test
    void createProject_devraitEchouer_quandUtilisateurNestPasPME() {
        Freelancer freelancer = new Freelancer();
        freelancer.setEmail("sara@mail.com");

        when(authentication.getName()).thenReturn(freelancer.getEmail());
        when(userRepository.findUserAppByEmail(freelancer.getEmail())).thenReturn(freelancer);

        assertThatThrownBy(() -> projectService.createProject(request, authentication))
                .isInstanceOf(AccessDeniedException.class)
                .hasMessageContaining("Seule une PME peut créer un projet");

        verify(projectRepository, never()).save(any());
    }

    @Test
    void getProjectById_devraitRetournerLeProjet_quandIlExiste() {
        when(projectRepository.findById(10L)).thenReturn(Optional.of(project));
        when(projectMapper.toResponse(project)).thenReturn(
                ProjectResponse.builder().id(10L).titre("Refonte site web").build()
        );

        ProjectResponse response = projectService.getProjectById(10L);

        assertThat(response.getId()).isEqualTo(10L);
    }

    @Test
    void getProjectById_devraitLeverUneException_quandLeProjetNexistePas() {
        when(projectRepository.findById(999L)).thenReturn(Optional.empty());

        assertThatThrownBy(() -> projectService.getProjectById(999L))
                .isInstanceOf(RuntimeException.class)
                .hasMessageContaining("Projet introuvable");
    }

}
```

