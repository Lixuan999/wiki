var mgUiData0={"fullUrl":"http://192.168.5.172:8082/v2/api-docs?group=%E5%BC%80%E6%94%BE%E6%8E%A5%E5%8F%A3","domainUrl":"http://192.168.5.172:8082/","swagger":"2.0","info":{"description":"swagger-mg-ui-demo接口文档","version":"1.0","title":"开放接口","termsOfService":"http://www.kongjianzhou.com/","contact":{"name":"暮光：城中城","url":"http://www.kongjianzhou.com/","email":"806783409@qq.com"}},"host":"192.168.5.172:8082","basePath":"/","tags":[{"name":"客户信息控制器","description":"Open Api Case Controller"}],"paths":{"/openApi/case/create":{"post":{"tags":["客户信息控制器"],"summary":"通过ID和类型增加数据信息","operationId":"createUsingPOST","consumes":["application/json"],"produces":["*/*"],"parameters":[{"name":"caseType","in":"query","description":"数据类型","required":true,"type":"integer","format":"int32"},{"name":"caseId","in":"query","description":"数据ID","required":true,"type":"integer","format":"int32"},{"name":"reason","in":"query","description":"理由","required":true,"type":"string"}],"responses":{"200":{"description":"OK","schema":{"$ref":"#/definitions/ResponseJson"}},"201":{"description":"Created"},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}},"path":"1/openApi/case/create.post","url":"/openApi/case/create","method":"post","domain":"http://192.168.5.172:8082","treeId":"1_1_1_1"}},"/openApi/case/delete":{"delete":{"tags":["客户信息控制器"],"summary":"通过ID和类型删除数据信息","operationId":"deleteUsingDELETE","consumes":["application/json"],"produces":["*/*"],"parameters":[{"name":"caseType","in":"query","description":"数据类型","required":true,"type":"integer","format":"int32"},{"name":"caseId","in":"query","description":"数据ID","required":true,"type":"integer","format":"int32"},{"name":"reason","in":"query","description":"理由","required":true,"type":"string"}],"responses":{"200":{"description":"OK","schema":{"$ref":"#/definitions/ResponseJson"}},"204":{"description":"No Content"},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"}},"path":"1/openApi/case/delete.delete","url":"/openApi/case/delete","method":"delete","domain":"http://192.168.5.172:8082","treeId":"1_1_1_2"}},"/openApi/case/info":{"get":{"tags":["客户信息控制器"],"summary":"通过ID和类型获取数据信息","operationId":"infoUsingGET","consumes":["application/json"],"produces":["*/*"],"parameters":[{"name":"caseType","in":"query","description":"数据类型","required":true,"type":"integer","format":"int32"},{"name":"caseId","in":"query","description":"数据ID","required":true,"type":"integer","format":"int32"},{"name":"reason","in":"query","description":"理由","required":true,"type":"string"}],"responses":{"200":{"description":"OK","schema":{"$ref":"#/definitions/ResponseJson"}},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}},"path":"1/openApi/case/info.get","url":"/openApi/case/info","method":"get","domain":"http://192.168.5.172:8082","treeId":"1_1_1_3"}},"/openApi/case/update":{"put":{"tags":["客户信息控制器"],"summary":"通过ID和类型修改数据信息","operationId":"updateUsingPUT","consumes":["application/json"],"produces":["*/*"],"parameters":[{"name":"caseType","in":"query","description":"数据类型","required":true,"type":"integer","format":"int32"},{"name":"caseId","in":"query","description":"数据ID","required":true,"type":"integer","format":"int32"},{"name":"reason","in":"query","description":"理由","required":true,"type":"string"}],"responses":{"200":{"description":"OK","schema":{"$ref":"#/definitions/ResponseJson"}},"201":{"description":"Created"},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}},"path":"1/openApi/case/update.put","url":"/openApi/case/update","method":"put","domain":"http://192.168.5.172:8082","treeId":"1_1_1_4"}}},"definitions":{"ResponseJson":{"type":"object"}}};

var mgUiData1={"fullUrl":"http://192.168.5.172:8082/v2/api-docs?group=%E6%9C%8D%E5%8A%A1Api","domainUrl":"http://192.168.5.172:8082/","swagger":"2.0","info":{"description":"swagger-mg-ui-demo接口文档","version":"1.0","title":"服务Api","termsOfService":"http://www.kongjianzhou.com/","contact":{"name":"暮光：城中城","url":"http://www.kongjianzhou.com/","email":"806783409@qq.com"}},"host":"192.168.5.172:8082","basePath":"/","tags":[{"name":"参数结果集展示控制器","description":"Model Controller"},{"name":"表单参数例子控制器","description":"Form Param Controller"},{"name":"文件上传例子控制器","description":"File Controller"},{"name":"多层循环例子控制器","description":"Recursive Model Controller"},{"name":"Rest例子控制器","description":"Rest Request Controller"},{"name":"枚举例子控制器","description":"Enum Controller"},{"name":"Body参数例子控制器","description":"Body Controller"},{"name":"变态测试例子控制器","description":"Limit Controller"}],"paths":{"/body/enum/info":{"post":{"tags":["枚举例子控制器"],"summary":"测试枚举类型展示","operationId":"infoUsingPOST_1","consumes":["application/json"],"produces":["*/*"],"parameters":[{"in":"body","name":"param","description":"param","required":true,"schema":{"$ref":"#/definitions/EnumParam"}}],"responses":{"200":{"description":"OK","schema":{"$ref":"#/definitions/EnumParam"}},"201":{"description":"Created"},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}},"path":"2/body/enum/info.post","url":"/body/enum/info","method":"post","domain":"http://192.168.5.172:8082","treeId":"2_1_1_1"}},"/body/user/delete":{"delete":{"tags":["Body参数例子控制器"],"summary":"删除用户信息","operationId":"deleteUsingDELETE_1","consumes":["application/json"],"produces":["*/*"],"parameters":[{"in":"body","name":"param","description":"param","required":true,"schema":{"$ref":"#/definitions/UserIdParam"}}],"responses":{"200":{"description":"OK","schema":{"$ref":"#/definitions/UserInfoVo"}},"204":{"description":"No Content"},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"}},"path":"2/body/user/delete.delete","url":"/body/user/delete","method":"delete","domain":"http://192.168.5.172:8082","treeId":"2_1_2_1"}},"/body/user/fillType":{"post":{"tags":["Body参数例子控制器"],"summary":"依据数据类型自动填充","operationId":"fillTypeUsingPOST","consumes":["application/json"],"produces":["*/*"],"parameters":[{"in":"body","name":"param","description":"param","required":true,"schema":{"$ref":"#/definitions/FillTypeParam"}}],"responses":{"200":{"description":"OK","schema":{"$ref":"#/definitions/FillTypeParam"}},"201":{"description":"Created"},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}},"path":"2/body/user/fillType.post","url":"/body/user/fillType","method":"post","domain":"http://192.168.5.172:8082","treeId":"2_1_2_2"}},"/body/user/info":{"post":{"tags":["Body参数例子控制器"],"summary":"通过ID和类型获取用户信息","operationId":"infoUsingPOST","consumes":["application/json"],"produces":["*/*"],"parameters":[{"in":"body","name":"param","description":"param","required":true,"schema":{"$ref":"#/definitions/UserIdParam"}}],"responses":{"200":{"description":"OK","schema":{"$ref":"#/definitions/UserInfoVo"}},"201":{"description":"Created"},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}},"path":"2/body/user/info.post","url":"/body/user/info","method":"post","domain":"http://192.168.5.172:8082","treeId":"2_1_2_3"}},"/body/user/type":{"post":{"tags":["Body参数例子控制器"],"summary":"举例所有数据类型","operationId":"typeUsingPOST","consumes":["application/json"],"produces":["*/*"],"parameters":[{"in":"body","name":"param","description":"param","required":true,"schema":{"$ref":"#/definitions/ParamTypeParam"}}],"responses":{"200":{"description":"OK","schema":{"$ref":"#/definitions/ParamTypeParam"}},"201":{"description":"Created"},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}},"path":"2/body/user/type.post","url":"/body/user/type","method":"post","domain":"http://192.168.5.172:8082","treeId":"2_1_2_4"}},"/form/param/info":{"get":{"tags":["表单参数例子控制器"],"summary":"getInfoList","operationId":"getInfoListUsingGET","consumes":["application/json"],"produces":["*/*"],"parameters":[{"name":"orderStatus","in":"query","description":"订单状态，0=已提交 1=已抢单","required":true,"type":"string","default":"1","format":"byte"},{"name":"pageNum","in":"query","description":"订单状态，0=已提交 1=已抢单","required":true,"type":"string","default":"2","format":"byte"}],"responses":{"200":{"description":"OK","schema":{"$ref":"#/definitions/ResponseJson"}},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}},"path":"2/form/param/info.get","url":"/form/param/info","method":"get","domain":"http://192.168.5.172:8082","treeId":"2_2_1_1"}},"/model/bt/btInterface":{"post":{"tags":["变态测试例子控制器"],"summary":"变态测试例子","operationId":"btInterfaceUsingPOST","consumes":["application/json"],"produces":["*/*"],"parameters":[{"name":"userType","in":"query","description":"用户类型","required":true,"type":"integer","format":"int32"},{"name":"userId","in":"query","description":"用户ID","required":true,"type":"integer","format":"int32"}],"responses":{"200":{"description":"OK","schema":{"$ref":"#/definitions/LimitVo"}},"201":{"description":"Created"},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}},"path":"2/model/bt/btInterface.post","url":"/model/bt/btInterface","method":"post","domain":"http://192.168.5.172:8082","treeId":"2_3_1_1"}},"/model/bt/btInterface2":{"post":{"tags":["变态测试例子控制器"],"summary":"变态测试例子，我的备注是很长很长很长很长很长很长很长很长很长很长很长的！","operationId":"btInterface2UsingPOST","consumes":["application/json"],"produces":["*/*"],"parameters":[{"name":"userType","in":"query","description":"用户类型","required":true,"type":"integer","format":"int32"},{"name":"userId","in":"query","description":"用户ID","required":true,"type":"integer","format":"int32"}],"responses":{"200":{"description":"OK","schema":{"$ref":"#/definitions/Limit2Vo"}},"201":{"description":"Created"},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}},"path":"2/model/bt/btInterface2.post","url":"/model/bt/btInterface2","method":"post","domain":"http://192.168.5.172:8082","treeId":"2_3_1_2"}},"/model/recursive/body":{"post":{"tags":["多层循环例子控制器"],"summary":"参数是body的例子","operationId":"bodyUsingPOST","consumes":["application/json"],"produces":["*/*"],"parameters":[{"in":"body","name":"param","description":"param","required":true,"schema":{"$ref":"#/definitions/RecursiveParam"}}],"responses":{"200":{"description":"OK","schema":{"$ref":"#/definitions/RecursiveVo"}},"201":{"description":"Created"},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}},"path":"2/model/recursive/body.post","url":"/model/recursive/body","method":"post","domain":"http://192.168.5.172:8082","treeId":"2_3_2_1"}},"/model/recursive/param":{"post":{"tags":["多层循环例子控制器"],"summary":"参数是表单的例子","operationId":"paramUsingPOST","consumes":["application/json"],"produces":["*/*"],"parameters":[{"name":"userType","in":"query","description":"用户类型","required":true,"type":"integer","format":"int32"},{"name":"userId","in":"query","description":"用户ID","required":true,"type":"integer","format":"int32"}],"responses":{"200":{"description":"OK","schema":{"$ref":"#/definitions/RecursiveVo"}},"201":{"description":"Created"},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}},"path":"2/model/recursive/param.post","url":"/model/recursive/param","method":"post","domain":"http://192.168.5.172:8082","treeId":"2_3_2_2"}},"/model/user/info":{"post":{"tags":["参数结果集展示控制器"],"summary":"通过ID和类型获取用户信息","operationId":"infoUsingPOST_2","consumes":["application/json"],"produces":["*/*"],"parameters":[{"name":"userType","in":"query","description":"用户类型","required":true,"type":"integer","format":"int32"},{"name":"userId","in":"query","description":"用户ID","required":true,"type":"integer","format":"int32"}],"responses":{"200":{"description":"OK","schema":{"$ref":"#/definitions/UserInfoVo"}},"201":{"description":"Created"},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}},"path":"2/model/user/info.post","url":"/model/user/info","method":"post","domain":"http://192.168.5.172:8082","treeId":"2_3_3_1"}},"/rest/user/{id}":{"get":{"tags":["Rest例子控制器"],"summary":"获取用户信息","operationId":"getUsingGET","consumes":["application/json"],"produces":["*/*"],"parameters":[{"name":"id","in":"path","description":"id","required":true,"type":"integer","format":"int32"}],"responses":{"200":{"description":"OK","schema":{"$ref":"#/definitions/UserInfoVo"}},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}},"path":"2/rest/user/{id}.get","url":"/rest/user/{id}","method":"get","domain":"http://192.168.5.172:8082","treeId":"2_4_1_1_1"},"post":{"tags":["Rest例子控制器"],"summary":"新增用户信息","operationId":"postUsingPOST","consumes":["application/json"],"produces":["*/*"],"parameters":[{"name":"id","in":"path","description":"id","required":true,"type":"integer","format":"int32"},{"in":"body","name":"param","description":"param","required":true,"schema":{"$ref":"#/definitions/UserIdParam"}}],"responses":{"200":{"description":"OK","schema":{"$ref":"#/definitions/UserInfoVo"}},"201":{"description":"Created"},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}},"path":"2/rest/user/{id}.post","url":"/rest/user/{id}","method":"post","domain":"http://192.168.5.172:8082","treeId":"2_4_1_1_2"},"put":{"tags":["Rest例子控制器"],"summary":"修改用户信息","operationId":"putUsingPUT","consumes":["application/json"],"produces":["*/*"],"parameters":[{"name":"id","in":"path","description":"id","required":true,"type":"integer","format":"int32"},{"in":"body","name":"param","description":"param","required":true,"schema":{"$ref":"#/definitions/UserIdParam"}}],"responses":{"200":{"description":"OK","schema":{"$ref":"#/definitions/UserInfoVo"}},"201":{"description":"Created"},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}},"path":"2/rest/user/{id}.put","url":"/rest/user/{id}","method":"put","domain":"http://192.168.5.172:8082","treeId":"2_4_1_1_3"},"delete":{"tags":["Rest例子控制器"],"summary":"删除用户信息","operationId":"deleteUsingDELETE_2","consumes":["application/json"],"produces":["*/*"],"parameters":[{"name":"id","in":"path","description":"id","required":true,"type":"integer","format":"int32"}],"responses":{"200":{"description":"OK","schema":{"$ref":"#/definitions/UserInfoVo"}},"204":{"description":"No Content"},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"}},"path":"2/rest/user/{id}.delete","url":"/rest/user/{id}","method":"delete","domain":"http://192.168.5.172:8082","treeId":"2_4_1_1_4"}},"/upload/file/multipart":{"post":{"tags":["文件上传例子控制器"],"summary":"多文件上传","operationId":"multipartUsingPOST","consumes":["application/json"],"produces":["*/*"],"parameters":[{"name":"file","in":"query","description":"file","required":true,"type":"array","items":{"type":"file"},"collectionFormat":"multi"},{"name":"title","in":"query","description":"title","required":true,"type":"string"}],"responses":{"200":{"description":"OK","schema":{"$ref":"#/definitions/ResponseJson"}},"201":{"description":"Created"},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}},"path":"2/upload/file/multipart.post","url":"/upload/file/multipart","method":"post","domain":"http://192.168.5.172:8082","treeId":"2_5_1_1"}},"/upload/file/single":{"post":{"tags":["文件上传例子控制器"],"summary":"单文件上传","operationId":"singleUsingPOST","consumes":["multipart/form-data"],"produces":["*/*"],"parameters":[{"name":"files","in":"formData","description":"files","required":true,"type":"file"},{"name":"title","in":"query","description":"title","required":true,"type":"string"}],"responses":{"200":{"description":"OK","schema":{"$ref":"#/definitions/ResponseJson"}},"201":{"description":"Created"},"401":{"description":"Unauthorized"},"403":{"description":"Forbidden"},"404":{"description":"Not Found"}},"path":"2/upload/file/single.post","url":"/upload/file/single","method":"post","domain":"http://192.168.5.172:8082","treeId":"2_5_1_2"}}},"definitions":{"EnumParam":{"type":"object","required":["country","userId","userType"],"properties":{"country":{"type":"string","description":"国家","enum":["CHINA","AMERICA","JAPAN"]},"userId":{"type":"integer","format":"int32","description":"用户ID"},"userType":{"type":"integer","format":"int32","description":"用户类型"}}},"FillTypeParam":{"type":"object","required":["ages","creationTime","height","sex","userId","userName","userRight","userStatus","userType","weight"],"properties":{"ages":{"type":"integer","format":"int64","description":"年龄"},"creationTime":{"type":"string","format":"date-time","description":"创建时间"},"height":{"type":"number","format":"double","description":"身高"},"sex":{"type":"boolean","example":false,"description":"性别"},"userId":{"type":"string","description":"用户ID"},"userName":{"type":"string","description":"用户名"},"userRight":{"type":"integer","format":"int32","description":"实名认证"},"userStatus":{"type":"string","format":"byte","description":"用户状态"},"userType":{"type":"integer","format":"int32","description":"用户类型"},"weight":{"type":"number","format":"float","description":"身高"}}},"Limit2Vo":{"type":"object","required":["limitVo","userId","userType"],"properties":{"limitList1":{"type":"array","description":"列表","items":{"$ref":"#/definitions/Limit2Vo"}},"limitList2":{"type":"array","description":"列表","items":{"type":"array","items":{"$ref":"#/definitions/Limit2Vo"}}},"limitList3":{"type":"object","description":"列表","additionalProperties":{"$ref":"#/definitions/Limit2Vo"}},"limitList4":{"type":"array","description":"列表","items":{"$ref":"#/definitions/Map«string,Limit2Vo»"}},"limitVo":{"description":"对象","$ref":"#/definitions/Limit2Vo"},"stringList":{"type":"array","description":"列表","items":{"type":"string"}},"userId":{"type":"integer","format":"int32","description":"用户ID"},"userType":{"type":"integer","format":"int32","description":"用户类型"}}},"LimitVo":{"type":"object","required":["limitVo","userId","userType"],"properties":{"limitList1":{"type":"array","description":"列表","items":{"$ref":"#/definitions/UserIdParam"}},"limitList2":{"type":"array","description":"列表","items":{"type":"array","items":{"$ref":"#/definitions/UserIdParam"}}},"limitList3":{"type":"object","description":"列表","additionalProperties":{"$ref":"#/definitions/UserIdParam"}},"limitList4":{"type":"array","description":"列表","items":{"$ref":"#/definitions/Map«string,UserIdParam»"}},"limitVo":{"description":"对象","$ref":"#/definitions/LimitVo"},"stringList":{"type":"array","description":"列表","items":{"type":"string"}},"userId":{"type":"integer","format":"int32","description":"用户ID"},"userType":{"type":"integer","format":"int32","description":"用户类型"}}},"Map«string,Limit2Vo»":{"type":"object","additionalProperties":{"$ref":"#/definitions/Limit2Vo"}},"Map«string,UserIdParam»":{"type":"object","additionalProperties":{"$ref":"#/definitions/UserIdParam"}},"ParamTypeParam":{"type":"object","required":["ages","creationTime","height","sex","userId","userRight","userStatus","userType","weight"],"properties":{"ages":{"type":"integer","format":"int64","description":"年龄"},"creationTime":{"type":"string","format":"date-time","description":"创建时间"},"height":{"type":"number","format":"double","description":"身高"},"sex":{"type":"boolean","example":false,"description":"性别"},"userId":{"type":"string","description":"用户ID"},"userRight":{"type":"integer","format":"int32","description":"实名认证"},"userStatus":{"type":"string","format":"byte","description":"用户状态"},"userType":{"type":"integer","format":"int32","description":"用户类型"},"weight":{"type":"number","format":"float","description":"身高"}}},"RecursiveParam":{"type":"object","required":["userId","userType"],"properties":{"userId":{"type":"integer","format":"int32","description":"用户ID"},"userType":{"type":"integer","format":"int32","description":"用户类型"}}},"RecursiveVo":{"type":"object","required":["recursiveParam","userId","userType"],"properties":{"recursiveParam":{"description":"递归对象","$ref":"#/definitions/RecursiveVo"},"userId":{"type":"integer","format":"int32","description":"用户ID"},"userType":{"type":"integer","format":"int32","description":"用户类型"}}},"ResponseJson":{"type":"object"},"SchoolInfo":{"type":"object","properties":{"addr":{"type":"string","description":"学校地址"},"name":{"type":"string","description":"学校名字"},"phone":{"type":"string","description":"学校电话"}}},"UserIdParam":{"type":"object","required":["userId","userType"],"properties":{"userId":{"type":"integer","format":"int32","description":"用户ID"},"userType":{"type":"integer","format":"int32","description":"用户类型"}}},"UserInfoVo":{"type":"object","properties":{"schoolInfo":{"description":"学校信息","$ref":"#/definitions/SchoolInfo"},"userAge":{"type":"integer","format":"int32","description":"年龄"},"userName":{"type":"string","description":"用户名字"},"userSex":{"type":"integer","format":"int32","description":"性别，0=女 1=男"}}}}};

var mgUiDataArr = [mgUiData0, mgUiData1];