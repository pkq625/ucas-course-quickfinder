// method1：
wanttingCourseList = ["coursename1", "coursename2"];mp = $.find('#courseinfo')[0];  for(var i=0; i < mp.children.length; i++){if(wanttingCourseList.includes(mp.children[i].children[4].children[0].text))mp.children[i].children[0].children[0].checked = true}
// method2:
wanttingCourseList = ["课程编码1", "课程编码2", "课程编码3"];mp = $.find('#courseinfo')[0];  for(var i=0; i < mp.children.length; i++){if(wanttingCourseList.includes(mp.children[i].children[3].children[0].text))mp.children[i].children[0].children[0].checked = true}

// 
wanttingList = ["要选的开设学院1", "要选的开设学院2"];var mp = $.find(".fs-option"); for(var i=0; i < mp.length; i++){if(wanttingList.includes(mp[i].children[1].innerText)) mp[i].className = "fs-option selected";}
