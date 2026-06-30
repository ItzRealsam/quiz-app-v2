(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(s){if(s.ep)return;s.ep=!0;const i=r(s);fetch(s.href,i)}})();const yn=[{id:"html-basics",category:"technology",difficulty:"easy",question:"What does HTML stand for?",options:["Hyper Text Markup Language","Home Tool Markup Language","Hyperlinks and Text Markup Language","Hyper Tool Multi Language"],answer:0,explanation:"HTML stands for Hyper Text Markup Language.",tags:["html","web"],points:200},{id:"css-font-size",category:"technology",difficulty:"easy",question:"Which CSS property controls text size?",options:["font-style","text-size","font-size","text-style"],answer:2,explanation:"The font-size property controls the size of text in CSS.",tags:["css","web"],points:200},{id:"js-array-method-push",category:"technology",difficulty:"easy",question:"Which JavaScript array method adds an item to the end of an array?",options:["shift()","push()","pop()","unshift()"],answer:1,explanation:"push() adds one or more elements to the end of an array.",tags:["javascript","arrays"],points:200},{id:"cpu-meaning",category:"technology",difficulty:"easy",question:"What does CPU stand for?",options:["Central Processing Unit","Computer Power Unit","Central Program Utility","Control Processing User"],answer:0,explanation:"CPU stands for Central Processing Unit.",tags:["hardware","computer-basics"],points:200},{id:"url-meaning",category:"technology",difficulty:"easy",question:"What does URL stand for?",options:["Universal Resource Locator","Uniform Resource Locator","Unified Reference Link","Uniform Retrieval Link"],answer:1,explanation:"URL stands for Uniform Resource Locator.",tags:["internet","web"],points:200},{id:"binary-base",category:"technology",difficulty:"easy",question:"Binary numbers use which two digits?",options:["0 and 1","1 and 2","0 and 9","2 and 3"],answer:0,explanation:"Binary is base-2 and uses only 0 and 1.",tags:["computing","binary"],points:200},{id:"http-purpose",category:"technology",difficulty:"easy",question:"HTTP is mainly used for what?",options:["Sending emails","Transferring web pages over the internet","Designing graphics","Creating spreadsheets"],answer:1,explanation:"HTTP is the protocol used to transfer web content between browsers and servers.",tags:["web","internet"],points:200},{id:"input-device-example",category:"technology",difficulty:"easy",question:"Which of the following is an input device?",options:["Monitor","Printer","Keyboard","Speaker"],answer:2,explanation:"A keyboard is an input device because it sends data to the computer.",tags:["hardware","computer-basics"],points:200},{id:"operating-system-example",category:"technology",difficulty:"easy",question:"Which of these is an operating system?",options:["Google Chrome","Microsoft Word","Windows 11","Adobe Photoshop"],answer:2,explanation:"Windows 11 is an operating system.",tags:["software","os"],points:200},{id:"html-link-tag",category:"technology",difficulty:"easy",question:"Which HTML tag is used to create a hyperlink?",options:["<img>","<a>","<p>","<linker>"],answer:1,explanation:"The <a> tag is used to create hyperlinks in HTML.",tags:["html","web"],points:200},{id:"css-box-model-margin",category:"technology",difficulty:"medium",question:"In the CSS box model, which property creates space outside an element’s border?",options:["padding","border","margin","outline"],answer:2,explanation:"Margin creates space outside the border of an element.",tags:["css","box-model"],points:300},{id:"js-const-rule",category:"technology",difficulty:"medium",question:"What is true about a JavaScript variable declared with const?",options:["It can never store objects","It cannot be reassigned after declaration","It is only available inside loops","It must always store numbers"],answer:1,explanation:"A const variable cannot be reassigned after declaration, though object contents may still be mutable.",tags:["javascript","variables"],points:300},{id:"sql-purpose",category:"technology",difficulty:"medium",question:"SQL is primarily used for what?",options:["Styling websites","Editing images","Managing and querying databases","Compressing files"],answer:2,explanation:"SQL is used to store, retrieve, and manage data in relational databases.",tags:["database","sql"],points:300},{id:"git-purpose",category:"technology",difficulty:"medium",question:"What is Git mainly used for?",options:["Graphic design","Version control","Video streaming","Database hosting"],answer:1,explanation:"Git is a version control system used to track code changes.",tags:["git","development"],points:300},{id:"api-meaning",category:"technology",difficulty:"medium",question:"What is the main purpose of an API?",options:["To cool down computer hardware","To allow different software systems communicate with each other","To increase internet speed","To replace a database"],answer:1,explanation:"APIs define how software systems communicate and exchange data.",tags:["api","software"],points:300},{id:"dns-role",category:"technology",difficulty:"medium",question:"What does DNS do on the internet?",options:["Encrypts your files","Turns domain names into IP addresses","Creates web page layouts","Stores browser passwords"],answer:1,explanation:"DNS translates human-readable domain names into IP addresses computers can use.",tags:["internet","dns"],points:300},{id:"responsive-design-meaning",category:"technology",difficulty:"medium",question:"What does responsive web design mean?",options:["A site responds only to mouse clicks","A site automatically adapts to different screen sizes","A site loads only on desktop devices","A site can only be edited live"],answer:1,explanation:"Responsive design adapts layouts and content to different screen sizes and devices.",tags:["web","css","responsive-design"],points:300},{id:"cloud-computing-meaning",category:"technology",difficulty:"medium",question:"Cloud computing refers to what?",options:["Saving files only on USB drives","Using internet-hosted servers and services for storage or computing","Programming only in the browser","Making computer screens transparent"],answer:1,explanation:"Cloud computing uses remote internet-hosted servers and services instead of relying only on a local machine.",tags:["cloud","infrastructure"],points:300},{id:"two-factor-auth",category:"technology",difficulty:"medium",question:"What is the main purpose of two-factor authentication (2FA)?",options:["To reduce monitor brightness","To improve security by requiring an extra verification step","To speed up file downloads","To create duplicate user accounts"],answer:1,explanation:"2FA improves account security by requiring a second verification method in addition to a password.",tags:["security","authentication"],points:300},{id:"frontend-vs-backend",category:"technology",difficulty:"hard",question:"Which statement best describes frontend development?",options:["It focuses on server infrastructure only","It focuses on the part of an application users interact with directly","It only involves writing SQL queries","It is the same as network administration"],answer:1,explanation:"Frontend development focuses on the user-facing part of an application such as layout, interactions, and interface behavior.",tags:["frontend","web"],points:400}],gn=[{id:"water-chemical-formula",category:"science",difficulty:"easy",question:"What is the chemical formula for water?",options:["CO2","H2O","O2","NaCl"],answer:1,explanation:"Water is made up of two hydrogen atoms and one oxygen atom, so its formula is H2O.",tags:["chemistry","basics"],points:200},{id:"planet-known-red",category:"science",difficulty:"easy",question:"Which planet is known as the Red Planet?",options:["Venus","Jupiter","Mars","Mercury"],answer:2,explanation:"Mars is called the Red Planet because of iron oxide on its surface, which gives it a reddish appearance.",tags:["astronomy","space"],points:200},{id:"human-breathing-gas",category:"science",difficulty:"easy",question:"Which gas do humans need to breathe in to survive?",options:["Carbon dioxide","Nitrogen","Hydrogen","Oxygen"],answer:3,explanation:"Humans require oxygen for respiration.",tags:["biology","human-body"],points:200},{id:"largest-organ-human-body",category:"science",difficulty:"easy",question:"What is the largest organ in the human body?",options:["Liver","Skin","Heart","Lungs"],answer:1,explanation:"The skin is the largest organ of the human body.",tags:["biology","human-body"],points:200},{id:"earth-star-name",category:"science",difficulty:"easy",question:"What is the name of the star at the center of our solar system?",options:["Polaris","Alpha Centauri","The Sun","Sirius"],answer:2,explanation:"The Sun is the star at the center of our solar system.",tags:["astronomy","space"],points:200},{id:"boiling-point-water-celsius",category:"science",difficulty:"easy",question:"At standard atmospheric pressure, at what temperature does water boil?",options:["0°C","50°C","100°C","212°C"],answer:2,explanation:"Water boils at 100°C under standard atmospheric pressure.",tags:["chemistry","temperature"],points:200},{id:"photosynthesis-main-gas",category:"science",difficulty:"easy",question:"Which gas do plants take in during photosynthesis?",options:["Oxygen","Carbon dioxide","Helium","Nitrogen"],answer:1,explanation:"Plants take in carbon dioxide during photosynthesis and release oxygen.",tags:["biology","plants"],points:200},{id:"force-keeps-us-grounded",category:"science",difficulty:"easy",question:"What force keeps us on the ground?",options:["Magnetism","Friction","Gravity","Tension"],answer:2,explanation:"Gravity pulls objects toward the Earth.",tags:["physics","forces"],points:200},{id:"center-of-atom",category:"science",difficulty:"easy",question:"What is the central part of an atom called?",options:["Electron shell","Nucleus","Proton ring","Core field"],answer:1,explanation:"The nucleus is the dense center of an atom containing protons and neutrons.",tags:["chemistry","atomic-structure"],points:200},{id:"human-blood-pump-organ",category:"science",difficulty:"easy",question:"Which organ pumps blood around the human body?",options:["Brain","Lungs","Heart","Kidney"],answer:2,explanation:"The heart pumps blood throughout the body.",tags:["biology","human-body"],points:200},{id:"solid-liquid-gas-term",category:"science",difficulty:"medium",question:"Solid, liquid, and gas are examples of what?",options:["Energy types","States of matter","Chemical families","Atomic particles"],answer:1,explanation:"Solid, liquid, and gas are the three common states of matter.",tags:["chemistry","matter"],points:300},{id:"nearest-planet-to-sun",category:"science",difficulty:"medium",question:"Which planet is closest to the Sun?",options:["Venus","Mercury","Earth","Mars"],answer:1,explanation:"Mercury is the closest planet to the Sun.",tags:["astronomy","space"],points:300},{id:"human-dna-full-name",category:"science",difficulty:"medium",question:"What does DNA stand for?",options:["Dynamic Nucleic Acid","Deoxyribonucleic Acid","Double Nitrogen Atom","Digital Nucleus Arrangement"],answer:1,explanation:"DNA stands for Deoxyribonucleic Acid.",tags:["biology","genetics"],points:300},{id:"earth-atmosphere-most-abundant-gas",category:"science",difficulty:"medium",question:"Which gas makes up the largest portion of Earth’s atmosphere?",options:["Oxygen","Carbon dioxide","Nitrogen","Argon"],answer:2,explanation:"Nitrogen makes up about 78% of Earth’s atmosphere.",tags:["earth-science","atmosphere"],points:300},{id:"speed-unit-electric-current",category:"science",difficulty:"medium",question:"What unit is used to measure electric current?",options:["Volt","Ampere","Watt","Ohm"],answer:1,explanation:"Electric current is measured in amperes (amps).",tags:["physics","electricity"],points:300},{id:"bones-count-adult-human",category:"science",difficulty:"medium",question:"How many bones are in the average adult human body?",options:["106","206","306","406"],answer:1,explanation:"An average adult human has 206 bones.",tags:["biology","human-body"],points:300},{id:"acid-base-ph-scale-neutral",category:"science",difficulty:"medium",question:"What pH value is considered neutral?",options:["0","5","7","14"],answer:2,explanation:"A pH of 7 is neutral.",tags:["chemistry","ph"],points:300},{id:"process-water-cycle-vapor",category:"science",difficulty:"medium",question:"What is the process called when liquid water changes into water vapor?",options:["Condensation","Evaporation","Freezing","Precipitation"],answer:1,explanation:"Evaporation is the process by which liquid water becomes water vapor.",tags:["earth-science","water-cycle"],points:300},{id:"energy-source-plants-food",category:"science",difficulty:"hard",question:"What is the primary source of energy for most ecosystems on Earth?",options:["Wind","The Moon","The Sun","Volcanoes"],answer:2,explanation:"The Sun is the primary energy source for most ecosystems because plants use sunlight in photosynthesis.",tags:["biology","ecology"],points:400},{id:"newtons-third-law",category:"science",difficulty:"hard",question:"Newton’s Third Law states that for every action there is what?",options:["A stronger reaction","An equal and opposite reaction","A delayed reaction","A gravitational response"],answer:1,explanation:"Newton’s Third Law states that for every action, there is an equal and opposite reaction.",tags:["physics","motion"],points:400}],mn=[{id:"nigeria-independence-year",category:"history",difficulty:"easy",question:"In what year did Nigeria gain independence?",options:["1957","1960","1963","1970"],answer:1,explanation:"Nigeria gained independence from Britain on October 1, 1960.",tags:["nigeria","africa","independence"],points:200},{id:"first-us-president",category:"history",difficulty:"easy",question:"Who was the first President of the United States?",options:["Abraham Lincoln","Thomas Jefferson","George Washington","John Adams"],answer:2,explanation:"George Washington was the first President of the United States.",tags:["usa","leaders"],points:200},{id:"egypt-pyramids-civilization",category:"history",difficulty:"easy",question:"The pyramids were built by which ancient civilization?",options:["Romans","Greeks","Egyptians","Persians"],answer:2,explanation:"The pyramids are among the most famous achievements of ancient Egypt.",tags:["ancient-history","egypt"],points:200},{id:"world-war-two-end-year",category:"history",difficulty:"easy",question:"In what year did World War II end?",options:["1943","1945","1947","1950"],answer:1,explanation:"World War II ended in 1945.",tags:["world-war-ii","global-history"],points:200},{id:"rome-famous-arena",category:"history",difficulty:"easy",question:"What is the name of the famous ancient arena in Rome?",options:["Parthenon","Colosseum","Pantheon","Acropolis"],answer:1,explanation:"The Colosseum is the famous ancient Roman arena in Rome.",tags:["ancient-rome","architecture"],points:200},{id:"nelson-mandela-country",category:"history",difficulty:"easy",question:"Nelson Mandela became president of which country in 1994?",options:["Kenya","South Africa","Ghana","Zimbabwe"],answer:1,explanation:"Nelson Mandela became President of South Africa in 1994.",tags:["africa","leaders"],points:200},{id:"berlin-wall-country",category:"history",difficulty:"easy",question:"The Berlin Wall was located in which country?",options:["France","Germany","Poland","Russia"],answer:1,explanation:"The Berlin Wall divided Berlin in Germany during the Cold War.",tags:["cold-war","europe"],points:200},{id:"titanic-sank-year",category:"history",difficulty:"easy",question:"In what year did the Titanic sink?",options:["1905","1912","1918","1925"],answer:1,explanation:"The Titanic sank in 1912 after hitting an iceberg.",tags:["transport-history","20th-century"],points:200},{id:"slave-trade-abolition-britain-century",category:"history",difficulty:"easy",question:"The British Empire abolished slavery in which century?",options:["17th century","18th century","19th century","20th century"],answer:2,explanation:"Slavery was abolished across most of the British Empire in the 19th century.",tags:["british-history","abolition"],points:200},{id:"mansa-musa-empire",category:"history",difficulty:"easy",question:"Mansa Musa is associated with which African empire?",options:["Mali Empire","Songhai Empire","Zulu Kingdom","Benin Empire"],answer:0,explanation:"Mansa Musa was the famous ruler of the Mali Empire.",tags:["africa","medieval-history"],points:200},{id:"french-revolution-start-year",category:"history",difficulty:"medium",question:"In what year did the French Revolution begin?",options:["1776","1789","1804","1815"],answer:1,explanation:"The French Revolution began in 1789.",tags:["france","revolution"],points:300},{id:"nigerian-civil-war-name",category:"history",difficulty:"medium",question:"The Nigerian Civil War is also commonly known by what name?",options:["The Sokoto War","The Biafran War","The Kano Conflict","The Delta Rebellion"],answer:1,explanation:"The Nigerian Civil War (1967–1970) is also known as the Biafran War.",tags:["nigeria","civil-war"],points:300},{id:"cold-war-main-rivals",category:"history",difficulty:"medium",question:"Which two superpowers were the main rivals during the Cold War?",options:["United States and Soviet Union","Britain and France","China and Japan","Germany and Italy"],answer:0,explanation:"The Cold War was primarily between the United States and the Soviet Union.",tags:["cold-war","global-history"],points:300},{id:"industrial-revolution-origin-country",category:"history",difficulty:"medium",question:"The Industrial Revolution began in which country?",options:["Germany","France","Britain","United States"],answer:2,explanation:"The Industrial Revolution began in Britain in the late 18th century.",tags:["industrial-revolution","britain"],points:300},{id:"great-wall-country",category:"history",difficulty:"medium",question:"The Great Wall was built in which country?",options:["Japan","India","China","Mongolia"],answer:2,explanation:"The Great Wall is one of the most famous historical structures in China.",tags:["china","ancient-history"],points:300},{id:"roman-empire-language",category:"history",difficulty:"medium",question:"What was the primary language of the Roman Empire?",options:["Latin","Greek","Arabic","French"],answer:0,explanation:"Latin was the primary language of the Roman Empire, especially in the West.",tags:["ancient-rome","language"],points:300},{id:"apollo-11-first-moon-landing-year",category:"history",difficulty:"medium",question:"In what year did Apollo 11 land humans on the Moon?",options:["1965","1969","1972","1975"],answer:1,explanation:"Apollo 11 landed on the Moon in 1969.",tags:["space-history","20th-century"],points:300},{id:"abraham-lincoln-war",category:"history",difficulty:"medium",question:"Abraham Lincoln was President of the United States during which major conflict?",options:["World War I","American Civil War","Vietnam War","Cold War"],answer:1,explanation:"Abraham Lincoln led the United States during the American Civil War.",tags:["usa","civil-war"],points:300},{id:"scramble-for-africa-century",category:"history",difficulty:"hard",question:"The “Scramble for Africa” largely took place during which century?",options:["17th century","18th century","19th century","20th century"],answer:2,explanation:"The Scramble for Africa took place mainly in the late 19th century as European powers partitioned the continent.",tags:["africa","colonialism"],points:400},{id:"league-of-nations-purpose",category:"history",difficulty:"hard",question:"What was the main purpose of the League of Nations?",options:["To expand colonial rule","To promote peace and prevent future wars","To manage global trade tariffs","To replace all national governments"],answer:1,explanation:"The League of Nations was created after World War I to help maintain peace and prevent future wars.",tags:["world-history","international-relations"],points:400}],vn=[{id:"sports-football-1",category:"sports",difficulty:"easy",question:"How many players does a standard football (soccer) team have on the field at one time?",options:["9","10","11","12"],answer:2,explanation:"A standard football team has 11 players on the field at one time."},{id:"sports-basketball-1",category:"sports",difficulty:"easy",question:"How many points is a free throw worth in basketball?",options:["1","2","3","4"],answer:0,explanation:"A free throw is worth 1 point in basketball."},{id:"sports-tennis-1",category:"sports",difficulty:"easy",question:"What is the term for a score of zero in tennis?",options:["Blank","Nil","Love","Duck"],answer:2,explanation:"In tennis, a score of zero is called “love.”"},{id:"sports-olympics-1",category:"sports",difficulty:"easy",question:"Which event is known as the “fastest race on earth”?",options:["200m sprint","100m sprint","400m sprint","4x100m relay"],answer:1,explanation:"The 100m sprint is widely known as the fastest race on earth."},{id:"sports-cricket-1",category:"sports",difficulty:"easy",question:"In cricket, how many runs is a boundary worth when the ball crosses the rope without bouncing?",options:["3","4","5","6"],answer:3,explanation:"If the ball crosses the boundary without bouncing, it is worth 6 runs."},{id:"sports-basketball-2",category:"sports",difficulty:"easy",question:"Which sport uses terms like dribble, dunk, and rebound?",options:["Volleyball","Basketball","Handball","Rugby"],answer:1,explanation:"Dribble, dunk, and rebound are common basketball terms."},{id:"sports-football-2",category:"sports",difficulty:"easy",question:"What part of the body can a goalkeeper use to handle the ball inside the penalty area?",options:["Only feet","Only head","Hands and arms","Shoulders only"],answer:2,explanation:"A goalkeeper can use hands and arms inside their own penalty area."},{id:"sports-boxing-1",category:"sports",difficulty:"easy",question:"What does the abbreviation “KO” stand for in boxing?",options:["Kick Out","Knock Out","Keep On","Knock Over"],answer:1,explanation:"KO stands for Knock Out."},{id:"sports-athletics-1",category:"sports",difficulty:"medium",question:"How many laps of a standard 400m track make up a 1500m race?",options:["3 laps + 300m","3 laps + 200m","4 laps - 100m","4 full laps"],answer:0,explanation:"1500m on a 400m track equals 3 full laps plus 300m."},{id:"sports-swimming-1",category:"sports",difficulty:"medium",question:"Which swimming stroke is often considered the fastest?",options:["Breaststroke","Butterfly","Freestyle","Backstroke"],answer:2,explanation:"Freestyle is generally the fastest swimming stroke."},{id:"sports-football-3",category:"sports",difficulty:"medium",question:"How long is a standard football match, excluding extra time and stoppages?",options:["80 minutes","85 minutes","90 minutes","100 minutes"],answer:2,explanation:"A standard football match lasts 90 minutes, split into two 45-minute halves."},{id:"sports-cricket-2",category:"sports",difficulty:"medium",question:"In cricket, what is the name of scoring zero runs as a batter?",options:["Blank","Duck","Love","Zero out"],answer:1,explanation:"A batter dismissed for zero runs is said to have scored a duck."},{id:"sports-tennis-2",category:"sports",difficulty:"medium",question:"What must a player win by in a standard tennis tiebreak?",options:["1 point","2 points","3 points","4 points"],answer:1,explanation:"A tennis tiebreak must be won by at least 2 points."},{id:"sports-basketball-3",category:"sports",difficulty:"medium",question:"How many players from one team are on the court in basketball at a time?",options:["4","5","6","7"],answer:1,explanation:"Each basketball team has 5 players on the court at one time."},{id:"sports-rugby-1",category:"sports",difficulty:"medium",question:"How many points is a try worth in rugby union?",options:["3","4","5","6"],answer:2,explanation:"A try in rugby union is worth 5 points."},{id:"sports-volleyball-1",category:"sports",difficulty:"medium",question:"How many touches is a volleyball team allowed before sending the ball over the net?",options:["2","3","4","5"],answer:1,explanation:"A volleyball team is allowed up to 3 touches before returning the ball."},{id:"sports-golf-1",category:"sports",difficulty:"hard",question:"What is the term for one stroke under par on a hole in golf?",options:["Bogey","Birdie","Eagle","Albatross"],answer:1,explanation:"A birdie means scoring one stroke under par on a hole."},{id:"sports-olympics-2",category:"sports",difficulty:"hard",question:"In the decathlon, how many events are contested in total?",options:["8","9","10","12"],answer:2,explanation:"The decathlon consists of 10 track and field events."},{id:"sports-baseball-1",category:"sports",difficulty:"hard",question:"How many strikes usually result in a batter being out in baseball?",options:["2","3","4","5"],answer:1,explanation:"A batter is out after 3 strikes in baseball."},{id:"sports-formula1-1",category:"sports",difficulty:"hard",question:"What is the name of the area where Formula 1 cars stop for tyre changes and repairs during a race?",options:["Grid lane","Service box","Pit lane","Garage strip"],answer:2,explanation:"Formula 1 cars stop in the pit lane for tyre changes and repairs."}],Te=[...yn,...gn,...mn,...vn],D={DISPLAY_NAME:"quiz-display-name",USER_ID:"quiz-user-id",QUIZ_SETTINGS:"quiz-settings",QUIZ_SESSION:"quiz-session",PLAYER_STATS:"quiz-player-stats",ACHIEVEMENTS:"quiz-achievements",LEADERBOARD:"quiz-leaderboard",DAILY_CHALLENGE:"quiz-daily-challenge"},U={QUESTION_TIME_LIMIT:20,QUIZ_TIME_LIMIT:300,BASE_CORRECT_POINTS:200,TIME_BONUS_MULTIPLIER:2,STREAK_BONUS_MULTIPLIER:15,SESSION_TIMEOUT:3600*1e3},p={currentScreen:"welcome",user:{id:null,email:"",displayName:"",avatarUrl:"",provider:"",isAuthenticated:!1,isGuest:!0,createdAt:null,profile:{bio:"",country:"",avatarUrl:"",createdAt:null},stats:{quizzesPlayed:0,highestScore:0,averageScore:0,bestStreak:0,level:1,experience:0}},quiz:{category:"all",difficulty:"all",questions:Te,questionCount:10,currentQuestionIndex:0,score:0,answers:[],selectedAnswerIndex:null,isAnswerLocked:!1,currentExplanation:"",streak:0,bestStreak:0,startedAt:null,finishedAt:null,totalDurationSeconds:0,questionTimeLimit:U.QUESTION_TIME_LIMIT,remainingTime:U.QUESTION_TIME_LIMIT,timerIntervalId:null,quizTimeLimit:300,remainingQuizTime:300,quizTimerIntervalId:null,questionStartedAt:null},results:{completed:!1},pendingSession:null,ui:{leaderboardCollapsed:!1,leaderboardSearchTerm:"",leaderboardSearchVisible:!1,levelUpModalVisible:!1,unlockedLevel:null,achievementModalVisible:!1,unlockedAchievement:null},navigation:{history:[],isNavigatingBack:!1}};function bn(){return`

    <div class="quiz__shell">

      <main class="quiz__card">

        <div
          class="quiz__card-header"
          id="quiz-header">
        
        </div>

        <div 
          class="quiz__screen"
          id="quiz-screen">
        </div>

      </main>

    </div>

  `}function wn(){const t=document.querySelector("#app");t.innerHTML=bn()}function de(t,e=null){try{const r=localStorage.getItem(t);if(r===null)return e;try{return JSON.parse(r)}catch{return r}}catch(r){return console.error("Storage read failed:",r),e}}function je(t,e){try{localStorage.setItem(t,JSON.stringify(e))}catch(r){console.error("Storage write failed:",r)}}function _n(t){try{localStorage.removeItem(t)}catch(e){console.error("Storage removal failed:",e)}}function Ir(){let t=de(D.USER_ID);t||(t=crypto.randomUUID(),je(D.USER_ID,t));let e=de(D.DISPLAY_NAME,"");return{id:t,displayName:e,email:"",avatarUrl:"",provider:"guest",isAuthenticated:!1,isGuest:!0,createdAt:null}}function ft(t,e){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,n=Object.getOwnPropertySymbols(t);s<n.length;s++)e.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(t,n[s])&&(r[n[s]]=t[n[s]]);return r}function xn(t,e,r,n){function s(i){return i instanceof r?i:new r(function(a){a(i)})}return new(r||(r=Promise))(function(i,a){function o(u){try{c(n.next(u))}catch(h){a(h)}}function l(u){try{c(n.throw(u))}catch(h){a(h)}}function c(u){u.done?i(u.value):s(u.value).then(o,l)}c((n=n.apply(t,e||[])).next())})}const Sn=t=>t?(...e)=>t(...e):(...e)=>fetch(...e);class Bt extends Error{constructor(e,r="FunctionsError",n){super(e),this.name=r,this.context=n}toJSON(){return{name:this.name,message:this.message,context:this.context}}}class kn extends Bt{constructor(e){super("Failed to send a request to the Edge Function","FunctionsFetchError",e)}}class Yt extends Bt{constructor(e){super("Relay Error invoking the Edge Function","FunctionsRelayError",e)}}class Xt extends Bt{constructor(e){super("Edge Function returned a non-2xx status code","FunctionsHttpError",e)}}var Rt;(function(t){t.Any="any",t.ApNortheast1="ap-northeast-1",t.ApNortheast2="ap-northeast-2",t.ApSouth1="ap-south-1",t.ApSoutheast1="ap-southeast-1",t.ApSoutheast2="ap-southeast-2",t.CaCentral1="ca-central-1",t.EuCentral1="eu-central-1",t.EuWest1="eu-west-1",t.EuWest2="eu-west-2",t.EuWest3="eu-west-3",t.SaEast1="sa-east-1",t.UsEast1="us-east-1",t.UsWest1="us-west-1",t.UsWest2="us-west-2"})(Rt||(Rt={}));class Tn{constructor(e,{headers:r={},customFetch:n,region:s=Rt.Any}={}){this.url=e,this.headers=r,this.region=s,this.fetch=Sn(n)}setAuth(e){this.headers.Authorization=`Bearer ${e}`}invoke(e){return xn(this,arguments,void 0,function*(r,n={}){var s;let i,a;try{const{headers:o,method:l,body:c,signal:u,timeout:h}=n;let d={},{region:f}=n;f||(f=this.region);const y=new URL(`${this.url}/${r}`);f&&f!=="any"&&(d["x-region"]=f,y.searchParams.set("forceFunctionRegion",f));let g;c&&(o&&!Object.prototype.hasOwnProperty.call(o,"Content-Type")||!o)?typeof Blob<"u"&&c instanceof Blob||c instanceof ArrayBuffer?(d["Content-Type"]="application/octet-stream",g=c):typeof c=="string"?(d["Content-Type"]="text/plain",g=c):typeof FormData<"u"&&c instanceof FormData?g=c:(d["Content-Type"]="application/json",g=JSON.stringify(c)):c&&typeof c!="string"&&!(typeof Blob<"u"&&c instanceof Blob)&&!(c instanceof ArrayBuffer)&&!(typeof FormData<"u"&&c instanceof FormData)?g=JSON.stringify(c):g=c;let w=u;h&&(a=new AbortController,i=setTimeout(()=>a.abort(),h),u?(w=a.signal,u.addEventListener("abort",()=>a.abort())):w=a.signal);const m=yield this.fetch(y.toString(),{method:l||"POST",headers:Object.assign(Object.assign(Object.assign({},d),this.headers),o),body:g,signal:w}).catch(A=>{throw new kn(A)}),v=m.headers.get("x-relay-error");if(v&&v==="true")throw new Yt(m);if(!m.ok)throw new Xt(m);let b=((s=m.headers.get("Content-Type"))!==null&&s!==void 0?s:"text/plain").split(";")[0].trim(),x;return b==="application/json"?x=yield m.json():b==="application/octet-stream"||b==="application/pdf"?x=yield m.blob():b==="text/event-stream"?x=m:b==="multipart/form-data"?x=yield m.formData():x=yield m.text(),{data:x,error:null,response:m}}catch(o){return{data:null,error:o,response:o instanceof Xt||o instanceof Yt?o.context:void 0}}finally{i&&clearTimeout(i)}})}}const qr=3,Zt=t=>Math.min(1e3*2**t,3e4),jn=[520,503],$r=["GET","HEAD","OPTIONS"];var er=class extends Error{constructor(t){super(t.message),this.name="PostgrestError",this.details=t.details,this.hint=t.hint,this.code=t.code}toJSON(){return{name:this.name,message:this.message,details:this.details,hint:this.hint,code:this.code}}};function tr(t,e){return new Promise(r=>{if(e?.aborted){r();return}const n=setTimeout(()=>{e?.removeEventListener("abort",s),r()},t);function s(){clearTimeout(n),r()}e?.addEventListener("abort",s)})}function An(t,e,r,n){return!(!n||r>=qr||!$r.includes(t)||!jn.includes(e))}var En=class{constructor(t){var e,r,n,s,i;this.shouldThrowOnError=!1,this.retryEnabled=!0,this.method=t.method,this.url=t.url,this.headers=new Headers(t.headers),this.schema=t.schema,this.body=t.body,this.shouldThrowOnError=(e=t.shouldThrowOnError)!==null&&e!==void 0?e:!1,this.signal=t.signal,this.isMaybeSingle=(r=t.isMaybeSingle)!==null&&r!==void 0?r:!1,this.shouldStripNulls=(n=t.shouldStripNulls)!==null&&n!==void 0?n:!1,this.urlLengthLimit=(s=t.urlLengthLimit)!==null&&s!==void 0?s:8e3,this.retryEnabled=(i=t.retry)!==null&&i!==void 0?i:!0,t.fetch?this.fetch=t.fetch:this.fetch=fetch}throwOnError(){return this.shouldThrowOnError=!0,this}stripNulls(){if(this.headers.get("Accept")==="text/csv")throw new Error("stripNulls() cannot be used with csv()");return this.shouldStripNulls=!0,this}setHeader(t,e){return this.headers=new Headers(this.headers),this.headers.set(t,e),this}retry(t){return this.retryEnabled=t,this}then(t,e){var r=this;if(this.schema===void 0||(["GET","HEAD"].includes(this.method)?this.headers.set("Accept-Profile",this.schema):this.headers.set("Content-Profile",this.schema)),this.method!=="GET"&&this.method!=="HEAD"&&this.headers.set("Content-Type","application/json"),this.shouldStripNulls){const a=this.headers.get("Accept");a==="application/vnd.pgrst.object+json"?this.headers.set("Accept","application/vnd.pgrst.object+json;nulls=stripped"):(!a||a==="application/json")&&this.headers.set("Accept","application/vnd.pgrst.array+json;nulls=stripped")}const n=this.fetch;let i=(async()=>{let a=0;for(;;){const c={};r.headers.forEach((h,d)=>{c[d]=h}),a>0&&(c["X-Retry-Count"]=String(a));let u;try{u=await n(r.url.toString(),{method:r.method,headers:c,body:JSON.stringify(r.body,(h,d)=>typeof d=="bigint"?d.toString():d),signal:r.signal})}catch(h){if(h?.name==="AbortError"||h?.code==="ABORT_ERR"||!$r.includes(r.method))throw h;if(r.retryEnabled&&a<qr){const d=Zt(a);a++,await tr(d,r.signal);continue}throw h}if(An(r.method,u.status,a,r.retryEnabled)){var o,l;const h=(o=(l=u.headers)===null||l===void 0?void 0:l.get("Retry-After"))!==null&&o!==void 0?o:null,d=h!==null?Math.max(0,parseInt(h,10)||0)*1e3:Zt(a);await u.text(),a++,await tr(d,r.signal);continue}return await r.processResponse(u)}})();return this.shouldThrowOnError||(i=i.catch(a=>{var o;let l="",c="",u="";const h=a?.cause;if(h){var d,f,y,g;const v=(d=h?.message)!==null&&d!==void 0?d:"",b=(f=h?.code)!==null&&f!==void 0?f:"";l=`${(y=a?.name)!==null&&y!==void 0?y:"FetchError"}: ${a?.message}`,l+=`

Caused by: ${(g=h?.name)!==null&&g!==void 0?g:"Error"}: ${v}`,b&&(l+=` (${b})`),h?.stack&&(l+=`
${h.stack}`)}else{var w;l=(w=a?.stack)!==null&&w!==void 0?w:""}const m=this.url.toString().length;return a?.name==="AbortError"||a?.code==="ABORT_ERR"?(u="",c="Request was aborted (timeout or manual cancellation)",m>this.urlLengthLimit&&(c+=`. Note: Your request URL is ${m} characters, which may exceed server limits. If selecting many fields, consider using views. If filtering with large arrays (e.g., .in('id', [many IDs])), consider using an RPC function to pass values server-side.`)):(h?.name==="HeadersOverflowError"||h?.code==="UND_ERR_HEADERS_OVERFLOW")&&(u="",c="HTTP headers exceeded server limits (typically 16KB)",m>this.urlLengthLimit&&(c+=`. Your request URL is ${m} characters. If selecting many fields, consider using views. If filtering with large arrays (e.g., .in('id', [200+ IDs])), consider using an RPC function instead.`)),{success:!1,error:{message:`${(o=a?.name)!==null&&o!==void 0?o:"FetchError"}: ${a?.message}`,details:l,hint:c,code:u},data:null,count:null,status:0,statusText:""}})),i.then(t,e)}async processResponse(t){var e=this;let r=null,n=null,s=null,i=t.status,a=t.statusText;if(t.ok){var o,l;if(e.method!=="HEAD"){var c;const d=await t.text();if(d!=="")if(e.headers.get("Accept")==="text/csv")n=d;else if(e.headers.get("Accept")&&(!((c=e.headers.get("Accept"))===null||c===void 0)&&c.includes("application/vnd.pgrst.plan+text")))n=d;else try{n=JSON.parse(d)}catch{if(r={message:d},n=null,e.shouldThrowOnError)throw new er({message:d,details:"",hint:"",code:""})}}const u=(o=e.headers.get("Prefer"))===null||o===void 0?void 0:o.match(/count=(exact|planned|estimated)/),h=(l=t.headers.get("content-range"))===null||l===void 0?void 0:l.split("/");u&&h&&h.length>1&&(s=parseInt(h[1])),e.isMaybeSingle&&Array.isArray(n)&&(n.length>1?(r={code:"PGRST116",details:`Results contain ${n.length} rows, application/vnd.pgrst.object+json requires 1 row`,hint:null,message:"JSON object requested, multiple (or no) rows returned"},n=null,s=null,i=406,a="Not Acceptable"):n.length===1?n=n[0]:n=null)}else{const u=await t.text();try{r=JSON.parse(u),Array.isArray(r)&&t.status===404&&(n=[],r=null,i=200,a="OK")}catch{t.status===404&&u===""?(i=204,a="No Content"):r={message:u}}if(r&&e.shouldThrowOnError)throw new er(r)}return{success:r===null,error:r,data:n,count:s,status:i,statusText:a}}returns(){return this}overrideTypes(){return this}},Rn=class extends En{throwOnError(){return super.throwOnError()}select(t){let e=!1;const r=(t??"*").split("").map(n=>/\s/.test(n)&&!e?"":(n==='"'&&(e=!e),n)).join("");return this.url.searchParams.set("select",r),this.headers.append("Prefer","return=representation"),this}order(t,{ascending:e=!0,nullsFirst:r,foreignTable:n,referencedTable:s=n}={}){const i=s?`${s}.order`:"order",a=this.url.searchParams.get(i);return this.url.searchParams.set(i,`${a?`${a},`:""}${t}.${e?"asc":"desc"}${r===void 0?"":r?".nullsfirst":".nullslast"}`),this}limit(t,{foreignTable:e,referencedTable:r=e}={}){const n=typeof r>"u"?"limit":`${r}.limit`;return this.url.searchParams.set(n,`${t}`),this}range(t,e,{foreignTable:r,referencedTable:n=r}={}){const s=typeof n>"u"?"offset":`${n}.offset`,i=typeof n>"u"?"limit":`${n}.limit`;return this.url.searchParams.set(s,`${t}`),this.url.searchParams.set(i,`${e-t+1}`),this}abortSignal(t){return this.signal=t,this}single(){return this.headers.set("Accept","application/vnd.pgrst.object+json"),this}maybeSingle(){return this.isMaybeSingle=!0,this}csv(){return this.headers.set("Accept","text/csv"),this}geojson(){return this.headers.set("Accept","application/geo+json"),this}explain({analyze:t=!1,verbose:e=!1,settings:r=!1,buffers:n=!1,wal:s=!1,format:i="text"}={}){var a;const o=[t?"analyze":null,e?"verbose":null,r?"settings":null,n?"buffers":null,s?"wal":null].filter(Boolean).join("|"),l=(a=this.headers.get("Accept"))!==null&&a!==void 0?a:"application/json";return this.headers.set("Accept",`application/vnd.pgrst.plan+${i}; for="${l}"; options=${o};`),i==="json"?this:this}rollback(){return this.headers.append("Prefer","tx=rollback"),this}returns(){return this}maxAffected(t){return this.headers.append("Prefer","handling=strict"),this.headers.append("Prefer",`max-affected=${t}`),this}};const rr=new RegExp("[,()]");var be=class extends Rn{throwOnError(){return super.throwOnError()}eq(t,e){return this.url.searchParams.append(t,`eq.${e}`),this}neq(t,e){return this.url.searchParams.append(t,`neq.${e}`),this}gt(t,e){return this.url.searchParams.append(t,`gt.${e}`),this}gte(t,e){return this.url.searchParams.append(t,`gte.${e}`),this}lt(t,e){return this.url.searchParams.append(t,`lt.${e}`),this}lte(t,e){return this.url.searchParams.append(t,`lte.${e}`),this}like(t,e){return this.url.searchParams.append(t,`like.${e}`),this}likeAllOf(t,e){return this.url.searchParams.append(t,`like(all).{${e.join(",")}}`),this}likeAnyOf(t,e){return this.url.searchParams.append(t,`like(any).{${e.join(",")}}`),this}ilike(t,e){return this.url.searchParams.append(t,`ilike.${e}`),this}ilikeAllOf(t,e){return this.url.searchParams.append(t,`ilike(all).{${e.join(",")}}`),this}ilikeAnyOf(t,e){return this.url.searchParams.append(t,`ilike(any).{${e.join(",")}}`),this}regexMatch(t,e){return this.url.searchParams.append(t,`match.${e}`),this}regexIMatch(t,e){return this.url.searchParams.append(t,`imatch.${e}`),this}is(t,e){return this.url.searchParams.append(t,`is.${e}`),this}isDistinct(t,e){return this.url.searchParams.append(t,`isdistinct.${e}`),this}in(t,e){const r=Array.from(new Set(e)).map(n=>typeof n=="string"&&rr.test(n)?`"${n}"`:`${n}`).join(",");return this.url.searchParams.append(t,`in.(${r})`),this}notIn(t,e){const r=Array.from(new Set(e)).map(n=>typeof n=="string"&&rr.test(n)?`"${n}"`:`${n}`).join(",");return this.url.searchParams.append(t,`not.in.(${r})`),this}contains(t,e){return typeof e=="string"?this.url.searchParams.append(t,`cs.${e}`):Array.isArray(e)?this.url.searchParams.append(t,`cs.{${e.join(",")}}`):this.url.searchParams.append(t,`cs.${JSON.stringify(e)}`),this}containedBy(t,e){return typeof e=="string"?this.url.searchParams.append(t,`cd.${e}`):Array.isArray(e)?this.url.searchParams.append(t,`cd.{${e.join(",")}}`):this.url.searchParams.append(t,`cd.${JSON.stringify(e)}`),this}rangeGt(t,e){return this.url.searchParams.append(t,`sr.${e}`),this}rangeGte(t,e){return this.url.searchParams.append(t,`nxl.${e}`),this}rangeLt(t,e){return this.url.searchParams.append(t,`sl.${e}`),this}rangeLte(t,e){return this.url.searchParams.append(t,`nxr.${e}`),this}rangeAdjacent(t,e){return this.url.searchParams.append(t,`adj.${e}`),this}overlaps(t,e){return typeof e=="string"?this.url.searchParams.append(t,`ov.${e}`):this.url.searchParams.append(t,`ov.{${e.join(",")}}`),this}textSearch(t,e,{config:r,type:n}={}){let s="";n==="plain"?s="pl":n==="phrase"?s="ph":n==="websearch"&&(s="w");const i=r===void 0?"":`(${r})`;return this.url.searchParams.append(t,`${s}fts${i}.${e}`),this}match(t){return Object.entries(t).filter(([e,r])=>r!==void 0).forEach(([e,r])=>{this.url.searchParams.append(e,`eq.${r}`)}),this}not(t,e,r){return this.url.searchParams.append(t,`not.${e}.${r}`),this}or(t,{foreignTable:e,referencedTable:r=e}={}){const n=r?`${r}.or`:"or";return this.url.searchParams.append(n,`(${t})`),this}filter(t,e,r){return this.url.searchParams.append(t,`${e}.${r}`),this}},On=class{constructor(t,{headers:e={},schema:r,fetch:n,urlLengthLimit:s=8e3,retry:i}){this.url=t,this.headers=new Headers(e),this.schema=r,this.fetch=n,this.urlLengthLimit=s,this.retry=i}cloneRequestState(){return{url:new URL(this.url.toString()),headers:new Headers(this.headers)}}select(t,e){const{head:r=!1,count:n}=e??{},s=r?"HEAD":"GET";let i=!1;const a=(t??"*").split("").map(c=>/\s/.test(c)&&!i?"":(c==='"'&&(i=!i),c)).join(""),{url:o,headers:l}=this.cloneRequestState();return o.searchParams.set("select",a),n&&l.append("Prefer",`count=${n}`),new be({method:s,url:o,headers:l,schema:this.schema,fetch:this.fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}insert(t,{count:e,defaultToNull:r=!0}={}){var n;const s="POST",{url:i,headers:a}=this.cloneRequestState();if(e&&a.append("Prefer",`count=${e}`),r||a.append("Prefer","missing=default"),Array.isArray(t)){const o=t.reduce((l,c)=>l.concat(Object.keys(c)),[]);if(o.length>0){const l=[...new Set(o)].map(c=>`"${c}"`);i.searchParams.set("columns",l.join(","))}}return new be({method:s,url:i,headers:a,schema:this.schema,body:t,fetch:(n=this.fetch)!==null&&n!==void 0?n:fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}upsert(t,{onConflict:e,ignoreDuplicates:r=!1,count:n,defaultToNull:s=!0}={}){var i;const a="POST",{url:o,headers:l}=this.cloneRequestState();if(l.append("Prefer",`resolution=${r?"ignore":"merge"}-duplicates`),e!==void 0&&o.searchParams.set("on_conflict",e),n&&l.append("Prefer",`count=${n}`),s||l.append("Prefer","missing=default"),Array.isArray(t)){const c=t.reduce((u,h)=>u.concat(Object.keys(h)),[]);if(c.length>0){const u=[...new Set(c)].map(h=>`"${h}"`);o.searchParams.set("columns",u.join(","))}}return new be({method:a,url:o,headers:l,schema:this.schema,body:t,fetch:(i=this.fetch)!==null&&i!==void 0?i:fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}update(t,{count:e}={}){var r;const n="PATCH",{url:s,headers:i}=this.cloneRequestState();return e&&i.append("Prefer",`count=${e}`),new be({method:n,url:s,headers:i,schema:this.schema,body:t,fetch:(r=this.fetch)!==null&&r!==void 0?r:fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}delete({count:t}={}){var e;const r="DELETE",{url:n,headers:s}=this.cloneRequestState();return t&&s.append("Prefer",`count=${t}`),new be({method:r,url:n,headers:s,schema:this.schema,fetch:(e=this.fetch)!==null&&e!==void 0?e:fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}};function Le(t){"@babel/helpers - typeof";return Le=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Le(t)}function Pn(t,e){if(Le(t)!="object"||!t)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var n=r.call(t,e);if(Le(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function zn(t){var e=Pn(t,"string");return Le(e)=="symbol"?e:e+""}function Cn(t,e,r){return(e=zn(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function nr(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),r.push.apply(r,n)}return r}function Qe(t){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?nr(Object(r),!0).forEach(function(n){Cn(t,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):nr(Object(r)).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(r,n))})}return t}var In=class Lr{constructor(e,{headers:r={},schema:n,fetch:s,timeout:i,urlLengthLimit:a=8e3,retry:o}={}){this.url=e,this.headers=new Headers(r),this.schemaName=n,this.urlLengthLimit=a;const l=s??globalThis.fetch;i!==void 0&&i>0?this.fetch=(c,u)=>{const h=new AbortController,d=setTimeout(()=>h.abort(),i),f=u?.signal;if(f){if(f.aborted)return clearTimeout(d),l(c,u);const y=()=>{clearTimeout(d),h.abort()};return f.addEventListener("abort",y,{once:!0}),l(c,Qe(Qe({},u),{},{signal:h.signal})).finally(()=>{clearTimeout(d),f.removeEventListener("abort",y)})}return l(c,Qe(Qe({},u),{},{signal:h.signal})).finally(()=>clearTimeout(d))}:this.fetch=l,this.retry=o}from(e){if(!e||typeof e!="string"||e.trim()==="")throw new Error("Invalid relation name: relation must be a non-empty string.");return new On(new URL(`${this.url}/${e}`),{headers:new Headers(this.headers),schema:this.schemaName,fetch:this.fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}schema(e){return new Lr(this.url,{headers:this.headers,schema:e,fetch:this.fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}rpc(e,r={},{head:n=!1,get:s=!1,count:i}={}){var a;let o;const l=new URL(`${this.url}/rpc/${e}`);let c;const u=f=>f!==null&&typeof f=="object"&&(!Array.isArray(f)||f.some(u)),h=n&&Object.values(r).some(u);h?(o="POST",c=r):n||s?(o=n?"HEAD":"GET",Object.entries(r).filter(([f,y])=>y!==void 0).map(([f,y])=>[f,Array.isArray(y)?`{${y.join(",")}}`:`${y}`]).forEach(([f,y])=>{l.searchParams.append(f,y)})):(o="POST",c=r);const d=new Headers(this.headers);return h?d.set("Prefer",i?`count=${i},return=minimal`:"return=minimal"):i&&d.set("Prefer",`count=${i}`),new be({method:o,url:l,headers:d,schema:this.schemaName,body:c,fetch:(a=this.fetch)!==null&&a!==void 0?a:fetch,urlLengthLimit:this.urlLengthLimit,retry:this.retry})}};class qn{constructor(){}static detectEnvironment(){var e;if(typeof WebSocket<"u")return{type:"native",wsConstructor:WebSocket};const r=globalThis;if(typeof globalThis<"u"&&typeof r.WebSocket<"u")return{type:"native",wsConstructor:r.WebSocket};const n=typeof global<"u"?global:void 0;if(n&&typeof n.WebSocket<"u")return{type:"native",wsConstructor:n.WebSocket};if(typeof globalThis<"u"&&typeof r.WebSocketPair<"u"&&typeof globalThis.WebSocket>"u")return{type:"cloudflare",error:"Cloudflare Workers detected. WebSocket clients are not supported in Cloudflare Workers.",workaround:"Use Cloudflare Workers WebSocket API for server-side WebSocket handling, or deploy to a different runtime."};if(typeof globalThis<"u"&&r.EdgeRuntime||typeof navigator<"u"&&(!((e=navigator.userAgent)===null||e===void 0)&&e.includes("Vercel-Edge")))return{type:"unsupported",error:"Edge runtime detected (Vercel Edge/Netlify Edge). WebSockets are not supported in edge functions.",workaround:"Use serverless functions or a different deployment target for WebSocket functionality."};const s=globalThis.process;if(s){const i=s.versions;if(i&&i.node){const a=i.node,o=parseInt(a.replace(/^v/,"").split(".")[0]);return o>=22?typeof globalThis.WebSocket<"u"?{type:"native",wsConstructor:globalThis.WebSocket}:{type:"unsupported",error:`Node.js ${o} detected but native WebSocket not found.`,workaround:"Provide a WebSocket implementation via the transport option."}:{type:"unsupported",error:`Node.js ${o} detected without native WebSocket support.`,workaround:`For Node.js < 22, install "ws" package and provide it via the transport option:
import ws from "ws"
new RealtimeClient(url, { transport: ws })`}}}return{type:"unsupported",error:"Unknown JavaScript runtime without WebSocket support.",workaround:"Ensure you're running in a supported environment (browser, Node.js, Deno) or provide a custom WebSocket implementation."}}static getWebSocketConstructor(){const e=this.detectEnvironment();if(e.wsConstructor)return e.wsConstructor;let r=e.error||"WebSocket not supported in this environment.";throw e.workaround&&(r+=`

Suggested solution: ${e.workaround}`),new Error(r)}static isWebSocketSupported(){try{const e=this.detectEnvironment();return e.type==="native"||e.type==="ws"}catch{return!1}}}const $n="2.108.2",Ln=`realtime-js/${$n}`,Mn="1.0.0",Mr="2.0.0",Nn=Mr,Un=1e4,Dn=100,se={closed:"closed",errored:"errored",joined:"joined",joining:"joining",leaving:"leaving"},Nr={close:"phx_close",error:"phx_error",join:"phx_join",leave:"phx_leave",access_token:"access_token"},Ot={connecting:"connecting",closing:"closing",closed:"closed"};class Bn{constructor(e){this.HEADER_LENGTH=1,this.USER_BROADCAST_PUSH_META_LENGTH=6,this.KINDS={userBroadcastPush:3,userBroadcast:4},this.BINARY_ENCODING=0,this.JSON_ENCODING=1,this.BROADCAST_EVENT="broadcast",this.allowedMetadataKeys=[],this.allowedMetadataKeys=e??[]}encode(e,r){if(e.event===this.BROADCAST_EVENT&&!(e.payload instanceof ArrayBuffer)&&typeof e.payload.event=="string")return r(this._binaryEncodeUserBroadcastPush(e));let n=[e.join_ref,e.ref,e.topic,e.event,e.payload];return r(JSON.stringify(n))}_binaryEncodeUserBroadcastPush(e){var r;return this._isArrayBuffer((r=e.payload)===null||r===void 0?void 0:r.payload)?this._encodeBinaryUserBroadcastPush(e):this._encodeJsonUserBroadcastPush(e)}_encodeBinaryUserBroadcastPush(e){var r,n;const s=(n=(r=e.payload)===null||r===void 0?void 0:r.payload)!==null&&n!==void 0?n:new ArrayBuffer(0);return this._encodeUserBroadcastPush(e,this.BINARY_ENCODING,s)}_encodeJsonUserBroadcastPush(e){var r,n;const s=(n=(r=e.payload)===null||r===void 0?void 0:r.payload)!==null&&n!==void 0?n:{},a=new TextEncoder().encode(JSON.stringify(s)).buffer;return this._encodeUserBroadcastPush(e,this.JSON_ENCODING,a)}_encodeUserBroadcastPush(e,r,n){var s,i;const a=e.topic,o=(s=e.ref)!==null&&s!==void 0?s:"",l=(i=e.join_ref)!==null&&i!==void 0?i:"",c=e.payload.event,u=this.allowedMetadataKeys?this._pick(e.payload,this.allowedMetadataKeys):{},h=Object.keys(u).length===0?"":JSON.stringify(u);if(l.length>255)throw new Error(`joinRef length ${l.length} exceeds maximum of 255`);if(o.length>255)throw new Error(`ref length ${o.length} exceeds maximum of 255`);if(a.length>255)throw new Error(`topic length ${a.length} exceeds maximum of 255`);if(c.length>255)throw new Error(`userEvent length ${c.length} exceeds maximum of 255`);if(h.length>255)throw new Error(`metadata length ${h.length} exceeds maximum of 255`);const d=this.USER_BROADCAST_PUSH_META_LENGTH+l.length+o.length+a.length+c.length+h.length,f=new ArrayBuffer(this.HEADER_LENGTH+d);let y=new DataView(f),g=0;y.setUint8(g++,this.KINDS.userBroadcastPush),y.setUint8(g++,l.length),y.setUint8(g++,o.length),y.setUint8(g++,a.length),y.setUint8(g++,c.length),y.setUint8(g++,h.length),y.setUint8(g++,r),Array.from(l,m=>y.setUint8(g++,m.charCodeAt(0))),Array.from(o,m=>y.setUint8(g++,m.charCodeAt(0))),Array.from(a,m=>y.setUint8(g++,m.charCodeAt(0))),Array.from(c,m=>y.setUint8(g++,m.charCodeAt(0))),Array.from(h,m=>y.setUint8(g++,m.charCodeAt(0)));var w=new Uint8Array(f.byteLength+n.byteLength);return w.set(new Uint8Array(f),0),w.set(new Uint8Array(n),f.byteLength),w.buffer}decode(e,r){if(this._isArrayBuffer(e)){let n=this._binaryDecode(e);return r(n)}if(typeof e=="string"){const n=JSON.parse(e),[s,i,a,o,l]=n;return r({join_ref:s,ref:i,topic:a,event:o,payload:l})}return r({})}_binaryDecode(e){const r=new DataView(e),n=r.getUint8(0),s=new TextDecoder;if(n===this.KINDS.userBroadcast)return this._decodeUserBroadcast(e,r,s)}_decodeUserBroadcast(e,r,n){const s=r.getUint8(1),i=r.getUint8(2),a=r.getUint8(3),o=r.getUint8(4);let l=this.HEADER_LENGTH+4;const c=n.decode(e.slice(l,l+s));l=l+s;const u=n.decode(e.slice(l,l+i));l=l+i;const h=n.decode(e.slice(l,l+a));l=l+a;const d=e.slice(l,e.byteLength),f=o===this.JSON_ENCODING?JSON.parse(n.decode(d)):d,y={type:this.BROADCAST_EVENT,event:u,payload:f};return a>0&&(y.meta=JSON.parse(h)),{join_ref:null,ref:null,topic:c,event:this.BROADCAST_EVENT,payload:y}}_isArrayBuffer(e){var r;return e instanceof ArrayBuffer||((r=e?.constructor)===null||r===void 0?void 0:r.name)==="ArrayBuffer"}_pick(e,r){return!e||typeof e!="object"?{}:Object.fromEntries(Object.entries(e).filter(([n])=>r.includes(n)))}}var E;(function(t){t.abstime="abstime",t.bool="bool",t.date="date",t.daterange="daterange",t.float4="float4",t.float8="float8",t.int2="int2",t.int4="int4",t.int4range="int4range",t.int8="int8",t.int8range="int8range",t.json="json",t.jsonb="jsonb",t.money="money",t.numeric="numeric",t.oid="oid",t.reltime="reltime",t.text="text",t.time="time",t.timestamp="timestamp",t.timestamptz="timestamptz",t.timetz="timetz",t.tsrange="tsrange",t.tstzrange="tstzrange"})(E||(E={}));const sr=(t,e,r={})=>{var n;const s=(n=r.skipTypes)!==null&&n!==void 0?n:[];return e?Object.keys(e).reduce((i,a)=>(i[a]=Hn(a,t,e,s),i),{}):{}},Hn=(t,e,r,n)=>{const s=e.find(o=>o.name===t),i=s?.type,a=r[t];return i&&!n.includes(i)?Ur(i,a):Pt(a)},Ur=(t,e)=>{if(t.charAt(0)==="_"){const r=t.slice(1,t.length);return Kn(e,r)}switch(t){case E.bool:return Wn(e);case E.float4:case E.float8:case E.int2:case E.int4:case E.int8:case E.numeric:case E.oid:return Vn(e);case E.json:case E.jsonb:return Fn(e);case E.timestamp:return Gn(e);case E.abstime:case E.date:case E.daterange:case E.int4range:case E.int8range:case E.money:case E.reltime:case E.text:case E.time:case E.timestamptz:case E.timetz:case E.tsrange:case E.tstzrange:return Pt(e);default:return Pt(e)}},Pt=t=>t,Wn=t=>{switch(t){case"t":return!0;case"f":return!1;default:return t}},Vn=t=>{if(typeof t=="string"){const e=parseFloat(t);if(!Number.isNaN(e))return e}return t},Fn=t=>{if(typeof t=="string")try{return JSON.parse(t)}catch{return t}return t},Kn=(t,e)=>{if(typeof t!="string")return t;const r=t.length-1,n=t[r];if(t[0]==="{"&&n==="}"){let i;const a=t.slice(1,r);try{i=JSON.parse("["+a+"]")}catch{i=a?a.split(","):[]}return i.map(o=>Ur(e,o))}return t},Gn=t=>typeof t=="string"?t.replace(" ","T"):t,Dr=t=>{const e=new URL(t);return e.protocol=e.protocol.replace(/^ws/i,"http"),e.pathname=e.pathname.replace(/\/+$/,"").replace(/\/socket\/websocket$/i,"").replace(/\/socket$/i,"").replace(/\/websocket$/i,""),e.pathname===""||e.pathname==="/"?e.pathname="/api/broadcast":e.pathname=e.pathname+"/api/broadcast",e.href};var Ie=t=>typeof t=="function"?t:function(){return t},Jn=typeof self<"u"?self:null,we=typeof window<"u"?window:null,J=Jn||we||globalThis,Qn="2.0.0",Yn=1e4,Xn=1e3,Q={connecting:0,open:1,closing:2,closed:3},N={closed:"closed",errored:"errored",joined:"joined",joining:"joining",leaving:"leaving"},Z={close:"phx_close",error:"phx_error",join:"phx_join",reply:"phx_reply",leave:"phx_leave"},zt={longpoll:"longpoll",websocket:"websocket"},Zn={complete:4},Ct="base64url.bearer.phx.",Ye=class{constructor(t,e,r,n){this.channel=t,this.event=e,this.payload=r||function(){return{}},this.receivedResp=null,this.timeout=n,this.timeoutTimer=null,this.recHooks=[],this.sent=!1,this.ref=void 0}resend(t){this.timeout=t,this.reset(),this.send()}send(){this.hasReceived("timeout")||(this.startTimeout(),this.sent=!0,this.channel.socket.push({topic:this.channel.topic,event:this.event,payload:this.payload(),ref:this.ref,join_ref:this.channel.joinRef()}))}receive(t,e){return this.hasReceived(t)&&e(this.receivedResp.response),this.recHooks.push({status:t,callback:e}),this}reset(){this.cancelRefEvent(),this.ref=null,this.refEvent=null,this.receivedResp=null,this.sent=!1}destroy(){this.cancelRefEvent(),this.cancelTimeout()}matchReceive({status:t,response:e,_ref:r}){this.recHooks.filter(n=>n.status===t).forEach(n=>n.callback(e))}cancelRefEvent(){this.refEvent&&this.channel.off(this.refEvent)}cancelTimeout(){clearTimeout(this.timeoutTimer),this.timeoutTimer=null}startTimeout(){this.timeoutTimer&&this.cancelTimeout(),this.ref=this.channel.socket.makeRef(),this.refEvent=this.channel.replyEventName(this.ref),this.channel.on(this.refEvent,t=>{this.cancelRefEvent(),this.cancelTimeout(),this.receivedResp=t,this.matchReceive(t)}),this.timeoutTimer=setTimeout(()=>{this.trigger("timeout",{})},this.timeout)}hasReceived(t){return this.receivedResp&&this.receivedResp.status===t}trigger(t,e){this.channel.trigger(this.refEvent,{status:t,response:e})}},Br=class{constructor(t,e){this.callback=t,this.timerCalc=e,this.timer=void 0,this.tries=0}reset(){this.tries=0,clearTimeout(this.timer)}scheduleTimeout(){clearTimeout(this.timer),this.timer=setTimeout(()=>{this.tries=this.tries+1,this.callback()},this.timerCalc(this.tries+1))}},es=class{constructor(t,e,r){this.state=N.closed,this.topic=t,this.params=Ie(e||{}),this.socket=r,this.bindings=[],this.bindingRef=0,this.timeout=this.socket.timeout,this.joinedOnce=!1,this.joinPush=new Ye(this,Z.join,this.params,this.timeout),this.pushBuffer=[],this.stateChangeRefs=[],this.rejoinTimer=new Br(()=>{this.socket.isConnected()&&this.rejoin()},this.socket.rejoinAfterMs),this.stateChangeRefs.push(this.socket.onError(()=>this.rejoinTimer.reset())),this.stateChangeRefs.push(this.socket.onOpen(()=>{this.rejoinTimer.reset(),this.isErrored()&&this.rejoin()})),this.joinPush.receive("ok",()=>{this.state=N.joined,this.rejoinTimer.reset(),this.pushBuffer.forEach(n=>n.send()),this.pushBuffer=[]}),this.joinPush.receive("error",n=>{this.state=N.errored,this.socket.hasLogger()&&this.socket.log("channel",`error ${this.topic}`,n),this.socket.isConnected()&&this.rejoinTimer.scheduleTimeout()}),this.onClose(()=>{this.rejoinTimer.reset(),this.socket.hasLogger()&&this.socket.log("channel",`close ${this.topic}`),this.state=N.closed,this.socket.remove(this)}),this.onError(n=>{this.socket.hasLogger()&&this.socket.log("channel",`error ${this.topic}`,n),this.isJoining()&&this.joinPush.reset(),this.state=N.errored,this.socket.isConnected()&&this.rejoinTimer.scheduleTimeout()}),this.joinPush.receive("timeout",()=>{this.socket.hasLogger()&&this.socket.log("channel",`timeout ${this.topic}`,this.joinPush.timeout),new Ye(this,Z.leave,Ie({}),this.timeout).send(),this.state=N.errored,this.joinPush.reset(),this.socket.isConnected()&&this.rejoinTimer.scheduleTimeout()}),this.on(Z.reply,(n,s)=>{this.trigger(this.replyEventName(s),n)})}join(t=this.timeout){if(this.joinedOnce)throw new Error("tried to join multiple times. 'join' can only be called a single time per channel instance");return this.timeout=t,this.joinedOnce=!0,this.rejoin(),this.joinPush}teardown(){this.pushBuffer.forEach(t=>t.destroy()),this.pushBuffer=[],this.rejoinTimer.reset(),this.joinPush.destroy(),this.state=N.closed,this.bindings=[]}onClose(t){this.on(Z.close,t)}onError(t){return this.on(Z.error,e=>t(e))}on(t,e){let r=this.bindingRef++;return this.bindings.push({event:t,ref:r,callback:e}),r}off(t,e){this.bindings=this.bindings.filter(r=>!(r.event===t&&(typeof e>"u"||e===r.ref)))}canPush(){return this.socket.isConnected()&&this.isJoined()}push(t,e,r=this.timeout){if(e=e||{},!this.joinedOnce)throw new Error(`tried to push '${t}' to '${this.topic}' before joining. Use channel.join() before pushing events`);let n=new Ye(this,t,function(){return e},r);return this.canPush()?n.send():(n.startTimeout(),this.pushBuffer.push(n)),n}leave(t=this.timeout){this.rejoinTimer.reset(),this.joinPush.cancelTimeout(),this.state=N.leaving;let e=()=>{this.socket.hasLogger()&&this.socket.log("channel",`leave ${this.topic}`),this.trigger(Z.close,"leave")},r=new Ye(this,Z.leave,Ie({}),t);return r.receive("ok",()=>e()).receive("timeout",()=>e()),r.send(),this.canPush()||r.trigger("ok",{}),r}onMessage(t,e,r){return e}filterBindings(t,e,r){return!0}isMember(t,e,r,n){return this.topic!==t?!1:n&&n!==this.joinRef()?(this.socket.hasLogger()&&this.socket.log("channel","dropping outdated message",{topic:t,event:e,payload:r,joinRef:n}),!1):!0}joinRef(){return this.joinPush.ref}rejoin(t=this.timeout){this.isLeaving()||(this.socket.leaveOpenTopic(this.topic),this.state=N.joining,this.joinPush.resend(t))}trigger(t,e,r,n){let s=this.onMessage(t,e,r,n);if(e&&!s)throw new Error("channel onMessage callbacks must return the payload, modified or unmodified");let i=this.bindings.filter(a=>a.event===t&&this.filterBindings(a,e,r));for(let a=0;a<i.length;a++)i[a].callback(s,r,n||this.joinRef())}replyEventName(t){return`chan_reply_${t}`}isClosed(){return this.state===N.closed}isErrored(){return this.state===N.errored}isJoined(){return this.state===N.joined}isJoining(){return this.state===N.joining}isLeaving(){return this.state===N.leaving}},at=class{static request(t,e,r,n,s,i,a){if(J.XDomainRequest){let o=new J.XDomainRequest;return this.xdomainRequest(o,t,e,n,s,i,a)}else if(J.XMLHttpRequest){let o=new J.XMLHttpRequest;return this.xhrRequest(o,t,e,r,n,s,i,a)}else{if(J.fetch&&J.AbortController)return this.fetchRequest(t,e,r,n,s,i,a);throw new Error("No suitable XMLHttpRequest implementation found")}}static fetchRequest(t,e,r,n,s,i,a){let o={method:t,headers:r,body:n},l=null;return s&&(l=new AbortController,setTimeout(()=>l.abort(),s),o.signal=l.signal),J.fetch(e,o).then(c=>c.text()).then(c=>this.parseJSON(c)).then(c=>a&&a(c)).catch(c=>{c.name==="AbortError"&&i?i():a&&a(null)}),l}static xdomainRequest(t,e,r,n,s,i,a){return t.timeout=s,t.open(e,r),t.onload=()=>{let o=this.parseJSON(t.responseText);a&&a(o)},i&&(t.ontimeout=i),t.onprogress=()=>{},t.send(n),t}static xhrRequest(t,e,r,n,s,i,a,o){t.open(e,r,!0),t.timeout=i;for(let[l,c]of Object.entries(n))t.setRequestHeader(l,c);return t.onerror=()=>o&&o(null),t.onreadystatechange=()=>{if(t.readyState===Zn.complete&&o){let l=this.parseJSON(t.responseText);o(l)}},a&&(t.ontimeout=a),t.send(s),t}static parseJSON(t){if(!t||t==="")return null;try{return JSON.parse(t)}catch{return console&&console.log("failed to parse JSON response",t),null}}static serialize(t,e){let r=[];for(var n in t){if(!Object.prototype.hasOwnProperty.call(t,n))continue;let s=e?`${e}[${n}]`:n,i=t[n];typeof i=="object"?r.push(this.serialize(i,s)):r.push(encodeURIComponent(s)+"="+encodeURIComponent(i))}return r.join("&")}static appendParams(t,e){if(Object.keys(e).length===0)return t;let r=t.match(/\?/)?"&":"?";return`${t}${r}${this.serialize(e)}`}},ts=t=>{let e="",r=new Uint8Array(t),n=r.byteLength;for(let s=0;s<n;s++)e+=String.fromCharCode(r[s]);return btoa(e)},ye=class{constructor(t,e){e&&e.length===2&&e[1].startsWith(Ct)&&(this.authToken=atob(e[1].slice(Ct.length))),this.endPoint=null,this.token=null,this.skipHeartbeat=!0,this.reqs=new Set,this.awaitingBatchAck=!1,this.currentBatch=null,this.currentBatchTimer=null,this.batchBuffer=[],this.onopen=function(){},this.onerror=function(){},this.onmessage=function(){},this.onclose=function(){},this.pollEndpoint=this.normalizeEndpoint(t),this.readyState=Q.connecting,setTimeout(()=>this.poll(),0)}normalizeEndpoint(t){return t.replace("ws://","http://").replace("wss://","https://").replace(new RegExp("(.*)/"+zt.websocket),"$1/"+zt.longpoll)}endpointURL(){return at.appendParams(this.pollEndpoint,{token:this.token})}closeAndRetry(t,e,r){this.close(t,e,r),this.readyState=Q.connecting}ontimeout(){this.onerror("timeout"),this.closeAndRetry(1005,"timeout",!1)}isActive(){return this.readyState===Q.open||this.readyState===Q.connecting}poll(){const t={Accept:"application/json"};this.authToken&&(t["X-Phoenix-AuthToken"]=this.authToken),this.ajax("GET",t,null,()=>this.ontimeout(),e=>{if(e){var{status:r,token:n,messages:s}=e;if(r===410&&this.token!==null){this.onerror(410),this.closeAndRetry(3410,"session_gone",!1);return}this.token=n}else r=0;switch(r){case 200:s.forEach(i=>{setTimeout(()=>this.onmessage({data:i}),0)}),this.poll();break;case 204:this.poll();break;case 410:this.readyState=Q.open,this.onopen({}),this.poll();break;case 403:this.onerror(403),this.close(1008,"forbidden",!1);break;case 0:case 500:this.onerror(500),this.closeAndRetry(1011,"internal server error",500);break;default:throw new Error(`unhandled poll status ${r}`)}})}send(t){typeof t!="string"&&(t=ts(t)),this.currentBatch?this.currentBatch.push(t):this.awaitingBatchAck?this.batchBuffer.push(t):(this.currentBatch=[t],this.currentBatchTimer=setTimeout(()=>{this.batchSend(this.currentBatch),this.currentBatch=null},0))}batchSend(t){this.awaitingBatchAck=!0,this.ajax("POST",{"Content-Type":"application/x-ndjson"},t.join(`
`),()=>this.onerror("timeout"),e=>{this.awaitingBatchAck=!1,!e||e.status!==200?(this.onerror(e&&e.status),this.closeAndRetry(1011,"internal server error",!1)):this.batchBuffer.length>0&&(this.batchSend(this.batchBuffer),this.batchBuffer=[])})}close(t,e,r){for(let s of this.reqs)s.abort();this.readyState=Q.closed;let n=Object.assign({code:1e3,reason:void 0,wasClean:!0},{code:t,reason:e,wasClean:r});this.batchBuffer=[],clearTimeout(this.currentBatchTimer),this.currentBatchTimer=null,typeof CloseEvent<"u"?this.onclose(new CloseEvent("close",n)):this.onclose(n)}ajax(t,e,r,n,s){let i,a=()=>{this.reqs.delete(i),n()};i=at.request(t,this.endpointURL(),e,r,this.timeout,a,o=>{this.reqs.delete(i),this.isActive()&&s(o)}),this.reqs.add(i)}},rs=class Pe{constructor(e,r={}){let n=r.events||{state:"presence_state",diff:"presence_diff"};this.state={},this.pendingDiffs=[],this.channel=e,this.joinRef=null,this.caller={onJoin:function(){},onLeave:function(){},onSync:function(){}},this.channel.on(n.state,s=>{let{onJoin:i,onLeave:a,onSync:o}=this.caller;this.joinRef=this.channel.joinRef(),this.state=Pe.syncState(this.state,s,i,a),this.pendingDiffs.forEach(l=>{this.state=Pe.syncDiff(this.state,l,i,a)}),this.pendingDiffs=[],o()}),this.channel.on(n.diff,s=>{let{onJoin:i,onLeave:a,onSync:o}=this.caller;this.inPendingSyncState()?this.pendingDiffs.push(s):(this.state=Pe.syncDiff(this.state,s,i,a),o())})}onJoin(e){this.caller.onJoin=e}onLeave(e){this.caller.onLeave=e}onSync(e){this.caller.onSync=e}list(e){return Pe.list(this.state,e)}inPendingSyncState(){return!this.joinRef||this.joinRef!==this.channel.joinRef()}static syncState(e,r,n,s){let i=this.clone(e),a={},o={};return this.map(i,(l,c)=>{r[l]||(o[l]=c)}),this.map(r,(l,c)=>{let u=i[l];if(u){let h=c.metas.map(g=>g.phx_ref),d=u.metas.map(g=>g.phx_ref),f=c.metas.filter(g=>d.indexOf(g.phx_ref)<0),y=u.metas.filter(g=>h.indexOf(g.phx_ref)<0);f.length>0&&(a[l]=c,a[l].metas=f),y.length>0&&(o[l]=this.clone(u),o[l].metas=y)}else a[l]=c}),this.syncDiff(i,{joins:a,leaves:o},n,s)}static syncDiff(e,r,n,s){let{joins:i,leaves:a}=this.clone(r);return n||(n=function(){}),s||(s=function(){}),this.map(i,(o,l)=>{let c=e[o];if(e[o]=this.clone(l),c){let u=e[o].metas.map(d=>d.phx_ref),h=c.metas.filter(d=>u.indexOf(d.phx_ref)<0);e[o].metas.unshift(...h)}n(o,c,l)}),this.map(a,(o,l)=>{let c=e[o];if(!c)return;let u=l.metas.map(h=>h.phx_ref);c.metas=c.metas.filter(h=>u.indexOf(h.phx_ref)<0),s(o,c,l),c.metas.length===0&&delete e[o]}),e}static list(e,r){return r||(r=function(n,s){return s}),this.map(e,(n,s)=>r(n,s))}static map(e,r){return Object.getOwnPropertyNames(e).map(n=>r(n,e[n]))}static clone(e){return JSON.parse(JSON.stringify(e))}},Xe={HEADER_LENGTH:1,META_LENGTH:4,KINDS:{push:0,reply:1,broadcast:2},encode(t,e){if(t.payload.constructor===ArrayBuffer)return e(this.binaryEncode(t));{let r=[t.join_ref,t.ref,t.topic,t.event,t.payload];return e(JSON.stringify(r))}},decode(t,e){if(t.constructor===ArrayBuffer)return e(this.binaryDecode(t));{let[r,n,s,i,a]=JSON.parse(t);return e({join_ref:r,ref:n,topic:s,event:i,payload:a})}},binaryEncode(t){let{join_ref:e,ref:r,event:n,topic:s,payload:i}=t,a=this.META_LENGTH+e.length+r.length+s.length+n.length,o=new ArrayBuffer(this.HEADER_LENGTH+a),l=new DataView(o),c=0;l.setUint8(c++,this.KINDS.push),l.setUint8(c++,e.length),l.setUint8(c++,r.length),l.setUint8(c++,s.length),l.setUint8(c++,n.length),Array.from(e,h=>l.setUint8(c++,h.charCodeAt(0))),Array.from(r,h=>l.setUint8(c++,h.charCodeAt(0))),Array.from(s,h=>l.setUint8(c++,h.charCodeAt(0))),Array.from(n,h=>l.setUint8(c++,h.charCodeAt(0)));var u=new Uint8Array(o.byteLength+i.byteLength);return u.set(new Uint8Array(o),0),u.set(new Uint8Array(i),o.byteLength),u.buffer},binaryDecode(t){let e=new DataView(t),r=e.getUint8(0),n=new TextDecoder;switch(r){case this.KINDS.push:return this.decodePush(t,e,n);case this.KINDS.reply:return this.decodeReply(t,e,n);case this.KINDS.broadcast:return this.decodeBroadcast(t,e,n)}},decodePush(t,e,r){let n=e.getUint8(1),s=e.getUint8(2),i=e.getUint8(3),a=this.HEADER_LENGTH+this.META_LENGTH-1,o=r.decode(t.slice(a,a+n));a=a+n;let l=r.decode(t.slice(a,a+s));a=a+s;let c=r.decode(t.slice(a,a+i));a=a+i;let u=t.slice(a,t.byteLength);return{join_ref:o,ref:null,topic:l,event:c,payload:u}},decodeReply(t,e,r){let n=e.getUint8(1),s=e.getUint8(2),i=e.getUint8(3),a=e.getUint8(4),o=this.HEADER_LENGTH+this.META_LENGTH,l=r.decode(t.slice(o,o+n));o=o+n;let c=r.decode(t.slice(o,o+s));o=o+s;let u=r.decode(t.slice(o,o+i));o=o+i;let h=r.decode(t.slice(o,o+a));o=o+a;let d=t.slice(o,t.byteLength),f={status:h,response:d};return{join_ref:l,ref:c,topic:u,event:Z.reply,payload:f}},decodeBroadcast(t,e,r){let n=e.getUint8(1),s=e.getUint8(2),i=this.HEADER_LENGTH+2,a=r.decode(t.slice(i,i+n));i=i+n;let o=r.decode(t.slice(i,i+s));i=i+s;let l=t.slice(i,t.byteLength);return{join_ref:null,ref:null,topic:a,event:o,payload:l}}},ns=class{constructor(t,e={}){this.stateChangeCallbacks={open:[],close:[],error:[],message:[]},this.channels=[],this.sendBuffer=[],this.ref=0,this.fallbackRef=null,this.timeout=e.timeout||Yn,this.transport=e.transport||J.WebSocket||ye,this.conn=void 0,this.primaryPassedHealthCheck=!1,this.longPollFallbackMs=e.longPollFallbackMs,this.fallbackTimer=null;let r=null;try{r=J&&J.sessionStorage}catch{}this.sessionStore=e.sessionStorage||r,this.establishedConnections=0,this.defaultEncoder=Xe.encode.bind(Xe),this.defaultDecoder=Xe.decode.bind(Xe),this.closeWasClean=!0,this.disconnecting=!1,this.binaryType=e.binaryType||"arraybuffer",this.connectClock=1,this.pageHidden=!1,this.encode=void 0,this.decode=void 0,this.transport!==ye?(this.encode=e.encode||this.defaultEncoder,this.decode=e.decode||this.defaultDecoder):(this.encode=this.defaultEncoder,this.decode=this.defaultDecoder);let n=null;we&&we.addEventListener&&(we.addEventListener("pagehide",s=>{this.conn&&(this.disconnect(),n=this.connectClock)}),we.addEventListener("pageshow",s=>{n===this.connectClock&&(n=null,this.connect())}),we.addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"?this.pageHidden=!0:(this.pageHidden=!1,!this.isConnected()&&!this.closeWasClean&&this.teardown(()=>this.connect()))})),this.heartbeatIntervalMs=e.heartbeatIntervalMs||3e4,this.autoSendHeartbeat=e.autoSendHeartbeat??!0,this.heartbeatCallback=e.heartbeatCallback??(()=>{}),this.rejoinAfterMs=s=>e.rejoinAfterMs?e.rejoinAfterMs(s):[1e3,2e3,5e3][s-1]||1e4,this.reconnectAfterMs=s=>e.reconnectAfterMs?e.reconnectAfterMs(s):[10,50,100,150,200,250,500,1e3,2e3][s-1]||5e3,this.logger=e.logger||null,!this.logger&&e.debug&&(this.logger=(s,i,a)=>{console.log(`${s}: ${i}`,a)}),this.longpollerTimeout=e.longpollerTimeout||2e4,this.params=Ie(e.params||{}),this.endPoint=`${t}/${zt.websocket}`,this.vsn=e.vsn||Qn,this.heartbeatTimeoutTimer=null,this.heartbeatTimer=null,this.heartbeatSentAt=null,this.pendingHeartbeatRef=null,this.reconnectTimer=new Br(()=>{if(this.pageHidden){this.log("Not reconnecting as page is hidden!"),this.teardown();return}this.teardown(async()=>{e.beforeReconnect&&await e.beforeReconnect(),this.connect()})},this.reconnectAfterMs),this.authToken=e.authToken}getLongPollTransport(){return ye}replaceTransport(t){this.connectClock++,this.closeWasClean=!0,clearTimeout(this.fallbackTimer),this.reconnectTimer.reset(),this.conn&&(this.conn.close(),this.conn=null),this.transport=t}protocol(){return location.protocol.match(/^https/)?"wss":"ws"}endPointURL(){let t=at.appendParams(at.appendParams(this.endPoint,this.params()),{vsn:this.vsn});return t.charAt(0)!=="/"?t:t.charAt(1)==="/"?`${this.protocol()}:${t}`:`${this.protocol()}://${location.host}${t}`}disconnect(t,e,r){this.connectClock++,this.disconnecting=!0,this.closeWasClean=!0,clearTimeout(this.fallbackTimer),this.reconnectTimer.reset(),this.teardown(()=>{this.disconnecting=!1,t&&t()},e,r)}connect(t){t&&(console&&console.log("passing params to connect is deprecated. Instead pass :params to the Socket constructor"),this.params=Ie(t)),!(this.conn&&!this.disconnecting)&&(this.longPollFallbackMs&&this.transport!==ye?this.connectWithFallback(ye,this.longPollFallbackMs):this.transportConnect())}log(t,e,r){this.logger&&this.logger(t,e,r)}hasLogger(){return this.logger!==null}onOpen(t){let e=this.makeRef();return this.stateChangeCallbacks.open.push([e,t]),e}onClose(t){let e=this.makeRef();return this.stateChangeCallbacks.close.push([e,t]),e}onError(t){let e=this.makeRef();return this.stateChangeCallbacks.error.push([e,t]),e}onMessage(t){let e=this.makeRef();return this.stateChangeCallbacks.message.push([e,t]),e}onHeartbeat(t){this.heartbeatCallback=t}ping(t){if(!this.isConnected())return!1;let e=this.makeRef(),r=Date.now();this.push({topic:"phoenix",event:"heartbeat",payload:{},ref:e});let n=this.onMessage(s=>{s.ref===e&&(this.off([n]),t(Date.now()-r))});return!0}transportName(t){return t===ye?"LongPoll":t.name}transportConnect(){this.connectClock++,this.closeWasClean=!1;let t;this.authToken&&(t=["phoenix",`${Ct}${btoa(this.authToken).replace(/=/g,"")}`]),this.conn=new this.transport(this.endPointURL(),t),this.conn.binaryType=this.binaryType,this.conn.timeout=this.longpollerTimeout,this.conn.onopen=()=>this.onConnOpen(),this.conn.onerror=e=>this.onConnError(e),this.conn.onmessage=e=>this.onConnMessage(e),this.conn.onclose=e=>this.onConnClose(e)}getSession(t){return this.sessionStore&&this.sessionStore.getItem(t)}storeSession(t,e){this.sessionStore&&this.sessionStore.setItem(t,e)}connectWithFallback(t,e=2500){clearTimeout(this.fallbackTimer);let r=!1,n=!0,s,i,a=this.transportName(t),o=l=>{this.log("transport",`falling back to ${a}...`,l),this.off([s,i]),n=!1,this.replaceTransport(t),this.transportConnect()};if(this.getSession(`phx:fallback:${a}`))return o("memorized");this.fallbackTimer=setTimeout(o,e),i=this.onError(l=>{this.log("transport","error",l),n&&!r&&(clearTimeout(this.fallbackTimer),o(l))}),this.fallbackRef&&this.off([this.fallbackRef]),this.fallbackRef=this.onOpen(()=>{if(r=!0,!n){let l=this.transportName(t);return this.primaryPassedHealthCheck||this.storeSession(`phx:fallback:${l}`,"true"),this.log("transport",`established ${l} fallback`)}clearTimeout(this.fallbackTimer),this.fallbackTimer=setTimeout(o,e),this.ping(l=>{this.log("transport","connected to primary after",l),this.primaryPassedHealthCheck=!0,clearTimeout(this.fallbackTimer)})}),this.transportConnect()}clearHeartbeats(){clearTimeout(this.heartbeatTimer),clearTimeout(this.heartbeatTimeoutTimer)}onConnOpen(){this.hasLogger()&&this.log("transport",`connected to ${this.endPointURL()}`),this.closeWasClean=!1,this.disconnecting=!1,this.establishedConnections++,this.flushSendBuffer(),this.reconnectTimer.reset(),this.autoSendHeartbeat&&this.resetHeartbeat(),this.triggerStateCallbacks("open")}heartbeatTimeout(){if(this.pendingHeartbeatRef){this.pendingHeartbeatRef=null,this.heartbeatSentAt=null,this.hasLogger()&&this.log("transport","heartbeat timeout. Attempting to re-establish connection");try{this.heartbeatCallback("timeout")}catch(t){this.log("error","error in heartbeat callback",t)}this.triggerChanError(new Error("heartbeat timeout")),this.closeWasClean=!1,this.teardown(()=>this.reconnectTimer.scheduleTimeout(),Xn,"heartbeat timeout")}}resetHeartbeat(){this.conn&&this.conn.skipHeartbeat||(this.pendingHeartbeatRef=null,this.clearHeartbeats(),this.heartbeatTimer=setTimeout(()=>this.sendHeartbeat(),this.heartbeatIntervalMs))}teardown(t,e,r){if(!this.conn)return t&&t();const n=this.conn;this.waitForBufferDone(n,()=>{e?n.close(e,r||""):n.close(),this.waitForSocketClosed(n,()=>{this.conn===n&&(this.conn.onopen=function(){},this.conn.onerror=function(){},this.conn.onmessage=function(){},this.conn.onclose=function(){},this.conn=null),t&&t()})})}waitForBufferDone(t,e,r=1){if(r===5||!t.bufferedAmount){e();return}setTimeout(()=>{this.waitForBufferDone(t,e,r+1)},150*r)}waitForSocketClosed(t,e,r=1){if(r===5||t.readyState===Q.closed){e();return}setTimeout(()=>{this.waitForSocketClosed(t,e,r+1)},150*r)}onConnClose(t){this.conn&&(this.conn.onclose=()=>{}),this.hasLogger()&&this.log("transport","close",t),this.triggerChanError(t),this.clearHeartbeats(),this.closeWasClean||this.reconnectTimer.scheduleTimeout(),this.triggerStateCallbacks("close",t)}onConnError(t){this.hasLogger()&&this.log("transport","error",t);let e=this.transport,r=this.establishedConnections;this.triggerStateCallbacks("error",t,e,r),(e===this.transport||r>0)&&this.triggerChanError(t)}triggerChanError(t){this.channels.forEach(e=>{e.isErrored()||e.isLeaving()||e.isClosed()||e.trigger(Z.error,t)})}connectionState(){switch(this.conn&&this.conn.readyState){case Q.connecting:return"connecting";case Q.open:return"open";case Q.closing:return"closing";default:return"closed"}}isConnected(){return this.connectionState()==="open"}remove(t){this.off(t.stateChangeRefs),this.channels=this.channels.filter(e=>e!==t)}off(t){for(let e in this.stateChangeCallbacks)this.stateChangeCallbacks[e]=this.stateChangeCallbacks[e].filter(([r])=>t.indexOf(r)===-1)}channel(t,e={}){let r=new es(t,e,this);return this.channels.push(r),r}push(t){if(this.hasLogger()){let{topic:e,event:r,payload:n,ref:s,join_ref:i}=t;this.log("push",`${e} ${r} (${i}, ${s})`,n)}this.isConnected()?this.encode(t,e=>this.conn.send(e)):this.sendBuffer.push(()=>this.encode(t,e=>this.conn.send(e)))}makeRef(){let t=this.ref+1;return t===this.ref?this.ref=0:this.ref=t,this.ref.toString()}sendHeartbeat(){if(!this.isConnected()){try{this.heartbeatCallback("disconnected")}catch(t){this.log("error","error in heartbeat callback",t)}return}if(this.pendingHeartbeatRef){this.heartbeatTimeout();return}this.pendingHeartbeatRef=this.makeRef(),this.heartbeatSentAt=Date.now(),this.push({topic:"phoenix",event:"heartbeat",payload:{},ref:this.pendingHeartbeatRef});try{this.heartbeatCallback("sent")}catch(t){this.log("error","error in heartbeat callback",t)}this.heartbeatTimeoutTimer=setTimeout(()=>this.heartbeatTimeout(),this.heartbeatIntervalMs)}flushSendBuffer(){this.isConnected()&&this.sendBuffer.length>0&&(this.sendBuffer.forEach(t=>t()),this.sendBuffer=[])}onConnMessage(t){this.decode(t.data,e=>{let{topic:r,event:n,payload:s,ref:i,join_ref:a}=e;if(i&&i===this.pendingHeartbeatRef){const o=this.heartbeatSentAt?Date.now()-this.heartbeatSentAt:void 0;this.clearHeartbeats();try{this.heartbeatCallback(s.status==="ok"?"ok":"error",o)}catch(l){this.log("error","error in heartbeat callback",l)}this.pendingHeartbeatRef=null,this.heartbeatSentAt=null,this.autoSendHeartbeat&&(this.heartbeatTimer=setTimeout(()=>this.sendHeartbeat(),this.heartbeatIntervalMs))}this.hasLogger()&&this.log("receive",`${s.status||""} ${r} ${n} ${i&&"("+i+")"||""}`.trim(),s);for(let o=0;o<this.channels.length;o++){const l=this.channels[o];l.isMember(r,n,s,a)&&l.trigger(n,s,i,a)}this.triggerStateCallbacks("message",e)})}triggerStateCallbacks(t,...e){try{this.stateChangeCallbacks[t].forEach(([r,n])=>{try{n(...e)}catch(s){this.log("error",`error in ${t} callback`,s)}})}catch(r){this.log("error",`error triggering ${t} callbacks`,r)}}leaveOpenTopic(t){let e=this.channels.find(r=>r.topic===t&&(r.isJoined()||r.isJoining()));e&&(this.hasLogger()&&this.log("transport",`leaving duplicate topic "${t}"`),e.leave())}};class qe{constructor(e,r){const n=is(r);this.presence=new rs(e.getChannel(),n),this.presence.onJoin((s,i,a)=>{const o=qe.onJoinPayload(s,i,a);e.getChannel().trigger("presence",o)}),this.presence.onLeave((s,i,a)=>{const o=qe.onLeavePayload(s,i,a);e.getChannel().trigger("presence",o)}),this.presence.onSync(()=>{e.getChannel().trigger("presence",{event:"sync"})})}get state(){return qe.transformState(this.presence.state)}static transformState(e){return e=ss(e),Object.getOwnPropertyNames(e).reduce((r,n)=>{const s=e[n];return r[n]=st(s),r},{})}static onJoinPayload(e,r,n){const s=ir(r),i=st(n);return{event:"join",key:e,currentPresences:s,newPresences:i}}static onLeavePayload(e,r,n){const s=ir(r),i=st(n);return{event:"leave",key:e,currentPresences:s,leftPresences:i}}}function st(t){return t.metas.map(e=>(e.presence_ref=e.phx_ref,delete e.phx_ref,delete e.phx_ref_prev,e))}function ss(t){return JSON.parse(JSON.stringify(t))}function is(t){return t?.events&&{events:t.events}}function ir(t){return t?.metas?st(t):[]}var ar;(function(t){t.SYNC="sync",t.JOIN="join",t.LEAVE="leave"})(ar||(ar={}));class as{get state(){return this.presenceAdapter.state}constructor(e,r){this.channel=e,this.presenceAdapter=new qe(this.channel.channelAdapter,r)}}function os(t){if(t instanceof Error)return t;if(typeof t=="string")return new Error(t);if(t&&typeof t=="object"){const e=t;if(typeof e.code=="number"){const r=typeof e.reason=="string"&&e.reason?` (${e.reason})`:"";return new Error(`socket closed: ${e.code}${r}`,{cause:t})}return new Error("channel error: transport failure",{cause:t})}return new Error("channel error: connection lost")}class ls{constructor(e,r,n){const s=cs(n);this.channel=e.getSocket().channel(r,s),this.socket=e}get state(){return this.channel.state}set state(e){this.channel.state=e}get joinedOnce(){return this.channel.joinedOnce}get joinPush(){return this.channel.joinPush}get rejoinTimer(){return this.channel.rejoinTimer}on(e,r){return this.channel.on(e,r)}off(e,r){this.channel.off(e,r)}subscribe(e){return this.channel.join(e)}unsubscribe(e){return this.channel.leave(e)}teardown(){this.channel.teardown()}onClose(e){this.channel.onClose(e)}onError(e){return this.channel.onError(e)}push(e,r,n){let s;try{s=this.channel.push(e,r,n)}catch{throw new Error(`tried to push '${e}' to '${this.channel.topic}' before joining. Use channel.subscribe() before pushing events`)}if(this.channel.pushBuffer.length>Dn){const i=this.channel.pushBuffer.shift();i.cancelTimeout(),this.socket.log("channel",`discarded push due to buffer overflow: ${i.event}`,i.payload())}return s}updateJoinPayload(e){const r=this.channel.joinPush.payload();this.channel.joinPush.payload=()=>Object.assign(Object.assign({},r),e)}canPush(){return this.socket.isConnected()&&this.state===se.joined}isJoined(){return this.state===se.joined}isJoining(){return this.state===se.joining}isClosed(){return this.state===se.closed}isLeaving(){return this.state===se.leaving}updateFilterBindings(e){this.channel.filterBindings=e}updatePayloadTransform(e){this.channel.onMessage=e}getChannel(){return this.channel}}function cs(t){return{config:Object.assign({broadcast:{ack:!1,self:!1},presence:{key:"",enabled:!1},private:!1},t.config)}}var or;(function(t){t.ALL="*",t.INSERT="INSERT",t.UPDATE="UPDATE",t.DELETE="DELETE"})(or||(or={}));var xe;(function(t){t.BROADCAST="broadcast",t.PRESENCE="presence",t.POSTGRES_CHANGES="postgres_changes",t.SYSTEM="system"})(xe||(xe={}));var ee;(function(t){t.SUBSCRIBED="SUBSCRIBED",t.TIMED_OUT="TIMED_OUT",t.CLOSED="CLOSED",t.CHANNEL_ERROR="CHANNEL_ERROR"})(ee||(ee={}));class $e{get state(){return this.channelAdapter.state}set state(e){this.channelAdapter.state=e}get joinedOnce(){return this.channelAdapter.joinedOnce}get timeout(){return this.socket.timeout}get joinPush(){return this.channelAdapter.joinPush}get rejoinTimer(){return this.channelAdapter.rejoinTimer}constructor(e,r={config:{}},n){var s,i;if(this.topic=e,this.params=r,this.socket=n,this.bindings={},this.subTopic=e.replace(/^realtime:/i,""),this.params.config=Object.assign({broadcast:{ack:!1,self:!1},presence:{key:"",enabled:!1},private:!1},r.config),this.channelAdapter=new ls(this.socket.socketAdapter,e,this.params),this.presence=new as(this),this._onClose(()=>{this.socket._remove(this)}),this._updateFilterTransform(),this.broadcastEndpointURL=Dr(this.socket.socketAdapter.endPointURL()),this.private=this.params.config.private||!1,!this.private&&(!((i=(s=this.params.config)===null||s===void 0?void 0:s.broadcast)===null||i===void 0)&&i.replay))throw new Error(`tried to use replay on public channel '${this.topic}'. It must be a private channel.`)}subscribe(e,r=this.timeout){var n,s,i;if(this.socket.isConnected()||this.socket.connect(),this.channelAdapter.isClosed()){const{config:{broadcast:a,presence:o,private:l}}=this.params,c=(s=(n=this.bindings.postgres_changes)===null||n===void 0?void 0:n.map(f=>f.filter))!==null&&s!==void 0?s:[],u=!!this.bindings[xe.PRESENCE]&&this.bindings[xe.PRESENCE].length>0||((i=this.params.config.presence)===null||i===void 0?void 0:i.enabled)===!0,h={},d={broadcast:a,presence:Object.assign(Object.assign({},o),{enabled:u}),postgres_changes:c,private:l};this.socket.accessTokenValue&&(h.access_token=this.socket.accessTokenValue),this._onError(f=>{e?.(ee.CHANNEL_ERROR,os(f))}),this._onClose(()=>e?.(ee.CLOSED)),this.updateJoinPayload(Object.assign({config:d},h)),this._updateFilterMessage(),this.channelAdapter.subscribe(r).receive("ok",async({postgres_changes:f})=>{if(this.socket._isManualToken()||this.socket.setAuth(),f===void 0){e?.(ee.SUBSCRIBED);return}this._updatePostgresBindings(f,e)}).receive("error",f=>{this.state=se.errored;const y=Object.values(f).join(", ")||"error";e?.(ee.CHANNEL_ERROR,new Error(y,{cause:f}))}).receive("timeout",()=>{e?.(ee.TIMED_OUT)})}return this}_updatePostgresBindings(e,r){var n;const s=this.bindings.postgres_changes,i=(n=s?.length)!==null&&n!==void 0?n:0,a=[];for(let o=0;o<i;o++){const l=s[o],{filter:{event:c,schema:u,table:h,filter:d}}=l,f=e&&e[o];if(f&&f.event===c&&$e.isFilterValueEqual(f.schema,u)&&$e.isFilterValueEqual(f.table,h)&&$e.isFilterValueEqual(f.filter,d))a.push(Object.assign(Object.assign({},l),{id:f.id}));else{this.unsubscribe(),this.state=se.errored,r?.(ee.CHANNEL_ERROR,new Error("mismatch between server and client bindings for postgres changes"));return}}this.bindings.postgres_changes=a,this.state!=se.errored&&r&&r(ee.SUBSCRIBED)}presenceState(){return this.presence.state}async track(e,r={}){return await this.send({type:"presence",event:"track",payload:e},r.timeout||this.timeout)}async untrack(e={}){return await this.send({type:"presence",event:"untrack"},e)}on(e,r,n){const s=this.channelAdapter.isJoined()||this.channelAdapter.isJoining(),i=e===xe.PRESENCE||e===xe.POSTGRES_CHANGES;if(s&&i)throw this.socket.log("channel",`cannot add \`${e}\` callbacks for ${this.topic} after \`subscribe()\`.`),new Error(`cannot add \`${e}\` callbacks for ${this.topic} after \`subscribe()\`.`);return this._on(e,r,n)}async httpSend(e,r,n={}){var s;if(r==null)return Promise.reject(new Error("Payload is required for httpSend()"));const i=r instanceof ArrayBuffer||ArrayBuffer.isView(r),a={apikey:this.socket.apiKey?this.socket.apiKey:"","Content-Type":i?"application/octet-stream":"application/json"};this.socket.accessTokenValue&&(a.Authorization=`Bearer ${this.socket.accessTokenValue}`);const o=new URL(this.broadcastEndpointURL);o.pathname+=`/${encodeURIComponent(this.subTopic)}/events/${encodeURIComponent(e)}`,this.private&&o.searchParams.set("private","true");const l={method:"POST",headers:a,body:i?r:JSON.stringify(r)},c=await this._fetchWithTimeout(o.toString(),l,(s=n.timeout)!==null&&s!==void 0?s:this.timeout);if(c.status===202)return{success:!0};if(c.status===404)return Promise.reject(new Error("httpSend() requires Realtime server v2.97.0 or newer; the endpoint returned 404. Update your Supabase CLI to a recent version, or upgrade the Realtime server in your self-hosted setup. See https://github.com/supabase/supabase-js/blob/master/packages/core/realtime-js/migrations/httpsend-server-version.md"));let u=c.statusText;try{const h=await c.json();u=h.error||h.message||u}catch{}return Promise.reject(new Error(u))}async send(e,r={}){var n,s;if(!this.channelAdapter.canPush()&&e.type==="broadcast"){console.warn("Realtime send() is automatically falling back to REST API. This behavior will be deprecated in the future. Please use httpSend() explicitly for REST delivery.");const{event:i,payload:a}=e,o={apikey:this.socket.apiKey?this.socket.apiKey:"","Content-Type":"application/json"};this.socket.accessTokenValue&&(o.Authorization=`Bearer ${this.socket.accessTokenValue}`);const l={method:"POST",headers:o,body:JSON.stringify({messages:[{topic:this.subTopic,event:i,payload:a,private:this.private}]})};try{const c=await this._fetchWithTimeout(this.broadcastEndpointURL,l,(n=r.timeout)!==null&&n!==void 0?n:this.timeout);return await((s=c.body)===null||s===void 0?void 0:s.cancel()),c.ok?"ok":"error"}catch(c){return c instanceof Error&&c.name==="AbortError"?"timed out":"error"}}else return new Promise(i=>{var a,o,l;const c=this.channelAdapter.push(e.type,e,r.timeout||this.timeout);e.type==="broadcast"&&!(!((l=(o=(a=this.params)===null||a===void 0?void 0:a.config)===null||o===void 0?void 0:o.broadcast)===null||l===void 0)&&l.ack)&&i("ok"),c.receive("ok",()=>i("ok")),c.receive("error",()=>i("error")),c.receive("timeout",()=>i("timed out"))})}updateJoinPayload(e){this.channelAdapter.updateJoinPayload(e)}async unsubscribe(e=this.timeout){return new Promise(r=>{this.channelAdapter.unsubscribe(e).receive("ok",()=>r("ok")).receive("timeout",()=>r("timed out")).receive("error",()=>r("error"))})}teardown(){this.channelAdapter.teardown()}async _fetchWithTimeout(e,r,n){const s=new AbortController,i=setTimeout(()=>s.abort(),n),a=await this.socket.fetch(e,Object.assign(Object.assign({},r),{signal:s.signal}));return clearTimeout(i),a}_on(e,r,n){const s=e.toLocaleLowerCase(),i=this.channelAdapter.on(e,n),a={type:s,filter:r,callback:n,ref:i};return this.bindings[s]?this.bindings[s].push(a):this.bindings[s]=[a],this._updateFilterMessage(),this}_onClose(e){this.channelAdapter.onClose(e)}_onError(e){this.channelAdapter.onError(e)}_updateFilterMessage(){this.channelAdapter.updateFilterBindings((e,r,n)=>{var s,i,a,o,l,c,u;const h=e.event.toLocaleLowerCase();if(this._notThisChannelEvent(h,n))return!1;const d=(s=this.bindings[h])===null||s===void 0?void 0:s.find(f=>f.ref===e.ref);if(!d)return!0;if(["broadcast","presence","postgres_changes"].includes(h))if("id"in d){const f=d.id,y=(i=d.filter)===null||i===void 0?void 0:i.event;return f&&((a=r.ids)===null||a===void 0?void 0:a.includes(f))&&(y==="*"||y?.toLocaleLowerCase()===((o=r.data)===null||o===void 0?void 0:o.type.toLocaleLowerCase()))}else{const f=(c=(l=d?.filter)===null||l===void 0?void 0:l.event)===null||c===void 0?void 0:c.toLocaleLowerCase();return f==="*"||f===((u=r?.event)===null||u===void 0?void 0:u.toLocaleLowerCase())}else return d.type.toLocaleLowerCase()===h})}_notThisChannelEvent(e,r){const{close:n,error:s,leave:i,join:a}=Nr;return r&&[n,s,i,a].includes(e)&&r!==this.joinPush.ref}_updateFilterTransform(){this.channelAdapter.updatePayloadTransform((e,r,n)=>{if(typeof r=="object"&&"ids"in r){const s=r.data,{schema:i,table:a,commit_timestamp:o,type:l,errors:c}=s;return Object.assign(Object.assign({},{schema:i,table:a,commit_timestamp:o,eventType:l,new:{},old:{},errors:c}),this._getPayloadRecords(s))}return r})}copyBindings(e){if(this.joinedOnce)throw new Error("cannot copy bindings into joined channel");for(const r in e.bindings)for(const n of e.bindings[r])this._on(n.type,n.filter,n.callback)}static isFilterValueEqual(e,r){return(e??void 0)===(r??void 0)}_getPayloadRecords(e){const r={new:{},old:{}};return(e.type==="INSERT"||e.type==="UPDATE")&&(r.new=sr(e.columns,e.record)),(e.type==="UPDATE"||e.type==="DELETE")&&(r.old=sr(e.columns,e.old_record)),r}}class us{constructor(e,r){this.socket=new ns(e,r)}get timeout(){return this.socket.timeout}get endPoint(){return this.socket.endPoint}get transport(){return this.socket.transport}get heartbeatIntervalMs(){return this.socket.heartbeatIntervalMs}get heartbeatCallback(){return this.socket.heartbeatCallback}set heartbeatCallback(e){this.socket.heartbeatCallback=e}get heartbeatTimer(){return this.socket.heartbeatTimer}get pendingHeartbeatRef(){return this.socket.pendingHeartbeatRef}get reconnectTimer(){return this.socket.reconnectTimer}get vsn(){return this.socket.vsn}get encode(){return this.socket.encode}get decode(){return this.socket.decode}get reconnectAfterMs(){return this.socket.reconnectAfterMs}get sendBuffer(){return this.socket.sendBuffer}get stateChangeCallbacks(){return this.socket.stateChangeCallbacks}connect(){this.socket.connect()}disconnect(e,r,n,s=1e4){return new Promise(i=>{setTimeout(()=>i("timeout"),s),this.socket.disconnect(()=>{e(),i("ok")},r,n)})}push(e){this.socket.push(e)}log(e,r,n){this.socket.log(e,r,n)}makeRef(){return this.socket.makeRef()}onOpen(e){this.socket.onOpen(e)}onClose(e){this.socket.onClose(e)}onError(e){this.socket.onError(e)}onMessage(e){this.socket.onMessage(e)}isConnected(){return this.socket.isConnected()}isConnecting(){return this.socket.connectionState()==Ot.connecting}isDisconnecting(){return this.socket.connectionState()==Ot.closing}connectionState(){return this.socket.connectionState()}endPointURL(){return this.socket.endPointURL()}sendHeartbeat(){this.socket.sendHeartbeat()}getSocket(){return this.socket}}const lr={HEARTBEAT_INTERVAL:25e3},hs=[1e3,2e3,5e3,1e4],ds=1e4;function ps(){const t=new Map;return{get length(){return t.size},clear(){t.clear()},getItem(e){return t.has(e)?t.get(e):null},key(e){var r;return(r=Array.from(t.keys())[e])!==null&&r!==void 0?r:null},removeItem(e){t.delete(e)},setItem(e,r){t.set(e,String(r))}}}function fs(){try{if(typeof globalThis<"u"&&globalThis.sessionStorage)return globalThis.sessionStorage}catch{}return ps()}const ys=`
  addEventListener("message", (e) => {
    if (e.data.event === "start") {
      setInterval(() => postMessage({ event: "keepAlive" }), e.data.interval);
    }
  });`;class gs{get endPoint(){return this.socketAdapter.endPoint}get timeout(){return this.socketAdapter.timeout}get transport(){return this.socketAdapter.transport}get heartbeatCallback(){return this.socketAdapter.heartbeatCallback}get heartbeatIntervalMs(){return this.socketAdapter.heartbeatIntervalMs}get heartbeatTimer(){return this.worker?this._workerHeartbeatTimer:this.socketAdapter.heartbeatTimer}get pendingHeartbeatRef(){return this.worker?this._pendingWorkerHeartbeatRef:this.socketAdapter.pendingHeartbeatRef}get reconnectTimer(){return this.socketAdapter.reconnectTimer}get vsn(){return this.socketAdapter.vsn}get encode(){return this.socketAdapter.encode}get decode(){return this.socketAdapter.decode}get reconnectAfterMs(){return this.socketAdapter.reconnectAfterMs}get sendBuffer(){return this.socketAdapter.sendBuffer}get stateChangeCallbacks(){return this.socketAdapter.stateChangeCallbacks}constructor(e,r){var n;if(this.channels=new Array,this.accessTokenValue=null,this.accessToken=null,this.apiKey=null,this.httpEndpoint="",this.headers={},this.params={},this.ref=0,this.serializer=new Bn,this._manuallySetToken=!1,this._authPromise=null,this._workerHeartbeatTimer=void 0,this._pendingWorkerHeartbeatRef=null,this._pendingDisconnectTimer=null,this._disconnectOnEmptyChannelsAfterMs=0,this._resolveFetch=i=>i?(...a)=>i(...a):(...a)=>fetch(...a),!(!((n=r?.params)===null||n===void 0)&&n.apikey))throw new Error("API key is required to connect to Realtime");this.apiKey=r.params.apikey;const s=this._initializeOptions(r);this.socketAdapter=new us(e,s),this.httpEndpoint=Dr(e),this.fetch=this._resolveFetch(r?.fetch)}connect(){if(!(this.isConnecting()||this.isDisconnecting()||this.isConnected())){this.accessToken&&!this._authPromise&&this._setAuthSafely("connect"),this._setupConnectionHandlers();try{this.socketAdapter.connect()}catch(e){const r=e.message;throw r.includes("Node.js")?new Error(`${r}

To use Realtime in Node.js, you need to provide a WebSocket implementation:

Option 1: Use Node.js 22+ which has native WebSocket support
Option 2: Install and provide the "ws" package:

  npm install ws

  import ws from "ws"
  const client = new RealtimeClient(url, {
    ...options,
    transport: ws
  })`):new Error(`WebSocket not available: ${r}`)}this._handleNodeJsRaceCondition()}}endpointURL(){return this.socketAdapter.endPointURL()}async disconnect(e,r){return this._cancelPendingDisconnect(),this.isDisconnecting()?"ok":await this.socketAdapter.disconnect(()=>{clearInterval(this._workerHeartbeatTimer),this._terminateWorker()},e,r)}getChannels(){return this.channels}async removeChannel(e){const r=await e.unsubscribe();return r==="ok"&&e.teardown(),r}async removeAllChannels(){const e=this.channels.map(async n=>{const s=await n.unsubscribe();return n.teardown(),s}),r=await Promise.all(e);return await this.disconnect(),r}log(e,r,n){this.socketAdapter.log(e,r,n)}connectionState(){return this.socketAdapter.connectionState()||Ot.closed}isConnected(){return this.socketAdapter.isConnected()}isConnecting(){return this.socketAdapter.isConnecting()}isDisconnecting(){return this.socketAdapter.isDisconnecting()}channel(e,r={config:{}}){const n=`realtime:${e}`,s=this.getChannels().find(i=>i.topic===n);if(s)return s;{const i=new $e(`realtime:${e}`,r,this);return this._cancelPendingDisconnect(),this.channels.push(i),i}}push(e){this.socketAdapter.push(e)}async setAuth(e=null){this._authPromise=this._performAuth(e);try{await this._authPromise}finally{this._authPromise=null}}_isManualToken(){return this._manuallySetToken}async sendHeartbeat(){this.socketAdapter.sendHeartbeat()}onHeartbeat(e){this.socketAdapter.heartbeatCallback=this._wrapHeartbeatCallback(e)}_makeRef(){return this.socketAdapter.makeRef()}_remove(e){this.channels=this.channels.filter(r=>r.topic!==e.topic),this.channels.length===0&&(this.log("transport","no channels remaining, scheduling disconnect"),this._schedulePendingDisconnect())}_schedulePendingDisconnect(){if(this._cancelPendingDisconnect(),this._disconnectOnEmptyChannelsAfterMs===0){this.log("transport","disconnecting immediately - no channels"),this.disconnect();return}this._pendingDisconnectTimer=setTimeout(()=>{this._pendingDisconnectTimer=null,this.channels.length===0&&(this.log("transport","deferred disconnect fired - no channels, disconnecting"),this.disconnect())},this._disconnectOnEmptyChannelsAfterMs),this.log("transport",`deferred disconnect scheduled in ${this._disconnectOnEmptyChannelsAfterMs}ms`)}_cancelPendingDisconnect(){this._pendingDisconnectTimer!==null&&(this.log("transport","pending disconnect cancelled - channel activity detected"),clearTimeout(this._pendingDisconnectTimer),this._pendingDisconnectTimer=null)}async _performAuth(e=null){let r,n=!1;if(e)r=e,n=!0;else if(this.accessToken)try{r=await this.accessToken()}catch(s){this.log("error","Error fetching access token from callback",s),r=this.accessTokenValue}else r=this.accessTokenValue;n?this._manuallySetToken=!0:this.accessToken&&(this._manuallySetToken=!1),this.accessTokenValue!=r&&(this.accessTokenValue=r,this.channels.forEach(s=>{const i={access_token:r,version:Ln};r&&s.updateJoinPayload(i),s.joinedOnce&&s.channelAdapter.isJoined()&&s.channelAdapter.push(Nr.access_token,{access_token:r})}))}async _waitForAuthIfNeeded(){this._authPromise&&await this._authPromise}_setAuthSafely(e="general"){this._isManualToken()||this.setAuth().catch(r=>{this.log("error",`Error setting auth in ${e}`,r)})}_setupConnectionHandlers(){this.socketAdapter.onOpen(()=>{(this._authPromise||(this.accessToken&&!this.accessTokenValue?this.setAuth():Promise.resolve())).catch(r=>{this.log("error","error waiting for auth on connect",r)}),this.worker&&!this.workerRef&&this._startWorkerHeartbeat()}),this.socketAdapter.onClose(()=>{this.worker&&this.workerRef&&this._terminateWorker()}),this.socketAdapter.onMessage(e=>{e.ref&&e.ref===this._pendingWorkerHeartbeatRef&&(this._pendingWorkerHeartbeatRef=null)})}_handleNodeJsRaceCondition(){this.socketAdapter.isConnected()&&this.socketAdapter.getSocket().onConnOpen()}_wrapHeartbeatCallback(e){return(r,n)=>{r=="sent"&&this._setAuthSafely(),e&&e(r,n)}}_startWorkerHeartbeat(){this.workerUrl?this.log("worker",`starting worker for from ${this.workerUrl}`):this.log("worker","starting default worker");const e=this._workerObjectUrl(this.workerUrl);this.workerRef=new Worker(e),this.workerRef.onerror=r=>{this.log("worker","worker error",r.message),this._terminateWorker(),this.disconnect()},this.workerRef.onmessage=r=>{r.data.event==="keepAlive"&&this.sendHeartbeat()},this.workerRef.postMessage({event:"start",interval:this.heartbeatIntervalMs})}_terminateWorker(){this.workerRef&&(this.log("worker","terminating worker"),this.workerRef.terminate(),this.workerRef=void 0)}_workerObjectUrl(e){let r;if(e)r=e;else{const n=new Blob([ys],{type:"application/javascript"});r=URL.createObjectURL(n)}return r}_initializeOptions(e){var r,n,s,i,a,o,l,c,u,h,d,f;this.worker=(r=e?.worker)!==null&&r!==void 0?r:!1,this.accessToken=(n=e?.accessToken)!==null&&n!==void 0?n:null;const y={};y.timeout=(s=e?.timeout)!==null&&s!==void 0?s:Un,y.heartbeatIntervalMs=(i=e?.heartbeatIntervalMs)!==null&&i!==void 0?i:lr.HEARTBEAT_INTERVAL,this._disconnectOnEmptyChannelsAfterMs=(a=e?.disconnectOnEmptyChannelsAfterMs)!==null&&a!==void 0?a:2*((o=e?.heartbeatIntervalMs)!==null&&o!==void 0?o:lr.HEARTBEAT_INTERVAL),y.transport=(l=e?.transport)!==null&&l!==void 0?l:qn.getWebSocketConstructor(),y.params=e?.params,y.logger=e?.logger,y.heartbeatCallback=this._wrapHeartbeatCallback(e?.heartbeatCallback),y.sessionStorage=(c=e?.sessionStorage)!==null&&c!==void 0?c:fs(),y.reconnectAfterMs=(u=e?.reconnectAfterMs)!==null&&u!==void 0?u:(v=>hs[v-1]||ds);let g,w;const m=(h=e?.vsn)!==null&&h!==void 0?h:Nn;switch(m){case Mn:g=(v,b)=>b(JSON.stringify(v)),w=(v,b)=>b(JSON.parse(v));break;case Mr:g=this.serializer.encode.bind(this.serializer),w=this.serializer.decode.bind(this.serializer);break;default:throw new Error(`Unsupported serializer version: ${y.vsn}`)}if(y.vsn=m,y.encode=(d=e?.encode)!==null&&d!==void 0?d:g,y.decode=(f=e?.decode)!==null&&f!==void 0?f:w,y.beforeReconnect=this._reconnectAuth.bind(this),(e?.logLevel||e?.log_level)&&(this.logLevel=e.logLevel||e.log_level,y.params=Object.assign(Object.assign({},y.params),{log_level:this.logLevel})),this.worker){if(typeof window<"u"&&!window.Worker)throw new Error("Web Worker is not supported");this.workerUrl=e?.workerUrl,y.autoSendHeartbeat=!this.worker}return y}async _reconnectAuth(){await this._waitForAuthIfNeeded(),this.isConnected()||this.connect()}}var Me=class extends Error{constructor(t,e){super(t),this.name="IcebergError",this.status=e.status,this.icebergType=e.icebergType,this.icebergCode=e.icebergCode,this.details=e.details,this.isCommitStateUnknown=e.icebergType==="CommitStateUnknownException"||[500,502,504].includes(e.status)&&e.icebergType?.includes("CommitState")===!0}isNotFound(){return this.status===404}isConflict(){return this.status===409}isAuthenticationTimeout(){return this.status===419}};function ms(t,e,r){const n=new URL(e,t);if(r)for(const[s,i]of Object.entries(r))i!==void 0&&n.searchParams.set(s,i);return n.toString()}async function vs(t){return!t||t.type==="none"?{}:t.type==="bearer"?{Authorization:`Bearer ${t.token}`}:t.type==="header"?{[t.name]:t.value}:t.type==="custom"?await t.getHeaders():{}}function bs(t){const e=t.fetchImpl??globalThis.fetch;return{async request({method:r,path:n,query:s,body:i,headers:a}){const o=ms(t.baseUrl,n,s),l=await vs(t.auth),c=await e(o,{method:r,headers:{...i?{"Content-Type":"application/json"}:{},...l,...a},body:i?JSON.stringify(i):void 0}),u=await c.text(),h=(c.headers.get("content-type")||"").includes("application/json"),d=h&&u?JSON.parse(u):u;if(!c.ok){const f=h?d:void 0,y=f?.error;throw new Me(y?.message??`Request failed with status ${c.status}`,{status:c.status,icebergType:y?.type,icebergCode:y?.code,details:f})}return{status:c.status,headers:c.headers,data:d}}}}function Ze(t){return t.join("")}var ws=class{constructor(t,e=""){this.client=t,this.prefix=e}async listNamespaces(t){const e=t?{parent:Ze(t.namespace)}:void 0;return(await this.client.request({method:"GET",path:`${this.prefix}/namespaces`,query:e})).data.namespaces.map(n=>({namespace:n}))}async createNamespace(t,e){const r={namespace:t.namespace,properties:e?.properties};return(await this.client.request({method:"POST",path:`${this.prefix}/namespaces`,body:r})).data}async dropNamespace(t){await this.client.request({method:"DELETE",path:`${this.prefix}/namespaces/${Ze(t.namespace)}`})}async loadNamespaceMetadata(t){return{properties:(await this.client.request({method:"GET",path:`${this.prefix}/namespaces/${Ze(t.namespace)}`})).data.properties}}async namespaceExists(t){try{return await this.client.request({method:"HEAD",path:`${this.prefix}/namespaces/${Ze(t.namespace)}`}),!0}catch(e){if(e instanceof Me&&e.status===404)return!1;throw e}}async createNamespaceIfNotExists(t,e){try{return await this.createNamespace(t,e)}catch(r){if(r instanceof Me&&r.status===409)return;throw r}}};function ge(t){return t.join("")}var _s=class{constructor(t,e="",r){this.client=t,this.prefix=e,this.accessDelegation=r}async listTables(t){return(await this.client.request({method:"GET",path:`${this.prefix}/namespaces/${ge(t.namespace)}/tables`})).data.identifiers}async createTable(t,e){const r={};return this.accessDelegation&&(r["X-Iceberg-Access-Delegation"]=this.accessDelegation),(await this.client.request({method:"POST",path:`${this.prefix}/namespaces/${ge(t.namespace)}/tables`,body:e,headers:r})).data.metadata}async updateTable(t,e){const r=await this.client.request({method:"POST",path:`${this.prefix}/namespaces/${ge(t.namespace)}/tables/${t.name}`,body:e});return{"metadata-location":r.data["metadata-location"],metadata:r.data.metadata}}async dropTable(t,e){await this.client.request({method:"DELETE",path:`${this.prefix}/namespaces/${ge(t.namespace)}/tables/${t.name}`,query:{purgeRequested:String(e?.purge??!1)}})}async loadTable(t){const e={};return this.accessDelegation&&(e["X-Iceberg-Access-Delegation"]=this.accessDelegation),(await this.client.request({method:"GET",path:`${this.prefix}/namespaces/${ge(t.namespace)}/tables/${t.name}`,headers:e})).data.metadata}async tableExists(t){const e={};this.accessDelegation&&(e["X-Iceberg-Access-Delegation"]=this.accessDelegation);try{return await this.client.request({method:"HEAD",path:`${this.prefix}/namespaces/${ge(t.namespace)}/tables/${t.name}`,headers:e}),!0}catch(r){if(r instanceof Me&&r.status===404)return!1;throw r}}async createTableIfNotExists(t,e){try{return await this.createTable(t,e)}catch(r){if(r instanceof Me&&r.status===409)return await this.loadTable({namespace:t.namespace,name:e.name});throw r}}},xs=class{constructor(t){let e="v1";t.catalogName&&(e+=`/${t.catalogName}`);const r=t.baseUrl.endsWith("/")?t.baseUrl:`${t.baseUrl}/`;this.client=bs({baseUrl:r,auth:t.auth,fetchImpl:t.fetch}),this.accessDelegation=t.accessDelegation?.join(","),this.namespaceOps=new ws(this.client,e),this.tableOps=new _s(this.client,e,this.accessDelegation)}async listNamespaces(t){return this.namespaceOps.listNamespaces(t)}async createNamespace(t,e){return this.namespaceOps.createNamespace(t,e)}async dropNamespace(t){await this.namespaceOps.dropNamespace(t)}async loadNamespaceMetadata(t){return this.namespaceOps.loadNamespaceMetadata(t)}async listTables(t){return this.tableOps.listTables(t)}async createTable(t,e){return this.tableOps.createTable(t,e)}async updateTable(t,e){return this.tableOps.updateTable(t,e)}async dropTable(t,e){await this.tableOps.dropTable(t,e)}async loadTable(t){return this.tableOps.loadTable(t)}async namespaceExists(t){return this.namespaceOps.namespaceExists(t)}async tableExists(t){return this.tableOps.tableExists(t)}async createNamespaceIfNotExists(t,e){return this.namespaceOps.createNamespaceIfNotExists(t,e)}async createTableIfNotExists(t,e){return this.tableOps.createTableIfNotExists(t,e)}};function Ne(t){"@babel/helpers - typeof";return Ne=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Ne(t)}function Ss(t,e){if(Ne(t)!="object"||!t)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var n=r.call(t,e);if(Ne(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function ks(t){var e=Ss(t,"string");return Ne(e)=="symbol"?e:e+""}function Ts(t,e,r){return(e=ks(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function cr(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),r.push.apply(r,n)}return r}function T(t){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?cr(Object(r),!0).forEach(function(n){Ts(t,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):cr(Object(r)).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(r,n))})}return t}var yt=class extends Error{constructor(t,e="storage",r,n){super(t),this.__isStorageError=!0,this.namespace=e,this.name=e==="vectors"?"StorageVectorsError":"StorageError",this.status=r,this.statusCode=n}toJSON(){return{name:this.name,message:this.message,status:this.status,statusCode:this.statusCode}}};function gt(t){return typeof t=="object"&&t!==null&&"__isStorageError"in t}var It=class extends yt{constructor(t,e,r,n="storage"){super(t,n,e,r),this.name=n==="vectors"?"StorageVectorsApiError":"StorageApiError",this.status=e,this.statusCode=r}toJSON(){return T({},super.toJSON())}},Hr=class extends yt{constructor(t,e,r="storage"){super(t,r),this.name=r==="vectors"?"StorageVectorsUnknownError":"StorageUnknownError",this.originalError=e}};function ot(t,e,r){const n=T({},t),s=e.toLowerCase();for(const i of Object.keys(n))i.toLowerCase()===s&&delete n[i];return n[s]=r,n}function js(t){const e={};for(const[r,n]of Object.entries(t))e[r.toLowerCase()]=n;return e}const As=t=>t?(...e)=>t(...e):(...e)=>fetch(...e),Es=t=>{if(typeof t!="object"||t===null)return!1;const e=Object.getPrototypeOf(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)},qt=t=>{if(Array.isArray(t))return t.map(r=>qt(r));if(typeof t=="function"||t!==Object(t))return t;const e={};return Object.entries(t).forEach(([r,n])=>{const s=r.replace(/([-_][a-z])/gi,i=>i.toUpperCase().replace(/[-_]/g,""));e[s]=qt(n)}),e},Rs=t=>!t||typeof t!="string"||t.length===0||t.length>100||t.trim()!==t||t.includes("/")||t.includes("\\")?!1:/^[\w!.\*'() &$@=;:+,?-]+$/.test(t),ur=t=>{if(typeof t=="object"&&t!==null){const e=t;if(typeof e.msg=="string")return e.msg;if(typeof e.message=="string")return e.message;if(typeof e.error_description=="string")return e.error_description;if(typeof e.error=="string")return e.error;if(typeof e.error=="object"&&e.error!==null){const r=e.error;if(typeof r.message=="string")return r.message}}return JSON.stringify(t)},Os=async(t,e,r,n)=>{if(t!==null&&typeof t=="object"&&"json"in t&&typeof t.json=="function"){const s=t;let i=parseInt(String(s.status),10);Number.isFinite(i)||(i=500),s.json().then(a=>{const o=a?.statusCode||a?.code||i+"";e(new It(ur(a),i,o,n))}).catch(()=>{const a=i+"";e(new It(s.statusText||`HTTP ${i} error`,i,a,n))})}else e(new Hr(ur(t),t,n))},Ps=(t,e,r,n)=>{const s={method:t,headers:e?.headers||{}};if(t==="GET"||t==="HEAD"||!n)return T(T({},s),r);if(Es(n)){var i;const a=e?.headers||{};let o;for(const[l,c]of Object.entries(a))l.toLowerCase()==="content-type"&&(o=c);s.headers=ot(a,"Content-Type",(i=o)!==null&&i!==void 0?i:"application/json"),s.body=JSON.stringify(n)}else s.body=n;return e?.duplex&&(s.duplex=e.duplex),T(T({},s),r)};async function Oe(t,e,r,n,s,i,a){return new Promise((o,l)=>{t(r,Ps(e,n,s,i)).then(c=>{if(!c.ok)throw c;if(n?.noResolveJson)return c;if(a==="vectors"){const u=c.headers.get("content-type");if(c.headers.get("content-length")==="0"||c.status===204)return{};if(!u||!u.includes("application/json"))return{}}return c.json()}).then(c=>o(c)).catch(c=>Os(c,l,n,a))})}function Wr(t="storage"){return{get:async(e,r,n,s)=>Oe(e,"GET",r,n,s,void 0,t),post:async(e,r,n,s,i)=>Oe(e,"POST",r,s,i,n,t),put:async(e,r,n,s,i)=>Oe(e,"PUT",r,s,i,n,t),head:async(e,r,n,s)=>Oe(e,"HEAD",r,T(T({},n),{},{noResolveJson:!0}),s,void 0,t),remove:async(e,r,n,s,i)=>Oe(e,"DELETE",r,s,i,n,t)}}const zs=Wr("storage"),{get:Ue,post:F,put:$t,head:Cs,remove:Ht}=zs,B=Wr("vectors");var Ae=class{constructor(t,e={},r,n="storage"){this.shouldThrowOnError=!1,this.url=t,this.headers=js(e),this.fetch=As(r),this.namespace=n}throwOnError(){return this.shouldThrowOnError=!0,this}setHeader(t,e){return this.headers=ot(this.headers,t,e),this}async handleOperation(t){var e=this;try{return{data:await t(),error:null}}catch(r){if(e.shouldThrowOnError)throw r;if(gt(r))return{data:null,error:r};throw r}}};let Vr;Vr=Symbol.toStringTag;var Is=class{constructor(t,e){this.downloadFn=t,this.shouldThrowOnError=e,this[Vr]="StreamDownloadBuilder",this.promise=null}then(t,e){return this.getPromise().then(t,e)}catch(t){return this.getPromise().catch(t)}finally(t){return this.getPromise().finally(t)}getPromise(){return this.promise||(this.promise=this.execute()),this.promise}async execute(){var t=this;try{return{data:(await t.downloadFn()).body,error:null}}catch(e){if(t.shouldThrowOnError)throw e;if(gt(e))return{data:null,error:e};throw e}}};let Fr;Fr=Symbol.toStringTag;var qs=class{constructor(t,e){this.downloadFn=t,this.shouldThrowOnError=e,this[Fr]="BlobDownloadBuilder",this.promise=null}asStream(){return new Is(this.downloadFn,this.shouldThrowOnError)}then(t,e){return this.getPromise().then(t,e)}catch(t){return this.getPromise().catch(t)}finally(t){return this.getPromise().finally(t)}getPromise(){return this.promise||(this.promise=this.execute()),this.promise}async execute(){var t=this;try{return{data:await(await t.downloadFn()).blob(),error:null}}catch(e){if(t.shouldThrowOnError)throw e;if(gt(e))return{data:null,error:e};throw e}}};const $s={limit:100,offset:0,sortBy:{column:"name",order:"asc"}},hr={cacheControl:"3600",contentType:"text/plain;charset=UTF-8",upsert:!1};var Ls=class extends Ae{constructor(t,e={},r,n){super(t,e,n,"storage"),this.bucketId=r}async uploadOrUpdate(t,e,r,n){var s=this;return s.handleOperation(async()=>{let i;const a=T(T({},hr),n);let o=T(T({},s.headers),t==="POST"&&{"x-upsert":String(a.upsert)});const l=a.metadata;if(typeof Blob<"u"&&r instanceof Blob?(i=new FormData,i.append("cacheControl",a.cacheControl),l&&i.append("metadata",s.encodeMetadata(l)),i.append("",r)):typeof FormData<"u"&&r instanceof FormData?(i=r,i.has("cacheControl")||i.append("cacheControl",a.cacheControl),l&&!i.has("metadata")&&i.append("metadata",s.encodeMetadata(l))):(i=r,o["cache-control"]=`max-age=${a.cacheControl}`,o["content-type"]=a.contentType,l&&(o["x-metadata"]=s.toBase64(s.encodeMetadata(l))),(typeof ReadableStream<"u"&&i instanceof ReadableStream||i&&typeof i=="object"&&"pipe"in i&&typeof i.pipe=="function")&&!a.duplex&&(a.duplex="half")),n?.headers)for(const[d,f]of Object.entries(n.headers))o=ot(o,d,f);const c=s._removeEmptyFolders(e),u=s._getFinalPath(c),h=await(t=="PUT"?$t:F)(s.fetch,`${s.url}/object/${u}`,i,T({headers:o},a?.duplex?{duplex:a.duplex}:{}));return{path:c,id:h.Id,fullPath:h.Key}})}async upload(t,e,r){return this.uploadOrUpdate("POST",t,e,r)}async uploadToSignedUrl(t,e,r,n){var s=this;const i=s._removeEmptyFolders(t),a=s._getFinalPath(i),o=new URL(s.url+`/object/upload/sign/${a}`);return o.searchParams.set("token",e),s.handleOperation(async()=>{let l;const c=T(T({},hr),n);let u=T(T({},s.headers),{"x-upsert":String(c.upsert)});const h=c.metadata;if(typeof Blob<"u"&&r instanceof Blob?(l=new FormData,l.append("cacheControl",c.cacheControl),h&&l.append("metadata",s.encodeMetadata(h)),l.append("",r)):typeof FormData<"u"&&r instanceof FormData?(l=r,l.has("cacheControl")||l.append("cacheControl",c.cacheControl),h&&!l.has("metadata")&&l.append("metadata",s.encodeMetadata(h))):(l=r,u["cache-control"]=`max-age=${c.cacheControl}`,u["content-type"]=c.contentType,h&&(u["x-metadata"]=s.toBase64(s.encodeMetadata(h))),(typeof ReadableStream<"u"&&l instanceof ReadableStream||l&&typeof l=="object"&&"pipe"in l&&typeof l.pipe=="function")&&!c.duplex&&(c.duplex="half")),n?.headers)for(const[d,f]of Object.entries(n.headers))u=ot(u,d,f);return{path:i,fullPath:(await $t(s.fetch,o.toString(),l,T({headers:u},c?.duplex?{duplex:c.duplex}:{}))).Key}})}async createSignedUploadUrl(t,e){var r=this;return r.handleOperation(async()=>{let n=r._getFinalPath(t);const s=T({},r.headers);e?.upsert&&(s["x-upsert"]="true");const i=await F(r.fetch,`${r.url}/object/upload/sign/${n}`,{},{headers:s}),a=new URL(r.url+i.url),o=a.searchParams.get("token");if(!o)throw new yt("No token returned by API");return{signedUrl:a.toString(),path:t,token:o}})}async update(t,e,r){return this.uploadOrUpdate("PUT",t,e,r)}async move(t,e,r){var n=this;return n.handleOperation(async()=>await F(n.fetch,`${n.url}/object/move`,{bucketId:n.bucketId,sourceKey:t,destinationKey:e,destinationBucket:r?.destinationBucket},{headers:n.headers}))}async copy(t,e,r){var n=this;return n.handleOperation(async()=>({path:(await F(n.fetch,`${n.url}/object/copy`,{bucketId:n.bucketId,sourceKey:t,destinationKey:e,destinationBucket:r?.destinationBucket},{headers:n.headers})).Key}))}async createSignedUrl(t,e,r){var n=this;return n.handleOperation(async()=>{let s=n._getFinalPath(t);const i=typeof r?.transform=="object"&&r.transform!==null&&Object.keys(r.transform).length>0;let a=await F(n.fetch,`${n.url}/object/sign/${s}`,T({expiresIn:e},i?{transform:r.transform}:{}),{headers:n.headers});const o=new URLSearchParams;r?.download&&o.set("download",r.download===!0?"":r.download),r?.cacheNonce!=null&&o.set("cacheNonce",String(r.cacheNonce));const l=o.toString();return{signedUrl:encodeURI(`${n.url}${a.signedURL}${l?`&${l}`:""}`)}})}async createSignedUrls(t,e,r){var n=this;return n.handleOperation(async()=>{const s=await F(n.fetch,`${n.url}/object/sign/${n.bucketId}`,{expiresIn:e,paths:t},{headers:n.headers}),i=new URLSearchParams;r?.download&&i.set("download",r.download===!0?"":r.download),r?.cacheNonce!=null&&i.set("cacheNonce",String(r.cacheNonce));const a=i.toString();return s.map(o=>T(T({},o),{},{signedUrl:o.signedURL?encodeURI(`${n.url}${o.signedURL}${a?`&${a}`:""}`):null}))})}download(t,e,r){const n=typeof e?.transform=="object"&&e.transform!==null&&Object.keys(e.transform).length>0?"render/image/authenticated":"object",s=new URLSearchParams;e?.transform&&this.applyTransformOptsToQuery(s,e.transform),e?.cacheNonce!=null&&s.set("cacheNonce",String(e.cacheNonce));const i=s.toString(),a=this._getFinalPath(t),o=()=>Ue(this.fetch,`${this.url}/${n}/${a}${i?`?${i}`:""}`,{headers:this.headers,noResolveJson:!0},r);return new qs(o,this.shouldThrowOnError)}async info(t){var e=this;const r=e._getFinalPath(t);return e.handleOperation(async()=>qt(await Ue(e.fetch,`${e.url}/object/info/${r}`,{headers:e.headers})))}async exists(t){var e=this;const r=e._getFinalPath(t);try{return await Cs(e.fetch,`${e.url}/object/${r}`,{headers:e.headers}),{data:!0,error:null}}catch(s){if(e.shouldThrowOnError)throw s;if(gt(s)){var n;const i=s instanceof It?s.status:s instanceof Hr?(n=s.originalError)===null||n===void 0?void 0:n.status:void 0;if(i!==void 0&&[400,404].includes(i))return{data:!1,error:s}}throw s}}getPublicUrl(t,e){const r=this._getFinalPath(t),n=new URLSearchParams;e?.download&&n.set("download",e.download===!0?"":e.download),e?.transform&&this.applyTransformOptsToQuery(n,e.transform),e?.cacheNonce!=null&&n.set("cacheNonce",String(e.cacheNonce));const s=n.toString(),i=typeof e?.transform=="object"&&e.transform!==null&&Object.keys(e.transform).length>0?"render/image":"object";return{data:{publicUrl:encodeURI(`${this.url}/${i}/public/${r}`)+(s?`?${s}`:"")}}}async remove(t){var e=this;return e.handleOperation(async()=>await Ht(e.fetch,`${e.url}/object/${e.bucketId}`,{prefixes:t},{headers:e.headers}))}async list(t,e,r){var n=this;return n.handleOperation(async()=>{const s=T(T(T({},$s),e),{},{prefix:t||""});return await F(n.fetch,`${n.url}/object/list/${n.bucketId}`,s,{headers:n.headers},r)})}async listV2(t,e){var r=this;return r.handleOperation(async()=>{const n=T({},t);return await F(r.fetch,`${r.url}/object/list-v2/${r.bucketId}`,n,{headers:r.headers},e)})}encodeMetadata(t){return JSON.stringify(t)}toBase64(t){return typeof Buffer<"u"?Buffer.from(t).toString("base64"):btoa(t)}_getFinalPath(t){return`${this.bucketId}/${t.replace(/^\/+/,"")}`}_removeEmptyFolders(t){return t.replace(/^\/|\/$/g,"").replace(/\/+/g,"/")}applyTransformOptsToQuery(t,e){return e.width&&t.set("width",e.width.toString()),e.height&&t.set("height",e.height.toString()),e.resize&&t.set("resize",e.resize),e.format&&t.set("format",e.format),e.quality&&t.set("quality",e.quality.toString()),t}};const Ms="2.108.2",Ke={"X-Client-Info":`storage-js/${Ms}`};var Ns=class extends Ae{constructor(t,e={},r,n){const s=new URL(t);n?.useNewHostname&&/supabase\.(co|in|red)$/.test(s.hostname)&&!s.hostname.includes("storage.supabase.")&&(s.hostname=s.hostname.replace("supabase.","storage.supabase."));const i=s.href.replace(/\/$/,""),a=T(T({},Ke),e);super(i,a,r,"storage")}async listBuckets(t){var e=this;return e.handleOperation(async()=>{const r=e.listBucketOptionsToQueryString(t);return await Ue(e.fetch,`${e.url}/bucket${r}`,{headers:e.headers})})}async getBucket(t){var e=this;return e.handleOperation(async()=>await Ue(e.fetch,`${e.url}/bucket/${t}`,{headers:e.headers}))}async createBucket(t,e={public:!1}){var r=this;return r.handleOperation(async()=>await F(r.fetch,`${r.url}/bucket`,{id:t,name:t,type:e.type,public:e.public,file_size_limit:e.fileSizeLimit,allowed_mime_types:e.allowedMimeTypes},{headers:r.headers}))}async updateBucket(t,e){var r=this;return r.handleOperation(async()=>await $t(r.fetch,`${r.url}/bucket/${t}`,{id:t,name:t,public:e.public,file_size_limit:e.fileSizeLimit,allowed_mime_types:e.allowedMimeTypes},{headers:r.headers}))}async emptyBucket(t){var e=this;return e.handleOperation(async()=>await F(e.fetch,`${e.url}/bucket/${t}/empty`,{},{headers:e.headers}))}async deleteBucket(t){var e=this;return e.handleOperation(async()=>await Ht(e.fetch,`${e.url}/bucket/${t}`,{},{headers:e.headers}))}listBucketOptionsToQueryString(t){const e={};return t&&("limit"in t&&(e.limit=String(t.limit)),"offset"in t&&(e.offset=String(t.offset)),t.search&&(e.search=t.search),t.sortColumn&&(e.sortColumn=t.sortColumn),t.sortOrder&&(e.sortOrder=t.sortOrder)),Object.keys(e).length>0?"?"+new URLSearchParams(e).toString():""}},Us=class extends Ae{constructor(t,e={},r){const n=t.replace(/\/$/,""),s=T(T({},Ke),e);super(n,s,r,"storage")}async createBucket(t){var e=this;return e.handleOperation(async()=>await F(e.fetch,`${e.url}/bucket`,{name:t},{headers:e.headers}))}async listBuckets(t){var e=this;return e.handleOperation(async()=>{const r=new URLSearchParams;t?.limit!==void 0&&r.set("limit",t.limit.toString()),t?.offset!==void 0&&r.set("offset",t.offset.toString()),t?.sortColumn&&r.set("sortColumn",t.sortColumn),t?.sortOrder&&r.set("sortOrder",t.sortOrder),t?.search&&r.set("search",t.search);const n=r.toString(),s=n?`${e.url}/bucket?${n}`:`${e.url}/bucket`;return await Ue(e.fetch,s,{headers:e.headers})})}async deleteBucket(t){var e=this;return e.handleOperation(async()=>await Ht(e.fetch,`${e.url}/bucket/${t}`,{},{headers:e.headers}))}from(t){var e=this;if(!Rs(t))throw new yt("Invalid bucket name: File, folder, and bucket names must follow AWS object key naming guidelines and should avoid the use of any other characters.");const r=new xs({baseUrl:this.url,catalogName:t,auth:{type:"custom",getHeaders:async()=>e.headers},fetch:this.fetch}),n=this.shouldThrowOnError;return new Proxy(r,{get(s,i){const a=s[i];return typeof a!="function"?a:async(...o)=>{try{return{data:await a.apply(s,o),error:null}}catch(l){if(n)throw l;return{data:null,error:l}}}}})}},Ds=class extends Ae{constructor(t,e={},r){const n=t.replace(/\/$/,""),s=T(T({},Ke),{},{"Content-Type":"application/json"},e);super(n,s,r,"vectors")}async createIndex(t){var e=this;return e.handleOperation(async()=>await B.post(e.fetch,`${e.url}/CreateIndex`,t,{headers:e.headers})||{})}async getIndex(t,e){var r=this;return r.handleOperation(async()=>await B.post(r.fetch,`${r.url}/GetIndex`,{vectorBucketName:t,indexName:e},{headers:r.headers}))}async listIndexes(t){var e=this;return e.handleOperation(async()=>await B.post(e.fetch,`${e.url}/ListIndexes`,t,{headers:e.headers}))}async deleteIndex(t,e){var r=this;return r.handleOperation(async()=>await B.post(r.fetch,`${r.url}/DeleteIndex`,{vectorBucketName:t,indexName:e},{headers:r.headers})||{})}},Bs=class extends Ae{constructor(t,e={},r){const n=t.replace(/\/$/,""),s=T(T({},Ke),{},{"Content-Type":"application/json"},e);super(n,s,r,"vectors")}async putVectors(t){var e=this;if(t.vectors.length<1||t.vectors.length>500)throw new Error("Vector batch size must be between 1 and 500 items");return e.handleOperation(async()=>await B.post(e.fetch,`${e.url}/PutVectors`,t,{headers:e.headers})||{})}async getVectors(t){var e=this;return e.handleOperation(async()=>await B.post(e.fetch,`${e.url}/GetVectors`,t,{headers:e.headers}))}async listVectors(t){var e=this;if(t.segmentCount!==void 0){if(t.segmentCount<1||t.segmentCount>16)throw new Error("segmentCount must be between 1 and 16");if(t.segmentIndex!==void 0&&(t.segmentIndex<0||t.segmentIndex>=t.segmentCount))throw new Error(`segmentIndex must be between 0 and ${t.segmentCount-1}`)}return e.handleOperation(async()=>await B.post(e.fetch,`${e.url}/ListVectors`,t,{headers:e.headers}))}async queryVectors(t){var e=this;return e.handleOperation(async()=>await B.post(e.fetch,`${e.url}/QueryVectors`,t,{headers:e.headers}))}async deleteVectors(t){var e=this;if(t.keys.length<1||t.keys.length>500)throw new Error("Keys batch size must be between 1 and 500 items");return e.handleOperation(async()=>await B.post(e.fetch,`${e.url}/DeleteVectors`,t,{headers:e.headers})||{})}},Hs=class extends Ae{constructor(t,e={},r){const n=t.replace(/\/$/,""),s=T(T({},Ke),{},{"Content-Type":"application/json"},e);super(n,s,r,"vectors")}async createBucket(t){var e=this;return e.handleOperation(async()=>await B.post(e.fetch,`${e.url}/CreateVectorBucket`,{vectorBucketName:t},{headers:e.headers})||{})}async getBucket(t){var e=this;return e.handleOperation(async()=>await B.post(e.fetch,`${e.url}/GetVectorBucket`,{vectorBucketName:t},{headers:e.headers}))}async listBuckets(t={}){var e=this;return e.handleOperation(async()=>await B.post(e.fetch,`${e.url}/ListVectorBuckets`,t,{headers:e.headers}))}async deleteBucket(t){var e=this;return e.handleOperation(async()=>await B.post(e.fetch,`${e.url}/DeleteVectorBucket`,{vectorBucketName:t},{headers:e.headers})||{})}},Ws=class extends Hs{constructor(t,e={}){super(t,e.headers||{},e.fetch)}from(t){return new Vs(this.url,this.headers,t,this.fetch)}async createBucket(t){var e=()=>super.createBucket,r=this;return e().call(r,t)}async getBucket(t){var e=()=>super.getBucket,r=this;return e().call(r,t)}async listBuckets(t={}){var e=()=>super.listBuckets,r=this;return e().call(r,t)}async deleteBucket(t){var e=()=>super.deleteBucket,r=this;return e().call(r,t)}},Vs=class extends Ds{constructor(t,e,r,n){super(t,e,n),this.vectorBucketName=r}async createIndex(t){var e=()=>super.createIndex,r=this;return e().call(r,T(T({},t),{},{vectorBucketName:r.vectorBucketName}))}async listIndexes(t={}){var e=()=>super.listIndexes,r=this;return e().call(r,T(T({},t),{},{vectorBucketName:r.vectorBucketName}))}async getIndex(t){var e=()=>super.getIndex,r=this;return e().call(r,r.vectorBucketName,t)}async deleteIndex(t){var e=()=>super.deleteIndex,r=this;return e().call(r,r.vectorBucketName,t)}index(t){return new Fs(this.url,this.headers,this.vectorBucketName,t,this.fetch)}},Fs=class extends Bs{constructor(t,e,r,n,s){super(t,e,s),this.vectorBucketName=r,this.indexName=n}async putVectors(t){var e=()=>super.putVectors,r=this;return e().call(r,T(T({},t),{},{vectorBucketName:r.vectorBucketName,indexName:r.indexName}))}async getVectors(t){var e=()=>super.getVectors,r=this;return e().call(r,T(T({},t),{},{vectorBucketName:r.vectorBucketName,indexName:r.indexName}))}async listVectors(t={}){var e=()=>super.listVectors,r=this;return e().call(r,T(T({},t),{},{vectorBucketName:r.vectorBucketName,indexName:r.indexName}))}async queryVectors(t){var e=()=>super.queryVectors,r=this;return e().call(r,T(T({},t),{},{vectorBucketName:r.vectorBucketName,indexName:r.indexName}))}async deleteVectors(t){var e=()=>super.deleteVectors,r=this;return e().call(r,T(T({},t),{},{vectorBucketName:r.vectorBucketName,indexName:r.indexName}))}},Ks=class extends Ns{constructor(t,e={},r,n){super(t,e,r,n)}from(t){return new Ls(this.url,this.headers,t,this.fetch)}get vectors(){return new Ws(this.url+"/vector",{headers:this.headers,fetch:this.fetch})}get analytics(){return new Us(this.url+"/iceberg",this.headers,this.fetch)}};const Kr="2.108.2",te=30*1e3,ze=3,xt=ze*te,Gs=2*te,Js="http://localhost:9999",Qs="supabase.auth.token",Ys={"X-Client-Info":`gotrue-js/${Kr}`},Lt="X-Supabase-Api-Version",Gr={"2024-01-01":{timestamp:Date.parse("2024-01-01T00:00:00.0Z"),name:"2024-01-01"}},Xs=/^([a-z0-9_-]{4})*($|[a-z0-9_-]{3}$|[a-z0-9_-]{2}$)$/i,Zs=600*1e3;class De extends Error{constructor(e,r,n){super(e),this.__isAuthError=!0,this.name="AuthError",this.status=r,this.code=n}toJSON(){return{name:this.name,message:this.message,status:this.status,code:this.code}}}function _(t){return typeof t=="object"&&t!==null&&"__isAuthError"in t}class ei extends De{constructor(e,r,n){super(e,r,n),this.name="AuthApiError",this.status=r,this.code=n}}function ti(t){return _(t)&&t.name==="AuthApiError"}class K extends De{constructor(e,r){super(e),this.name="AuthUnknownError",this.originalError=r}}class Y extends De{constructor(e,r,n,s){super(e,n,s),this.name=r,this.status=n}}class I extends Y{constructor(){super("Auth session missing!","AuthSessionMissingError",400,void 0)}}function et(t){return _(t)&&t.name==="AuthSessionMissingError"}class me extends Y{constructor(){super("Auth session or user missing","AuthInvalidTokenResponseError",500,void 0)}}class tt extends Y{constructor(e){super(e,"AuthInvalidCredentialsError",400,void 0)}}class rt extends Y{constructor(e,r=null){super(e,"AuthImplicitGrantRedirectError",500,void 0),this.details=null,this.details=r}toJSON(){return Object.assign(Object.assign({},super.toJSON()),{details:this.details})}}function ri(t){return _(t)&&t.name==="AuthImplicitGrantRedirectError"}class dr extends Y{constructor(e,r=null){super(e,"AuthPKCEGrantCodeExchangeError",500,void 0),this.details=null,this.details=r}toJSON(){return Object.assign(Object.assign({},super.toJSON()),{details:this.details})}}class ni extends Y{constructor(){super("PKCE code verifier not found in storage. This can happen if the auth flow was initiated in a different browser or device, or if the storage was cleared. For SSR frameworks (Next.js, SvelteKit, etc.), use @supabase/ssr on both the server and client to store the code verifier in cookies.","AuthPKCECodeVerifierMissingError",400,"pkce_code_verifier_not_found")}}class Mt extends Y{constructor(e,r){super(e,"AuthRetryableFetchError",r,void 0)}}function pr(t){return _(t)&&t.name==="AuthRetryableFetchError"}class fr extends Y{constructor(e="Refresh result discarded: session state changed mid-flight (e.g., concurrent signOut)"){super(e,"AuthRefreshDiscardedError",409,void 0)}}function si(t){return _(t)&&t.name==="AuthRefreshDiscardedError"}class yr extends Y{constructor(e,r,n){super(e,"AuthWeakPasswordError",r,"weak_password"),this.reasons=n}toJSON(){return Object.assign(Object.assign({},super.toJSON()),{reasons:this.reasons})}}class lt extends Y{constructor(e){super(e,"AuthInvalidJwtError",400,"invalid_jwt")}}const ct="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".split(""),gr=` 	
\r=`.split(""),ii=(()=>{const t=new Array(128);for(let e=0;e<t.length;e+=1)t[e]=-1;for(let e=0;e<gr.length;e+=1)t[gr[e].charCodeAt(0)]=-2;for(let e=0;e<ct.length;e+=1)t[ct[e].charCodeAt(0)]=e;return t})();function mr(t,e,r){if(t!==null)for(e.queue=e.queue<<8|t,e.queuedBits+=8;e.queuedBits>=6;){const n=e.queue>>e.queuedBits-6&63;r(ct[n]),e.queuedBits-=6}else if(e.queuedBits>0)for(e.queue=e.queue<<6-e.queuedBits,e.queuedBits=6;e.queuedBits>=6;){const n=e.queue>>e.queuedBits-6&63;r(ct[n]),e.queuedBits-=6}}function Jr(t,e,r){const n=ii[t];if(n>-1)for(e.queue=e.queue<<6|n,e.queuedBits+=6;e.queuedBits>=8;)r(e.queue>>e.queuedBits-8&255),e.queuedBits-=8;else{if(n===-2)return;throw new Error(`Invalid Base64-URL character "${String.fromCharCode(t)}"`)}}function vr(t){const e=[],r=a=>{e.push(String.fromCodePoint(a))},n={utf8seq:0,codepoint:0},s={queue:0,queuedBits:0},i=a=>{li(a,n,r)};for(let a=0;a<t.length;a+=1)Jr(t.charCodeAt(a),s,i);return e.join("")}function ai(t,e){if(t<=127){e(t);return}else if(t<=2047){e(192|t>>6),e(128|t&63);return}else if(t<=65535){e(224|t>>12),e(128|t>>6&63),e(128|t&63);return}else if(t<=1114111){e(240|t>>18),e(128|t>>12&63),e(128|t>>6&63),e(128|t&63);return}throw new Error(`Unrecognized Unicode codepoint: ${t.toString(16)}`)}function oi(t,e){for(let r=0;r<t.length;r+=1){let n=t.charCodeAt(r);if(n>55295&&n<=56319){const s=(n-55296)*1024&65535;n=(t.charCodeAt(r+1)-56320&65535|s)+65536,r+=1}ai(n,e)}}function li(t,e,r){if(e.utf8seq===0){if(t<=127){r(t);return}for(let n=1;n<6;n+=1)if((t>>7-n&1)===0){e.utf8seq=n;break}if(e.utf8seq===2)e.codepoint=t&31;else if(e.utf8seq===3)e.codepoint=t&15;else if(e.utf8seq===4)e.codepoint=t&7;else throw new Error("Invalid UTF-8 sequence");e.utf8seq-=1}else if(e.utf8seq>0){if(t<=127)throw new Error("Invalid UTF-8 sequence");e.codepoint=e.codepoint<<6|t&63,e.utf8seq-=1,e.utf8seq===0&&r(e.codepoint)}}function Se(t){const e=[],r={queue:0,queuedBits:0},n=s=>{e.push(s)};for(let s=0;s<t.length;s+=1)Jr(t.charCodeAt(s),r,n);return new Uint8Array(e)}function ci(t){const e=[];return oi(t,r=>e.push(r)),new Uint8Array(e)}function he(t){const e=[],r={queue:0,queuedBits:0},n=s=>{e.push(s)};return t.forEach(s=>mr(s,r,n)),mr(null,r,n),e.join("")}function ui(t){return Math.round(Date.now()/1e3)+t}function hi(){return Symbol("auth-callback")}const q=()=>typeof window<"u"&&typeof document<"u",le={tested:!1,writable:!1},Qr=()=>{if(!q())return!1;try{if(typeof globalThis.localStorage!="object")return!1}catch{return!1}if(le.tested)return le.writable;const t=`lswt-${Math.random()}${Math.random()}`;try{globalThis.localStorage.setItem(t,t),globalThis.localStorage.removeItem(t),le.tested=!0,le.writable=!0}catch{le.tested=!0,le.writable=!1}return le.writable};function di(t){const e={},r=new URL(t);if(r.hash&&r.hash[0]==="#")try{new URLSearchParams(r.hash.substring(1)).forEach((s,i)=>{e[i]=s})}catch{}return r.searchParams.forEach((n,s)=>{e[s]=n}),e}const Yr=t=>t?(...e)=>t(...e):(...e)=>fetch(...e),pi=t=>typeof t=="object"&&t!==null&&"status"in t&&"ok"in t&&"json"in t&&typeof t.json=="function",_e=async(t,e,r)=>{await t.setItem(e,JSON.stringify(r))},W=async(t,e)=>{const r=await t.getItem(e);if(!r)return null;try{return JSON.parse(r)}catch{return null}},O=async(t,e)=>{await t.removeItem(e)};class mt{constructor(){this.promise=new mt.promiseConstructor((e,r)=>{this.resolve=e,this.reject=r})}}mt.promiseConstructor=Promise;function nt(t){const e=t.split(".");if(e.length!==3)throw new lt("Invalid JWT structure");for(let n=0;n<e.length;n++)if(!Xs.test(e[n]))throw new lt("JWT not in base64url format");return{header:JSON.parse(vr(e[0])),payload:JSON.parse(vr(e[1])),signature:Se(e[2]),raw:{header:e[0],payload:e[1]}}}async function fi(t){return await new Promise(e=>{setTimeout(()=>e(null),t)})}function yi(t,e){return new Promise((n,s)=>{(async()=>{for(let i=0;i<1/0;i++)try{const a=await t(i);if(!e(i,null,a)){n(a);return}}catch(a){if(!e(i,a)){s(a);return}}})()})}function gi(t){return("0"+t.toString(16)).substr(-2)}function mi(){const e=new Uint32Array(56);if(typeof crypto>"u"){const r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~",n=r.length;let s="";for(let i=0;i<56;i++)s+=r.charAt(Math.floor(Math.random()*n));return s}return crypto.getRandomValues(e),Array.from(e,gi).join("")}async function vi(t){const r=new TextEncoder().encode(t),n=await crypto.subtle.digest("SHA-256",r),s=new Uint8Array(n);return Array.from(s).map(i=>String.fromCharCode(i)).join("")}async function bi(t){if(!(typeof crypto<"u"&&typeof crypto.subtle<"u"&&typeof TextEncoder<"u"))return console.warn("WebCrypto API is not supported. Code challenge method will default to use plain instead of sha256."),t;const r=await vi(t);return btoa(r).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"")}async function ce(t,e,r=!1){const n=mi();let s=n;r&&(s+="/recovery"),await _e(t,`${e}-code-verifier`,s);const i=await bi(n);return[i,n===i?"plain":"s256"]}const wi=/^2[0-9]{3}-(0[1-9]|1[0-2])-(0[1-9]|1[0-9]|2[0-9]|3[0-1])$/i;function _i(t){const e=t.headers.get(Lt);if(!e||!e.match(wi))return null;try{return new Date(`${e}T00:00:00.0Z`)}catch{return null}}function xi(t){if(!t)throw new Error("Missing exp claim");const e=Math.floor(Date.now()/1e3);if(t<=e)throw new Error("JWT has expired")}function Si(t){switch(t){case"RS256":return{name:"RSASSA-PKCS1-v1_5",hash:{name:"SHA-256"}};case"ES256":return{name:"ECDSA",namedCurve:"P-256",hash:{name:"SHA-256"}};default:throw new Error("Invalid alg claim")}}const ki=/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;function X(t){if(!ki.test(t))throw new Error("@supabase/auth-js: Expected parameter to be UUID but is not")}function V(t){if(!t.passkey)throw new Error("@supabase/auth-js: the passkey API is experimental and disabled by default. Enable it by passing `auth: { experimental: { passkey: true } }` to createClient (or to the GoTrueClient constructor).")}function St(){const t={};return new Proxy(t,{get:(e,r)=>{if(r==="__isUserNotAvailableProxy")return!0;if(typeof r=="symbol"){const n=r.toString();if(n==="Symbol(Symbol.toPrimitive)"||n==="Symbol(Symbol.toStringTag)"||n==="Symbol(util.inspect.custom)")return}throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Accessing the "${r}" property of the session object is not supported. Please use getUser() instead.`)},set:(e,r)=>{throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Setting the "${r}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`)},deleteProperty:(e,r)=>{throw new Error(`@supabase/auth-js: client was created with userStorage option and there was no user stored in the user storage. Deleting the "${r}" property of the session object is not supported. Please use getUser() to fetch a user object you can manipulate.`)}})}function Ti(t,e){return new Proxy(t,{get:(r,n,s)=>{if(n==="__isInsecureUserWarningProxy")return!0;if(typeof n=="symbol"){const i=n.toString();if(i==="Symbol(Symbol.toPrimitive)"||i==="Symbol(Symbol.toStringTag)"||i==="Symbol(util.inspect.custom)"||i==="Symbol(nodejs.util.inspect.custom)")return Reflect.get(r,n,s)}return!e.value&&typeof n=="string"&&(console.warn("Using the user object as returned from supabase.auth.getSession() or from some supabase.auth.onAuthStateChange() events could be insecure! This value comes directly from the storage medium (usually cookies on the server) and may not be authentic. Use supabase.auth.getUser() instead which authenticates the data by contacting the Supabase Auth server."),e.value=!0),Reflect.get(r,n,s)}})}function br(t){return JSON.parse(JSON.stringify(t))}const ue=t=>{if(typeof t=="object"&&t!==null){const e=t;if(typeof e.msg=="string")return e.msg;if(typeof e.message=="string")return e.message;if(typeof e.error_description=="string")return e.error_description;if(typeof e.error=="string")return e.error}return JSON.stringify(t)},ji=[500,501,502,503,504,520,521,522,523,524,525,526,527,528,529,530];async function wr(t){var e;if(!pi(t))throw new Mt(ue(t),0);if(ji.includes(t.status))throw new Mt(ue(t),t.status);let r;try{r=await t.json()}catch(i){throw new K(ue(i),i)}let n;const s=_i(t);if(s&&s.getTime()>=Gr["2024-01-01"].timestamp&&typeof r=="object"&&r&&typeof r.code=="string"?n=r.code:typeof r=="object"&&r&&typeof r.error_code=="string"&&(n=r.error_code),n){if(n==="weak_password")throw new yr(ue(r),t.status,((e=r.weak_password)===null||e===void 0?void 0:e.reasons)||[]);if(n==="session_not_found")throw new I}else if(typeof r=="object"&&r&&typeof r.weak_password=="object"&&r.weak_password&&Array.isArray(r.weak_password.reasons)&&r.weak_password.reasons.length&&r.weak_password.reasons.reduce((i,a)=>i&&typeof a=="string",!0))throw new yr(ue(r),t.status,r.weak_password.reasons);throw new ei(ue(r),t.status||500,n)}const Ai=(t,e,r,n)=>{const s={method:t,headers:e?.headers||{}};return t==="GET"?s:(s.headers=Object.assign({"Content-Type":"application/json;charset=UTF-8"},e?.headers),s.body=JSON.stringify(n),Object.assign(Object.assign({},s),r))};async function S(t,e,r,n){var s;const i=Object.assign({},n?.headers);i[Lt]||(i[Lt]=Gr["2024-01-01"].name),n?.jwt&&(i.Authorization=`Bearer ${n.jwt}`);const a=(s=n?.query)!==null&&s!==void 0?s:{};n?.redirectTo&&(a.redirect_to=n.redirectTo);const o=Object.keys(a).length?"?"+new URLSearchParams(a).toString():"",l=await Ei(t,e,r+o,{headers:i,noResolveJson:n?.noResolveJson},{},n?.body);return n?.xform?n?.xform(l):{data:Object.assign({},l),error:null}}async function Ei(t,e,r,n,s,i){const a=Ai(e,n,s,i);let o;try{o=await t(r,Object.assign({},a))}catch(l){throw console.error(l),new Mt(ue(l),0)}if(o.ok||await wr(o),n?.noResolveJson)return o;try{return await o.json()}catch(l){await wr(l)}}function H(t){var e;let r=null;Pi(t)&&(r=Object.assign({},t),t.expires_at||(r.expires_at=ui(t.expires_in)));const n=(e=t.user)!==null&&e!==void 0?e:typeof t?.id=="string"?t:null;return{data:{session:r,user:n},error:null}}function _r(t){const e=H(t);return!e.error&&t.weak_password&&typeof t.weak_password=="object"&&Array.isArray(t.weak_password.reasons)&&t.weak_password.reasons.length&&t.weak_password.message&&typeof t.weak_password.message=="string"&&t.weak_password.reasons.reduce((r,n)=>r&&typeof n=="string",!0)&&(e.data.weak_password=t.weak_password),e}function ie(t){var e;return{data:{user:(e=t.user)!==null&&e!==void 0?e:t},error:null}}function Ri(t){return{data:t,error:null}}function Oi(t){const{action_link:e,email_otp:r,hashed_token:n,redirect_to:s,verification_type:i}=t,a=ft(t,["action_link","email_otp","hashed_token","redirect_to","verification_type"]),o={action_link:e,email_otp:r,hashed_token:n,redirect_to:s,verification_type:i},l=Object.assign({},a);return{data:{properties:o,user:l},error:null}}function xr(t){return t}function Pi(t){return!!t.access_token&&!!t.refresh_token&&!!t.expires_in}const kt=["global","local","others"];class zi{constructor({url:e="",headers:r={},fetch:n,experimental:s}){this.url=e,this.headers=r,this.fetch=Yr(n),this.experimental=s??{},this.mfa={listFactors:this._listFactors.bind(this),deleteFactor:this._deleteFactor.bind(this)},this.oauth={listClients:this._listOAuthClients.bind(this),createClient:this._createOAuthClient.bind(this),getClient:this._getOAuthClient.bind(this),updateClient:this._updateOAuthClient.bind(this),deleteClient:this._deleteOAuthClient.bind(this),regenerateClientSecret:this._regenerateOAuthClientSecret.bind(this)},this.customProviders={listProviders:this._listCustomProviders.bind(this),createProvider:this._createCustomProvider.bind(this),getProvider:this._getCustomProvider.bind(this),updateProvider:this._updateCustomProvider.bind(this),deleteProvider:this._deleteCustomProvider.bind(this)},this.passkey={listPasskeys:this._adminListPasskeys.bind(this),deletePasskey:this._adminDeletePasskey.bind(this)}}async signOut(e,r=kt[0]){if(kt.indexOf(r)<0)throw new Error(`@supabase/auth-js: Parameter scope must be one of ${kt.join(", ")}`);try{return await S(this.fetch,"POST",`${this.url}/logout?scope=${r}`,{headers:this.headers,jwt:e,noResolveJson:!0}),{data:null,error:null}}catch(n){if(_(n))return{data:null,error:n};throw n}}async inviteUserByEmail(e,r={}){try{return await S(this.fetch,"POST",`${this.url}/invite`,{body:{email:e,data:r.data},headers:this.headers,redirectTo:r.redirectTo,xform:ie})}catch(n){if(_(n))return{data:{user:null},error:n};throw n}}async generateLink(e){try{const{options:r}=e,n=ft(e,["options"]),s=Object.assign(Object.assign({},n),r);return"newEmail"in n&&(s.new_email=n?.newEmail,delete s.newEmail),await S(this.fetch,"POST",`${this.url}/admin/generate_link`,{body:s,headers:this.headers,xform:Oi,redirectTo:r?.redirectTo})}catch(r){if(_(r))return{data:{properties:null,user:null},error:r};throw r}}async createUser(e){try{return await S(this.fetch,"POST",`${this.url}/admin/users`,{body:e,headers:this.headers,xform:ie})}catch(r){if(_(r))return{data:{user:null},error:r};throw r}}async listUsers(e){var r,n,s,i,a,o,l;try{const c={nextPage:null,lastPage:0,total:0},u=await S(this.fetch,"GET",`${this.url}/admin/users`,{headers:this.headers,noResolveJson:!0,query:{page:(n=(r=e?.page)===null||r===void 0?void 0:r.toString())!==null&&n!==void 0?n:"",per_page:(i=(s=e?.perPage)===null||s===void 0?void 0:s.toString())!==null&&i!==void 0?i:""},xform:xr});if(u.error)throw u.error;const h=await u.json(),d=(a=u.headers.get("x-total-count"))!==null&&a!==void 0?a:0,f=(l=(o=u.headers.get("link"))===null||o===void 0?void 0:o.split(","))!==null&&l!==void 0?l:[];return f.length>0&&(f.forEach(y=>{const g=parseInt(y.split(";")[0].split("=")[1].substring(0,1)),w=JSON.parse(y.split(";")[1].split("=")[1]);c[`${w}Page`]=g}),c.total=parseInt(d)),{data:Object.assign(Object.assign({},h),c),error:null}}catch(c){if(_(c))return{data:{users:[]},error:c};throw c}}async getUserById(e){X(e);try{return await S(this.fetch,"GET",`${this.url}/admin/users/${e}`,{headers:this.headers,xform:ie})}catch(r){if(_(r))return{data:{user:null},error:r};throw r}}async updateUserById(e,r){X(e);try{return await S(this.fetch,"PUT",`${this.url}/admin/users/${e}`,{body:r,headers:this.headers,xform:ie})}catch(n){if(_(n))return{data:{user:null},error:n};throw n}}async deleteUser(e,r=!1){X(e);try{return await S(this.fetch,"DELETE",`${this.url}/admin/users/${e}`,{headers:this.headers,body:{should_soft_delete:r},xform:ie})}catch(n){if(_(n))return{data:{user:null},error:n};throw n}}async _listFactors(e){X(e.userId);try{const{data:r,error:n}=await S(this.fetch,"GET",`${this.url}/admin/users/${e.userId}/factors`,{headers:this.headers,xform:s=>({data:{factors:s},error:null})});return{data:r,error:n}}catch(r){if(_(r))return{data:null,error:r};throw r}}async _deleteFactor(e){X(e.userId),X(e.id);try{return{data:await S(this.fetch,"DELETE",`${this.url}/admin/users/${e.userId}/factors/${e.id}`,{headers:this.headers}),error:null}}catch(r){if(_(r))return{data:null,error:r};throw r}}async _listOAuthClients(e){var r,n,s,i,a,o,l;try{const c={nextPage:null,lastPage:0,total:0},u=await S(this.fetch,"GET",`${this.url}/admin/oauth/clients`,{headers:this.headers,noResolveJson:!0,query:{page:(n=(r=e?.page)===null||r===void 0?void 0:r.toString())!==null&&n!==void 0?n:"",per_page:(i=(s=e?.perPage)===null||s===void 0?void 0:s.toString())!==null&&i!==void 0?i:""},xform:xr});if(u.error)throw u.error;const h=await u.json(),d=(a=u.headers.get("x-total-count"))!==null&&a!==void 0?a:0,f=(l=(o=u.headers.get("link"))===null||o===void 0?void 0:o.split(","))!==null&&l!==void 0?l:[];return f.length>0&&(f.forEach(y=>{const g=parseInt(y.split(";")[0].split("=")[1].substring(0,1)),w=JSON.parse(y.split(";")[1].split("=")[1]);c[`${w}Page`]=g}),c.total=parseInt(d)),{data:Object.assign(Object.assign({},h),c),error:null}}catch(c){if(_(c))return{data:{clients:[]},error:c};throw c}}async _createOAuthClient(e){try{return await S(this.fetch,"POST",`${this.url}/admin/oauth/clients`,{body:e,headers:this.headers,xform:r=>({data:r,error:null})})}catch(r){if(_(r))return{data:null,error:r};throw r}}async _getOAuthClient(e){try{return await S(this.fetch,"GET",`${this.url}/admin/oauth/clients/${e}`,{headers:this.headers,xform:r=>({data:r,error:null})})}catch(r){if(_(r))return{data:null,error:r};throw r}}async _updateOAuthClient(e,r){try{return await S(this.fetch,"PUT",`${this.url}/admin/oauth/clients/${e}`,{body:r,headers:this.headers,xform:n=>({data:n,error:null})})}catch(n){if(_(n))return{data:null,error:n};throw n}}async _deleteOAuthClient(e){try{return await S(this.fetch,"DELETE",`${this.url}/admin/oauth/clients/${e}`,{headers:this.headers,noResolveJson:!0}),{data:null,error:null}}catch(r){if(_(r))return{data:null,error:r};throw r}}async _regenerateOAuthClientSecret(e){try{return await S(this.fetch,"POST",`${this.url}/admin/oauth/clients/${e}/regenerate_secret`,{headers:this.headers,xform:r=>({data:r,error:null})})}catch(r){if(_(r))return{data:null,error:r};throw r}}async _listCustomProviders(e){try{const r={};return e?.type&&(r.type=e.type),await S(this.fetch,"GET",`${this.url}/admin/custom-providers`,{headers:this.headers,query:r,xform:n=>{var s;return{data:{providers:(s=n?.providers)!==null&&s!==void 0?s:[]},error:null}}})}catch(r){if(_(r))return{data:{providers:[]},error:r};throw r}}async _createCustomProvider(e){try{return await S(this.fetch,"POST",`${this.url}/admin/custom-providers`,{body:e,headers:this.headers,xform:r=>({data:r,error:null})})}catch(r){if(_(r))return{data:null,error:r};throw r}}async _getCustomProvider(e){try{return await S(this.fetch,"GET",`${this.url}/admin/custom-providers/${e}`,{headers:this.headers,xform:r=>({data:r,error:null})})}catch(r){if(_(r))return{data:null,error:r};throw r}}async _updateCustomProvider(e,r){try{return await S(this.fetch,"PUT",`${this.url}/admin/custom-providers/${e}`,{body:r,headers:this.headers,xform:n=>({data:n,error:null})})}catch(n){if(_(n))return{data:null,error:n};throw n}}async _deleteCustomProvider(e){try{return await S(this.fetch,"DELETE",`${this.url}/admin/custom-providers/${e}`,{headers:this.headers,noResolveJson:!0}),{data:null,error:null}}catch(r){if(_(r))return{data:null,error:r};throw r}}async _adminListPasskeys(e){V(this.experimental),X(e.userId);try{return await S(this.fetch,"GET",`${this.url}/admin/users/${e.userId}/passkeys`,{headers:this.headers,xform:r=>({data:r,error:null})})}catch(r){if(_(r))return{data:null,error:r};throw r}}async _adminDeletePasskey(e){V(this.experimental),X(e.userId),X(e.passkeyId);try{return await S(this.fetch,"DELETE",`${this.url}/admin/users/${e.userId}/passkeys/${e.passkeyId}`,{headers:this.headers,noResolveJson:!0}),{data:null,error:null}}catch(r){if(_(r))return{data:null,error:r};throw r}}}function Sr(t={}){return{getItem:e=>t[e]||null,setItem:(e,r)=>{t[e]=r},removeItem:e=>{delete t[e]}}}globalThis&&Qr()&&globalThis.localStorage&&globalThis.localStorage.getItem("supabase.gotrue-js.locks.debug");class Ci extends Error{constructor(e){super(e),this.isAcquireTimeout=!0}}function Ii(){if(typeof globalThis!="object")try{Object.defineProperty(Object.prototype,"__magic__",{get:function(){return this},configurable:!0}),__magic__.globalThis=__magic__,delete Object.prototype.__magic__}catch{typeof self<"u"&&(self.globalThis=self)}}function Xr(t){if(!/^0x[a-fA-F0-9]{40}$/.test(t))throw new Error(`@supabase/auth-js: Address "${t}" is invalid.`);return t.toLowerCase()}function qi(t){return parseInt(t,16)}function $i(t){const e=new TextEncoder().encode(t);return"0x"+Array.from(e,n=>n.toString(16).padStart(2,"0")).join("")}function Li(t){var e;const{chainId:r,domain:n,expirationTime:s,issuedAt:i=new Date,nonce:a,notBefore:o,requestId:l,resources:c,scheme:u,uri:h,version:d}=t;{if(!Number.isInteger(r))throw new Error(`@supabase/auth-js: Invalid SIWE message field "chainId". Chain ID must be a EIP-155 chain ID. Provided value: ${r}`);if(!n)throw new Error('@supabase/auth-js: Invalid SIWE message field "domain". Domain must be provided.');if(a&&a.length<8)throw new Error(`@supabase/auth-js: Invalid SIWE message field "nonce". Nonce must be at least 8 characters. Provided value: ${a}`);if(!h)throw new Error('@supabase/auth-js: Invalid SIWE message field "uri". URI must be provided.');if(d!=="1")throw new Error(`@supabase/auth-js: Invalid SIWE message field "version". Version must be '1'. Provided value: ${d}`);if(!((e=t.statement)===null||e===void 0)&&e.includes(`
`))throw new Error(`@supabase/auth-js: Invalid SIWE message field "statement". Statement must not include '\\n'. Provided value: ${t.statement}`)}const f=Xr(t.address),y=u?`${u}://${n}`:n,g=t.statement?`${t.statement}
`:"",w=`${y} wants you to sign in with your Ethereum account:
${f}

${g}`;let m=`URI: ${h}
Version: ${d}
Chain ID: ${r}${a?`
Nonce: ${a}`:""}
Issued At: ${i.toISOString()}`;if(s&&(m+=`
Expiration Time: ${s.toISOString()}`),o&&(m+=`
Not Before: ${o.toISOString()}`),l&&(m+=`
Request ID: ${l}`),c){let v=`
Resources:`;for(const b of c){if(!b||typeof b!="string")throw new Error(`@supabase/auth-js: Invalid SIWE message field "resources". Every resource must be a valid string. Provided value: ${b}`);v+=`
- ${b}`}m+=v}return`${w}
${m}`}class z extends Error{constructor({message:e,code:r,cause:n,name:s}){var i;super(e,{cause:n}),this.__isWebAuthnError=!0,this.name=(i=s??(n instanceof Error?n.name:void 0))!==null&&i!==void 0?i:"Unknown Error",this.code=r}toJSON(){return{name:this.name,message:this.message,code:this.code}}}class ut extends z{constructor(e,r){super({code:"ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",cause:r,message:e}),this.name="WebAuthnUnknownError",this.originalError=r}}function Mi({error:t,options:e}){var r,n,s;const{publicKey:i}=e;if(!i)throw Error("options was missing required publicKey property");if(t.name==="AbortError"){if(e.signal instanceof AbortSignal)return new z({message:"Registration ceremony was sent an abort signal",code:"ERROR_CEREMONY_ABORTED",cause:t})}else if(t.name==="ConstraintError"){if(((r=i.authenticatorSelection)===null||r===void 0?void 0:r.requireResidentKey)===!0)return new z({message:"Discoverable credentials were required but no available authenticator supported it",code:"ERROR_AUTHENTICATOR_MISSING_DISCOVERABLE_CREDENTIAL_SUPPORT",cause:t});if(e.mediation==="conditional"&&((n=i.authenticatorSelection)===null||n===void 0?void 0:n.userVerification)==="required")return new z({message:"User verification was required during automatic registration but it could not be performed",code:"ERROR_AUTO_REGISTER_USER_VERIFICATION_FAILURE",cause:t});if(((s=i.authenticatorSelection)===null||s===void 0?void 0:s.userVerification)==="required")return new z({message:"User verification was required but no available authenticator supported it",code:"ERROR_AUTHENTICATOR_MISSING_USER_VERIFICATION_SUPPORT",cause:t})}else{if(t.name==="InvalidStateError")return new z({message:"The authenticator was previously registered",code:"ERROR_AUTHENTICATOR_PREVIOUSLY_REGISTERED",cause:t});if(t.name==="NotAllowedError")return new z({message:t.message,code:"ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",cause:t});if(t.name==="NotSupportedError")return i.pubKeyCredParams.filter(o=>o.type==="public-key").length===0?new z({message:'No entry in pubKeyCredParams was of type "public-key"',code:"ERROR_MALFORMED_PUBKEYCREDPARAMS",cause:t}):new z({message:"No available authenticator supported any of the specified pubKeyCredParams algorithms",code:"ERROR_AUTHENTICATOR_NO_SUPPORTED_PUBKEYCREDPARAMS_ALG",cause:t});if(t.name==="SecurityError"){const a=window.location.hostname;if(Zr(a)){if(i.rp.id!==a)return new z({message:`The RP ID "${i.rp.id}" is invalid for this domain`,code:"ERROR_INVALID_RP_ID",cause:t})}else return new z({message:`${window.location.hostname} is an invalid domain`,code:"ERROR_INVALID_DOMAIN",cause:t})}else if(t.name==="TypeError"){if(i.user.id.byteLength<1||i.user.id.byteLength>64)return new z({message:"User ID was not between 1 and 64 characters",code:"ERROR_INVALID_USER_ID_LENGTH",cause:t})}else if(t.name==="UnknownError")return new z({message:"The authenticator was unable to process the specified options, or could not create a new credential",code:"ERROR_AUTHENTICATOR_GENERAL_ERROR",cause:t})}return new z({message:"a Non-Webauthn related error has occurred",code:"ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",cause:t})}function Ni({error:t,options:e}){const{publicKey:r}=e;if(!r)throw Error("options was missing required publicKey property");if(t.name==="AbortError"){if(e.signal instanceof AbortSignal)return new z({message:"Authentication ceremony was sent an abort signal",code:"ERROR_CEREMONY_ABORTED",cause:t})}else{if(t.name==="NotAllowedError")return new z({message:t.message,code:"ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",cause:t});if(t.name==="SecurityError"){const n=window.location.hostname;if(Zr(n)){if(r.rpId!==n)return new z({message:`The RP ID "${r.rpId}" is invalid for this domain`,code:"ERROR_INVALID_RP_ID",cause:t})}else return new z({message:`${window.location.hostname} is an invalid domain`,code:"ERROR_INVALID_DOMAIN",cause:t})}else if(t.name==="UnknownError")return new z({message:"The authenticator was unable to process the specified options, or could not create a new assertion signature",code:"ERROR_AUTHENTICATOR_GENERAL_ERROR",cause:t})}return new z({message:"a Non-Webauthn related error has occurred",code:"ERROR_PASSTHROUGH_SEE_CAUSE_PROPERTY",cause:t})}class Ui{createNewAbortSignal(){if(this.controller){const r=new Error("Cancelling existing WebAuthn API call for new one");r.name="AbortError",this.controller.abort(r)}const e=new AbortController;return this.controller=e,e.signal}cancelCeremony(){if(this.controller){const e=new Error("Manually cancelling existing WebAuthn API call");e.name="AbortError",this.controller.abort(e),this.controller=void 0}}}const Nt=new Ui;function kr(t){if(!t)throw new Error("Credential creation options are required");if(typeof PublicKeyCredential<"u"&&"parseCreationOptionsFromJSON"in PublicKeyCredential&&typeof PublicKeyCredential.parseCreationOptionsFromJSON=="function")return PublicKeyCredential.parseCreationOptionsFromJSON(t);const{challenge:e,user:r,excludeCredentials:n}=t,s=ft(t,["challenge","user","excludeCredentials"]),i=Se(e).buffer,a=Object.assign(Object.assign({},r),{id:Se(r.id).buffer}),o=Object.assign(Object.assign({},s),{challenge:i,user:a});if(n&&n.length>0){o.excludeCredentials=new Array(n.length);for(let l=0;l<n.length;l++){const c=n[l];o.excludeCredentials[l]=Object.assign(Object.assign({},c),{id:Se(c.id).buffer,type:c.type||"public-key",transports:c.transports})}}return o}function Tr(t){if(!t)throw new Error("Credential request options are required");if(typeof PublicKeyCredential<"u"&&"parseRequestOptionsFromJSON"in PublicKeyCredential&&typeof PublicKeyCredential.parseRequestOptionsFromJSON=="function")return PublicKeyCredential.parseRequestOptionsFromJSON(t);const{challenge:e,allowCredentials:r}=t,n=ft(t,["challenge","allowCredentials"]),s=Se(e).buffer,i=Object.assign(Object.assign({},n),{challenge:s});if(r&&r.length>0){i.allowCredentials=new Array(r.length);for(let a=0;a<r.length;a++){const o=r[a];i.allowCredentials[a]=Object.assign(Object.assign({},o),{id:Se(o.id).buffer,type:o.type||"public-key",transports:o.transports})}}return i}function jr(t){var e;if("toJSON"in t&&typeof t.toJSON=="function")return t.toJSON();const r=t;return{id:t.id,rawId:t.id,response:{attestationObject:he(new Uint8Array(t.response.attestationObject)),clientDataJSON:he(new Uint8Array(t.response.clientDataJSON))},type:"public-key",clientExtensionResults:t.getClientExtensionResults(),authenticatorAttachment:(e=r.authenticatorAttachment)!==null&&e!==void 0?e:void 0}}function Ar(t){var e;if("toJSON"in t&&typeof t.toJSON=="function")return t.toJSON();const r=t,n=t.getClientExtensionResults(),s=t.response;return{id:t.id,rawId:t.id,response:{authenticatorData:he(new Uint8Array(s.authenticatorData)),clientDataJSON:he(new Uint8Array(s.clientDataJSON)),signature:he(new Uint8Array(s.signature)),userHandle:s.userHandle?he(new Uint8Array(s.userHandle)):void 0},type:"public-key",clientExtensionResults:n,authenticatorAttachment:(e=r.authenticatorAttachment)!==null&&e!==void 0?e:void 0}}function Zr(t){return t==="localhost"||/^([a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,}$/i.test(t)}function ht(){var t,e;return!!(q()&&"PublicKeyCredential"in window&&window.PublicKeyCredential&&"credentials"in navigator&&typeof((t=navigator?.credentials)===null||t===void 0?void 0:t.create)=="function"&&typeof((e=navigator?.credentials)===null||e===void 0?void 0:e.get)=="function")}async function en(t){try{const e=await navigator.credentials.create(t);return e?e instanceof PublicKeyCredential?{data:e,error:null}:{data:null,error:new ut("Browser returned unexpected credential type",e)}:{data:null,error:new ut("Empty credential response",e)}}catch(e){return{data:null,error:Mi({error:e,options:t})}}}async function tn(t){try{const e=await navigator.credentials.get(t);return e?e instanceof PublicKeyCredential?{data:e,error:null}:{data:null,error:new ut("Browser returned unexpected credential type",e)}:{data:null,error:new ut("Empty credential response",e)}}catch(e){return{data:null,error:Ni({error:e,options:t})}}}const Di={hints:["security-key"],authenticatorSelection:{authenticatorAttachment:"cross-platform",requireResidentKey:!1,userVerification:"preferred",residentKey:"discouraged"},attestation:"direct"},Bi={userVerification:"preferred",hints:["security-key"],attestation:"direct"};function dt(...t){const e=s=>s!==null&&typeof s=="object"&&!Array.isArray(s),r=s=>s instanceof ArrayBuffer||ArrayBuffer.isView(s),n={};for(const s of t)if(s)for(const i in s){const a=s[i];if(a!==void 0)if(Array.isArray(a))n[i]=a;else if(r(a))n[i]=a;else if(e(a)){const o=n[i];e(o)?n[i]=dt(o,a):n[i]=dt(a)}else n[i]=a}return n}function Hi(t,e){return dt(Di,t,e||{})}function Wi(t,e){return dt(Bi,t,e||{})}class Vi{constructor(e){this.client=e,this.enroll=this._enroll.bind(this),this.challenge=this._challenge.bind(this),this.verify=this._verify.bind(this),this.authenticate=this._authenticate.bind(this),this.register=this._register.bind(this)}async _enroll(e){return this.client.mfa.enroll(Object.assign(Object.assign({},e),{factorType:"webauthn"}))}async _challenge({factorId:e,webauthn:r,friendlyName:n,signal:s},i){var a;try{const{data:o,error:l}=await this.client.mfa.challenge({factorId:e,webauthn:r});if(!o)return{data:null,error:l};const c=s??Nt.createNewAbortSignal();if(o.webauthn.type==="create"){const{user:u}=o.webauthn.credential_options.publicKey;if(!u.name){const h=n;if(h)u.name=`${u.id}:${h}`;else{const f=(await this.client.getUser()).data.user,y=((a=f?.user_metadata)===null||a===void 0?void 0:a.name)||f?.email||f?.id||"User";u.name=`${u.id}:${y}`}}u.displayName||(u.displayName=u.name)}switch(o.webauthn.type){case"create":{const u=Hi(o.webauthn.credential_options.publicKey,i?.create),{data:h,error:d}=await en({publicKey:u,signal:c});return h?{data:{factorId:e,challengeId:o.id,webauthn:{type:o.webauthn.type,credential_response:h}},error:null}:{data:null,error:d}}case"request":{const u=Wi(o.webauthn.credential_options.publicKey,i?.request),{data:h,error:d}=await tn(Object.assign(Object.assign({},o.webauthn.credential_options),{publicKey:u,signal:c}));return h?{data:{factorId:e,challengeId:o.id,webauthn:{type:o.webauthn.type,credential_response:h}},error:null}:{data:null,error:d}}}}catch(o){return _(o)?{data:null,error:o}:{data:null,error:new K("Unexpected error in challenge",o)}}}async _verify({challengeId:e,factorId:r,webauthn:n}){return this.client.mfa.verify({factorId:r,challengeId:e,webauthn:n})}async _authenticate({factorId:e,webauthn:{rpId:r=typeof window<"u"?window.location.hostname:void 0,rpOrigins:n=typeof window<"u"?[window.location.origin]:void 0,signal:s}={}},i){if(!r)return{data:null,error:new De("rpId is required for WebAuthn authentication")};try{if(!ht())return{data:null,error:new K("Browser does not support WebAuthn",null)};const{data:a,error:o}=await this.challenge({factorId:e,webauthn:{rpId:r,rpOrigins:n},signal:s},{request:i});if(!a)return{data:null,error:o};const{webauthn:l}=a;return this._verify({factorId:e,challengeId:a.challengeId,webauthn:{type:l.type,rpId:r,rpOrigins:n,credential_response:l.credential_response}})}catch(a){return _(a)?{data:null,error:a}:{data:null,error:new K("Unexpected error in authenticate",a)}}}async _register({friendlyName:e,webauthn:{rpId:r=typeof window<"u"?window.location.hostname:void 0,rpOrigins:n=typeof window<"u"?[window.location.origin]:void 0,signal:s}={}},i){if(!r)return{data:null,error:new De("rpId is required for WebAuthn registration")};try{if(!ht())return{data:null,error:new K("Browser does not support WebAuthn",null)};const{data:a,error:o}=await this._enroll({friendlyName:e});if(!a)return await this.client.mfa.listFactors().then(u=>{var h;return(h=u.data)===null||h===void 0?void 0:h.all.find(d=>d.factor_type==="webauthn"&&d.friendly_name===e&&d.status!=="unverified")}).then(u=>u?this.client.mfa.unenroll({factorId:u?.id}):void 0),{data:null,error:o};const{data:l,error:c}=await this._challenge({factorId:a.id,friendlyName:a.friendly_name,webauthn:{rpId:r,rpOrigins:n},signal:s},{create:i});return l?this._verify({factorId:a.id,challengeId:l.challengeId,webauthn:{rpId:r,rpOrigins:n,type:l.webauthn.type,credential_response:l.webauthn.credential_response}}):{data:null,error:c}}catch(a){return _(a)?{data:null,error:a}:{data:null,error:new K("Unexpected error in register",a)}}}}Ii();const Fi={url:Js,storageKey:Qs,autoRefreshToken:!0,persistSession:!0,detectSessionInUrl:!0,headers:Ys,flowType:"implicit",debug:!1,hasCustomAuthorizationHeader:!1,throwOnError:!1,lockAcquireTimeout:5e3,skipAutoInitialize:!1,experimental:{}},ve={};class Be{get jwks(){var e,r;return(r=(e=ve[this.storageKey])===null||e===void 0?void 0:e.jwks)!==null&&r!==void 0?r:{keys:[]}}set jwks(e){ve[this.storageKey]=Object.assign(Object.assign({},ve[this.storageKey]),{jwks:e})}get jwks_cached_at(){var e,r;return(r=(e=ve[this.storageKey])===null||e===void 0?void 0:e.cachedAt)!==null&&r!==void 0?r:Number.MIN_SAFE_INTEGER}set jwks_cached_at(e){ve[this.storageKey]=Object.assign(Object.assign({},ve[this.storageKey]),{cachedAt:e})}constructor(e){var r,n,s;this.userStorage=null,this.memoryStorage=null,this.stateChangeEmitters=new Map,this.autoRefreshTicker=null,this.autoRefreshTickTimeout=null,this.visibilityChangedCallback=null,this.refreshingDeferred=null,this.lastRefreshFailure=null,this._sessionRemovalEpoch=0,this.initializePromise=null,this.detectSessionInUrl=!0,this.hasCustomAuthorizationHeader=!1,this.suppressGetSessionWarning=!1,this.lock=null,this.lockAcquired=!1,this.pendingInLock=[],this.broadcastChannel=null,this.logger=console.log;const i=Object.assign(Object.assign({},Fi),e);if(this.storageKey=i.storageKey,this.instanceID=(r=Be.nextInstanceID[this.storageKey])!==null&&r!==void 0?r:0,Be.nextInstanceID[this.storageKey]=this.instanceID+1,this.logDebugMessages=!!i.debug,typeof i.debug=="function"&&(this.logger=i.debug),this.instanceID>0&&q()){const a=`${this._logPrefix()} Multiple GoTrueClient instances detected in the same browser context. It is not an error, but this should be avoided as it may produce undefined behavior when used concurrently under the same storage key.`;console.warn(a),this.logDebugMessages&&console.trace(a)}if(this.persistSession=i.persistSession,this.autoRefreshToken=i.autoRefreshToken,this.experimental=(n=i.experimental)!==null&&n!==void 0?n:{},this.admin=new zi({url:i.url,headers:i.headers,fetch:i.fetch,experimental:this.experimental}),this.url=i.url,this.headers=i.headers,this.fetch=Yr(i.fetch),this.detectSessionInUrl=i.detectSessionInUrl,this.flowType=i.flowType,this.hasCustomAuthorizationHeader=i.hasCustomAuthorizationHeader,this.throwOnError=i.throwOnError,this.lockAcquireTimeout=i.lockAcquireTimeout,i.lock!=null&&(this.lock=i.lock),this.jwks||(this.jwks={keys:[]},this.jwks_cached_at=Number.MIN_SAFE_INTEGER),this.mfa={verify:this._verify.bind(this),enroll:this._enroll.bind(this),unenroll:this._unenroll.bind(this),challenge:this._challenge.bind(this),listFactors:this._listFactors.bind(this),challengeAndVerify:this._challengeAndVerify.bind(this),getAuthenticatorAssuranceLevel:this._getAuthenticatorAssuranceLevel.bind(this),webauthn:new Vi(this)},this.oauth={getAuthorizationDetails:this._getAuthorizationDetails.bind(this),approveAuthorization:this._approveAuthorization.bind(this),denyAuthorization:this._denyAuthorization.bind(this),listGrants:this._listOAuthGrants.bind(this),revokeGrant:this._revokeOAuthGrant.bind(this)},this.passkey={startRegistration:this._startPasskeyRegistration.bind(this),verifyRegistration:this._verifyPasskeyRegistration.bind(this),startAuthentication:this._startPasskeyAuthentication.bind(this),verifyAuthentication:this._verifyPasskeyAuthentication.bind(this),list:this._listPasskeys.bind(this),update:this._updatePasskey.bind(this),delete:this._deletePasskey.bind(this)},this.persistSession?(i.storage?this.storage=i.storage:Qr()?this.storage=globalThis.localStorage:(this.memoryStorage={},this.storage=Sr(this.memoryStorage)),i.userStorage&&(this.userStorage=i.userStorage)):(this.memoryStorage={},this.storage=Sr(this.memoryStorage)),q()&&globalThis.BroadcastChannel&&this.persistSession&&this.storageKey){try{this.broadcastChannel=new globalThis.BroadcastChannel(this.storageKey)}catch(a){console.error("Failed to create a new BroadcastChannel, multi-tab state changes will not be available",a)}(s=this.broadcastChannel)===null||s===void 0||s.addEventListener("message",async a=>{this._debug("received broadcast notification from other tab or client",a),(a.data.event==="TOKEN_REFRESHED"||a.data.event==="SIGNED_IN")&&(this.lastRefreshFailure=null);try{await this._notifyAllSubscribers(a.data.event,a.data.session,!1)}catch(o){this._debug("#broadcastChannel","error",o)}})}i.skipAutoInitialize||this.initialize().catch(a=>{this._debug("#initialize()","error",a)})}isThrowOnErrorEnabled(){return this.throwOnError}_returnResult(e){if(this.throwOnError&&e&&e.error)throw e.error;return e}_logPrefix(){return`GoTrueClient@${this.storageKey}:${this.instanceID} (${Kr}) ${new Date().toISOString()}`}_debug(...e){return this.logDebugMessages&&this.logger(this._logPrefix(),...e),this}async initialize(){return this.initializePromise?await this.initializePromise:(this.initializePromise=(async()=>this.lock!=null?await this._acquireLock(this.lockAcquireTimeout,async()=>await this._initialize()):await this._initialize())(),await this.initializePromise)}async _initialize(){var e;try{let r={},n="none";if(q()&&(r=di(window.location.href),this._isImplicitGrantCallback(r)?n="implicit":await this._isPKCECallback(r)&&(n="pkce")),q()&&this.detectSessionInUrl&&n!=="none"){const{data:s,error:i}=await this._getSessionFromURL(r,n);if(i){if(this._debug("#_initialize()","error detecting session from URL",i),ri(i)){const l=(e=i.details)===null||e===void 0?void 0:e.code;if(l==="identity_already_exists"||l==="identity_not_found"||l==="single_identity_not_deletable")return{error:i}}return{error:i}}const{session:a,redirectType:o}=s;return this._debug("#_initialize()","detected session in URL",a,"redirect type",o),await this._saveSession(a),setTimeout(async()=>{o==="recovery"?await this._notifyAllSubscribers("PASSWORD_RECOVERY",a):await this._notifyAllSubscribers("SIGNED_IN",a)},0),{error:null}}return await this._recoverAndRefresh(),{error:null}}catch(r){return _(r)?this._returnResult({error:r}):this._returnResult({error:new K("Unexpected error during initialization",r)})}finally{await this._handleVisibilityChange(),this._debug("#_initialize()","end")}}async signInAnonymously(e){var r,n,s;try{const i=await S(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,body:{data:(n=(r=e?.options)===null||r===void 0?void 0:r.data)!==null&&n!==void 0?n:{},gotrue_meta_security:{captcha_token:(s=e?.options)===null||s===void 0?void 0:s.captchaToken}},xform:H}),{data:a,error:o}=i;if(o||!a)return this._returnResult({data:{user:null,session:null},error:o});const l=a.session,c=a.user;return a.session&&(await this._saveSession(a.session),await this._notifyAllSubscribers("SIGNED_IN",l)),this._returnResult({data:{user:c,session:l},error:null})}catch(i){if(_(i))return this._returnResult({data:{user:null,session:null},error:i});throw i}}async signUp(e){var r,n,s;try{let i;if("email"in e){const{email:u,password:h,options:d}=e;let f=null,y=null;this.flowType==="pkce"&&([f,y]=await ce(this.storage,this.storageKey)),i=await S(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,redirectTo:d?.emailRedirectTo,body:{email:u,password:h,data:(r=d?.data)!==null&&r!==void 0?r:{},gotrue_meta_security:{captcha_token:d?.captchaToken},code_challenge:f,code_challenge_method:y},xform:H})}else if("phone"in e){const{phone:u,password:h,options:d}=e;i=await S(this.fetch,"POST",`${this.url}/signup`,{headers:this.headers,body:{phone:u,password:h,data:(n=d?.data)!==null&&n!==void 0?n:{},channel:(s=d?.channel)!==null&&s!==void 0?s:"sms",gotrue_meta_security:{captcha_token:d?.captchaToken}},xform:H})}else throw new tt("You must provide either an email or phone number and a password");const{data:a,error:o}=i;if(o||!a)return await O(this.storage,`${this.storageKey}-code-verifier`),this._returnResult({data:{user:null,session:null},error:o});const l=a.session,c=a.user;return a.session&&(await this._saveSession(a.session),await this._notifyAllSubscribers("SIGNED_IN",l)),this._returnResult({data:{user:c,session:l},error:null})}catch(i){if(await O(this.storage,`${this.storageKey}-code-verifier`),_(i))return this._returnResult({data:{user:null,session:null},error:i});throw i}}async signInWithPassword(e){try{let r;if("email"in e){const{email:i,password:a,options:o}=e;r=await S(this.fetch,"POST",`${this.url}/token?grant_type=password`,{headers:this.headers,body:{email:i,password:a,gotrue_meta_security:{captcha_token:o?.captchaToken}},xform:_r})}else if("phone"in e){const{phone:i,password:a,options:o}=e;r=await S(this.fetch,"POST",`${this.url}/token?grant_type=password`,{headers:this.headers,body:{phone:i,password:a,gotrue_meta_security:{captcha_token:o?.captchaToken}},xform:_r})}else throw new tt("You must provide either an email or phone number and a password");const{data:n,error:s}=r;if(s)return this._returnResult({data:{user:null,session:null},error:s});if(!n||!n.session||!n.user){const i=new me;return this._returnResult({data:{user:null,session:null},error:i})}return n.session&&(await this._saveSession(n.session),await this._notifyAllSubscribers("SIGNED_IN",n.session)),this._returnResult({data:Object.assign({user:n.user,session:n.session},n.weak_password?{weakPassword:n.weak_password}:null),error:s})}catch(r){if(_(r))return this._returnResult({data:{user:null,session:null},error:r});throw r}}async signInWithOAuth(e){var r,n,s,i;return await this._handleProviderSignIn(e.provider,{redirectTo:(r=e.options)===null||r===void 0?void 0:r.redirectTo,scopes:(n=e.options)===null||n===void 0?void 0:n.scopes,queryParams:(s=e.options)===null||s===void 0?void 0:s.queryParams,skipBrowserRedirect:(i=e.options)===null||i===void 0?void 0:i.skipBrowserRedirect})}async exchangeCodeForSession(e){return await this.initializePromise,this.lock!=null?this._acquireLock(this.lockAcquireTimeout,async()=>this._exchangeCodeForSession(e)):this._exchangeCodeForSession(e)}async signInWithWeb3(e){const{chain:r}=e;switch(r){case"ethereum":return await this.signInWithEthereum(e);case"solana":return await this.signInWithSolana(e);default:throw new Error(`@supabase/auth-js: Unsupported chain "${r}"`)}}async signInWithEthereum(e){var r,n,s,i,a,o,l,c,u,h,d;let f,y;if("message"in e)f=e.message,y=e.signature;else{const{chain:g,wallet:w,statement:m,options:v}=e;let b;if(q())if(typeof w=="object")b=w;else{const C=window;if("ethereum"in C&&typeof C.ethereum=="object"&&"request"in C.ethereum&&typeof C.ethereum.request=="function")b=C.ethereum;else throw new Error("@supabase/auth-js: No compatible Ethereum wallet interface on the window object (window.ethereum) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'ethereum', wallet: resolvedUserWallet }) instead.")}else{if(typeof w!="object"||!v?.url)throw new Error("@supabase/auth-js: Both wallet and url must be specified in non-browser environments.");b=w}const x=new URL((r=v?.url)!==null&&r!==void 0?r:window.location.href),A=await b.request({method:"eth_requestAccounts"}).then(C=>C).catch(()=>{throw new Error("@supabase/auth-js: Wallet method eth_requestAccounts is missing or invalid")});if(!A||A.length===0)throw new Error("@supabase/auth-js: No accounts available. Please ensure the wallet is connected.");const k=Xr(A[0]);let j=(n=v?.signInWithEthereum)===null||n===void 0?void 0:n.chainId;if(!j){const C=await b.request({method:"eth_chainId"});j=qi(C)}const P={domain:x.host,address:k,statement:m,uri:x.href,version:"1",chainId:j,nonce:(s=v?.signInWithEthereum)===null||s===void 0?void 0:s.nonce,issuedAt:(a=(i=v?.signInWithEthereum)===null||i===void 0?void 0:i.issuedAt)!==null&&a!==void 0?a:new Date,expirationTime:(o=v?.signInWithEthereum)===null||o===void 0?void 0:o.expirationTime,notBefore:(l=v?.signInWithEthereum)===null||l===void 0?void 0:l.notBefore,requestId:(c=v?.signInWithEthereum)===null||c===void 0?void 0:c.requestId,resources:(u=v?.signInWithEthereum)===null||u===void 0?void 0:u.resources};f=Li(P),y=await b.request({method:"personal_sign",params:[$i(f),k]})}try{const{data:g,error:w}=await S(this.fetch,"POST",`${this.url}/token?grant_type=web3`,{headers:this.headers,body:Object.assign({chain:"ethereum",message:f,signature:y},!((h=e.options)===null||h===void 0)&&h.captchaToken?{gotrue_meta_security:{captcha_token:(d=e.options)===null||d===void 0?void 0:d.captchaToken}}:null),xform:H});if(w)throw w;if(!g||!g.session||!g.user){const m=new me;return this._returnResult({data:{user:null,session:null},error:m})}return g.session&&(await this._saveSession(g.session),await this._notifyAllSubscribers("SIGNED_IN",g.session)),this._returnResult({data:Object.assign({},g),error:w})}catch(g){if(_(g))return this._returnResult({data:{user:null,session:null},error:g});throw g}}async signInWithSolana(e){var r,n,s,i,a,o,l,c,u,h,d,f;let y,g;if("message"in e)y=e.message,g=e.signature;else{const{chain:w,wallet:m,statement:v,options:b}=e;let x;if(q())if(typeof m=="object")x=m;else{const k=window;if("solana"in k&&typeof k.solana=="object"&&("signIn"in k.solana&&typeof k.solana.signIn=="function"||"signMessage"in k.solana&&typeof k.solana.signMessage=="function"))x=k.solana;else throw new Error("@supabase/auth-js: No compatible Solana wallet interface on the window object (window.solana) detected. Make sure the user already has a wallet installed and connected for this app. Prefer passing the wallet interface object directly to signInWithWeb3({ chain: 'solana', wallet: resolvedUserWallet }) instead.")}else{if(typeof m!="object"||!b?.url)throw new Error("@supabase/auth-js: Both wallet and url must be specified in non-browser environments.");x=m}const A=new URL((r=b?.url)!==null&&r!==void 0?r:window.location.href);if("signIn"in x&&x.signIn){const k=await x.signIn(Object.assign(Object.assign(Object.assign({issuedAt:new Date().toISOString()},b?.signInWithSolana),{version:"1",domain:A.host,uri:A.href}),v?{statement:v}:null));let j;if(Array.isArray(k)&&k[0]&&typeof k[0]=="object")j=k[0];else if(k&&typeof k=="object"&&"signedMessage"in k&&"signature"in k)j=k;else throw new Error("@supabase/auth-js: Wallet method signIn() returned unrecognized value");if("signedMessage"in j&&"signature"in j&&(typeof j.signedMessage=="string"||j.signedMessage instanceof Uint8Array)&&j.signature instanceof Uint8Array)y=typeof j.signedMessage=="string"?j.signedMessage:new TextDecoder().decode(j.signedMessage),g=j.signature;else throw new Error("@supabase/auth-js: Wallet method signIn() API returned object without signedMessage and signature fields")}else{if(!("signMessage"in x)||typeof x.signMessage!="function"||!("publicKey"in x)||typeof x!="object"||!x.publicKey||!("toBase58"in x.publicKey)||typeof x.publicKey.toBase58!="function")throw new Error("@supabase/auth-js: Wallet does not have a compatible signMessage() and publicKey.toBase58() API");y=[`${A.host} wants you to sign in with your Solana account:`,x.publicKey.toBase58(),...v?["",v,""]:[""],"Version: 1",`URI: ${A.href}`,`Issued At: ${(s=(n=b?.signInWithSolana)===null||n===void 0?void 0:n.issuedAt)!==null&&s!==void 0?s:new Date().toISOString()}`,...!((i=b?.signInWithSolana)===null||i===void 0)&&i.notBefore?[`Not Before: ${b.signInWithSolana.notBefore}`]:[],...!((a=b?.signInWithSolana)===null||a===void 0)&&a.expirationTime?[`Expiration Time: ${b.signInWithSolana.expirationTime}`]:[],...!((o=b?.signInWithSolana)===null||o===void 0)&&o.chainId?[`Chain ID: ${b.signInWithSolana.chainId}`]:[],...!((l=b?.signInWithSolana)===null||l===void 0)&&l.nonce?[`Nonce: ${b.signInWithSolana.nonce}`]:[],...!((c=b?.signInWithSolana)===null||c===void 0)&&c.requestId?[`Request ID: ${b.signInWithSolana.requestId}`]:[],...!((h=(u=b?.signInWithSolana)===null||u===void 0?void 0:u.resources)===null||h===void 0)&&h.length?["Resources",...b.signInWithSolana.resources.map(j=>`- ${j}`)]:[]].join(`
`);const k=await x.signMessage(new TextEncoder().encode(y),"utf8");if(!k||!(k instanceof Uint8Array))throw new Error("@supabase/auth-js: Wallet signMessage() API returned an recognized value");g=k}}try{const{data:w,error:m}=await S(this.fetch,"POST",`${this.url}/token?grant_type=web3`,{headers:this.headers,body:Object.assign({chain:"solana",message:y,signature:he(g)},!((d=e.options)===null||d===void 0)&&d.captchaToken?{gotrue_meta_security:{captcha_token:(f=e.options)===null||f===void 0?void 0:f.captchaToken}}:null),xform:H});if(m)throw m;if(!w||!w.session||!w.user){const v=new me;return this._returnResult({data:{user:null,session:null},error:v})}return w.session&&(await this._saveSession(w.session),await this._notifyAllSubscribers("SIGNED_IN",w.session)),this._returnResult({data:Object.assign({},w),error:m})}catch(w){if(_(w))return this._returnResult({data:{user:null,session:null},error:w});throw w}}async _exchangeCodeForSession(e){const r=await W(this.storage,`${this.storageKey}-code-verifier`),[n,s]=(r??"").split("/");try{if(!n&&this.flowType==="pkce")throw new ni;const{data:i,error:a}=await S(this.fetch,"POST",`${this.url}/token?grant_type=pkce`,{headers:this.headers,body:{auth_code:e,code_verifier:n},xform:H});if(await O(this.storage,`${this.storageKey}-code-verifier`),a)throw a;if(!i||!i.session||!i.user){const o=new me;return this._returnResult({data:{user:null,session:null,redirectType:null},error:o})}return i.session&&(await this._saveSession(i.session),await this._notifyAllSubscribers(s==="recovery"?"PASSWORD_RECOVERY":"SIGNED_IN",i.session)),this._returnResult({data:Object.assign(Object.assign({},i),{redirectType:s??null}),error:a})}catch(i){if(await O(this.storage,`${this.storageKey}-code-verifier`),_(i))return this._returnResult({data:{user:null,session:null,redirectType:null},error:i});throw i}}async signInWithIdToken(e){try{const{options:r,provider:n,token:s,access_token:i,nonce:a}=e,o=await S(this.fetch,"POST",`${this.url}/token?grant_type=id_token`,{headers:this.headers,body:{provider:n,id_token:s,access_token:i,nonce:a,gotrue_meta_security:{captcha_token:r?.captchaToken}},xform:H}),{data:l,error:c}=o;if(c)return this._returnResult({data:{user:null,session:null},error:c});if(!l||!l.session||!l.user){const u=new me;return this._returnResult({data:{user:null,session:null},error:u})}return l.session&&(await this._saveSession(l.session),await this._notifyAllSubscribers("SIGNED_IN",l.session)),this._returnResult({data:l,error:c})}catch(r){if(_(r))return this._returnResult({data:{user:null,session:null},error:r});throw r}}async signInWithOtp(e){var r,n,s,i,a;try{if("email"in e){const{email:o,options:l}=e;let c=null,u=null;this.flowType==="pkce"&&([c,u]=await ce(this.storage,this.storageKey));const{error:h}=await S(this.fetch,"POST",`${this.url}/otp`,{headers:this.headers,body:{email:o,data:(r=l?.data)!==null&&r!==void 0?r:{},create_user:(n=l?.shouldCreateUser)!==null&&n!==void 0?n:!0,gotrue_meta_security:{captcha_token:l?.captchaToken},code_challenge:c,code_challenge_method:u},redirectTo:l?.emailRedirectTo});return this._returnResult({data:{user:null,session:null},error:h})}if("phone"in e){const{phone:o,options:l}=e,{data:c,error:u}=await S(this.fetch,"POST",`${this.url}/otp`,{headers:this.headers,body:{phone:o,data:(s=l?.data)!==null&&s!==void 0?s:{},create_user:(i=l?.shouldCreateUser)!==null&&i!==void 0?i:!0,gotrue_meta_security:{captcha_token:l?.captchaToken},channel:(a=l?.channel)!==null&&a!==void 0?a:"sms"}});return this._returnResult({data:{user:null,session:null,messageId:c?.message_id},error:u})}throw new tt("You must provide either an email or phone number.")}catch(o){if(await O(this.storage,`${this.storageKey}-code-verifier`),_(o))return this._returnResult({data:{user:null,session:null},error:o});throw o}}async verifyOtp(e){var r,n;try{let s,i;"options"in e&&(s=(r=e.options)===null||r===void 0?void 0:r.redirectTo,i=(n=e.options)===null||n===void 0?void 0:n.captchaToken);const{data:a,error:o}=await S(this.fetch,"POST",`${this.url}/verify`,{headers:this.headers,body:Object.assign(Object.assign({},e),{gotrue_meta_security:{captcha_token:i}}),redirectTo:s,xform:H});if(o)throw o;if(!a)throw new Error("An error occurred on token verification.");const l=a.session,c=a.user;return l?.access_token&&(await this._saveSession(l),await this._notifyAllSubscribers(e.type=="recovery"?"PASSWORD_RECOVERY":"SIGNED_IN",l)),this._returnResult({data:{user:c,session:l},error:null})}catch(s){if(_(s))return this._returnResult({data:{user:null,session:null},error:s});throw s}}async signInWithSSO(e){var r,n,s,i,a;try{let o=null,l=null;this.flowType==="pkce"&&([o,l]=await ce(this.storage,this.storageKey));const c=await S(this.fetch,"POST",`${this.url}/sso`,{body:Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({},"providerId"in e?{provider_id:e.providerId}:null),"domain"in e?{domain:e.domain}:null),{redirect_to:(n=(r=e.options)===null||r===void 0?void 0:r.redirectTo)!==null&&n!==void 0?n:void 0}),!((s=e?.options)===null||s===void 0)&&s.captchaToken?{gotrue_meta_security:{captcha_token:e.options.captchaToken}}:null),{skip_http_redirect:!0,code_challenge:o,code_challenge_method:l}),headers:this.headers,xform:Ri});return!((i=c.data)===null||i===void 0)&&i.url&&q()&&!(!((a=e.options)===null||a===void 0)&&a.skipBrowserRedirect)&&window.location.assign(c.data.url),this._returnResult(c)}catch(o){if(await O(this.storage,`${this.storageKey}-code-verifier`),_(o))return this._returnResult({data:null,error:o});throw o}}async reauthenticate(){return await this.initializePromise,this.lock!=null?await this._acquireLock(this.lockAcquireTimeout,async()=>await this._reauthenticate()):await this._reauthenticate()}async _reauthenticate(){try{return await this._useSession(async e=>{const{data:{session:r},error:n}=e;if(n)throw n;if(!r)throw new I;const{error:s}=await S(this.fetch,"GET",`${this.url}/reauthenticate`,{headers:this.headers,jwt:r.access_token});return this._returnResult({data:{user:null,session:null},error:s})})}catch(e){if(_(e))return this._returnResult({data:{user:null,session:null},error:e});throw e}}async resend(e){try{const r=`${this.url}/resend`;if("email"in e){const{email:n,type:s,options:i}=e;let a=null,o=null;this.flowType==="pkce"&&([a,o]=await ce(this.storage,this.storageKey));const{error:l}=await S(this.fetch,"POST",r,{headers:this.headers,body:{email:n,type:s,gotrue_meta_security:{captcha_token:i?.captchaToken},code_challenge:a,code_challenge_method:o},redirectTo:i?.emailRedirectTo});return l&&await O(this.storage,`${this.storageKey}-code-verifier`),this._returnResult({data:{user:null,session:null},error:l})}else if("phone"in e){const{phone:n,type:s,options:i}=e,{data:a,error:o}=await S(this.fetch,"POST",r,{headers:this.headers,body:{phone:n,type:s,gotrue_meta_security:{captcha_token:i?.captchaToken}}});return this._returnResult({data:{user:null,session:null,messageId:a?.message_id},error:o})}throw new tt("You must provide either an email or phone number and a type")}catch(r){if(await O(this.storage,`${this.storageKey}-code-verifier`),_(r))return this._returnResult({data:{user:null,session:null},error:r});throw r}}async getSession(){return await this.initializePromise,this.lock!=null?await this._acquireLock(this.lockAcquireTimeout,async()=>this._useSession(async e=>e)):await this._useSession(async e=>e)}async _acquireLock(e,r){this._debug("#_acquireLock","begin",e);try{if(this.lockAcquired){const n=this.pendingInLock.length?this.pendingInLock[this.pendingInLock.length-1]:Promise.resolve(),s=(async()=>(await n,await r()))();return this.pendingInLock.push((async()=>{try{await s}catch{}})()),s}return await this.lock(`lock:${this.storageKey}`,e,async()=>{this._debug("#_acquireLock","lock acquired for storage key",this.storageKey);try{this.lockAcquired=!0;const n=r();for(this.pendingInLock.push((async()=>{try{await n}catch{}})()),await n;this.pendingInLock.length;){const s=[...this.pendingInLock];await Promise.all(s),this.pendingInLock.splice(0,s.length)}return await n}finally{this._debug("#_acquireLock","lock released for storage key",this.storageKey),this.lockAcquired=!1}})}finally{this._debug("#_acquireLock","end")}}async _useSession(e){this._debug("#_useSession","begin");try{const r=await this.__loadSession();return await e(r)}finally{this._debug("#_useSession","end")}}async __loadSession(){this._debug("#__loadSession()","begin"),this.lock!=null&&!this.lockAcquired&&this._debug("#__loadSession()","used outside of an acquired lock!",new Error().stack);try{let e=null;const r=await W(this.storage,this.storageKey);if(this._debug("#getSession()","session from storage",r),r!==null&&(this._isValidSession(r)?e=r:(this._debug("#getSession()","session from storage is not valid"),await this._removeSession())),!e)return{data:{session:null},error:null};const n=e.expires_at?e.expires_at*1e3-Date.now()<xt:!1;if(this._debug("#__loadSession()",`session has${n?"":" not"} expired`,"expires_at",e.expires_at),!n){if(this.userStorage){const a=await W(this.userStorage,this.storageKey+"-user");a?.user?e.user=a.user:e.user=St()}if(this.storage.isServer&&e.user&&!e.user.__isUserNotAvailableProxy){const a={value:this.suppressGetSessionWarning};e.user=Ti(e.user,a),a.value&&(this.suppressGetSessionWarning=!0)}return{data:{session:e},error:null}}const{data:s,error:i}=await this._callRefreshToken(e.refresh_token);if(i){if(!!(e.expires_at&&e.expires_at*1e3>Date.now())){const o=await W(this.storage,this.storageKey);if(o&&o.refresh_token===e.refresh_token)return this._returnResult({data:{session:e},error:null})}return this._returnResult({data:{session:null},error:i})}return this._returnResult({data:{session:s},error:null})}finally{this._debug("#__loadSession()","end")}}async getUser(e){if(e)return await this._getUser(e);await this.initializePromise;let r;return this.lock!=null?r=await this._acquireLock(this.lockAcquireTimeout,async()=>await this._getUser()):r=await this._getUser(),r.data.user&&(this.suppressGetSessionWarning=!0),r}async _getUser(e){try{return e?await S(this.fetch,"GET",`${this.url}/user`,{headers:this.headers,jwt:e,xform:ie}):await this._useSession(async r=>{var n,s,i;const{data:a,error:o}=r;if(o)throw o;return!(!((n=a.session)===null||n===void 0)&&n.access_token)&&!this.hasCustomAuthorizationHeader?{data:{user:null},error:new I}:await S(this.fetch,"GET",`${this.url}/user`,{headers:this.headers,jwt:(i=(s=a.session)===null||s===void 0?void 0:s.access_token)!==null&&i!==void 0?i:void 0,xform:ie})})}catch(r){if(_(r))return et(r)&&(await this._removeSession(),await O(this.storage,`${this.storageKey}-code-verifier`)),this._returnResult({data:{user:null},error:r});throw r}}async updateUser(e,r={}){return await this.initializePromise,this.lock!=null?await this._acquireLock(this.lockAcquireTimeout,async()=>await this._updateUser(e,r)):await this._updateUser(e,r)}async _updateUser(e,r={}){try{return await this._useSession(async n=>{const{data:s,error:i}=n;if(i)throw i;if(!s.session)throw new I;const a=s.session;let o=null,l=null;this.flowType==="pkce"&&e.email!=null&&([o,l]=await ce(this.storage,this.storageKey));const{data:c,error:u}=await S(this.fetch,"PUT",`${this.url}/user`,{headers:this.headers,redirectTo:r?.emailRedirectTo,body:Object.assign(Object.assign({},e),{code_challenge:o,code_challenge_method:l}),jwt:a.access_token,xform:ie});if(u)throw u;return a.user=c.user,await this._saveSession(a),await this._notifyAllSubscribers("USER_UPDATED",a),this._returnResult({data:{user:a.user},error:null})})}catch(n){if(await O(this.storage,`${this.storageKey}-code-verifier`),_(n))return this._returnResult({data:{user:null},error:n});throw n}}async setSession(e){return await this.initializePromise,this.lock!=null?await this._acquireLock(this.lockAcquireTimeout,async()=>await this._setSession(e)):await this._setSession(e)}async _setSession(e){try{if(!e.access_token||!e.refresh_token)throw new I;const r=Date.now()/1e3;let n=r,s=!0,i=null;const{payload:a}=nt(e.access_token);if(a.exp&&(n=a.exp,s=n<=r),s){const{data:o,error:l}=await this._callRefreshToken(e.refresh_token);if(l)return this._returnResult({data:{user:null,session:null},error:l});if(!o)return{data:{user:null,session:null},error:null};i=o}else{const{data:o,error:l}=await this._getUser(e.access_token);if(l)return this._returnResult({data:{user:null,session:null},error:l});i={access_token:e.access_token,refresh_token:e.refresh_token,user:o.user,token_type:"bearer",expires_in:n-r,expires_at:n},await this._saveSession(i),await this._notifyAllSubscribers("SIGNED_IN",i)}return this._returnResult({data:{user:i.user,session:i},error:null})}catch(r){if(_(r))return this._returnResult({data:{session:null,user:null},error:r});throw r}}async refreshSession(e){return await this.initializePromise,this.lock!=null?await this._acquireLock(this.lockAcquireTimeout,async()=>await this._refreshSession(e)):await this._refreshSession(e)}async _refreshSession(e){try{return await this._useSession(async r=>{var n;if(!e){const{data:a,error:o}=r;if(o)throw o;e=(n=a.session)!==null&&n!==void 0?n:void 0}if(!e?.refresh_token)throw new I;const{data:s,error:i}=await this._callRefreshToken(e.refresh_token);return i?this._returnResult({data:{user:null,session:null},error:i}):s?this._returnResult({data:{user:s.user,session:s},error:null}):this._returnResult({data:{user:null,session:null},error:null})})}catch(r){if(_(r))return this._returnResult({data:{user:null,session:null},error:r});throw r}}async _getSessionFromURL(e,r){var n;try{if(!q())throw new rt("No browser detected.");if(e.error||e.error_description||e.error_code)throw new rt(e.error_description||"Error in URL with unspecified error_description",{error:e.error||"unspecified_error",code:e.error_code||"unspecified_code"});switch(r){case"implicit":if(this.flowType==="pkce")throw new dr("Not a valid PKCE flow url.");break;case"pkce":if(this.flowType==="implicit")throw new rt("Not a valid implicit grant flow url.");break;default:}if(r==="pkce"){if(this._debug("#_initialize()","begin","is PKCE flow",!0),!e.code)throw new dr("No code detected.");const{data:b,error:x}=await this._exchangeCodeForSession(e.code);if(x)throw x;const A=new URL(window.location.href);return A.searchParams.delete("code"),window.history.replaceState(window.history.state,"",A.toString()),{data:{session:b.session,redirectType:(n=b.redirectType)!==null&&n!==void 0?n:null},error:null}}const{provider_token:s,provider_refresh_token:i,access_token:a,refresh_token:o,expires_in:l,expires_at:c,token_type:u}=e;if(!a||!l||!o||!u)throw new rt("No session defined in URL");const h=Math.round(Date.now()/1e3),d=parseInt(l);let f=h+d;c&&(f=parseInt(c));const y=f-h;y*1e3<=te&&console.warn(`@supabase/gotrue-js: Session as retrieved from URL expires in ${y}s, should have been closer to ${d}s`);const g=f-d;h-g>=120?console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued over 120s ago, URL could be stale",g,f,h):h-g<0&&console.warn("@supabase/gotrue-js: Session as retrieved from URL was issued in the future? Check the device clock for skew",g,f,h);const{data:w,error:m}=await this._getUser(a);if(m)throw m;const v={provider_token:s,provider_refresh_token:i,access_token:a,expires_in:d,expires_at:f,refresh_token:o,token_type:u,user:w.user};return window.location.hash="",this._debug("#_getSessionFromURL()","clearing window.location.hash"),this._returnResult({data:{session:v,redirectType:e.type},error:null})}catch(s){if(_(s))return this._returnResult({data:{session:null,redirectType:null},error:s});throw s}}_isImplicitGrantCallback(e){return typeof this.detectSessionInUrl=="function"?this.detectSessionInUrl(new URL(window.location.href),e):!!(e.access_token||e.error||e.error_description||e.error_code)}async _isPKCECallback(e){const r=await W(this.storage,`${this.storageKey}-code-verifier`);return!!(e.code&&r)}async signOut(e={scope:"global"}){return await this.initializePromise,this.lock!=null?await this._acquireLock(this.lockAcquireTimeout,async()=>await this._signOut(e)):await this._signOut(e)}async _signOut({scope:e}={scope:"global"}){return await this._useSession(async r=>{var n;const{data:s,error:i}=r;if(i&&!et(i))return this._returnResult({error:i});const a=(n=s.session)===null||n===void 0?void 0:n.access_token;if(a){const{error:o}=await this.admin.signOut(a,e);if(o&&!(ti(o)&&(o.status===404||o.status===401||o.status===403)||et(o)))return this._returnResult({error:o})}return e!=="others"&&(await this._removeSession(),await O(this.storage,`${this.storageKey}-code-verifier`)),this._returnResult({error:null})})}onAuthStateChange(e){const r=hi(),n={id:r,callback:e,unsubscribe:()=>{this._debug("#unsubscribe()","state change callback with id removed",r),this.stateChangeEmitters.delete(r)}};return this._debug("#onAuthStateChange()","registered callback with id",r),this.stateChangeEmitters.set(r,n),(async()=>(await this.initializePromise,this.lock!=null?await this._acquireLock(this.lockAcquireTimeout,async()=>{this._emitInitialSession(r)}):await this._emitInitialSession(r)))(),{data:{subscription:n}}}async _emitInitialSession(e){return await this._useSession(async r=>{var n,s;try{const{data:{session:i},error:a}=r;if(a)throw a;await((n=this.stateChangeEmitters.get(e))===null||n===void 0?void 0:n.callback("INITIAL_SESSION",i)),this._debug("INITIAL_SESSION","callback id",e,"session",i)}catch(i){await((s=this.stateChangeEmitters.get(e))===null||s===void 0?void 0:s.callback("INITIAL_SESSION",null)),this._debug("INITIAL_SESSION","callback id",e,"error",i),et(i)?console.warn(i):console.error(i)}})}async resetPasswordForEmail(e,r={}){let n=null,s=null;this.flowType==="pkce"&&([n,s]=await ce(this.storage,this.storageKey,!0));try{return await S(this.fetch,"POST",`${this.url}/recover`,{body:{email:e,code_challenge:n,code_challenge_method:s,gotrue_meta_security:{captcha_token:r.captchaToken}},headers:this.headers,redirectTo:r.redirectTo})}catch(i){if(await O(this.storage,`${this.storageKey}-code-verifier`),_(i))return this._returnResult({data:null,error:i});throw i}}async getUserIdentities(){var e;try{const{data:r,error:n}=await this.getUser();if(n)throw n;return this._returnResult({data:{identities:(e=r.user.identities)!==null&&e!==void 0?e:[]},error:null})}catch(r){if(_(r))return this._returnResult({data:null,error:r});throw r}}async linkIdentity(e){return"token"in e?this.linkIdentityIdToken(e):this.linkIdentityOAuth(e)}async linkIdentityOAuth(e){var r;try{const{data:n,error:s}=await this._useSession(async i=>{var a,o,l,c,u;const{data:h,error:d}=i;if(d)throw d;const f=await this._getUrlForProvider(`${this.url}/user/identities/authorize`,e.provider,{redirectTo:(a=e.options)===null||a===void 0?void 0:a.redirectTo,scopes:(o=e.options)===null||o===void 0?void 0:o.scopes,queryParams:(l=e.options)===null||l===void 0?void 0:l.queryParams,skipBrowserRedirect:!0});return await S(this.fetch,"GET",f,{headers:this.headers,jwt:(u=(c=h.session)===null||c===void 0?void 0:c.access_token)!==null&&u!==void 0?u:void 0})});if(s)throw s;return q()&&!(!((r=e.options)===null||r===void 0)&&r.skipBrowserRedirect)&&window.location.assign(n?.url),this._returnResult({data:{provider:e.provider,url:n?.url},error:null})}catch(n){if(_(n))return this._returnResult({data:{provider:e.provider,url:null},error:n});throw n}}async linkIdentityIdToken(e){return await this._useSession(async r=>{var n;try{const{error:s,data:{session:i}}=r;if(s)throw s;const{options:a,provider:o,token:l,access_token:c,nonce:u}=e,h=await S(this.fetch,"POST",`${this.url}/token?grant_type=id_token`,{headers:this.headers,jwt:(n=i?.access_token)!==null&&n!==void 0?n:void 0,body:{provider:o,id_token:l,access_token:c,nonce:u,link_identity:!0,gotrue_meta_security:{captcha_token:a?.captchaToken}},xform:H}),{data:d,error:f}=h;return f?this._returnResult({data:{user:null,session:null},error:f}):!d||!d.session||!d.user?this._returnResult({data:{user:null,session:null},error:new me}):(d.session&&(await this._saveSession(d.session),await this._notifyAllSubscribers("USER_UPDATED",d.session)),this._returnResult({data:d,error:f}))}catch(s){if(await O(this.storage,`${this.storageKey}-code-verifier`),_(s))return this._returnResult({data:{user:null,session:null},error:s});throw s}})}async unlinkIdentity(e){try{return await this._useSession(async r=>{var n,s;const{data:i,error:a}=r;if(a)throw a;return await S(this.fetch,"DELETE",`${this.url}/user/identities/${e.identity_id}`,{headers:this.headers,jwt:(s=(n=i.session)===null||n===void 0?void 0:n.access_token)!==null&&s!==void 0?s:void 0})})}catch(r){if(_(r))return this._returnResult({data:null,error:r});throw r}}async _refreshAccessToken(e){const r="#_refreshAccessToken()";this._debug(r,"begin");try{const n=Date.now();return await yi(async s=>(s>0&&await fi(200*Math.pow(2,s-1)),this._debug(r,"refreshing attempt",s),await S(this.fetch,"POST",`${this.url}/token?grant_type=refresh_token`,{body:{refresh_token:e},headers:this.headers,xform:H})),(s,i)=>{const a=200*Math.pow(2,s);return i&&pr(i)&&Date.now()+a-n<te})}catch(n){if(this._debug(r,"error",n),_(n))return this._returnResult({data:{session:null,user:null},error:n});throw n}finally{this._debug(r,"end")}}_isValidSession(e){return typeof e=="object"&&e!==null&&"access_token"in e&&"refresh_token"in e&&"expires_at"in e}async _handleProviderSignIn(e,r){const n=await this._getUrlForProvider(`${this.url}/authorize`,e,{redirectTo:r.redirectTo,scopes:r.scopes,queryParams:r.queryParams});return this._debug("#_handleProviderSignIn()","provider",e,"options",r,"url",n),q()&&!r.skipBrowserRedirect&&window.location.assign(n),{data:{provider:e,url:n},error:null}}async _recoverAndRefresh(){var e,r;const n="#_recoverAndRefresh()";this._debug(n,"begin");try{const s=await W(this.storage,this.storageKey);if(s&&this.userStorage){let a=await W(this.userStorage,this.storageKey+"-user");!this.storage.isServer&&Object.is(this.storage,this.userStorage)&&!a&&(a={user:s.user},await _e(this.userStorage,this.storageKey+"-user",a)),s.user=(e=a?.user)!==null&&e!==void 0?e:St()}else if(s&&!s.user&&!s.user){const a=await W(this.storage,this.storageKey+"-user");a&&a?.user?(s.user=a.user,await O(this.storage,this.storageKey+"-user"),await _e(this.storage,this.storageKey,s)):s.user=St()}if(this._debug(n,"session from storage",s),!this._isValidSession(s)){this._debug(n,"session is not valid"),s!==null&&await this._removeSession();return}const i=((r=s.expires_at)!==null&&r!==void 0?r:1/0)*1e3-Date.now()<xt;if(this._debug(n,`session has${i?"":" not"} expired with margin of ${xt}s`),i){if(this.autoRefreshToken&&s.refresh_token){const{error:a}=await this._callRefreshToken(s.refresh_token);a&&(si(a)?this._debug(n,"refresh discarded by commit guard",a):this._debug(n,"refresh failed",a))}}else if(s.user&&s.user.__isUserNotAvailableProxy===!0)try{const{data:a,error:o}=await this._getUser(s.access_token);!o&&a?.user?(s.user=a.user,await this._saveSession(s),await this._notifyAllSubscribers("SIGNED_IN",s)):this._debug(n,"could not get user data, skipping SIGNED_IN notification")}catch(a){console.error("Error getting user data:",a),this._debug(n,"error getting user data, skipping SIGNED_IN notification",a)}else await this._notifyAllSubscribers("SIGNED_IN",s)}catch(s){this._debug(n,"error",s),console.error(s);return}finally{this._debug(n,"end")}}async _callRefreshToken(e){var r,n;if(!e)throw new I;if(this.refreshingDeferred)return this.refreshingDeferred.promise;if(this.lastRefreshFailure&&this.lastRefreshFailure.refreshToken===e&&Date.now()<this.lastRefreshFailure.expiresAt)return this._debug("#_callRefreshToken()","returning cached failure (cooldown active)"),this.lastRefreshFailure.result;const s="#_callRefreshToken()";this._debug(s,"begin");try{this.refreshingDeferred=new mt;const i=await W(this.storage,this.storageKey),{data:a,error:o}=await this._refreshAccessToken(e);if(o)throw o;if(!a.session)throw new I;const l=await W(this.storage,this.storageKey);if(i!==null&&(l===null||l.refresh_token!==i.refresh_token)){this._debug(s,"commit guard: storage changed since refresh started, discarding rotated tokens",{startedWith:"present",nowHolds:l?"replaced":"cleared"});const d={data:null,error:new fr};return this.refreshingDeferred.resolve(d),d}const u=this._sessionRemovalEpoch;if(await this._saveSession(a.session),this._sessionRemovalEpoch!==u){this._debug(s,"commit guard (post-save): _removeSession ran during _saveSession, undoing write"),await O(this.storage,this.storageKey),this.userStorage&&await O(this.userStorage,this.storageKey+"-user");const d={data:null,error:new fr};return this.refreshingDeferred.resolve(d),d}await this._notifyAllSubscribers("TOKEN_REFRESHED",a.session);const h={data:a.session,error:null};return this.lastRefreshFailure=null,this.refreshingDeferred.resolve(h),h}catch(i){if(this._debug(s,"error",i),_(i)){const a={data:null,error:i};if(!pr(i)){const o=await W(this.storage,this.storageKey);!!(o?.expires_at&&o.expires_at*1e3>Date.now())?this._debug(s,"proactive refresh failed, access token still valid — preserving session"):await this._removeSession()}return this.lastRefreshFailure={refreshToken:e,result:a,expiresAt:Date.now()+Gs},(r=this.refreshingDeferred)===null||r===void 0||r.resolve(a),a}throw(n=this.refreshingDeferred)===null||n===void 0||n.reject(i),i}finally{this.refreshingDeferred=null,this._debug(s,"end")}}async _notifyAllSubscribers(e,r,n=!0){const s=`#_notifyAllSubscribers(${e})`;this._debug(s,"begin",r,`broadcast = ${n}`);try{this.broadcastChannel&&n&&this.broadcastChannel.postMessage({event:e,session:r});const i=[],a=Array.from(this.stateChangeEmitters.values()).map(async o=>{try{await o.callback(e,r)}catch(l){i.push(l)}});if(await Promise.all(a),i.length>0){for(let o=0;o<i.length;o+=1)console.error(i[o]);throw i[0]}}finally{this._debug(s,"end")}}async _saveSession(e){this._debug("#_saveSession()",e),this.suppressGetSessionWarning=!0,await O(this.storage,`${this.storageKey}-code-verifier`);const r=Object.assign({},e),n=r.user&&r.user.__isUserNotAvailableProxy===!0;if(this.userStorage){!n&&r.user&&await _e(this.userStorage,this.storageKey+"-user",{user:r.user});const s=Object.assign({},r);delete s.user;const i=br(s);await _e(this.storage,this.storageKey,i)}else{const s=br(r);await _e(this.storage,this.storageKey,s)}}async _removeSession(){this._sessionRemovalEpoch+=1,this._debug("#_removeSession()"),this.lastRefreshFailure=null,this.suppressGetSessionWarning=!1,await O(this.storage,this.storageKey),await O(this.storage,this.storageKey+"-code-verifier"),await O(this.storage,this.storageKey+"-user"),this.userStorage&&await O(this.userStorage,this.storageKey+"-user"),await this._notifyAllSubscribers("SIGNED_OUT",null)}_removeVisibilityChangedCallback(){this._debug("#_removeVisibilityChangedCallback()");const e=this.visibilityChangedCallback;this.visibilityChangedCallback=null;try{e&&q()&&window?.removeEventListener&&window.removeEventListener("visibilitychange",e)}catch(r){console.error("removing visibilitychange callback failed",r)}}async _startAutoRefresh(){await this._stopAutoRefresh(),this._debug("#_startAutoRefresh()");const e=setInterval(()=>this._autoRefreshTokenTick(),te);this.autoRefreshTicker=e,e&&typeof e=="object"&&typeof e.unref=="function"?e.unref():typeof Deno<"u"&&typeof Deno.unrefTimer=="function"&&Deno.unrefTimer(e);const r=setTimeout(async()=>{await this.initializePromise,await this._autoRefreshTokenTick()},0);this.autoRefreshTickTimeout=r,r&&typeof r=="object"&&typeof r.unref=="function"?r.unref():typeof Deno<"u"&&typeof Deno.unrefTimer=="function"&&Deno.unrefTimer(r)}async _stopAutoRefresh(){this._debug("#_stopAutoRefresh()");const e=this.autoRefreshTicker;this.autoRefreshTicker=null,e&&clearInterval(e);const r=this.autoRefreshTickTimeout;this.autoRefreshTickTimeout=null,r&&clearTimeout(r)}async startAutoRefresh(){this._removeVisibilityChangedCallback(),await this._startAutoRefresh()}async stopAutoRefresh(){this._removeVisibilityChangedCallback(),await this._stopAutoRefresh()}async dispose(){var e;this._removeVisibilityChangedCallback(),await this._stopAutoRefresh(),(e=this.broadcastChannel)===null||e===void 0||e.close(),this.broadcastChannel=null,this.stateChangeEmitters.clear()}async _autoRefreshTokenTick(){if(this._debug("#_autoRefreshTokenTick()","begin"),this.lock!=null){try{await this._acquireLock(0,async()=>{try{const e=Date.now();try{return await this._useSession(async r=>{const{data:{session:n}}=r;if(!n||!n.refresh_token||!n.expires_at){this._debug("#_autoRefreshTokenTick()","no session");return}const s=Math.floor((n.expires_at*1e3-e)/te);this._debug("#_autoRefreshTokenTick()",`access token expires in ${s} ticks, a tick lasts ${te}ms, refresh threshold is ${ze} ticks`),s<=ze&&await this._callRefreshToken(n.refresh_token)})}catch(r){console.error("Auto refresh tick failed with error. This is likely a transient error.",r)}}finally{this._debug("#_autoRefreshTokenTick()","end")}})}catch(e){if(e instanceof Ci)this._debug("auto refresh token tick lock not available");else throw e}return}if(this.refreshingDeferred!==null){this._debug("#_autoRefreshTokenTick()","refresh already in flight, skipping");return}try{const e=Date.now();try{await this._useSession(async r=>{const{data:{session:n}}=r;if(!n||!n.refresh_token||!n.expires_at){this._debug("#_autoRefreshTokenTick()","no session");return}const s=Math.floor((n.expires_at*1e3-e)/te);this._debug("#_autoRefreshTokenTick()",`access token expires in ${s} ticks, a tick lasts ${te}ms, refresh threshold is ${ze} ticks`),s<=ze&&await this._callRefreshToken(n.refresh_token)})}catch(r){console.error("Auto refresh tick failed with error. This is likely a transient error.",r)}}finally{this._debug("#_autoRefreshTokenTick()","end")}}async _handleVisibilityChange(){if(this._debug("#_handleVisibilityChange()"),!q()||!window?.addEventListener)return this.autoRefreshToken&&this.startAutoRefresh(),!1;try{this.visibilityChangedCallback=async()=>{try{await this._onVisibilityChanged(!1)}catch(e){this._debug("#visibilityChangedCallback","error",e)}},window?.addEventListener("visibilitychange",this.visibilityChangedCallback),await this._onVisibilityChanged(!0)}catch(e){console.error("_handleVisibilityChange",e)}}async _onVisibilityChanged(e){const r=`#_onVisibilityChanged(${e})`;if(this._debug(r,"visibilityState",document.visibilityState),document.visibilityState==="visible"){if(this.autoRefreshToken&&this._startAutoRefresh(),!e)if(await this.initializePromise,this.lock!=null)await this._acquireLock(this.lockAcquireTimeout,async()=>{if(document.visibilityState!=="visible"){this._debug(r,"acquired the lock to recover the session, but the browser visibilityState is no longer visible, aborting");return}await this._recoverAndRefresh()});else{if(document.visibilityState!=="visible"){this._debug(r,"visibilityState is no longer visible, skipping recovery");return}await this._recoverAndRefresh()}}else document.visibilityState==="hidden"&&this.autoRefreshToken&&this._stopAutoRefresh()}async _getUrlForProvider(e,r,n){const s=[`provider=${encodeURIComponent(r)}`];if(n?.redirectTo&&s.push(`redirect_to=${encodeURIComponent(n.redirectTo)}`),n?.scopes&&s.push(`scopes=${encodeURIComponent(n.scopes)}`),this.flowType==="pkce"){const[i,a]=await ce(this.storage,this.storageKey),o=new URLSearchParams({code_challenge:`${encodeURIComponent(i)}`,code_challenge_method:`${encodeURIComponent(a)}`});s.push(o.toString())}if(n?.queryParams){const i=new URLSearchParams(n.queryParams);s.push(i.toString())}return n?.skipBrowserRedirect&&s.push(`skip_http_redirect=${n.skipBrowserRedirect}`),`${e}?${s.join("&")}`}async _unenroll(e){try{return await this._useSession(async r=>{var n;const{data:s,error:i}=r;return i?this._returnResult({data:null,error:i}):await S(this.fetch,"DELETE",`${this.url}/factors/${e.factorId}`,{headers:this.headers,jwt:(n=s?.session)===null||n===void 0?void 0:n.access_token})})}catch(r){if(_(r))return this._returnResult({data:null,error:r});throw r}}async _enroll(e){try{return await this._useSession(async r=>{var n,s;const{data:i,error:a}=r;if(a)return this._returnResult({data:null,error:a});const o=Object.assign({friendly_name:e.friendlyName,factor_type:e.factorType},e.factorType==="phone"?{phone:e.phone}:e.factorType==="totp"?{issuer:e.issuer}:{}),{data:l,error:c}=await S(this.fetch,"POST",`${this.url}/factors`,{body:o,headers:this.headers,jwt:(n=i?.session)===null||n===void 0?void 0:n.access_token});return c?this._returnResult({data:null,error:c}):(e.factorType==="totp"&&l.type==="totp"&&(!((s=l?.totp)===null||s===void 0)&&s.qr_code)&&(l.totp.qr_code=`data:image/svg+xml;utf-8,${l.totp.qr_code}`),this._returnResult({data:l,error:null}))})}catch(r){if(_(r))return this._returnResult({data:null,error:r});throw r}}async _verify(e){const r=async()=>{try{return await this._useSession(async n=>{var s;const{data:i,error:a}=n;if(a)return this._returnResult({data:null,error:a});const o=Object.assign({challenge_id:e.challengeId},"webauthn"in e?{webauthn:Object.assign(Object.assign({},e.webauthn),{credential_response:e.webauthn.type==="create"?jr(e.webauthn.credential_response):Ar(e.webauthn.credential_response)})}:{code:e.code}),{data:l,error:c}=await S(this.fetch,"POST",`${this.url}/factors/${e.factorId}/verify`,{body:o,headers:this.headers,jwt:(s=i?.session)===null||s===void 0?void 0:s.access_token});return c?this._returnResult({data:null,error:c}):(await this._saveSession(Object.assign({expires_at:Math.round(Date.now()/1e3)+l.expires_in},l)),await this._notifyAllSubscribers("MFA_CHALLENGE_VERIFIED",l),this._returnResult({data:l,error:c}))})}catch(n){if(_(n))return this._returnResult({data:null,error:n});throw n}};return this.lock!=null?this._acquireLock(this.lockAcquireTimeout,r):r()}async _challenge(e){const r=async()=>{try{return await this._useSession(async n=>{var s;const{data:i,error:a}=n;if(a)return this._returnResult({data:null,error:a});const o=await S(this.fetch,"POST",`${this.url}/factors/${e.factorId}/challenge`,{body:e,headers:this.headers,jwt:(s=i?.session)===null||s===void 0?void 0:s.access_token});if(o.error)return o;const{data:l}=o;if(l.type!=="webauthn")return{data:l,error:null};switch(l.webauthn.type){case"create":return{data:Object.assign(Object.assign({},l),{webauthn:Object.assign(Object.assign({},l.webauthn),{credential_options:Object.assign(Object.assign({},l.webauthn.credential_options),{publicKey:kr(l.webauthn.credential_options.publicKey)})})}),error:null};case"request":return{data:Object.assign(Object.assign({},l),{webauthn:Object.assign(Object.assign({},l.webauthn),{credential_options:Object.assign(Object.assign({},l.webauthn.credential_options),{publicKey:Tr(l.webauthn.credential_options.publicKey)})})}),error:null}}})}catch(n){if(_(n))return this._returnResult({data:null,error:n});throw n}};return this.lock!=null?this._acquireLock(this.lockAcquireTimeout,r):r()}async _challengeAndVerify(e){const{data:r,error:n}=await this._challenge({factorId:e.factorId});return n?this._returnResult({data:null,error:n}):await this._verify({factorId:e.factorId,challengeId:r.id,code:e.code})}async _listFactors(){var e;const{data:{user:r},error:n}=await this.getUser();if(n)return{data:null,error:n};const s={all:[],phone:[],totp:[],webauthn:[]};for(const i of(e=r?.factors)!==null&&e!==void 0?e:[])s.all.push(i),i.status==="verified"&&s[i.factor_type].push(i);return{data:s,error:null}}async _getAuthenticatorAssuranceLevel(e){var r,n,s,i;if(e)try{const{payload:f}=nt(e);let y=null;f.aal&&(y=f.aal);let g=y;const{data:{user:w},error:m}=await this.getUser(e);if(m)return this._returnResult({data:null,error:m});((n=(r=w?.factors)===null||r===void 0?void 0:r.filter(x=>x.status==="verified"))!==null&&n!==void 0?n:[]).length>0&&(g="aal2");const b=f.amr||[];return{data:{currentLevel:y,nextLevel:g,currentAuthenticationMethods:b},error:null}}catch(f){if(_(f))return this._returnResult({data:null,error:f});throw f}const{data:{session:a},error:o}=await this.getSession();if(o)return this._returnResult({data:null,error:o});if(!a)return{data:{currentLevel:null,nextLevel:null,currentAuthenticationMethods:[]},error:null};const{payload:l}=nt(a.access_token);let c=null;l.aal&&(c=l.aal);let u=c;((i=(s=a.user.factors)===null||s===void 0?void 0:s.filter(f=>f.status==="verified"))!==null&&i!==void 0?i:[]).length>0&&(u="aal2");const d=l.amr||[];return{data:{currentLevel:c,nextLevel:u,currentAuthenticationMethods:d},error:null}}async _getAuthorizationDetails(e){try{return await this._useSession(async r=>{const{data:{session:n},error:s}=r;return s?this._returnResult({data:null,error:s}):n?await S(this.fetch,"GET",`${this.url}/oauth/authorizations/${e}`,{headers:this.headers,jwt:n.access_token,xform:i=>({data:i,error:null})}):this._returnResult({data:null,error:new I})})}catch(r){if(_(r))return this._returnResult({data:null,error:r});throw r}}async _approveAuthorization(e,r){try{return await this._useSession(async n=>{const{data:{session:s},error:i}=n;if(i)return this._returnResult({data:null,error:i});if(!s)return this._returnResult({data:null,error:new I});const a=await S(this.fetch,"POST",`${this.url}/oauth/authorizations/${e}/consent`,{headers:this.headers,jwt:s.access_token,body:{action:"approve"},xform:o=>({data:o,error:null})});return a.data&&a.data.redirect_url&&q()&&!r?.skipBrowserRedirect&&window.location.assign(a.data.redirect_url),a})}catch(n){if(_(n))return this._returnResult({data:null,error:n});throw n}}async _denyAuthorization(e,r){try{return await this._useSession(async n=>{const{data:{session:s},error:i}=n;if(i)return this._returnResult({data:null,error:i});if(!s)return this._returnResult({data:null,error:new I});const a=await S(this.fetch,"POST",`${this.url}/oauth/authorizations/${e}/consent`,{headers:this.headers,jwt:s.access_token,body:{action:"deny"},xform:o=>({data:o,error:null})});return a.data&&a.data.redirect_url&&q()&&!r?.skipBrowserRedirect&&window.location.assign(a.data.redirect_url),a})}catch(n){if(_(n))return this._returnResult({data:null,error:n});throw n}}async _listOAuthGrants(){try{return await this._useSession(async e=>{const{data:{session:r},error:n}=e;return n?this._returnResult({data:null,error:n}):r?await S(this.fetch,"GET",`${this.url}/user/oauth/grants`,{headers:this.headers,jwt:r.access_token,xform:s=>({data:s,error:null})}):this._returnResult({data:null,error:new I})})}catch(e){if(_(e))return this._returnResult({data:null,error:e});throw e}}async _revokeOAuthGrant(e){try{return await this._useSession(async r=>{const{data:{session:n},error:s}=r;return s?this._returnResult({data:null,error:s}):n?(await S(this.fetch,"DELETE",`${this.url}/user/oauth/grants`,{headers:this.headers,jwt:n.access_token,query:{client_id:e.clientId},noResolveJson:!0}),{data:{},error:null}):this._returnResult({data:null,error:new I})})}catch(r){if(_(r))return this._returnResult({data:null,error:r});throw r}}async fetchJwk(e,r={keys:[]}){let n=r.keys.find(o=>o.kid===e);if(n)return n;const s=Date.now();if(n=this.jwks.keys.find(o=>o.kid===e),n&&this.jwks_cached_at+Zs>s)return n;const{data:i,error:a}=await S(this.fetch,"GET",`${this.url}/.well-known/jwks.json`,{headers:this.headers});if(a)throw a;return!i.keys||i.keys.length===0||(this.jwks=i,this.jwks_cached_at=s,n=i.keys.find(o=>o.kid===e),!n)?null:n}async getClaims(e,r={}){try{let n=e;if(!n){const{data:f,error:y}=await this.getSession();if(y||!f.session)return this._returnResult({data:null,error:y});n=f.session.access_token}const{header:s,payload:i,signature:a,raw:{header:o,payload:l}}=nt(n);if(!r?.allowExpired)try{xi(i.exp)}catch(f){throw new lt(f instanceof Error?f.message:"JWT validation failed")}const c=!s.alg||s.alg.startsWith("HS")||!s.kid||!("crypto"in globalThis&&"subtle"in globalThis.crypto)?null:await this.fetchJwk(s.kid,r?.keys?{keys:r.keys}:r?.jwks);if(!c){const{error:f}=await this.getUser(n);if(f)throw f;return{data:{claims:i,header:s,signature:a},error:null}}const u=Si(s.alg),h=await crypto.subtle.importKey("jwk",c,u,!0,["verify"]);if(!await crypto.subtle.verify(u,h,a,ci(`${o}.${l}`)))throw new lt("Invalid JWT signature");return{data:{claims:i,header:s,signature:a},error:null}}catch(n){if(_(n))return this._returnResult({data:null,error:n});throw n}}async signInWithPasskey(e){var r,n,s;V(this.experimental);try{if(!ht())return this._returnResult({data:null,error:new K("Browser does not support WebAuthn",null)});const{data:i,error:a}=await this._startPasskeyAuthentication({options:{captchaToken:(r=e?.options)===null||r===void 0?void 0:r.captchaToken}});if(a||!i)return this._returnResult({data:null,error:a});const o=Tr(i.options),l=(s=(n=e?.options)===null||n===void 0?void 0:n.signal)!==null&&s!==void 0?s:Nt.createNewAbortSignal(),{data:c,error:u}=await tn({publicKey:o,signal:l});if(u||!c)return this._returnResult({data:null,error:u??new K("WebAuthn ceremony failed",null)});const h=Ar(c);return this._verifyPasskeyAuthentication({challengeId:i.challenge_id,credential:h})}catch(i){if(_(i))return this._returnResult({data:null,error:i});throw i}}async registerPasskey(e){var r,n;V(this.experimental);try{if(!ht())return this._returnResult({data:null,error:new K("Browser does not support WebAuthn",null)});const{data:s,error:i}=await this._startPasskeyRegistration();if(i||!s)return this._returnResult({data:null,error:i});const a=kr(s.options),o=(n=(r=e?.options)===null||r===void 0?void 0:r.signal)!==null&&n!==void 0?n:Nt.createNewAbortSignal(),{data:l,error:c}=await en({publicKey:a,signal:o});if(c||!l)return this._returnResult({data:null,error:c??new K("WebAuthn ceremony failed",null)});const u=jr(l);return this._verifyPasskeyRegistration({challengeId:s.challenge_id,credential:u})}catch(s){if(_(s))return this._returnResult({data:null,error:s});throw s}}async _startPasskeyRegistration(){V(this.experimental);try{return await this._useSession(async e=>{const{data:{session:r},error:n}=e;if(n)return this._returnResult({data:null,error:n});if(!r)return this._returnResult({data:null,error:new I});const{data:s,error:i}=await S(this.fetch,"POST",`${this.url}/passkeys/registration/options`,{headers:this.headers,jwt:r.access_token,body:{}});return i?this._returnResult({data:null,error:i}):this._returnResult({data:s,error:null})})}catch(e){if(_(e))return this._returnResult({data:null,error:e});throw e}}async _verifyPasskeyRegistration(e){V(this.experimental);try{return await this._useSession(async r=>{const{data:{session:n},error:s}=r;if(s)return this._returnResult({data:null,error:s});if(!n)return this._returnResult({data:null,error:new I});const{data:i,error:a}=await S(this.fetch,"POST",`${this.url}/passkeys/registration/verify`,{headers:this.headers,jwt:n.access_token,body:{challenge_id:e.challengeId,credential:e.credential}});return a?this._returnResult({data:null,error:a}):this._returnResult({data:i,error:null})})}catch(r){if(_(r))return this._returnResult({data:null,error:r});throw r}}async _startPasskeyAuthentication(e){var r;V(this.experimental);try{const{data:n,error:s}=await S(this.fetch,"POST",`${this.url}/passkeys/authentication/options`,{headers:this.headers,body:{gotrue_meta_security:{captcha_token:(r=e?.options)===null||r===void 0?void 0:r.captchaToken}}});return s?this._returnResult({data:null,error:s}):this._returnResult({data:n,error:null})}catch(n){if(_(n))return this._returnResult({data:null,error:n});throw n}}async _verifyPasskeyAuthentication(e){V(this.experimental);try{const{data:r,error:n}=await S(this.fetch,"POST",`${this.url}/passkeys/authentication/verify`,{headers:this.headers,body:{challenge_id:e.challengeId,credential:e.credential},xform:H});return n?this._returnResult({data:null,error:n}):(r.session&&(await this._saveSession(r.session),await this._notifyAllSubscribers("SIGNED_IN",r.session)),this._returnResult({data:r,error:null}))}catch(r){if(_(r))return this._returnResult({data:null,error:r});throw r}}async _listPasskeys(){V(this.experimental);try{return await this._useSession(async e=>{const{data:{session:r},error:n}=e;if(n)return this._returnResult({data:null,error:n});if(!r)return this._returnResult({data:null,error:new I});const{data:s,error:i}=await S(this.fetch,"GET",`${this.url}/passkeys`,{headers:this.headers,jwt:r.access_token,xform:a=>({data:a,error:null})});return i?this._returnResult({data:null,error:i}):this._returnResult({data:s,error:null})})}catch(e){if(_(e))return this._returnResult({data:null,error:e});throw e}}async _updatePasskey(e){V(this.experimental);try{return await this._useSession(async r=>{const{data:{session:n},error:s}=r;if(s)return this._returnResult({data:null,error:s});if(!n)return this._returnResult({data:null,error:new I});const{data:i,error:a}=await S(this.fetch,"PATCH",`${this.url}/passkeys/${e.passkeyId}`,{headers:this.headers,jwt:n.access_token,body:{friendly_name:e.friendlyName}});return a?this._returnResult({data:null,error:a}):this._returnResult({data:i,error:null})})}catch(r){if(_(r))return this._returnResult({data:null,error:r});throw r}}async _deletePasskey(e){V(this.experimental);try{return await this._useSession(async r=>{const{data:{session:n},error:s}=r;if(s)return this._returnResult({data:null,error:s});if(!n)return this._returnResult({data:null,error:new I});const{error:i}=await S(this.fetch,"DELETE",`${this.url}/passkeys/${e.passkeyId}`,{headers:this.headers,jwt:n.access_token,noResolveJson:!0});return i?this._returnResult({data:null,error:i}):this._returnResult({data:null,error:null})})}catch(r){if(_(r))return this._returnResult({data:null,error:r});throw r}}}Be.nextInstanceID={};const Ki=Be,Gi="2.108.2";let Ce="",pt;if(typeof Deno<"u"){var Tt;Ce="deno",pt=(Tt=Deno.version)===null||Tt===void 0?void 0:Tt.deno}else if(typeof document<"u")Ce="web";else if(typeof navigator<"u"&&navigator.product==="ReactNative")Ce="react-native";else{var jt;Ce="node",pt=typeof process<"u"?(jt=process.version)===null||jt===void 0?void 0:jt.replace(/^v/,""):void 0}const rn=[`runtime=${Ce}`];pt&&rn.push(`runtime-version=${pt}`);const Ji={"X-Client-Info":`supabase-js/${Gi}; ${rn.join("; ")}`},Qi={headers:Ji},Yi={schema:"public"},Xi={autoRefreshToken:!0,persistSession:!0,detectSessionInUrl:!0,flowType:"implicit"},Zi={},ea={enabled:!1,respectSamplingDecision:!0};function ta(t,e,r,n){function s(i){return i instanceof r?i:new r(function(a){a(i)})}return new(r||(r=Promise))(function(i,a){function o(u){try{c(n.next(u))}catch(h){a(h)}}function l(u){try{c(n.throw(u))}catch(h){a(h)}}function c(u){u.done?i(u.value):s(u.value).then(o,l)}c((n=n.apply(t,[])).next())})}let At=null;const ra="@opentelemetry/api";function na(){return At===null&&(At=import(ra).catch(()=>null)),At}function sa(){return ta(this,void 0,void 0,function*(){try{const t=yield na();if(!t||!t.propagation||!t.context)return null;const e={};t.propagation.inject(t.context.active(),e);const r=e.traceparent;return r?{traceparent:r,tracestate:e.tracestate,baggage:e.baggage}:null}catch{return null}})}function ia(t){if(!t||typeof t!="string")return null;const e=t.split("-");if(e.length!==4)return null;const[r,n,s,i]=e;if(r.length!==2||n.length!==32||s.length!==16||i.length!==2)return null;const a=/^[0-9a-f]+$/i;return!a.test(r)||!a.test(n)||!a.test(s)||!a.test(i)||n==="00000000000000000000000000000000"||s==="0000000000000000"?null:{version:r,traceId:n,parentId:s,traceFlags:i,isSampled:(parseInt(i,16)&1)===1}}function aa(t,e){if(!t||!e||e.length===0)return!1;let r;if(t instanceof URL)r=t;else try{r=new URL(t)}catch{return!1}for(const n of e)try{if(typeof n=="string"){if(oa(r.hostname,n))return!0}else if(n instanceof RegExp){if(n.test(r.hostname))return!0}else if(typeof n=="function"&&n(r))return!0}catch{continue}return!1}function oa(t,e){if(e===t)return!0;if(e.startsWith("*.")){const r=e.slice(2);if(t.endsWith(r)&&(t===r||t.endsWith("."+r)))return!0}return!1}function la(t){const e=[];try{const r=new URL(t);e.push(r.hostname)}catch{}return e.push("*.supabase.co","*.supabase.in"),e.push("localhost","127.0.0.1","[::1]"),e}function He(t){"@babel/helpers - typeof";return He=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},He(t)}function ca(t,e){if(He(t)!="object"||!t)return t;var r=t[Symbol.toPrimitive];if(r!==void 0){var n=r.call(t,e);if(He(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function ua(t){var e=ca(t,"string");return He(e)=="symbol"?e:e+""}function ha(t,e,r){return(e=ua(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function Er(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),r.push.apply(r,n)}return r}function R(t){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?Er(Object(r),!0).forEach(function(n){ha(t,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):Er(Object(r)).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(r,n))})}return t}const da=t=>t?(...e)=>t(...e):(...e)=>fetch(...e),pa=()=>Headers,fa=(t,e,r,n,s)=>{const i=da(n),a=pa(),o=s?.enabled===!0,l=s?.respectSamplingDecision!==!1,c=o?la(e):null;return async(u,h)=>{var d;const f=(d=await r())!==null&&d!==void 0?d:t;let y=new a(h?.headers);if(y.has("apikey")||y.set("apikey",t),y.has("Authorization")||y.set("Authorization",`Bearer ${f}`),c){const g=await ya(u,c,l);g&&(g.traceparent&&!y.has("traceparent")&&y.set("traceparent",g.traceparent),g.tracestate&&!y.has("tracestate")&&y.set("tracestate",g.tracestate),g.baggage&&!y.has("baggage")&&y.set("baggage",g.baggage))}return i(u,R(R({},h),{},{headers:y}))}};async function ya(t,e,r){if(!aa(typeof t=="string"||t instanceof URL?t:t.url,e))return null;const n=await sa();if(!n||!n.traceparent)return null;if(r){const s=ia(n.traceparent);if(s&&!s.isSampled)return null}return n}function Rr(t){return typeof t=="boolean"?{enabled:t}:t}function ga(t){return t.endsWith("/")?t:t+"/"}function ma(t,e){var r,n,s,i,a,o;const{db:l,auth:c,realtime:u,global:h}=t,{db:d,auth:f,realtime:y,global:g}=e,w=Rr(t.tracePropagation),m=Rr(e.tracePropagation),v={db:R(R({},d),l),auth:R(R({},f),c),realtime:R(R({},y),u),storage:{},global:R(R(R({},g),h),{},{headers:R(R({},(r=g?.headers)!==null&&r!==void 0?r:{}),(n=h?.headers)!==null&&n!==void 0?n:{})}),tracePropagation:{enabled:(s=(i=w?.enabled)!==null&&i!==void 0?i:m?.enabled)!==null&&s!==void 0?s:!1,respectSamplingDecision:(a=(o=w?.respectSamplingDecision)!==null&&o!==void 0?o:m?.respectSamplingDecision)!==null&&a!==void 0?a:!0},accessToken:async()=>""};return t.accessToken?v.accessToken=t.accessToken:delete v.accessToken,v}function va(t){const e=t?.trim();if(!e)throw new Error("supabaseUrl is required.");if(!e.match(/^https?:\/\//i))throw new Error("Invalid supabaseUrl: Must be a valid HTTP or HTTPS URL.");try{return new URL(ga(e))}catch{throw Error("Invalid supabaseUrl: Provided URL is malformed.")}}var ba=class extends Ki{constructor(t){super(t)}},wa=class{constructor(t,e,r){var n,s;this.supabaseUrl=t,this.supabaseKey=e;const i=va(t);if(!e)throw new Error("supabaseKey is required.");this.realtimeUrl=new URL("realtime/v1",i),this.realtimeUrl.protocol=this.realtimeUrl.protocol.replace("http","ws"),this.authUrl=new URL("auth/v1",i),this.storageUrl=new URL("storage/v1",i),this.functionsUrl=new URL("functions/v1",i);const a=`sb-${i.hostname.split(".")[0]}-auth-token`,o={db:Yi,realtime:Zi,auth:R(R({},Xi),{},{storageKey:a}),global:Qi,tracePropagation:ea},l=ma(r??{},o);if(this.settings=l,this.storageKey=(n=l.auth.storageKey)!==null&&n!==void 0?n:"",this.headers=(s=l.global.headers)!==null&&s!==void 0?s:{},l.accessToken)this.accessToken=l.accessToken,this.auth=new Proxy({},{get:(u,h)=>{throw new Error(`@supabase/supabase-js: Supabase Client is configured with the accessToken option, accessing supabase.auth.${String(h)} is not possible`)}});else{var c;this.auth=this._initSupabaseAuthClient((c=l.auth)!==null&&c!==void 0?c:{},this.headers,l.global.fetch)}this.fetch=fa(e,t,this._getAccessToken.bind(this),l.global.fetch,l.tracePropagation),this.realtime=this._initRealtimeClient(R({headers:this.headers,accessToken:this._getAccessToken.bind(this),fetch:this.fetch},l.realtime)),this.accessToken&&Promise.resolve(this.accessToken()).then(u=>this.realtime.setAuth(u)).catch(u=>console.warn("Failed to set initial Realtime auth token:",u)),this.rest=new In(new URL("rest/v1",i).href,{headers:this.headers,schema:l.db.schema,fetch:this.fetch,timeout:l.db.timeout,urlLengthLimit:l.db.urlLengthLimit}),this.storage=new Ks(this.storageUrl.href,this.headers,this.fetch,r?.storage),l.accessToken||this._listenForAuthEvents()}get functions(){return new Tn(this.functionsUrl.href,{headers:this.headers,customFetch:this.fetch})}from(t){return this.rest.from(t)}schema(t){return this.rest.schema(t)}rpc(t,e={},r={head:!1,get:!1,count:void 0}){return this.rest.rpc(t,e,r)}channel(t,e={config:{}}){return this.realtime.channel(t,e)}getChannels(){return this.realtime.getChannels()}removeChannel(t){return this.realtime.removeChannel(t)}removeAllChannels(){return this.realtime.removeAllChannels()}async _getAccessToken(){var t=this,e,r;if(t.accessToken)return await t.accessToken();const{data:n}=await t.auth.getSession();return(e=(r=n.session)===null||r===void 0?void 0:r.access_token)!==null&&e!==void 0?e:t.supabaseKey}_initSupabaseAuthClient({autoRefreshToken:t,persistSession:e,detectSessionInUrl:r,storage:n,userStorage:s,storageKey:i,flowType:a,lock:o,debug:l,throwOnError:c,experimental:u,lockAcquireTimeout:h,skipAutoInitialize:d},f,y){const g={Authorization:`Bearer ${this.supabaseKey}`,apikey:`${this.supabaseKey}`};return new ba({url:this.authUrl.href,headers:R(R({},g),f),storageKey:i,autoRefreshToken:t,persistSession:e,detectSessionInUrl:r,storage:n,userStorage:s,flowType:a,lock:o,debug:l,throwOnError:c,experimental:u,fetch:y,lockAcquireTimeout:h,skipAutoInitialize:d,hasCustomAuthorizationHeader:Object.keys(this.headers).some(w=>w.toLowerCase()==="authorization")})}_initRealtimeClient(t){return new gs(this.realtimeUrl.href,R(R({},t),{},{params:R(R({},{apikey:this.supabaseKey}),t?.params)}))}_listenForAuthEvents(){return this.auth.onAuthStateChange((t,e)=>{this._handleTokenChanged(t,"CLIENT",e?.access_token)})}_handleTokenChanged(t,e,r){(t==="TOKEN_REFRESHED"||t==="SIGNED_IN")&&this.changedAccessToken!==r?(this.changedAccessToken=r,this.realtime.setAuth(r)):t==="SIGNED_OUT"&&(this.realtime.setAuth(),e=="STORAGE"&&this.auth.signOut(),this.changedAccessToken=void 0)}};const _a=(t,e,r)=>new wa(t,e,r);function xa(){if(typeof window<"u")return!1;const t=globalThis.process;if(!t)return!1;const e=t.version;if(e==null)return!1;const r=e.match(/^v(\d+)\./);return r?parseInt(r[1],10)<=18:!1}xa()&&console.warn("⚠️  Node.js 18 and below are deprecated and will no longer be supported in future versions of @supabase/supabase-js. Please upgrade to Node.js 20 or later. For more information, visit: https://github.com/orgs/supabase/discussions/37217");const Sa="https://myrdtblbtufldzloupvc.supabase.co",ka="sb_publishable_r8uWeQzCB2iOq-RE39oyHw_hGajg3t_",re=_a(Sa,ka);async function Ta(){return re.auth.signOut()}function ja(t){return re.auth.onAuthStateChange(t).data.subscription}async function nn(){const{data:t,error:e}=await re.auth.getUser();if(e?.name==="AuthSessionMissingError")return null;if(e)throw e;return t.user}async function Aa(){return re.auth.signInWithOAuth({provider:"google",options:{redirectTo:window.location.origin}})}async function Ea(){return re.auth.signInWithOAuth({provider:"github",options:{redirectTo:window.location.origin}})}function sn(t){return{id:t.id,displayName:t.user_metadata?.display_name??"",email:t.email??"",avatarUrl:t.user_metadata?.avatar_url??"",provider:t.app_metadata?.provider??"email",isAuthenticated:!0,isGuest:!1,createdAt:t.created_at}}async function Ra(){const t=await nn();if(t){p.user=sn(t);return}p.user=Ir()}function Ee(){const t={savedAt:Date.now(),currentScreen:p.currentScreen,navigation:{history:[...p.navigation.history]},quiz:{category:p.quiz.category,difficulty:p.quiz.difficulty,currentQuestionIndex:p.quiz.currentQuestionIndex,selectedAnswerIndex:p.quiz.selectedAnswerIndex,isAnswerLocked:p.quiz.isAnswerLocked,currentExplanation:p.quiz.currentExplanation,score:p.quiz.score,streak:p.quiz.streak,bestStreak:p.quiz.bestStreak,answers:p.quiz.answers,startedAt:p.quiz.startedAt,remainingTime:p.quiz.remainingTime,questionTimeLimit:p.quiz.questionTimeLimit,quizTimeLimit:p.quiz.quizTimeLimit,remainingQuizTime:p.quiz.remainingQuizTime},expired:!1};je(D.QUIZ_SESSION,t)}function Oa(){const t=de(D.QUIZ_SESSION,null);return t?Date.now()-t.savedAt>U.SESSION_TIMEOUT?(We(),{expired:!0}):t:null}function We(){_n(D.QUIZ_SESSION)}function Pa(t){t?.quiz&&(Object.assign(p.quiz,t.quiz),t.navigation?.history&&(p.navigation.history=[...t.navigation.history]),p.currentScreen=t.currentScreen)}function $(t){const e=document.querySelector(".quiz__toast");e&&e.remove();const r=document.createElement("div");r.className="quiz__toast",r.textContent=t,document.body.appendChild(r),requestAnimationFrame(()=>{r.classList.add("quiz__toast--visible")}),setTimeout(()=>{r.classList.remove("quiz__toast--visible"),setTimeout(()=>{r.remove()},250)},2500)}function za(t){return!t||typeof t.quiz.startedAt!="number"?!1:Math.floor((Date.now()-t.quiz.startedAt)/1e3)>=U.QUIZ_TIME_LIMIT?"expired":!0}function Ca(){const t=Oa();if(t?.expired){$("Your quiz session has expired."),p.currentScreen="home";return}else if(t){const e=za(t);if(e==="expired"){We(),$("Your quiz expired while you were away."),p.currentScreen="home";return}if(e===!0){p.pendingSession=t,p.currentScreen="resume",$("Previous quiz session restored.");return}We()}}function Ve(t=""){return String(t).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function Ia(){const t=document.querySelector("#quiz-header");t&&(t.innerHTML=`

    ${p.currentScreen!=="welcome"&&p.currentScreen!=="home"?`

          <button

            class="
              quiz__header-back
            "

            type="button"

            data-action="go-back"

            aria-label="
              Go back
            "
          >

            <i
              data-feather="arrow-left"
            ></i>

            Back
            
          </button>

        `:""}

    <div class="quiz__brand">

      <span
        class="
          quiz__brand-logo
        "
      >

        <img

          src="./assets/images/realsam_logo_light.png
          "

          alt="
            The Realsam Logo
          "

          class="
            quiz__brand-logo-image
          "
        >

      </span>

      <span>
        QuizMaster
      </span>

    </div>

    <div

      class="
        quiz__user

        ${p.currentScreen==="welcome"||p.currentScreen==="home"?"quiz__user--hidden":""}
      "

    >

      <span
        class="
          quiz__user-greeting
        "
      >

        Hi,

        <span
          class="
            quiz__user-name
          "
        >
          ${Ve(p.user.displayName)||"Guest"}
          

        </span>
          👋
      </span>

    </div>

  `)}function qa(){return`

    <section class="quiz__container">
      <div class="quiz__contents">

        <div
          class="quiz__intro-greeting"
        >

          <i
            data-feather="award"
          ></i>

          <span>
            Competitive Quiz Experience
          </span>

        </div>

        <h1 class="quiz__title">

          Test Your Knowledge

        </h1>

        <p class="quiz__intro-subtext">

          Challenge yourself,
          climb the leaderboard,
          and improve your streak.

        </p>

      </div>

      <form
        class="quiz__welcome-form quiz__actions quiz__actions--vertical"
      > 

        <label
          class="quiz__input-label sr-only"
          for="display-name"
        >

          Enter Your Name

        </label>

        <input
          id="display-name"

          class="quiz__input-text"

          type="text"

          placeholder="Enter your name"
          
          required

          maxlength="20"

          value="${Ve(p.user.displayName)}"

        />

        <button
          type="submit"

          class="quiz__btn-primary"
        >

          <i
            data-feather="arrow-right"
          ></i>

          <span>
            Continue
          </span>

        </button>

      </form>

    </section>

  `}function $a(){const t=p.user.isGuest;return`
  
    <section
      class="quiz__container"
    >

      <div class="quiz__contents">

        <div class="quiz__greeting">
          Hello,

            <span
              class="quiz__greeting-name"
            >

               ${Ve(p.user.displayName||"Guest")}

            </span>

          👋

        </div>

        <h1 class="quiz__title">
          Ready to Test Your Knowledge?
        </h1>

        <p class="quiz__intro-subtext">
          Challenge yourself with carefully
          designed questions and climb
          the leaderboard.
        </p>

      </div>

      <div class="quiz__actions">

        ${t?`
            <button

              class="quiz__btn-secondary"
              data-action="open-auth"
              aria-label="Sign in"

            >

              Sign In

            </button>

            `:`

            <button

              class="quiz__btn-secondary"
              data-action="view-profile"
              aria-label="See profile"

            >

              My Profile

            </button>

            <button

              class="quiz__btn-secondary"
              data-action="logout"
              aria-label="Log out"

            >

              Logout

            </button>

            `}

        <button

          class="quiz__btn-secondary"
          data-action="view-leaderboard"
          aria-label="See leaderboard"

        >

          Leaderboard

        </button>

        <button

          class="quiz__btn-primary"
          data-action="open-settings"
          aria-label="Start quiz"

        >

          Start Quiz

        </button>

      </div>
      
    </section>

  `}function La({remainingTime:t}){return`

    <div

      class="
        quiz__timer

        ${t<=5?"quiz__timer--warning":""}
      "

    >

      <i
        data-feather="clock"
      ></i>

      <span
        class="
          quiz__timer-value
        "
      >

        ${t}s

      </span>

    </div>

  `}function Ma({remainingQuizTime:t}){return`

    <div
      class="
        quiz__quiz-timer
      "
    >

      <i
        data-feather="activity"
      ></i>

      <span
        class="
          quiz__quiz-timer-value
        "
      >

        ${Math.floor(t/60)}:${(t%60).toString().padStart(2,"0")}

      </span>

    </div>

  `}function Na({currentExplanation:t}){return`

    <div class="quiz__feedback">

      <p
        class="
          quiz__feedback-text
        "
      >

        ${t}

      </p>

    </div>

  `}function Ua({isAnswerLocked:t,selectedAnswerIndex:e}){return`

    <div class="quiz__actions">

      <button

        type="button"

        class="
          quiz__btn-primary
        "

        data-action="${t?"next-question":"submit-answer"}"

        ${!t&&e===null?"disabled":""}

      >

        <i
          data-feather="${t?"arrow-right":"check"}"
        ></i>

        <span>

          ${t?"Next Question":"Submit Answer"}

        </span>

      </button>

    </div>

  `}function Da({option:t,index:e,isSelected:r,isCorrect:n,isAnswerLocked:s}){return`

    <li

      class="
        quiz__option-item

        ${s&&n?"quiz__option-item--correct":""}

        ${s&&r&&!n?"quiz__option-item--incorrect":""}
      "

    >

      <input

        class="
          quiz__option-input
        "

        type="radio"

        name="quiz-option"

        id="option-${e}"

        value="${e}"

        ${r?"checked":""}

        ${s?"disabled":""}

      />

      <label

        class="
          quiz__option-label
        "

        for="option-${e}"

        data-action="select-answer"

        data-index="${e}"

      >

        <span
          class="
            quiz__option-letter
          "
        >

          ${["A","B","C","D"][e]}

        </span>

        <span
          class="
            quiz__option-content
          "
        >

          ${t}

        </span>

        <span
          class="
            quiz__status-icon
          "
        >

          <img

            src="
              ./assets/images/quiz__options/quiz__option-select.png
            "

            alt="Indicator"

            aria-hidden="true"

          >

        </span>

      </label>

    </li>

  `}function Ba(){const{questions:t,currentQuestionIndex:e,selectedAnswerIndex:r,isAnswerLocked:n,currentExplanation:s}=p.quiz,i=t[e];if(!i)return`

      <div
        class="
          quiz__fatal-error
        "
      >

        <h2>
          Invalid quiz state
        </h2>

      </div>

    `;const a=(e+1)/t.length*100;return`

    <section class="quiz__container">

      <div class="quiz__contents">

        <div class="quiz__metrics-bar">

          <div class="quiz__metrics-row">

            <div>

              Question

              <span
                class="
                  quiz__progress-current
                "
              >
                ${e+1}
              </span>

              /

              <span
                class="
                  quiz__progress-length
                "
              >
                ${t.length}
              </span>

            </div>

            ${La({remainingTime:p.quiz.remainingTime})}

            ${Ma({remainingQuizTime:p.quiz.remainingQuizTime})}
            
          </div>

          <div class="quiz__progress-track">

            <div
              class="quiz__progress-fill"
              style="width: ${a}%"
            ></div>

          </div>

        </div>

        <h2 class="quiz__question">
          ${i.question}
        </h2>

        <fieldset
          class="quiz__options-fieldset"
        >

          <ul class="quiz__options-list">

            ${i.options.map((o,l)=>{const c=r===l,u=i.answer===l;return Da({option:o,index:l,isSelected:c,isCorrect:u,isAnswerLocked:n})}).join("")}

          </ul>

        </fieldset>

        ${Ua({isAnswerLocked:n,selectedAnswerIndex:r})}

        ${n?Na({currentExplanation:s}):""}

      </div>

    </section>

  `}function an({totalQuestions:t,questionTimeLimit:e,baseCorrectPoints:r,timeBonusMultiplier:n,streakBonusMultiplier:s}){const i=t*r,a=t*(e*n);let o=0;for(let l=1;l<=t;l++)o+=l*s;return i+a+o}function Ha(t){return t.filter(e=>e.isCorrect).length}function Wa({totalDurationSeconds:t,totalQuestions:e}){return e===0?0:(t/e).toFixed(1)}function vt(){try{const t=de(D.LEADERBOARD,[]);return Array.isArray(t)?t:[]}catch(t){return console.error("Failed to load leaderboard:",t),[]}}function Va(t){try{je(D.LEADERBOARD,t)}catch(e){console.error("Failed to save leaderboard:",e)}}function Fa({userId:t,displayName:e,score:r,accuracy:n,bestStreak:s,totalDurationSeconds:i}){const a=vt(),o=a.find(c=>c.userId===t);o?r>o.score&&(o.score=r,o.accuracy=n,o.bestStreak=s,o.totalDurationSeconds=i,o.updatedAt=Date.now()):a.push({userId:t,displayName:e,score:r,accuracy:n,bestStreak:s,totalDurationSeconds:i,updatedAt:Date.now()}),a.sort((c,u)=>u.score-c.score||u.accuracy-c.accuracy||c.totalDurationSeconds-u.totalDurationSeconds);const l=a.slice(0,100);Va(l)}function Ka(t){const r=vt().findIndex(n=>n.userId===t);return r>=0?r+1:null}function Ga(t){return Math.floor(t/100)+1}function Ja(t){return t%100}function on(t){return t>=50?"Grandmaster":t>=40?"Legend":t>=30?"Master":t>=20?"Expert":t>=10?"Scholar":t>=5?"Explorer":t>=2?"Learner":"Beginner"}function Qa(){return p.ui.levelUpModalVisible?`

    <div
      class="
        quiz__modal-overlay
      "
    >

      <div
        class="
          quiz__modal
        "
      >

        <h2>

          ⬆️ LEVEL UP!

        </h2>

        <div
          class="
            quiz__modal-level
          "
        >

          Level

          ${p.ui.unlockedLevel}

        </div>

        <div
          class="
            quiz__modal-title
          "
        >

          ${on(p.ui.unlockedLevel)}

        </div>

        <button

          class="
            quiz__btn-primary
          "

          data-action="close-level-up"
          
          aria-label="Close level up modal"

        >

          Continue

        </button>

      </div>

    </div>

  `:""}function Ya(){return{quizzesPlayed:0,highestScore:0,totalScore:0,averageScore:0,correctAnswers:0,incorrectAnswers:0,bestStreak:0,totalTimePlayed:0,level:1,experience:0,perfectScores:0}}function bt(){const t=de(D.PLAYER_STATS,{});return{...Ya(),...t}}function Xa(t){je(D.PLAYER_STATS,t)}function Za(t,e=bt()){const{score:r,bestStreak:n,correctAnswers:s,totalQuestions:i,totalDurationSeconds:a,accuracy:o}=t,l={...e},c=l.level;l.quizzesPlayed++,l.totalScore+=r,l.highestScore=Math.max(l.highestScore,r),l.averageScore=Math.round(l.totalScore/l.quizzesPlayed),l.correctAnswers+=s,l.incorrectAnswers+=i-s,l.bestStreak=Math.max(l.bestStreak,n),l.totalTimePlayed+=a,o===100&&l.perfectScores++;const u=Math.round(r/10);return l.experience+=u,l.level=Ga(l.experience),{stats:l,earnedXP:u,previousLevel:c,newLevel:l.level,leveledUp:l.level>c}}const ln=[{id:"first-quiz",title:"First Steps",description:"Complete your first quiz."},{id:"quiz-master-10",title:"Quiz Enthusiast",description:"Complete 10 quizzes.",target:10,metric:"quizzesPlayed"},{id:"perfect-score",title:"Perfect Score",description:"Get 100% accuracy in a quiz.",target:1,metric:"perfectScores"},{id:"streak-5",title:"Hot Streak",description:"Reach a streak of 5.",target:5,metric:"bestStreak"}];function eo(){const t=bt(),e=de(D.ACHIEVEMENTS,[]),r=[];return t.quizzesPlayed>=1&&!e.includes("first-quiz")&&(e.push("first-quiz"),r.push("first-quiz")),t.quizzesPlayed>=10&&!e.includes("quiz-master-10")&&(e.push("quiz-master-10"),r.push("quiz-master-10")),t.bestStreak>=5&&!e.includes("streak-5")&&(e.push("streak-5"),r.push("streak-5")),t.perfectScores>=1&&!e.includes("perfect-score")&&(e.push("perfect-score"),r.push("perfect-score")),je(D.ACHIEVEMENTS,e),r}function to(t,e){const r=e[t.metric]||0;return{current:r,target:t.target,percentage:Math.min(100,Math.round(r/t.target*100))}}function ro(){if(!p.ui.achievementModalVisible)return"";const t=ln.find(e=>e.id===p.ui.unlockedAchievement);return t?`

    <div
      class="
        quiz__modal-overlay
      "
    >

      <div
        class="
          quiz__modal
        "
      >

        <h2>

          🏆 Achievement Unlocked

        </h2>

        <div
          class="
            quiz__modal-level
          "
        >

          ${t.title}

        </div>

        <div
          class="
            quiz__modal-title
          "
        >

          ${t.description}

        </div>

        <button

          class="
            quiz__btn-primary
          "

          data-action="close-achievement"
          
          aria-label="Close achievement"

        >

          Continue

        </button>

      </div>

    </div>

  `:""}function no({title:t,value:e,icon:r="",footer:n=""}){return`

    <div
      class="
        quiz__analytics-card
      "
    >

      <div
        class="
          quiz__stat-card-header
        "
      >

        ${r?`

            <span
              class="
                quiz__stat-card-icon
              "
            >

              ${r}

            </span>

          `:""}

        <strong>

          ${t}

        </strong>

      </div>

      <p
        class="
          quiz__stat-card-value
        "
      >

        ${e}

      </p>

      ${n?`

          <small>

            ${n}

          </small>

        `:""}

    </div>

  `}function so(){const{score:t,questions:e,answers:r,bestStreak:n,totalDurationSeconds:s}=p.quiz,i=an({totalQuestions:e.length,questionTimeLimit:U.QUESTION_TIME_LIMIT,baseCorrectPoints:U.BASE_CORRECT_POINTS,timeBonusMultiplier:U.TIME_BONUS_MULTIPLIER,streakBonusMultiplier:U.STREAK_BONUS_MULTIPLIER}),a=Ha(r),o=e.length>0?Math.round(a/e.length*100):0,l=Wa({totalDurationSeconds:s,totalQuestions:e.length}),c=Ka(p.user.id),u=vt(),h=c?Math.max(1,Math.round(c/u.length*100)):null;return`

    <section class="quiz__container">

      <div class="quiz__contents">

        <h1 class="quiz__title">
          Quiz Complete 🎉
        </h1>

        <div class="quiz__score-box">

          <p class="quiz__score-label">
            Your Score
          </p>

          <div class="quiz__score-value">
            ${t}
          </div>

          <p class="quiz__result-feedback">

            /${i}

          </p>


        </div>

      </div>

      <div class="quiz__analytics">
        <!--
        ${no({title:"Accuracy",value:`${o}%`,icon:"🏆"})}
        -->
        
        <div class="quiz__analytics-card">

          <span class="quiz__analytics-label">
            Accuracy
          </span>

          <span class="quiz__analytics-value">
            
            ${o}%

            <span
              class="
                quiz__analytics-meta
              "
            >

              (${a}/${e.length}) Correct

            </span>
          
          </span>

        </div>

        <div class="quiz__analytics-card">

          <span class="quiz__analytics-label">
            Best Streak
          </span>

          <span class="quiz__analytics-value">
            ${n}
          </span>

        </div>

        <div class="quiz__analytics-card">

          <span class="quiz__analytics-label">
            Time
          </span>

          <span class="quiz__analytics-value">
            
            ${s}s

            <span
              class="
                quiz__analytics-meta
              "
            >

              (${l}s/question)

            </span>

          </span>

        </div>

        <div
          class="
            quiz__analytics-card
          "
        >

          <span
            class="
              quiz__analytics-label
            "
          >

            Rank

          </span>

          <span
            class="
              quiz__analytics-value
            "
          >

            ${c?`#${c} 
              
                <span
                  class="
                    quiz__analytics-meta
                  "
                >

                  of ${u.length}

                </span>`:"--"}

          </span>

        </div>

        <div class="quiz__analytics-card">

          <span
            class="quiz__analytics-label"
          >
            Percentile
          </span>

          <span
            class="quiz__analytics-value"
          >
            Top ${h}%
          </span>

        </div>

      </div>

      <div class="quiz__actions">

        <button
          class="quiz__btn-secondary"
          data-action="view-leaderboard"
          aria-label="See leaderboard"
        >

          Leaderboard

        </button>

        <button

          class="quiz__btn-secondary"

          data-action="review-answers"

        >

          Review Answers

        </button>

        <button
          class="quiz__btn-primary"
          data-action="restart-quiz"
          aria-label="Restart quiz"
        >

          Play Again

        </button>

      </div>

    </section>

    ${Qa()}

    ${ro()}

  `}function io({leaderboard:t,searchTerm:e}){if(!e)return t;const r=e.toLowerCase();return t.filter(n=>n.displayName.toLowerCase().includes(r))}function ao({leaderboard:t,currentUserId:e,collapsed:r=!1}){const n=t.findIndex(s=>s.userId===e);return r?n<=4?t.slice(0,5):[...t.slice(0,5),{type:"ellipsis"},...t.slice(Math.max(0,n-1),n+2)]:n===-1?t.slice(0,r?5:10):n<=(r?4:9)?t.slice(0,10):[...t.slice(0,10),{type:"ellipsis"},...t.slice(Math.max(0,n-1),n+2)]}function oo(){const t=vt(),e=io({leaderboard:t,searchTerm:p.ui.leaderboardSearchTerm}),r=Ve(p.user.id),n=ao({leaderboard:e,currentUserId:r,collapsed:p.ui.leaderboardCollapsed}),s=an({totalQuestions:p.quiz.questions.length,questionTimeLimit:p.quiz.questionTimeLimit,baseCorrectPoints:U.BASE_CORRECT_POINTS,timeBonusMultiplier:U.TIME_BONUS_MULTIPLIER,streakBonusMultiplier:U.STREAK_BONUS_MULTIPLIER});return`

    <section class="quiz__container">

      <div class="quiz__contents">

        <div
          class="quiz__leaderboard-wrapper"
        >

          <div
            class="
              quiz__leaderboard-header
            "
          >

            <h2>
              Leaderboard
            </h2>

            <div
              class="
                quiz__leaderboard-actions
              "
            >

              <button

                class="
                  quiz__btn-icon
                "

                type="button"

                data-action="locate-user"

                aria-label="
                  Locate me
                "
              >

                <i
                  data-feather="navigation"
                  >
                </i>

              </button>

              <button

                class="
                  quiz__btn-icon
                "

                type="button"

                data-action="toggle-leaderboard-search"

                aria-label="
                  Search leaderboard
                "
              >

                <i
                  data-feather="search"
                ></i>

              </button>

              <button

                class="
                  quiz__btn-icon
                "

                type="button"

                data-action="toggle-leaderboard-collapse"

                aria-label="
                  Collapse leaderboard
                "
              >

                <i

                  data-feather="${p.ui.leaderboardCollapsed?"chevrons-down":"chevrons-up"}"

                ></i>

              </button>

            </div>

          </div>

          ${p.ui.leaderboardSearchVisible?`

                <div
                  class="
                    quiz__leaderboard-search
                  "
                >

                  <input

                    class="
                      quiz__input-text
                    "

                    type="search"

                    placeholder="Search player..."

                    value="${p.ui.leaderboardSearchTerm}"

                    data-action="
                      leaderboard-search
                    "

                  />

                </div>

              `:""}

          <ul
            class="quiz__leaderboard-list"
          >

            ${e.length===0?`

                <li
                  class="
                    quiz__leaderboard-empty
                  "
                >

                  <i
                    data-feather="${p.ui.leaderboardSearchTerm?"search":"bar-chart-2"}"
                  ></i>

                  <p>

                    ${p.ui.leaderboardSearchTerm?"No matching players found.":"No leaderboard entries yet."}

                  </p>

                </li>

              `:`

            ${n.map((i,a)=>{if(i.type==="ellipsis")return`

                    <li
                      class="
                        quiz__leaderboard-ellipsis
                      "
                    >

                      ...

                    </li>

                  `;const o=e.findIndex(c=>c.userId===i.userId);return`

                  <li
                    class="
                      quiz__leaderboard-item

                      ${i.userId===r?"quiz__leaderboard-item--current-user":""}
                    "
                  >

                    <div
                      class="
                        quiz__leaderboard-pos
                        
                        ${o===0?"quiz__leaderboard-pos-first":""}

                        ${o===1?"quiz__leaderboard-pos-second":""}

                        ${o===2?"quiz__leaderboard-pos-third":""}
                      "
                    >

                        ${o+1}

                    </div>

                    <div
                      class="
                        quiz__leaderboard-details
                      "
                    >

                      <span
                        class="
                          quiz__leaderboard-name
                        "
                      >

                        ${Ve(i.displayName)}

                      </span>

                      <div
                        class="
                          quiz__leaderboard-meta
                        "
                      >

                        <span>

                          ${i.accuracy??0}% Accuracy,

                        </span>

                        <span>

                          ${i.bestStreak??0} Streak,

                        </span>

                        <span>

                          ${Math.floor((i.totalDurationSeconds??0)/60)}m

                          ${(i.totalDurationSeconds??0)%60}s

                        </span>

                      </div>

                    </div>

                    <div 
                      class="
                        quiz__leaderboard-score
                      ">

                      ${o===0?`
                        <img
                          src="./assets/images/medals/gold.png"
                          alt="1st place medal"
                          class="quiz__leaderboard-medal"
                        />
                      `:o===1?`
                        <img
                          src="./assets/images/medals/silver.png"
                          alt="2nd place medal"
                          class="quiz__leaderboard-medal"
                        />
                      `:o===2?`
                        <img
                          src="./assets/images/medals/bronze.png"
                          alt="3rd place medal"
                          class="quiz__leaderboard-medal"
                        />
                      `:""}

                      <div
                        class="
                          quiz__leaderboard-score-values
                        "
                      >

                        <span 
                          class="
                            quiz__score-digits
                          "
                        >

                          ${i.score}

                        </span>
                        <span
                          class="
                            quiz__score-max
                          "
                        >

                          /${s}

                        </span>

                      </div>


                    </div>

                  </li>

                `}).join("")}

            
            `}

          </ul>

        </div>

      </div>

      <div class="quiz__actions">

        <button
          class="quiz__btn-secondary"
          data-action="share-score"
          aria-label="Share Score"
        >

          <i data-feather="share-2"></i>

          <span>
            Share
          </span>

        </button>

        <button
          class="quiz__btn-primary"
          data-action="restart-quiz"
          aria-label="Restart quiz"
        >

          <i data-feather="rotate-ccw"></i>

          <span>
            Play Again
          </span>

        </button>

      </div>

    </section>

  `}function lo(){const t=p.pendingSession;return t?`

    <section
      class="quiz__container"
    >

      <div
        class="quiz__contents"
      >

        <h1
          class="quiz__title"
        >
          Resume Quiz?
        </h1>

        <p>

          Question
          ${t.quiz.currentQuestionIndex+1}

        </p>

        <p>

          Current Score:
          ${t.quiz.score}

        </p>

      </div>

      <div
        class="quiz__actions"
      >

        <button

          class="
            quiz__btn-secondary
          "

          data-action="discard-session"

        >

          Start New Quiz

        </button>

        <button

          class="
            quiz__btn-primary
          "

          data-action="resume-session"

        >

          Continue

        </button>

      </div>

    </section>

  `:""}function co(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var it={exports:{}},uo=it.exports,Or;function ho(){return Or||(Or=1,(function(t,e){(function(n,s){t.exports=s()})(typeof self<"u"?self:uo,function(){return(function(r){var n={};function s(i){if(n[i])return n[i].exports;var a=n[i]={i,l:!1,exports:{}};return r[i].call(a.exports,a,a.exports,s),a.l=!0,a.exports}return s.m=r,s.c=n,s.d=function(i,a,o){s.o(i,a)||Object.defineProperty(i,a,{configurable:!1,enumerable:!0,get:o})},s.r=function(i){Object.defineProperty(i,"__esModule",{value:!0})},s.n=function(i){var a=i&&i.__esModule?function(){return i.default}:function(){return i};return s.d(a,"a",a),a},s.o=function(i,a){return Object.prototype.hasOwnProperty.call(i,a)},s.p="",s(s.s=0)})({"./dist/icons.json":(function(r){r.exports={activity:'<polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>',airplay:'<path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"></path><polygon points="12 15 17 21 7 21 12 15"></polygon>',"alert-circle":'<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line>',"alert-octagon":'<polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line>',"alert-triangle":'<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line>',"align-center":'<line x1="18" y1="10" x2="6" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="18" y1="18" x2="6" y2="18"></line>',"align-justify":'<line x1="21" y1="10" x2="3" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="21" y1="18" x2="3" y2="18"></line>',"align-left":'<line x1="17" y1="10" x2="3" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="17" y1="18" x2="3" y2="18"></line>',"align-right":'<line x1="21" y1="10" x2="7" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="21" y1="18" x2="7" y2="18"></line>',anchor:'<circle cx="12" cy="5" r="3"></circle><line x1="12" y1="22" x2="12" y2="8"></line><path d="M5 12H2a10 10 0 0 0 20 0h-3"></path>',aperture:'<circle cx="12" cy="12" r="10"></circle><line x1="14.31" y1="8" x2="20.05" y2="17.94"></line><line x1="9.69" y1="8" x2="21.17" y2="8"></line><line x1="7.38" y1="12" x2="13.12" y2="2.06"></line><line x1="9.69" y1="16" x2="3.95" y2="6.06"></line><line x1="14.31" y1="16" x2="2.83" y2="16"></line><line x1="16.62" y1="12" x2="10.88" y2="21.94"></line>',archive:'<polyline points="21 8 21 21 3 21 3 8"></polyline><rect x="1" y="3" width="22" height="5"></rect><line x1="10" y1="12" x2="14" y2="12"></line>',"arrow-down-circle":'<circle cx="12" cy="12" r="10"></circle><polyline points="8 12 12 16 16 12"></polyline><line x1="12" y1="8" x2="12" y2="16"></line>',"arrow-down-left":'<line x1="17" y1="7" x2="7" y2="17"></line><polyline points="17 17 7 17 7 7"></polyline>',"arrow-down-right":'<line x1="7" y1="7" x2="17" y2="17"></line><polyline points="17 7 17 17 7 17"></polyline>',"arrow-down":'<line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline>',"arrow-left-circle":'<circle cx="12" cy="12" r="10"></circle><polyline points="12 8 8 12 12 16"></polyline><line x1="16" y1="12" x2="8" y2="12"></line>',"arrow-left":'<line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline>',"arrow-right-circle":'<circle cx="12" cy="12" r="10"></circle><polyline points="12 16 16 12 12 8"></polyline><line x1="8" y1="12" x2="16" y2="12"></line>',"arrow-right":'<line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline>',"arrow-up-circle":'<circle cx="12" cy="12" r="10"></circle><polyline points="16 12 12 8 8 12"></polyline><line x1="12" y1="16" x2="12" y2="8"></line>',"arrow-up-left":'<line x1="17" y1="17" x2="7" y2="7"></line><polyline points="7 17 7 7 17 7"></polyline>',"arrow-up-right":'<line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline>',"arrow-up":'<line x1="12" y1="19" x2="12" y2="5"></line><polyline points="5 12 12 5 19 12"></polyline>',"at-sign":'<circle cx="12" cy="12" r="4"></circle><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path>',award:'<circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>',"bar-chart-2":'<line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line>',"bar-chart":'<line x1="12" y1="20" x2="12" y2="10"></line><line x1="18" y1="20" x2="18" y2="4"></line><line x1="6" y1="20" x2="6" y2="16"></line>',"battery-charging":'<path d="M5 18H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3.19M15 6h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3.19"></path><line x1="23" y1="13" x2="23" y2="11"></line><polyline points="11 6 7 12 13 12 9 18"></polyline>',battery:'<rect x="1" y="6" width="18" height="12" rx="2" ry="2"></rect><line x1="23" y1="13" x2="23" y2="11"></line>',"bell-off":'<path d="M13.73 21a2 2 0 0 1-3.46 0"></path><path d="M18.63 13A17.89 17.89 0 0 1 18 8"></path><path d="M6.26 6.26A5.86 5.86 0 0 0 6 8c0 7-3 9-3 9h14"></path><path d="M18 8a6 6 0 0 0-9.33-5"></path><line x1="1" y1="1" x2="23" y2="23"></line>',bell:'<path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path>',bluetooth:'<polyline points="6.5 6.5 17.5 17.5 12 23 12 1 17.5 6.5 6.5 17.5"></polyline>',bold:'<path d="M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"></path><path d="M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z"></path>',"book-open":'<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>',book:'<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>',bookmark:'<path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>',box:'<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line>',briefcase:'<rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>',calendar:'<rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line>',"camera-off":'<line x1="1" y1="1" x2="23" y2="23"></line><path d="M21 21H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3m3-3h6l2 3h4a2 2 0 0 1 2 2v9.34m-7.72-2.06a4 4 0 1 1-5.56-5.56"></path>',camera:'<path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle>',cast:'<path d="M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"></path><line x1="2" y1="20" x2="2.01" y2="20"></line>',"check-circle":'<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline>',"check-square":'<polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path>',check:'<polyline points="20 6 9 17 4 12"></polyline>',"chevron-down":'<polyline points="6 9 12 15 18 9"></polyline>',"chevron-left":'<polyline points="15 18 9 12 15 6"></polyline>',"chevron-right":'<polyline points="9 18 15 12 9 6"></polyline>',"chevron-up":'<polyline points="18 15 12 9 6 15"></polyline>',"chevrons-down":'<polyline points="7 13 12 18 17 13"></polyline><polyline points="7 6 12 11 17 6"></polyline>',"chevrons-left":'<polyline points="11 17 6 12 11 7"></polyline><polyline points="18 17 13 12 18 7"></polyline>',"chevrons-right":'<polyline points="13 17 18 12 13 7"></polyline><polyline points="6 17 11 12 6 7"></polyline>',"chevrons-up":'<polyline points="17 11 12 6 7 11"></polyline><polyline points="17 18 12 13 7 18"></polyline>',chrome:'<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="4"></circle><line x1="21.17" y1="8" x2="12" y2="8"></line><line x1="3.95" y1="6.06" x2="8.54" y2="14"></line><line x1="10.88" y1="21.94" x2="15.46" y2="14"></line>',circle:'<circle cx="12" cy="12" r="10"></circle>',clipboard:'<path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>',clock:'<circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline>',"cloud-drizzle":'<line x1="8" y1="19" x2="8" y2="21"></line><line x1="8" y1="13" x2="8" y2="15"></line><line x1="16" y1="19" x2="16" y2="21"></line><line x1="16" y1="13" x2="16" y2="15"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="12" y1="15" x2="12" y2="17"></line><path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"></path>',"cloud-lightning":'<path d="M19 16.9A5 5 0 0 0 18 7h-1.26a8 8 0 1 0-11.62 9"></path><polyline points="13 11 9 17 15 17 11 23"></polyline>',"cloud-off":'<path d="M22.61 16.95A5 5 0 0 0 18 10h-1.26a8 8 0 0 0-7.05-6M5 5a8 8 0 0 0 4 15h9a5 5 0 0 0 1.7-.3"></path><line x1="1" y1="1" x2="23" y2="23"></line>',"cloud-rain":'<line x1="16" y1="13" x2="16" y2="21"></line><line x1="8" y1="13" x2="8" y2="21"></line><line x1="12" y1="15" x2="12" y2="23"></line><path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"></path>',"cloud-snow":'<path d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25"></path><line x1="8" y1="16" x2="8.01" y2="16"></line><line x1="8" y1="20" x2="8.01" y2="20"></line><line x1="12" y1="18" x2="12.01" y2="18"></line><line x1="12" y1="22" x2="12.01" y2="22"></line><line x1="16" y1="16" x2="16.01" y2="16"></line><line x1="16" y1="20" x2="16.01" y2="20"></line>',cloud:'<path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>',code:'<polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline>',codepen:'<polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon><line x1="12" y1="22" x2="12" y2="15.5"></line><polyline points="22 8.5 12 15.5 2 8.5"></polyline><polyline points="2 15.5 12 8.5 22 15.5"></polyline><line x1="12" y1="2" x2="12" y2="8.5"></line>',codesandbox:'<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="7.5 4.21 12 6.81 16.5 4.21"></polyline><polyline points="7.5 19.79 7.5 14.6 3 12"></polyline><polyline points="21 12 16.5 14.6 16.5 19.79"></polyline><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line>',coffee:'<path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path><line x1="6" y1="1" x2="6" y2="4"></line><line x1="10" y1="1" x2="10" y2="4"></line><line x1="14" y1="1" x2="14" y2="4"></line>',columns:'<path d="M12 3h7a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-7m0-18H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7m0-18v18"></path>',command:'<path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>',compass:'<circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>',copy:'<rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>',"corner-down-left":'<polyline points="9 10 4 15 9 20"></polyline><path d="M20 4v7a4 4 0 0 1-4 4H4"></path>',"corner-down-right":'<polyline points="15 10 20 15 15 20"></polyline><path d="M4 4v7a4 4 0 0 0 4 4h12"></path>',"corner-left-down":'<polyline points="14 15 9 20 4 15"></polyline><path d="M20 4h-7a4 4 0 0 0-4 4v12"></path>',"corner-left-up":'<polyline points="14 9 9 4 4 9"></polyline><path d="M20 20h-7a4 4 0 0 1-4-4V4"></path>',"corner-right-down":'<polyline points="10 15 15 20 20 15"></polyline><path d="M4 4h7a4 4 0 0 1 4 4v12"></path>',"corner-right-up":'<polyline points="10 9 15 4 20 9"></polyline><path d="M4 20h7a4 4 0 0 0 4-4V4"></path>',"corner-up-left":'<polyline points="9 14 4 9 9 4"></polyline><path d="M20 20v-7a4 4 0 0 0-4-4H4"></path>',"corner-up-right":'<polyline points="15 14 20 9 15 4"></polyline><path d="M4 20v-7a4 4 0 0 1 4-4h12"></path>',cpu:'<rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line>',"credit-card":'<rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line>',crop:'<path d="M6.13 1L6 16a2 2 0 0 0 2 2h15"></path><path d="M1 6.13L16 6a2 2 0 0 1 2 2v15"></path>',crosshair:'<circle cx="12" cy="12" r="10"></circle><line x1="22" y1="12" x2="18" y2="12"></line><line x1="6" y1="12" x2="2" y2="12"></line><line x1="12" y1="6" x2="12" y2="2"></line><line x1="12" y1="22" x2="12" y2="18"></line>',database:'<ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>',delete:'<path d="M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"></path><line x1="18" y1="9" x2="12" y2="15"></line><line x1="12" y1="9" x2="18" y2="15"></line>',disc:'<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="3"></circle>',"divide-circle":'<line x1="8" y1="12" x2="16" y2="12"></line><line x1="12" y1="16" x2="12" y2="16"></line><line x1="12" y1="8" x2="12" y2="8"></line><circle cx="12" cy="12" r="10"></circle>',"divide-square":'<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="8" y1="12" x2="16" y2="12"></line><line x1="12" y1="16" x2="12" y2="16"></line><line x1="12" y1="8" x2="12" y2="8"></line>',divide:'<circle cx="12" cy="6" r="2"></circle><line x1="5" y1="12" x2="19" y2="12"></line><circle cx="12" cy="18" r="2"></circle>',"dollar-sign":'<line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>',"download-cloud":'<polyline points="8 17 12 21 16 17"></polyline><line x1="12" y1="12" x2="12" y2="21"></line><path d="M20.88 18.09A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.29"></path>',download:'<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line>',dribbble:'<circle cx="12" cy="12" r="10"></circle><path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"></path>',droplet:'<path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path>',"edit-2":'<path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>',"edit-3":'<path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>',edit:'<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>',"external-link":'<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line>',"eye-off":'<path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line>',eye:'<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle>',facebook:'<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>',"fast-forward":'<polygon points="13 19 22 12 13 5 13 19"></polygon><polygon points="2 19 11 12 2 5 2 19"></polygon>',feather:'<path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"></path><line x1="16" y1="8" x2="2" y2="22"></line><line x1="17.5" y1="15" x2="9" y2="15"></line>',figma:'<path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"></path><path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"></path><path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"></path><path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"></path><path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"></path>',"file-minus":'<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="9" y1="15" x2="15" y2="15"></line>',"file-plus":'<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="12" y1="18" x2="12" y2="12"></line><line x1="9" y1="15" x2="15" y2="15"></line>',"file-text":'<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline>',file:'<path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline>',film:'<rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect><line x1="7" y1="2" x2="7" y2="22"></line><line x1="17" y1="2" x2="17" y2="22"></line><line x1="2" y1="12" x2="22" y2="12"></line><line x1="2" y1="7" x2="7" y2="7"></line><line x1="2" y1="17" x2="7" y2="17"></line><line x1="17" y1="17" x2="22" y2="17"></line><line x1="17" y1="7" x2="22" y2="7"></line>',filter:'<polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>',flag:'<path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" y1="22" x2="4" y2="15"></line>',"folder-minus":'<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path><line x1="9" y1="14" x2="15" y2="14"></line>',"folder-plus":'<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path><line x1="12" y1="11" x2="12" y2="17"></line><line x1="9" y1="14" x2="15" y2="14"></line>',folder:'<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>',framer:'<path d="M5 16V9h14V2H5l14 14h-7m-7 0l7 7v-7m-7 0h7"></path>',frown:'<circle cx="12" cy="12" r="10"></circle><path d="M16 16s-1.5-2-4-2-4 2-4 2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line>',gift:'<polyline points="20 12 20 22 4 22 4 12"></polyline><rect x="2" y="7" width="20" height="5"></rect><line x1="12" y1="22" x2="12" y2="7"></line><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path>',"git-branch":'<line x1="6" y1="3" x2="6" y2="15"></line><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><path d="M18 9a9 9 0 0 1-9 9"></path>',"git-commit":'<circle cx="12" cy="12" r="4"></circle><line x1="1.05" y1="12" x2="7" y2="12"></line><line x1="17.01" y1="12" x2="22.96" y2="12"></line>',"git-merge":'<circle cx="18" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><path d="M6 21V9a9 9 0 0 0 9 9"></path>',"git-pull-request":'<circle cx="18" cy="18" r="3"></circle><circle cx="6" cy="6" r="3"></circle><path d="M13 6h3a2 2 0 0 1 2 2v7"></path><line x1="6" y1="9" x2="6" y2="21"></line>',github:'<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>',gitlab:'<path d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 0 1-.3-.94l1.22-3.78 2.44-7.51A.42.42 0 0 1 4.82 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.49h8.1l2.44-7.51A.42.42 0 0 1 18.6 2a.43.43 0 0 1 .58 0 .42.42 0 0 1 .11.18l2.44 7.51L23 13.45a.84.84 0 0 1-.35.94z"></path>',globe:'<circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>',grid:'<rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect>',"hard-drive":'<line x1="22" y1="12" x2="2" y2="12"></line><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path><line x1="6" y1="16" x2="6.01" y2="16"></line><line x1="10" y1="16" x2="10.01" y2="16"></line>',hash:'<line x1="4" y1="9" x2="20" y2="9"></line><line x1="4" y1="15" x2="20" y2="15"></line><line x1="10" y1="3" x2="8" y2="21"></line><line x1="16" y1="3" x2="14" y2="21"></line>',headphones:'<path d="M3 18v-6a9 9 0 0 1 18 0v6"></path><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>',heart:'<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>',"help-circle":'<circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line>',hexagon:'<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>',home:'<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline>',image:'<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline>',inbox:'<polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>',info:'<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line>',instagram:'<rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>',italic:'<line x1="19" y1="4" x2="10" y2="4"></line><line x1="14" y1="20" x2="5" y2="20"></line><line x1="15" y1="4" x2="9" y2="20"></line>',key:'<path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"></path>',layers:'<polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline>',layout:'<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line>',"life-buoy":'<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="4"></circle><line x1="4.93" y1="4.93" x2="9.17" y2="9.17"></line><line x1="14.83" y1="14.83" x2="19.07" y2="19.07"></line><line x1="14.83" y1="9.17" x2="19.07" y2="4.93"></line><line x1="14.83" y1="9.17" x2="18.36" y2="5.64"></line><line x1="4.93" y1="19.07" x2="9.17" y2="14.83"></line>',"link-2":'<path d="M15 7h3a5 5 0 0 1 5 5 5 5 0 0 1-5 5h-3m-6 0H6a5 5 0 0 1-5-5 5 5 0 0 1 5-5h3"></path><line x1="8" y1="12" x2="16" y2="12"></line>',link:'<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>',linkedin:'<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle>',list:'<line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line>',loader:'<line x1="12" y1="2" x2="12" y2="6"></line><line x1="12" y1="18" x2="12" y2="22"></line><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line><line x1="2" y1="12" x2="6" y2="12"></line><line x1="18" y1="12" x2="22" y2="12"></line><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line>',lock:'<rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path>',"log-in":'<path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path><polyline points="10 17 15 12 10 7"></polyline><line x1="15" y1="12" x2="3" y2="12"></line>',"log-out":'<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line>',mail:'<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline>',"map-pin":'<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle>',map:'<polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon><line x1="8" y1="2" x2="8" y2="18"></line><line x1="16" y1="6" x2="16" y2="22"></line>',"maximize-2":'<polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" y1="3" x2="14" y2="10"></line><line x1="3" y1="21" x2="10" y2="14"></line>',maximize:'<path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path>',meh:'<circle cx="12" cy="12" r="10"></circle><line x1="8" y1="15" x2="16" y2="15"></line><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line>',menu:'<line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line>',"message-circle":'<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>',"message-square":'<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>',"mic-off":'<line x1="1" y1="1" x2="23" y2="23"></line><path d="M9 9v3a3 3 0 0 0 5.12 2.12M15 9.34V4a3 3 0 0 0-5.94-.6"></path><path d="M17 16.95A7 7 0 0 1 5 12v-2m14 0v2a7 7 0 0 1-.11 1.23"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line>',mic:'<path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" y1="19" x2="12" y2="23"></line><line x1="8" y1="23" x2="16" y2="23"></line>',"minimize-2":'<polyline points="4 14 10 14 10 20"></polyline><polyline points="20 10 14 10 14 4"></polyline><line x1="14" y1="10" x2="21" y2="3"></line><line x1="3" y1="21" x2="10" y2="14"></line>',minimize:'<path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"></path>',"minus-circle":'<circle cx="12" cy="12" r="10"></circle><line x1="8" y1="12" x2="16" y2="12"></line>',"minus-square":'<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="8" y1="12" x2="16" y2="12"></line>',minus:'<line x1="5" y1="12" x2="19" y2="12"></line>',monitor:'<rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line>',moon:'<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>',"more-horizontal":'<circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle>',"more-vertical":'<circle cx="12" cy="12" r="1"></circle><circle cx="12" cy="5" r="1"></circle><circle cx="12" cy="19" r="1"></circle>',"mouse-pointer":'<path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"></path><path d="M13 13l6 6"></path>',move:'<polyline points="5 9 2 12 5 15"></polyline><polyline points="9 5 12 2 15 5"></polyline><polyline points="15 19 12 22 9 19"></polyline><polyline points="19 9 22 12 19 15"></polyline><line x1="2" y1="12" x2="22" y2="12"></line><line x1="12" y1="2" x2="12" y2="22"></line>',music:'<path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle>',"navigation-2":'<polygon points="12 2 19 21 12 17 5 21 12 2"></polygon>',navigation:'<polygon points="3 11 22 2 13 21 11 13 3 11"></polygon>',octagon:'<polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon>',package:'<line x1="16.5" y1="9.4" x2="7.5" y2="4.21"></line><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line>',paperclip:'<path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"></path>',"pause-circle":'<circle cx="12" cy="12" r="10"></circle><line x1="10" y1="15" x2="10" y2="9"></line><line x1="14" y1="15" x2="14" y2="9"></line>',pause:'<rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect>',"pen-tool":'<path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle>',percent:'<line x1="19" y1="5" x2="5" y2="19"></line><circle cx="6.5" cy="6.5" r="2.5"></circle><circle cx="17.5" cy="17.5" r="2.5"></circle>',"phone-call":'<path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',"phone-forwarded":'<polyline points="19 1 23 5 19 9"></polyline><line x1="15" y1="5" x2="23" y2="5"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',"phone-incoming":'<polyline points="16 2 16 8 22 8"></polyline><line x1="23" y1="1" x2="16" y2="8"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',"phone-missed":'<line x1="23" y1="1" x2="17" y2="7"></line><line x1="17" y1="1" x2="23" y2="7"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',"phone-off":'<path d="M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-3.33-2.67m-2.67-3.34a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91"></path><line x1="23" y1="1" x2="1" y2="23"></line>',"phone-outgoing":'<polyline points="23 7 23 1 17 1"></polyline><line x1="16" y1="8" x2="23" y2="1"></line><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',phone:'<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>',"pie-chart":'<path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path><path d="M22 12A10 10 0 0 0 12 2v10z"></path>',"play-circle":'<circle cx="12" cy="12" r="10"></circle><polygon points="10 8 16 12 10 16 10 8"></polygon>',play:'<polygon points="5 3 19 12 5 21 5 3"></polygon>',"plus-circle":'<circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line>',"plus-square":'<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line>',plus:'<line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line>',pocket:'<path d="M4 3h16a2 2 0 0 1 2 2v6a10 10 0 0 1-10 10A10 10 0 0 1 2 11V5a2 2 0 0 1 2-2z"></path><polyline points="8 10 12 14 16 10"></polyline>',power:'<path d="M18.36 6.64a9 9 0 1 1-12.73 0"></path><line x1="12" y1="2" x2="12" y2="12"></line>',printer:'<polyline points="6 9 6 2 18 2 18 9"></polyline><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><rect x="6" y="14" width="12" height="8"></rect>',radio:'<circle cx="12" cy="12" r="2"></circle><path d="M16.24 7.76a6 6 0 0 1 0 8.49m-8.48-.01a6 6 0 0 1 0-8.49m11.31-2.82a10 10 0 0 1 0 14.14m-14.14 0a10 10 0 0 1 0-14.14"></path>',"refresh-ccw":'<polyline points="1 4 1 10 7 10"></polyline><polyline points="23 20 23 14 17 14"></polyline><path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"></path>',"refresh-cw":'<polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>',repeat:'<polyline points="17 1 21 5 17 9"></polyline><path d="M3 11V9a4 4 0 0 1 4-4h14"></path><polyline points="7 23 3 19 7 15"></polyline><path d="M21 13v2a4 4 0 0 1-4 4H3"></path>',rewind:'<polygon points="11 19 2 12 11 5 11 19"></polygon><polygon points="22 19 13 12 22 5 22 19"></polygon>',"rotate-ccw":'<polyline points="1 4 1 10 7 10"></polyline><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"></path>',"rotate-cw":'<polyline points="23 4 23 10 17 10"></polyline><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path>',rss:'<path d="M4 11a9 9 0 0 1 9 9"></path><path d="M4 4a16 16 0 0 1 16 16"></path><circle cx="5" cy="19" r="1"></circle>',save:'<path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path><polyline points="17 21 17 13 7 13 7 21"></polyline><polyline points="7 3 7 8 15 8"></polyline>',scissors:'<circle cx="6" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><line x1="20" y1="4" x2="8.12" y2="15.88"></line><line x1="14.47" y1="14.48" x2="20" y2="20"></line><line x1="8.12" y1="8.12" x2="12" y2="12"></line>',search:'<circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line>',send:'<line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>',server:'<rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line>',settings:'<circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>',"share-2":'<circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>',share:'<path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path><polyline points="16 6 12 2 8 6"></polyline><line x1="12" y1="2" x2="12" y2="15"></line>',"shield-off":'<path d="M19.69 14a6.9 6.9 0 0 0 .31-2V5l-8-3-3.16 1.18"></path><path d="M4.73 4.73L4 5v7c0 6 8 10 8 10a20.29 20.29 0 0 0 5.62-4.38"></path><line x1="1" y1="1" x2="23" y2="23"></line>',shield:'<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>',"shopping-bag":'<path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path>',"shopping-cart":'<circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>',shuffle:'<polyline points="16 3 21 3 21 8"></polyline><line x1="4" y1="20" x2="21" y2="3"></line><polyline points="21 16 21 21 16 21"></polyline><line x1="15" y1="15" x2="21" y2="21"></line><line x1="4" y1="4" x2="9" y2="9"></line>',sidebar:'<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="3" x2="9" y2="21"></line>',"skip-back":'<polygon points="19 20 9 12 19 4 19 20"></polygon><line x1="5" y1="19" x2="5" y2="5"></line>',"skip-forward":'<polygon points="5 4 15 12 5 20 5 4"></polygon><line x1="19" y1="5" x2="19" y2="19"></line>',slack:'<path d="M14.5 10c-.83 0-1.5-.67-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5z"></path><path d="M20.5 10H19V8.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"></path><path d="M9.5 14c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5S8 21.33 8 20.5v-5c0-.83.67-1.5 1.5-1.5z"></path><path d="M3.5 14H5v1.5c0 .83-.67 1.5-1.5 1.5S2 16.33 2 15.5 2.67 14 3.5 14z"></path><path d="M14 14.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-5c-.83 0-1.5-.67-1.5-1.5z"></path><path d="M15.5 19H14v1.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"></path><path d="M10 9.5C10 8.67 9.33 8 8.5 8h-5C2.67 8 2 8.67 2 9.5S2.67 11 3.5 11h5c.83 0 1.5-.67 1.5-1.5z"></path><path d="M8.5 5H10V3.5C10 2.67 9.33 2 8.5 2S7 2.67 7 3.5 7.67 5 8.5 5z"></path>',slash:'<circle cx="12" cy="12" r="10"></circle><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line>',sliders:'<line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line><line x1="12" y1="21" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="3"></line><line x1="20" y1="21" x2="20" y2="16"></line><line x1="20" y1="12" x2="20" y2="3"></line><line x1="1" y1="14" x2="7" y2="14"></line><line x1="9" y1="8" x2="15" y2="8"></line><line x1="17" y1="16" x2="23" y2="16"></line>',smartphone:'<rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line>',smile:'<circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line>',speaker:'<rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><circle cx="12" cy="14" r="4"></circle><line x1="12" y1="6" x2="12.01" y2="6"></line>',square:'<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>',star:'<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>',"stop-circle":'<circle cx="12" cy="12" r="10"></circle><rect x="9" y="9" width="6" height="6"></rect>',sun:'<circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>',sunrise:'<path d="M17 18a5 5 0 0 0-10 0"></path><line x1="12" y1="2" x2="12" y2="9"></line><line x1="4.22" y1="10.22" x2="5.64" y2="11.64"></line><line x1="1" y1="18" x2="3" y2="18"></line><line x1="21" y1="18" x2="23" y2="18"></line><line x1="18.36" y1="11.64" x2="19.78" y2="10.22"></line><line x1="23" y1="22" x2="1" y2="22"></line><polyline points="8 6 12 2 16 6"></polyline>',sunset:'<path d="M17 18a5 5 0 0 0-10 0"></path><line x1="12" y1="9" x2="12" y2="2"></line><line x1="4.22" y1="10.22" x2="5.64" y2="11.64"></line><line x1="1" y1="18" x2="3" y2="18"></line><line x1="21" y1="18" x2="23" y2="18"></line><line x1="18.36" y1="11.64" x2="19.78" y2="10.22"></line><line x1="23" y1="22" x2="1" y2="22"></line><polyline points="16 5 12 9 8 5"></polyline>',table:'<path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18"></path>',tablet:'<rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line>',tag:'<path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line>',target:'<circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle>',terminal:'<polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line>',thermometer:'<path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"></path>',"thumbs-down":'<path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h2.67A2.31 2.31 0 0 1 22 4v7a2.31 2.31 0 0 1-2.33 2H17"></path>',"thumbs-up":'<path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>',"toggle-left":'<rect x="1" y="5" width="22" height="14" rx="7" ry="7"></rect><circle cx="8" cy="12" r="3"></circle>',"toggle-right":'<rect x="1" y="5" width="22" height="14" rx="7" ry="7"></rect><circle cx="16" cy="12" r="3"></circle>',tool:'<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>',"trash-2":'<polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line>',trash:'<polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>',trello:'<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><rect x="7" y="7" width="3" height="9"></rect><rect x="14" y="7" width="3" height="5"></rect>',"trending-down":'<polyline points="23 18 13.5 8.5 8.5 13.5 1 6"></polyline><polyline points="17 18 23 18 23 12"></polyline>',"trending-up":'<polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline>',triangle:'<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>',truck:'<rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle>',tv:'<rect x="2" y="7" width="20" height="15" rx="2" ry="2"></rect><polyline points="17 2 12 7 7 2"></polyline>',twitch:'<path d="M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7"></path>',twitter:'<path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>',type:'<polyline points="4 7 4 4 20 4 20 7"></polyline><line x1="9" y1="20" x2="15" y2="20"></line><line x1="12" y1="4" x2="12" y2="20"></line>',umbrella:'<path d="M23 12a11.05 11.05 0 0 0-22 0zm-5 7a3 3 0 0 1-6 0v-7"></path>',underline:'<path d="M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3"></path><line x1="4" y1="21" x2="20" y2="21"></line>',unlock:'<rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 9.9-1"></path>',"upload-cloud":'<polyline points="16 16 12 12 8 16"></polyline><line x1="12" y1="12" x2="12" y2="21"></line><path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"></path><polyline points="16 16 12 12 8 16"></polyline>',upload:'<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line>',"user-check":'<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><polyline points="17 11 19 13 23 9"></polyline>',"user-minus":'<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="23" y1="11" x2="17" y2="11"></line>',"user-plus":'<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="20" y1="8" x2="20" y2="14"></line><line x1="23" y1="11" x2="17" y2="11"></line>',"user-x":'<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="18" y1="8" x2="23" y2="13"></line><line x1="23" y1="8" x2="18" y2="13"></line>',user:'<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle>',users:'<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path>',"video-off":'<path d="M16 16v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2m5.66 0H14a2 2 0 0 1 2 2v3.34l1 1L23 7v10"></path><line x1="1" y1="1" x2="23" y2="23"></line>',video:'<polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>',voicemail:'<circle cx="5.5" cy="11.5" r="4.5"></circle><circle cx="18.5" cy="11.5" r="4.5"></circle><line x1="5.5" y1="16" x2="18.5" y2="16"></line>',"volume-1":'<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>',"volume-2":'<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>',"volume-x":'<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line>',volume:'<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>',watch:'<circle cx="12" cy="12" r="7"></circle><polyline points="12 9 12 12 13.5 13.5"></polyline><path d="M16.51 17.35l-.35 3.83a2 2 0 0 1-2 1.82H9.83a2 2 0 0 1-2-1.82l-.35-3.83m.01-10.7l.35-3.83A2 2 0 0 1 9.83 1h4.35a2 2 0 0 1 2 1.82l.35 3.83"></path>',"wifi-off":'<line x1="1" y1="1" x2="23" y2="23"></line><path d="M16.72 11.06A10.94 10.94 0 0 1 19 12.55"></path><path d="M5 12.55a10.94 10.94 0 0 1 5.17-2.39"></path><path d="M10.71 5.05A16 16 0 0 1 22.58 9"></path><path d="M1.42 9a15.91 15.91 0 0 1 4.7-2.88"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><line x1="12" y1="20" x2="12.01" y2="20"></line>',wifi:'<path d="M5 12.55a11 11 0 0 1 14.08 0"></path><path d="M1.42 9a16 16 0 0 1 21.16 0"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><line x1="12" y1="20" x2="12.01" y2="20"></line>',wind:'<path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"></path>',"x-circle":'<circle cx="12" cy="12" r="10"></circle><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line>',"x-octagon":'<polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon><line x1="15" y1="9" x2="9" y2="15"></line><line x1="9" y1="9" x2="15" y2="15"></line>',"x-square":'<rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="9" x2="15" y2="15"></line><line x1="15" y1="9" x2="9" y2="15"></line>',x:'<line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>',youtube:'<path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>',"zap-off":'<polyline points="12.41 6.75 13 2 10.57 4.92"></polyline><polyline points="18.57 12.91 21 10 15.66 10"></polyline><polyline points="8 8 3 14 12 14 11 22 16 16"></polyline><line x1="1" y1="1" x2="23" y2="23"></line>',zap:'<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>',"zoom-in":'<circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line>',"zoom-out":'<circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="8" y1="11" x2="14" y2="11"></line>'}}),"./node_modules/classnames/dedupe.js":(function(r,n,s){var i,a;(function(){var o=(function(){function l(){}l.prototype=Object.create(null);function c(m,v){for(var b=v.length,x=0;x<b;++x)g(m,v[x])}var u={}.hasOwnProperty;function h(m,v){m[v]=!0}function d(m,v){for(var b in v)u.call(v,b)&&(m[b]=!!v[b])}var f=/\s+/;function y(m,v){for(var b=v.split(f),x=b.length,A=0;A<x;++A)m[b[A]]=!0}function g(m,v){if(v){var b=typeof v;b==="string"?y(m,v):Array.isArray(v)?c(m,v):b==="object"?d(m,v):b==="number"&&h(m,v)}}function w(){for(var m=arguments.length,v=Array(m),b=0;b<m;b++)v[b]=arguments[b];var x=new l;c(x,v);var A=[];for(var k in x)x[k]&&A.push(k);return A.join(" ")}return w})();typeof r<"u"&&r.exports?r.exports=o:(i=[],a=(function(){return o}).apply(n,i),a!==void 0&&(r.exports=a))})()}),"./node_modules/core-js/es/array/from.js":(function(r,n,s){s("./node_modules/core-js/modules/es.string.iterator.js"),s("./node_modules/core-js/modules/es.array.from.js");var i=s("./node_modules/core-js/internals/path.js");r.exports=i.Array.from}),"./node_modules/core-js/internals/a-function.js":(function(r,n){r.exports=function(s){if(typeof s!="function")throw TypeError(String(s)+" is not a function");return s}}),"./node_modules/core-js/internals/an-object.js":(function(r,n,s){var i=s("./node_modules/core-js/internals/is-object.js");r.exports=function(a){if(!i(a))throw TypeError(String(a)+" is not an object");return a}}),"./node_modules/core-js/internals/array-from.js":(function(r,n,s){var i=s("./node_modules/core-js/internals/bind-context.js"),a=s("./node_modules/core-js/internals/to-object.js"),o=s("./node_modules/core-js/internals/call-with-safe-iteration-closing.js"),l=s("./node_modules/core-js/internals/is-array-iterator-method.js"),c=s("./node_modules/core-js/internals/to-length.js"),u=s("./node_modules/core-js/internals/create-property.js"),h=s("./node_modules/core-js/internals/get-iterator-method.js");r.exports=function(f){var y=a(f),g=typeof this=="function"?this:Array,w=arguments.length,m=w>1?arguments[1]:void 0,v=m!==void 0,b=0,x=h(y),A,k,j,P;if(v&&(m=i(m,w>2?arguments[2]:void 0,2)),x!=null&&!(g==Array&&l(x)))for(P=x.call(y),k=new g;!(j=P.next()).done;b++)u(k,b,v?o(P,m,[j.value,b],!0):j.value);else for(A=c(y.length),k=new g(A);A>b;b++)u(k,b,v?m(y[b],b):y[b]);return k.length=b,k}}),"./node_modules/core-js/internals/array-includes.js":(function(r,n,s){var i=s("./node_modules/core-js/internals/to-indexed-object.js"),a=s("./node_modules/core-js/internals/to-length.js"),o=s("./node_modules/core-js/internals/to-absolute-index.js");r.exports=function(l){return function(c,u,h){var d=i(c),f=a(d.length),y=o(h,f),g;if(l&&u!=u){for(;f>y;)if(g=d[y++],g!=g)return!0}else for(;f>y;y++)if((l||y in d)&&d[y]===u)return l||y||0;return!l&&-1}}}),"./node_modules/core-js/internals/bind-context.js":(function(r,n,s){var i=s("./node_modules/core-js/internals/a-function.js");r.exports=function(a,o,l){if(i(a),o===void 0)return a;switch(l){case 0:return function(){return a.call(o)};case 1:return function(c){return a.call(o,c)};case 2:return function(c,u){return a.call(o,c,u)};case 3:return function(c,u,h){return a.call(o,c,u,h)}}return function(){return a.apply(o,arguments)}}}),"./node_modules/core-js/internals/call-with-safe-iteration-closing.js":(function(r,n,s){var i=s("./node_modules/core-js/internals/an-object.js");r.exports=function(a,o,l,c){try{return c?o(i(l)[0],l[1]):o(l)}catch(h){var u=a.return;throw u!==void 0&&i(u.call(a)),h}}}),"./node_modules/core-js/internals/check-correctness-of-iteration.js":(function(r,n,s){var i=s("./node_modules/core-js/internals/well-known-symbol.js"),a=i("iterator"),o=!1;try{var l=0,c={next:function(){return{done:!!l++}},return:function(){o=!0}};c[a]=function(){return this},Array.from(c,function(){throw 2})}catch{}r.exports=function(u,h){if(!h&&!o)return!1;var d=!1;try{var f={};f[a]=function(){return{next:function(){return{done:d=!0}}}},u(f)}catch{}return d}}),"./node_modules/core-js/internals/classof-raw.js":(function(r,n){var s={}.toString;r.exports=function(i){return s.call(i).slice(8,-1)}}),"./node_modules/core-js/internals/classof.js":(function(r,n,s){var i=s("./node_modules/core-js/internals/classof-raw.js"),a=s("./node_modules/core-js/internals/well-known-symbol.js"),o=a("toStringTag"),l=i((function(){return arguments})())=="Arguments",c=function(u,h){try{return u[h]}catch{}};r.exports=function(u){var h,d,f;return u===void 0?"Undefined":u===null?"Null":typeof(d=c(h=Object(u),o))=="string"?d:l?i(h):(f=i(h))=="Object"&&typeof h.callee=="function"?"Arguments":f}}),"./node_modules/core-js/internals/copy-constructor-properties.js":(function(r,n,s){var i=s("./node_modules/core-js/internals/has.js"),a=s("./node_modules/core-js/internals/own-keys.js"),o=s("./node_modules/core-js/internals/object-get-own-property-descriptor.js"),l=s("./node_modules/core-js/internals/object-define-property.js");r.exports=function(c,u){for(var h=a(u),d=l.f,f=o.f,y=0;y<h.length;y++){var g=h[y];i(c,g)||d(c,g,f(u,g))}}}),"./node_modules/core-js/internals/correct-prototype-getter.js":(function(r,n,s){var i=s("./node_modules/core-js/internals/fails.js");r.exports=!i(function(){function a(){}return a.prototype.constructor=null,Object.getPrototypeOf(new a)!==a.prototype})}),"./node_modules/core-js/internals/create-iterator-constructor.js":(function(r,n,s){var i=s("./node_modules/core-js/internals/iterators-core.js").IteratorPrototype,a=s("./node_modules/core-js/internals/object-create.js"),o=s("./node_modules/core-js/internals/create-property-descriptor.js"),l=s("./node_modules/core-js/internals/set-to-string-tag.js"),c=s("./node_modules/core-js/internals/iterators.js"),u=function(){return this};r.exports=function(h,d,f){var y=d+" Iterator";return h.prototype=a(i,{next:o(1,f)}),l(h,y,!1,!0),c[y]=u,h}}),"./node_modules/core-js/internals/create-property-descriptor.js":(function(r,n){r.exports=function(s,i){return{enumerable:!(s&1),configurable:!(s&2),writable:!(s&4),value:i}}}),"./node_modules/core-js/internals/create-property.js":(function(r,n,s){var i=s("./node_modules/core-js/internals/to-primitive.js"),a=s("./node_modules/core-js/internals/object-define-property.js"),o=s("./node_modules/core-js/internals/create-property-descriptor.js");r.exports=function(l,c,u){var h=i(c);h in l?a.f(l,h,o(0,u)):l[h]=u}}),"./node_modules/core-js/internals/define-iterator.js":(function(r,n,s){var i=s("./node_modules/core-js/internals/export.js"),a=s("./node_modules/core-js/internals/create-iterator-constructor.js"),o=s("./node_modules/core-js/internals/object-get-prototype-of.js"),l=s("./node_modules/core-js/internals/object-set-prototype-of.js"),c=s("./node_modules/core-js/internals/set-to-string-tag.js"),u=s("./node_modules/core-js/internals/hide.js"),h=s("./node_modules/core-js/internals/redefine.js"),d=s("./node_modules/core-js/internals/well-known-symbol.js"),f=s("./node_modules/core-js/internals/is-pure.js"),y=s("./node_modules/core-js/internals/iterators.js"),g=s("./node_modules/core-js/internals/iterators-core.js"),w=g.IteratorPrototype,m=g.BUGGY_SAFARI_ITERATORS,v=d("iterator"),b="keys",x="values",A="entries",k=function(){return this};r.exports=function(j,P,C,pn,pe,fn,Kt){a(C,P,pn);var Ge=function(ne){if(ne===pe&&ae)return ae;if(!m&&ne in G)return G[ne];switch(ne){case b:return function(){return new C(this,ne)};case x:return function(){return new C(this,ne)};case A:return function(){return new C(this,ne)}}return function(){return new C(this)}},Gt=P+" Iterator",_t=!1,G=j.prototype,fe=G[v]||G["@@iterator"]||pe&&G[pe],ae=!m&&fe||Ge(pe),Jt=P=="Array"&&G.entries||fe,oe,Re,Je;if(Jt&&(oe=o(Jt.call(new j)),w!==Object.prototype&&oe.next&&(!f&&o(oe)!==w&&(l?l(oe,w):typeof oe[v]!="function"&&u(oe,v,k)),c(oe,Gt,!0,!0),f&&(y[Gt]=k))),pe==x&&fe&&fe.name!==x&&(_t=!0,ae=function(){return fe.call(this)}),(!f||Kt)&&G[v]!==ae&&u(G,v,ae),y[P]=ae,pe)if(Re={values:Ge(x),keys:fn?ae:Ge(b),entries:Ge(A)},Kt)for(Je in Re)(m||_t||!(Je in G))&&h(G,Je,Re[Je]);else i({target:P,proto:!0,forced:m||_t},Re);return Re}}),"./node_modules/core-js/internals/descriptors.js":(function(r,n,s){var i=s("./node_modules/core-js/internals/fails.js");r.exports=!i(function(){return Object.defineProperty({},"a",{get:function(){return 7}}).a!=7})}),"./node_modules/core-js/internals/document-create-element.js":(function(r,n,s){var i=s("./node_modules/core-js/internals/global.js"),a=s("./node_modules/core-js/internals/is-object.js"),o=i.document,l=a(o)&&a(o.createElement);r.exports=function(c){return l?o.createElement(c):{}}}),"./node_modules/core-js/internals/enum-bug-keys.js":(function(r,n){r.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]}),"./node_modules/core-js/internals/export.js":(function(r,n,s){var i=s("./node_modules/core-js/internals/global.js"),a=s("./node_modules/core-js/internals/object-get-own-property-descriptor.js").f,o=s("./node_modules/core-js/internals/hide.js"),l=s("./node_modules/core-js/internals/redefine.js"),c=s("./node_modules/core-js/internals/set-global.js"),u=s("./node_modules/core-js/internals/copy-constructor-properties.js"),h=s("./node_modules/core-js/internals/is-forced.js");r.exports=function(d,f){var y=d.target,g=d.global,w=d.stat,m,v,b,x,A,k;if(g?v=i:w?v=i[y]||c(y,{}):v=(i[y]||{}).prototype,v)for(b in f){if(A=f[b],d.noTargetGet?(k=a(v,b),x=k&&k.value):x=v[b],m=h(g?b:y+(w?".":"#")+b,d.forced),!m&&x!==void 0){if(typeof A==typeof x)continue;u(A,x)}(d.sham||x&&x.sham)&&o(A,"sham",!0),l(v,b,A,d)}}}),"./node_modules/core-js/internals/fails.js":(function(r,n){r.exports=function(s){try{return!!s()}catch{return!0}}}),"./node_modules/core-js/internals/function-to-string.js":(function(r,n,s){var i=s("./node_modules/core-js/internals/shared.js");r.exports=i("native-function-to-string",Function.toString)}),"./node_modules/core-js/internals/get-iterator-method.js":(function(r,n,s){var i=s("./node_modules/core-js/internals/classof.js"),a=s("./node_modules/core-js/internals/iterators.js"),o=s("./node_modules/core-js/internals/well-known-symbol.js"),l=o("iterator");r.exports=function(c){if(c!=null)return c[l]||c["@@iterator"]||a[i(c)]}}),"./node_modules/core-js/internals/global.js":(function(r,n,s){(function(i){var a="object",o=function(l){return l&&l.Math==Math&&l};r.exports=o(typeof globalThis==a&&globalThis)||o(typeof window==a&&window)||o(typeof self==a&&self)||o(typeof i==a&&i)||Function("return this")()}).call(this,s("./node_modules/webpack/buildin/global.js"))}),"./node_modules/core-js/internals/has.js":(function(r,n){var s={}.hasOwnProperty;r.exports=function(i,a){return s.call(i,a)}}),"./node_modules/core-js/internals/hidden-keys.js":(function(r,n){r.exports={}}),"./node_modules/core-js/internals/hide.js":(function(r,n,s){var i=s("./node_modules/core-js/internals/descriptors.js"),a=s("./node_modules/core-js/internals/object-define-property.js"),o=s("./node_modules/core-js/internals/create-property-descriptor.js");r.exports=i?function(l,c,u){return a.f(l,c,o(1,u))}:function(l,c,u){return l[c]=u,l}}),"./node_modules/core-js/internals/html.js":(function(r,n,s){var i=s("./node_modules/core-js/internals/global.js"),a=i.document;r.exports=a&&a.documentElement}),"./node_modules/core-js/internals/ie8-dom-define.js":(function(r,n,s){var i=s("./node_modules/core-js/internals/descriptors.js"),a=s("./node_modules/core-js/internals/fails.js"),o=s("./node_modules/core-js/internals/document-create-element.js");r.exports=!i&&!a(function(){return Object.defineProperty(o("div"),"a",{get:function(){return 7}}).a!=7})}),"./node_modules/core-js/internals/indexed-object.js":(function(r,n,s){var i=s("./node_modules/core-js/internals/fails.js"),a=s("./node_modules/core-js/internals/classof-raw.js"),o="".split;r.exports=i(function(){return!Object("z").propertyIsEnumerable(0)})?function(l){return a(l)=="String"?o.call(l,""):Object(l)}:Object}),"./node_modules/core-js/internals/internal-state.js":(function(r,n,s){var i=s("./node_modules/core-js/internals/native-weak-map.js"),a=s("./node_modules/core-js/internals/global.js"),o=s("./node_modules/core-js/internals/is-object.js"),l=s("./node_modules/core-js/internals/hide.js"),c=s("./node_modules/core-js/internals/has.js"),u=s("./node_modules/core-js/internals/shared-key.js"),h=s("./node_modules/core-js/internals/hidden-keys.js"),d=a.WeakMap,f,y,g,w=function(j){return g(j)?y(j):f(j,{})},m=function(j){return function(P){var C;if(!o(P)||(C=y(P)).type!==j)throw TypeError("Incompatible receiver, "+j+" required");return C}};if(i){var v=new d,b=v.get,x=v.has,A=v.set;f=function(j,P){return A.call(v,j,P),P},y=function(j){return b.call(v,j)||{}},g=function(j){return x.call(v,j)}}else{var k=u("state");h[k]=!0,f=function(j,P){return l(j,k,P),P},y=function(j){return c(j,k)?j[k]:{}},g=function(j){return c(j,k)}}r.exports={set:f,get:y,has:g,enforce:w,getterFor:m}}),"./node_modules/core-js/internals/is-array-iterator-method.js":(function(r,n,s){var i=s("./node_modules/core-js/internals/well-known-symbol.js"),a=s("./node_modules/core-js/internals/iterators.js"),o=i("iterator"),l=Array.prototype;r.exports=function(c){return c!==void 0&&(a.Array===c||l[o]===c)}}),"./node_modules/core-js/internals/is-forced.js":(function(r,n,s){var i=s("./node_modules/core-js/internals/fails.js"),a=/#|\.prototype\./,o=function(d,f){var y=c[l(d)];return y==h?!0:y==u?!1:typeof f=="function"?i(f):!!f},l=o.normalize=function(d){return String(d).replace(a,".").toLowerCase()},c=o.data={},u=o.NATIVE="N",h=o.POLYFILL="P";r.exports=o}),"./node_modules/core-js/internals/is-object.js":(function(r,n){r.exports=function(s){return typeof s=="object"?s!==null:typeof s=="function"}}),"./node_modules/core-js/internals/is-pure.js":(function(r,n){r.exports=!1}),"./node_modules/core-js/internals/iterators-core.js":(function(r,n,s){var i=s("./node_modules/core-js/internals/object-get-prototype-of.js"),a=s("./node_modules/core-js/internals/hide.js"),o=s("./node_modules/core-js/internals/has.js"),l=s("./node_modules/core-js/internals/well-known-symbol.js"),c=s("./node_modules/core-js/internals/is-pure.js"),u=l("iterator"),h=!1,d=function(){return this},f,y,g;[].keys&&(g=[].keys(),"next"in g?(y=i(i(g)),y!==Object.prototype&&(f=y)):h=!0),f==null&&(f={}),!c&&!o(f,u)&&a(f,u,d),r.exports={IteratorPrototype:f,BUGGY_SAFARI_ITERATORS:h}}),"./node_modules/core-js/internals/iterators.js":(function(r,n){r.exports={}}),"./node_modules/core-js/internals/native-symbol.js":(function(r,n,s){var i=s("./node_modules/core-js/internals/fails.js");r.exports=!!Object.getOwnPropertySymbols&&!i(function(){return!String(Symbol())})}),"./node_modules/core-js/internals/native-weak-map.js":(function(r,n,s){var i=s("./node_modules/core-js/internals/global.js"),a=s("./node_modules/core-js/internals/function-to-string.js"),o=i.WeakMap;r.exports=typeof o=="function"&&/native code/.test(a.call(o))}),"./node_modules/core-js/internals/object-create.js":(function(r,n,s){var i=s("./node_modules/core-js/internals/an-object.js"),a=s("./node_modules/core-js/internals/object-define-properties.js"),o=s("./node_modules/core-js/internals/enum-bug-keys.js"),l=s("./node_modules/core-js/internals/hidden-keys.js"),c=s("./node_modules/core-js/internals/html.js"),u=s("./node_modules/core-js/internals/document-create-element.js"),h=s("./node_modules/core-js/internals/shared-key.js"),d=h("IE_PROTO"),f="prototype",y=function(){},g=function(){var w=u("iframe"),m=o.length,v="<",b="script",x=">",A="java"+b+":",k;for(w.style.display="none",c.appendChild(w),w.src=String(A),k=w.contentWindow.document,k.open(),k.write(v+b+x+"document.F=Object"+v+"/"+b+x),k.close(),g=k.F;m--;)delete g[f][o[m]];return g()};r.exports=Object.create||function(m,v){var b;return m!==null?(y[f]=i(m),b=new y,y[f]=null,b[d]=m):b=g(),v===void 0?b:a(b,v)},l[d]=!0}),"./node_modules/core-js/internals/object-define-properties.js":(function(r,n,s){var i=s("./node_modules/core-js/internals/descriptors.js"),a=s("./node_modules/core-js/internals/object-define-property.js"),o=s("./node_modules/core-js/internals/an-object.js"),l=s("./node_modules/core-js/internals/object-keys.js");r.exports=i?Object.defineProperties:function(u,h){o(u);for(var d=l(h),f=d.length,y=0,g;f>y;)a.f(u,g=d[y++],h[g]);return u}}),"./node_modules/core-js/internals/object-define-property.js":(function(r,n,s){var i=s("./node_modules/core-js/internals/descriptors.js"),a=s("./node_modules/core-js/internals/ie8-dom-define.js"),o=s("./node_modules/core-js/internals/an-object.js"),l=s("./node_modules/core-js/internals/to-primitive.js"),c=Object.defineProperty;n.f=i?c:function(h,d,f){if(o(h),d=l(d,!0),o(f),a)try{return c(h,d,f)}catch{}if("get"in f||"set"in f)throw TypeError("Accessors not supported");return"value"in f&&(h[d]=f.value),h}}),"./node_modules/core-js/internals/object-get-own-property-descriptor.js":(function(r,n,s){var i=s("./node_modules/core-js/internals/descriptors.js"),a=s("./node_modules/core-js/internals/object-property-is-enumerable.js"),o=s("./node_modules/core-js/internals/create-property-descriptor.js"),l=s("./node_modules/core-js/internals/to-indexed-object.js"),c=s("./node_modules/core-js/internals/to-primitive.js"),u=s("./node_modules/core-js/internals/has.js"),h=s("./node_modules/core-js/internals/ie8-dom-define.js"),d=Object.getOwnPropertyDescriptor;n.f=i?d:function(y,g){if(y=l(y),g=c(g,!0),h)try{return d(y,g)}catch{}if(u(y,g))return o(!a.f.call(y,g),y[g])}}),"./node_modules/core-js/internals/object-get-own-property-names.js":(function(r,n,s){var i=s("./node_modules/core-js/internals/object-keys-internal.js"),a=s("./node_modules/core-js/internals/enum-bug-keys.js"),o=a.concat("length","prototype");n.f=Object.getOwnPropertyNames||function(c){return i(c,o)}}),"./node_modules/core-js/internals/object-get-own-property-symbols.js":(function(r,n){n.f=Object.getOwnPropertySymbols}),"./node_modules/core-js/internals/object-get-prototype-of.js":(function(r,n,s){var i=s("./node_modules/core-js/internals/has.js"),a=s("./node_modules/core-js/internals/to-object.js"),o=s("./node_modules/core-js/internals/shared-key.js"),l=s("./node_modules/core-js/internals/correct-prototype-getter.js"),c=o("IE_PROTO"),u=Object.prototype;r.exports=l?Object.getPrototypeOf:function(h){return h=a(h),i(h,c)?h[c]:typeof h.constructor=="function"&&h instanceof h.constructor?h.constructor.prototype:h instanceof Object?u:null}}),"./node_modules/core-js/internals/object-keys-internal.js":(function(r,n,s){var i=s("./node_modules/core-js/internals/has.js"),a=s("./node_modules/core-js/internals/to-indexed-object.js"),o=s("./node_modules/core-js/internals/array-includes.js"),l=s("./node_modules/core-js/internals/hidden-keys.js"),c=o(!1);r.exports=function(u,h){var d=a(u),f=0,y=[],g;for(g in d)!i(l,g)&&i(d,g)&&y.push(g);for(;h.length>f;)i(d,g=h[f++])&&(~c(y,g)||y.push(g));return y}}),"./node_modules/core-js/internals/object-keys.js":(function(r,n,s){var i=s("./node_modules/core-js/internals/object-keys-internal.js"),a=s("./node_modules/core-js/internals/enum-bug-keys.js");r.exports=Object.keys||function(l){return i(l,a)}}),"./node_modules/core-js/internals/object-property-is-enumerable.js":(function(r,n,s){var i={}.propertyIsEnumerable,a=Object.getOwnPropertyDescriptor,o=a&&!i.call({1:2},1);n.f=o?function(c){var u=a(this,c);return!!u&&u.enumerable}:i}),"./node_modules/core-js/internals/object-set-prototype-of.js":(function(r,n,s){var i=s("./node_modules/core-js/internals/validate-set-prototype-of-arguments.js");r.exports=Object.setPrototypeOf||("__proto__"in{}?(function(){var a=!1,o={},l;try{l=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set,l.call(o,[]),a=o instanceof Array}catch{}return function(u,h){return i(u,h),a?l.call(u,h):u.__proto__=h,u}})():void 0)}),"./node_modules/core-js/internals/own-keys.js":(function(r,n,s){var i=s("./node_modules/core-js/internals/global.js"),a=s("./node_modules/core-js/internals/object-get-own-property-names.js"),o=s("./node_modules/core-js/internals/object-get-own-property-symbols.js"),l=s("./node_modules/core-js/internals/an-object.js"),c=i.Reflect;r.exports=c&&c.ownKeys||function(h){var d=a.f(l(h)),f=o.f;return f?d.concat(f(h)):d}}),"./node_modules/core-js/internals/path.js":(function(r,n,s){r.exports=s("./node_modules/core-js/internals/global.js")}),"./node_modules/core-js/internals/redefine.js":(function(r,n,s){var i=s("./node_modules/core-js/internals/global.js"),a=s("./node_modules/core-js/internals/shared.js"),o=s("./node_modules/core-js/internals/hide.js"),l=s("./node_modules/core-js/internals/has.js"),c=s("./node_modules/core-js/internals/set-global.js"),u=s("./node_modules/core-js/internals/function-to-string.js"),h=s("./node_modules/core-js/internals/internal-state.js"),d=h.get,f=h.enforce,y=String(u).split("toString");a("inspectSource",function(g){return u.call(g)}),(r.exports=function(g,w,m,v){var b=v?!!v.unsafe:!1,x=v?!!v.enumerable:!1,A=v?!!v.noTargetGet:!1;if(typeof m=="function"&&(typeof w=="string"&&!l(m,"name")&&o(m,"name",w),f(m).source=y.join(typeof w=="string"?w:"")),g===i){x?g[w]=m:c(w,m);return}else b?!A&&g[w]&&(x=!0):delete g[w];x?g[w]=m:o(g,w,m)})(Function.prototype,"toString",function(){return typeof this=="function"&&d(this).source||u.call(this)})}),"./node_modules/core-js/internals/require-object-coercible.js":(function(r,n){r.exports=function(s){if(s==null)throw TypeError("Can't call method on "+s);return s}}),"./node_modules/core-js/internals/set-global.js":(function(r,n,s){var i=s("./node_modules/core-js/internals/global.js"),a=s("./node_modules/core-js/internals/hide.js");r.exports=function(o,l){try{a(i,o,l)}catch{i[o]=l}return l}}),"./node_modules/core-js/internals/set-to-string-tag.js":(function(r,n,s){var i=s("./node_modules/core-js/internals/object-define-property.js").f,a=s("./node_modules/core-js/internals/has.js"),o=s("./node_modules/core-js/internals/well-known-symbol.js"),l=o("toStringTag");r.exports=function(c,u,h){c&&!a(c=h?c:c.prototype,l)&&i(c,l,{configurable:!0,value:u})}}),"./node_modules/core-js/internals/shared-key.js":(function(r,n,s){var i=s("./node_modules/core-js/internals/shared.js"),a=s("./node_modules/core-js/internals/uid.js"),o=i("keys");r.exports=function(l){return o[l]||(o[l]=a(l))}}),"./node_modules/core-js/internals/shared.js":(function(r,n,s){var i=s("./node_modules/core-js/internals/global.js"),a=s("./node_modules/core-js/internals/set-global.js"),o=s("./node_modules/core-js/internals/is-pure.js"),l="__core-js_shared__",c=i[l]||a(l,{});(r.exports=function(u,h){return c[u]||(c[u]=h!==void 0?h:{})})("versions",[]).push({version:"3.1.3",mode:o?"pure":"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})}),"./node_modules/core-js/internals/string-at.js":(function(r,n,s){var i=s("./node_modules/core-js/internals/to-integer.js"),a=s("./node_modules/core-js/internals/require-object-coercible.js");r.exports=function(o,l,c){var u=String(a(o)),h=i(l),d=u.length,f,y;return h<0||h>=d?c?"":void 0:(f=u.charCodeAt(h),f<55296||f>56319||h+1===d||(y=u.charCodeAt(h+1))<56320||y>57343?c?u.charAt(h):f:c?u.slice(h,h+2):(f-55296<<10)+(y-56320)+65536)}}),"./node_modules/core-js/internals/to-absolute-index.js":(function(r,n,s){var i=s("./node_modules/core-js/internals/to-integer.js"),a=Math.max,o=Math.min;r.exports=function(l,c){var u=i(l);return u<0?a(u+c,0):o(u,c)}}),"./node_modules/core-js/internals/to-indexed-object.js":(function(r,n,s){var i=s("./node_modules/core-js/internals/indexed-object.js"),a=s("./node_modules/core-js/internals/require-object-coercible.js");r.exports=function(o){return i(a(o))}}),"./node_modules/core-js/internals/to-integer.js":(function(r,n){var s=Math.ceil,i=Math.floor;r.exports=function(a){return isNaN(a=+a)?0:(a>0?i:s)(a)}}),"./node_modules/core-js/internals/to-length.js":(function(r,n,s){var i=s("./node_modules/core-js/internals/to-integer.js"),a=Math.min;r.exports=function(o){return o>0?a(i(o),9007199254740991):0}}),"./node_modules/core-js/internals/to-object.js":(function(r,n,s){var i=s("./node_modules/core-js/internals/require-object-coercible.js");r.exports=function(a){return Object(i(a))}}),"./node_modules/core-js/internals/to-primitive.js":(function(r,n,s){var i=s("./node_modules/core-js/internals/is-object.js");r.exports=function(a,o){if(!i(a))return a;var l,c;if(o&&typeof(l=a.toString)=="function"&&!i(c=l.call(a))||typeof(l=a.valueOf)=="function"&&!i(c=l.call(a))||!o&&typeof(l=a.toString)=="function"&&!i(c=l.call(a)))return c;throw TypeError("Can't convert object to primitive value")}}),"./node_modules/core-js/internals/uid.js":(function(r,n){var s=0,i=Math.random();r.exports=function(a){return"Symbol(".concat(a===void 0?"":a,")_",(++s+i).toString(36))}}),"./node_modules/core-js/internals/validate-set-prototype-of-arguments.js":(function(r,n,s){var i=s("./node_modules/core-js/internals/is-object.js"),a=s("./node_modules/core-js/internals/an-object.js");r.exports=function(o,l){if(a(o),!i(l)&&l!==null)throw TypeError("Can't set "+String(l)+" as a prototype")}}),"./node_modules/core-js/internals/well-known-symbol.js":(function(r,n,s){var i=s("./node_modules/core-js/internals/global.js"),a=s("./node_modules/core-js/internals/shared.js"),o=s("./node_modules/core-js/internals/uid.js"),l=s("./node_modules/core-js/internals/native-symbol.js"),c=i.Symbol,u=a("wks");r.exports=function(h){return u[h]||(u[h]=l&&c[h]||(l?c:o)("Symbol."+h))}}),"./node_modules/core-js/modules/es.array.from.js":(function(r,n,s){var i=s("./node_modules/core-js/internals/export.js"),a=s("./node_modules/core-js/internals/array-from.js"),o=s("./node_modules/core-js/internals/check-correctness-of-iteration.js"),l=!o(function(c){Array.from(c)});i({target:"Array",stat:!0,forced:l},{from:a})}),"./node_modules/core-js/modules/es.string.iterator.js":(function(r,n,s){var i=s("./node_modules/core-js/internals/string-at.js"),a=s("./node_modules/core-js/internals/internal-state.js"),o=s("./node_modules/core-js/internals/define-iterator.js"),l="String Iterator",c=a.set,u=a.getterFor(l);o(String,"String",function(h){c(this,{type:l,string:String(h),index:0})},function(){var d=u(this),f=d.string,y=d.index,g;return y>=f.length?{value:void 0,done:!0}:(g=i(f,y,!0),d.index+=g.length,{value:g,done:!1})})}),"./node_modules/webpack/buildin/global.js":(function(r,n){var s;s=(function(){return this})();try{s=s||Function("return this")()||(0,eval)("this")}catch{typeof window=="object"&&(s=window)}r.exports=s}),"./src/default-attrs.json":(function(r){r.exports={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"}}),"./src/icon.js":(function(r,n,s){Object.defineProperty(n,"__esModule",{value:!0});var i=Object.assign||function(g){for(var w=1;w<arguments.length;w++){var m=arguments[w];for(var v in m)Object.prototype.hasOwnProperty.call(m,v)&&(g[v]=m[v])}return g},a=(function(){function g(w,m){for(var v=0;v<m.length;v++){var b=m[v];b.enumerable=b.enumerable||!1,b.configurable=!0,"value"in b&&(b.writable=!0),Object.defineProperty(w,b.key,b)}}return function(w,m,v){return m&&g(w.prototype,m),v&&g(w,v),w}})(),o=s("./node_modules/classnames/dedupe.js"),l=h(o),c=s("./src/default-attrs.json"),u=h(c);function h(g){return g&&g.__esModule?g:{default:g}}function d(g,w){if(!(g instanceof w))throw new TypeError("Cannot call a class as a function")}var f=(function(){function g(w,m){var v=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[];d(this,g),this.name=w,this.contents=m,this.tags=v,this.attrs=i({},u.default,{class:"feather feather-"+w})}return a(g,[{key:"toSvg",value:function(){var m=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},v=i({},this.attrs,m,{class:(0,l.default)(this.attrs.class,m.class)});return"<svg "+y(v)+">"+this.contents+"</svg>"}},{key:"toString",value:function(){return this.contents}}]),g})();function y(g){return Object.keys(g).map(function(w){return w+'="'+g[w]+'"'}).join(" ")}n.default=f}),"./src/icons.js":(function(r,n,s){Object.defineProperty(n,"__esModule",{value:!0});var i=s("./src/icon.js"),a=h(i),o=s("./dist/icons.json"),l=h(o),c=s("./src/tags.json"),u=h(c);function h(d){return d&&d.__esModule?d:{default:d}}n.default=Object.keys(l.default).map(function(d){return new a.default(d,l.default[d],u.default[d])}).reduce(function(d,f){return d[f.name]=f,d},{})}),"./src/index.js":(function(r,n,s){var i=s("./src/icons.js"),a=h(i),o=s("./src/to-svg.js"),l=h(o),c=s("./src/replace.js"),u=h(c);function h(d){return d&&d.__esModule?d:{default:d}}r.exports={icons:a.default,toSvg:l.default,replace:u.default}}),"./src/replace.js":(function(r,n,s){Object.defineProperty(n,"__esModule",{value:!0});var i=Object.assign||function(y){for(var g=1;g<arguments.length;g++){var w=arguments[g];for(var m in w)Object.prototype.hasOwnProperty.call(w,m)&&(y[m]=w[m])}return y},a=s("./node_modules/classnames/dedupe.js"),o=u(a),l=s("./src/icons.js"),c=u(l);function u(y){return y&&y.__esModule?y:{default:y}}function h(){var y=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};if(typeof document>"u")throw new Error("`feather.replace()` only works in a browser environment.");var g=document.querySelectorAll("[data-feather]");Array.from(g).forEach(function(w){return d(w,y)})}function d(y){var g=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},w=f(y),m=w["data-feather"];if(delete w["data-feather"],c.default[m]===void 0){console.warn("feather: '"+m+"' is not a valid icon");return}var v=c.default[m].toSvg(i({},g,w,{class:(0,o.default)(g.class,w.class)})),b=new DOMParser().parseFromString(v,"image/svg+xml"),x=b.querySelector("svg");y.parentNode.replaceChild(x,y)}function f(y){return Array.from(y.attributes).reduce(function(g,w){return g[w.name]=w.value,g},{})}n.default=h}),"./src/tags.json":(function(r){r.exports={activity:["pulse","health","action","motion"],airplay:["stream","cast","mirroring"],"alert-circle":["warning","alert","danger"],"alert-octagon":["warning","alert","danger"],"alert-triangle":["warning","alert","danger"],"align-center":["text alignment","center"],"align-justify":["text alignment","justified"],"align-left":["text alignment","left"],"align-right":["text alignment","right"],anchor:[],archive:["index","box"],"at-sign":["mention","at","email","message"],award:["achievement","badge"],aperture:["camera","photo"],"bar-chart":["statistics","diagram","graph"],"bar-chart-2":["statistics","diagram","graph"],battery:["power","electricity"],"battery-charging":["power","electricity"],bell:["alarm","notification","sound"],"bell-off":["alarm","notification","silent"],bluetooth:["wireless"],"book-open":["read","library"],book:["read","dictionary","booklet","magazine","library"],bookmark:["read","clip","marker","tag"],box:["cube"],briefcase:["work","bag","baggage","folder"],calendar:["date"],camera:["photo"],cast:["chromecast","airplay"],"chevron-down":["expand"],"chevron-up":["collapse"],circle:["off","zero","record"],clipboard:["copy"],clock:["time","watch","alarm"],"cloud-drizzle":["weather","shower"],"cloud-lightning":["weather","bolt"],"cloud-rain":["weather"],"cloud-snow":["weather","blizzard"],cloud:["weather"],codepen:["logo"],codesandbox:["logo"],code:["source","programming"],coffee:["drink","cup","mug","tea","cafe","hot","beverage"],columns:["layout"],command:["keyboard","cmd","terminal","prompt"],compass:["navigation","safari","travel","direction"],copy:["clone","duplicate"],"corner-down-left":["arrow","return"],"corner-down-right":["arrow"],"corner-left-down":["arrow"],"corner-left-up":["arrow"],"corner-right-down":["arrow"],"corner-right-up":["arrow"],"corner-up-left":["arrow"],"corner-up-right":["arrow"],cpu:["processor","technology"],"credit-card":["purchase","payment","cc"],crop:["photo","image"],crosshair:["aim","target"],database:["storage","memory"],delete:["remove"],disc:["album","cd","dvd","music"],"dollar-sign":["currency","money","payment"],droplet:["water"],edit:["pencil","change"],"edit-2":["pencil","change"],"edit-3":["pencil","change"],eye:["view","watch"],"eye-off":["view","watch","hide","hidden"],"external-link":["outbound"],facebook:["logo","social"],"fast-forward":["music"],figma:["logo","design","tool"],"file-minus":["delete","remove","erase"],"file-plus":["add","create","new"],"file-text":["data","txt","pdf"],film:["movie","video"],filter:["funnel","hopper"],flag:["report"],"folder-minus":["directory"],"folder-plus":["directory"],folder:["directory"],framer:["logo","design","tool"],frown:["emoji","face","bad","sad","emotion"],gift:["present","box","birthday","party"],"git-branch":["code","version control"],"git-commit":["code","version control"],"git-merge":["code","version control"],"git-pull-request":["code","version control"],github:["logo","version control"],gitlab:["logo","version control"],globe:["world","browser","language","translate"],"hard-drive":["computer","server","memory","data"],hash:["hashtag","number","pound"],headphones:["music","audio","sound"],heart:["like","love","emotion"],"help-circle":["question mark"],hexagon:["shape","node.js","logo"],home:["house","living"],image:["picture"],inbox:["email"],instagram:["logo","camera"],key:["password","login","authentication","secure"],layers:["stack"],layout:["window","webpage"],"life-buoy":["help","life ring","support"],link:["chain","url"],"link-2":["chain","url"],linkedin:["logo","social media"],list:["options"],lock:["security","password","secure"],"log-in":["sign in","arrow","enter"],"log-out":["sign out","arrow","exit"],mail:["email","message"],"map-pin":["location","navigation","travel","marker"],map:["location","navigation","travel"],maximize:["fullscreen"],"maximize-2":["fullscreen","arrows","expand"],meh:["emoji","face","neutral","emotion"],menu:["bars","navigation","hamburger"],"message-circle":["comment","chat"],"message-square":["comment","chat"],"mic-off":["record","sound","mute"],mic:["record","sound","listen"],minimize:["exit fullscreen","close"],"minimize-2":["exit fullscreen","arrows","close"],minus:["subtract"],monitor:["tv","screen","display"],moon:["dark","night"],"more-horizontal":["ellipsis"],"more-vertical":["ellipsis"],"mouse-pointer":["arrow","cursor"],move:["arrows"],music:["note"],navigation:["location","travel"],"navigation-2":["location","travel"],octagon:["stop"],package:["box","container"],paperclip:["attachment"],pause:["music","stop"],"pause-circle":["music","audio","stop"],"pen-tool":["vector","drawing"],percent:["discount"],"phone-call":["ring"],"phone-forwarded":["call"],"phone-incoming":["call"],"phone-missed":["call"],"phone-off":["call","mute"],"phone-outgoing":["call"],phone:["call"],play:["music","start"],"pie-chart":["statistics","diagram"],"play-circle":["music","start"],plus:["add","new"],"plus-circle":["add","new"],"plus-square":["add","new"],pocket:["logo","save"],power:["on","off"],printer:["fax","office","device"],radio:["signal"],"refresh-cw":["synchronise","arrows"],"refresh-ccw":["arrows"],repeat:["loop","arrows"],rewind:["music"],"rotate-ccw":["arrow"],"rotate-cw":["arrow"],rss:["feed","subscribe"],save:["floppy disk"],scissors:["cut"],search:["find","magnifier","magnifying glass"],send:["message","mail","email","paper airplane","paper aeroplane"],settings:["cog","edit","gear","preferences"],"share-2":["network","connections"],shield:["security","secure"],"shield-off":["security","insecure"],"shopping-bag":["ecommerce","cart","purchase","store"],"shopping-cart":["ecommerce","cart","purchase","store"],shuffle:["music"],"skip-back":["music"],"skip-forward":["music"],slack:["logo"],slash:["ban","no"],sliders:["settings","controls"],smartphone:["cellphone","device"],smile:["emoji","face","happy","good","emotion"],speaker:["audio","music"],star:["bookmark","favorite","like"],"stop-circle":["media","music"],sun:["brightness","weather","light"],sunrise:["weather","time","morning","day"],sunset:["weather","time","evening","night"],tablet:["device"],tag:["label"],target:["logo","bullseye"],terminal:["code","command line","prompt"],thermometer:["temperature","celsius","fahrenheit","weather"],"thumbs-down":["dislike","bad","emotion"],"thumbs-up":["like","good","emotion"],"toggle-left":["on","off","switch"],"toggle-right":["on","off","switch"],tool:["settings","spanner"],trash:["garbage","delete","remove","bin"],"trash-2":["garbage","delete","remove","bin"],triangle:["delta"],truck:["delivery","van","shipping","transport","lorry"],tv:["television","stream"],twitch:["logo"],twitter:["logo","social"],type:["text"],umbrella:["rain","weather"],unlock:["security"],"user-check":["followed","subscribed"],"user-minus":["delete","remove","unfollow","unsubscribe"],"user-plus":["new","add","create","follow","subscribe"],"user-x":["delete","remove","unfollow","unsubscribe","unavailable"],user:["person","account"],users:["group"],"video-off":["camera","movie","film"],video:["camera","movie","film"],voicemail:["phone"],volume:["music","sound","mute"],"volume-1":["music","sound"],"volume-2":["music","sound"],"volume-x":["music","sound","mute"],watch:["clock","time"],"wifi-off":["disabled"],wifi:["connection","signal","wireless"],wind:["weather","air"],"x-circle":["cancel","close","delete","remove","times","clear"],"x-octagon":["delete","stop","alert","warning","times","clear"],"x-square":["cancel","close","delete","remove","times","clear"],x:["cancel","close","delete","remove","times","clear"],youtube:["logo","video","play"],"zap-off":["flash","camera","lightning"],zap:["flash","camera","lightning"],"zoom-in":["magnifying glass"],"zoom-out":["magnifying glass"]}}),"./src/to-svg.js":(function(r,n,s){Object.defineProperty(n,"__esModule",{value:!0});var i=s("./src/icons.js"),a=o(i);function o(c){return c&&c.__esModule?c:{default:c}}function l(c){var u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(console.warn("feather.toSvg() is deprecated. Please use feather.icons[name].toSvg() instead."),!c)throw new Error("The required `key` (icon name) parameter is missing.");if(!a.default[c])throw new Error("No icon matching '"+c+"'. See the complete list of icons at https://feathericons.com");return a.default[c].toSvg(u)}n.default=l}),0:(function(r,n,s){s("./node_modules/core-js/es/array/from.js"),r.exports=s("./src/index.js")})})})})(it)),it.exports}var po=ho();const fo=co(po);function yo(){fo.replace({width:18,height:18,"stroke-width":2})}function go(){return`

    <section
      class="quiz__container"
    >

      <div
        class="quiz__contents"
      >

        <h1
          class="quiz__title"
        >

          Review Answers

        </h1>

        ${p.quiz.answers.map((e,r)=>`

            <div
              class="
                quiz__review-card
              "
            >

              <h3>

                Question
                ${r+1}

              </h3>

              <p>

                ${e.questionText}

              </p>

              <p>

                Your Answer:

                ${e.options[e.selectedIndex]}

              </p>

              <p>

                Correct Answer:

                ${e.options[e.correctIndex]}

              </p>

              <p>

                ${e.explanation}

              </p>

            </div>

          `).join("")}

      </div>

    </section>

  `}function mo({category:t="all",difficulty:e="all"}={}){return Te.filter(r=>{const n=t==="all"||r.category===t,s=e==="all"||r.difficulty===e;return n&&s})}function vo(){return[...new Set(Te.map(t=>t.category))].sort()}function bo(){return[...new Set(Te.map(t=>t.difficulty))]}function wo(){return Te.reduce((t,e)=>{const r=e.category;return t[r]=(t[r]||0)+1,t},{})}function _o(){return Te.reduce((t,e)=>{const r=e.difficulty;return t[r]=(t[r]||0)+1,t},{})}function xo(t){return t.replace(/-/g," ").replace(/\b\w/g,e=>e.toUpperCase())}function So(t){return t.charAt(0).toUpperCase()+t.slice(1)}function ko({title:t,subtitle:e=""}){return`

    <header
      class="
        quiz__page-header
      "
    >

      <h1
        class="
          quiz__title
        "
      >

        ${t}

      </h1>

      ${e?`

          <p
            class="
              quiz__subtitle
            "
          >

            ${e}

          </p>

        `:""}

    </header>

  `}function To(){const t=wo(),e=_o(),r=vo(),n=bo(),s=Object.values(t).reduce((i,a)=>i+a,0);return`

    <section
      class="quiz__container"
    >

      <div
        class="quiz__contents"
      >

        ${ko({title:"Quiz Settings",subtitle:"Customize your quiz experience."})}

        <div
          class="
            quiz__settings-group
          "
        >

          <label for="quiz-category">
            Category
          </label>

          <select id="quiz-category">

            <option
              value="all"
              ${p.quiz.category==="all"?"selected":""}
            >
              All (${s})
            </option>

            ${r.map(i=>{const a=t[i]||0,o=p.quiz.category===i?"selected":"";return`
                  <option
                    value="${i}"
                    ${o}
                    ${a===0?"disabled":""}
                  >
                    ${xo(i)} ${a===0?"(Coming Soon)":`(${a})`}
                  </option>
                `}).join("")}

          </select>

        </div>

        <div
          class="
            quiz__settings-group
          "
        >
        
          <label for="quiz-difficulty">
            Difficulty
          </label>

          <select id="quiz-difficulty">

            <option
              value="all"
              ${p.quiz.difficulty==="all"?"selected":""}
            >
              All
            </option>

            ${n.map(i=>{const a=e[i]||0,o=p.quiz.difficulty===i?"selected":"";return`
                  <option
                    value="${i}"
                    ${o}
                    ${a===0?"disabled":""}
                  >
                    ${So(i)} ${a===0?"(Coming Soon)":`(${a})`}
                  </option>
                `}).join("")}

          </select>

        </div>

        <div
          class="
            quiz__settings-group
          "
        >

          <label for="quiz-question-count">
            Number of Questions
          </label>

          <select id="quiz-question-count">

            <option
              value="5"
              ${p.quiz.questionCount===5?"selected":""}
            >
              5 Questions
            </option>

            <option
              value="10"
              ${p.quiz.questionCount===10?"selected":""}
            >
              10 Questions
            </option>

            <option
              value="15"
              ${p.quiz.questionCount===15?"selected":""}
            >
              15 Questions
            </option>

            <option
              value="20"
              ${p.quiz.questionCount===20?"selected":""}
            >
              20 Questions
            </option>

          </select>

        </div>

        <button
          class="
            quiz__btn-primary
          "
          data-action="begin-custom-quiz"
        >
          Start Quiz
        </button>

      </div>

    </section>

  `}function jo(){const t=p.user.isAuthenticated?p.user.stats:bt(),e=on(t.level),r=Ja(t.experience),n=t.correctAnswers+t.incorrectAnswers?Math.round(t.correctAnswers/(t.correctAnswers+t.incorrectAnswers)*100):0;return`

    <section
      class="quiz__container"
    >

      <div
        class="quiz__contents"
      >

        <h1
          class="quiz__title"
        >

          Player Profile

        </h1>

        <div
          class="
            quiz__analytics
          "
        >
          <div
            class="
              quiz__analytics-card
            "
          >

            <span
              class="
                quiz__analytics-label
              "
            >

              Level

            </span>

            <span
              class="
                quiz__analytics-value
              "
            >

              ${t.level}

              <div class="quiz__analytics-meta">

                ${e}

              </div>

            </span>

            <div
              class="
                quiz__level-progress
              "
            >

              <div

                class="
                  quiz__level-progress-bar
                "

                style="
                  width:${r}%;
                "

              ></div>

            </div>

            <small>

              ${r}/100 XP

            </small>

          </div>

          <div
            class="
              quiz__analytics-card
            "
          >

            <span
              class="
                quiz__analytics-label
              "
            >

              Quizzes Played

            </span>

            <span
              class="
                quiz__analytics-value
              "
            >

              ${t.quizzesPlayed}

            </span>

          </div>

          <div
            class="
              quiz__analytics-card
            "
          >

            <span
              class="
                quiz__analytics-label
              "
            >

              Highest Score

            </span>

            <span
              class="
                quiz__analytics-value
              "
            >

              ${t.highestScore}

            </span>

          </div>

          <div
            class="
              quiz__analytics-card
            "
          >

            <span
              class="
                quiz__analytics-label
              "
            >

              Average Score

            </span>

            <span
              class="
                quiz__analytics-value
              "
            >

              ${t.averageScore}

            </span>

          </div>

          <div
            class="
              quiz__analytics-card
            "
          >

            <span
              class="
                quiz__analytics-label
              "
            >

              Best Streak

            </span>

            <span
              class="
                quiz__analytics-value
              "
            >

              ${t.bestStreak}

            </span>

          </div>

          <div
            class="
              quiz__analytics-card
            "
          >

            <span
              class="
                quiz__analytics-label
              "
            >

              Accuracy

            </span>

            <span
              class="
                quiz__analytics-value
              "
            >

              ${n}%

            </span>

          </div>

          <div
            class="
              quiz__analytics-card
            "
          >

            <span
              class="
                quiz__analytics-label
              "
            >

              Correct Answers

            </span>

            <span
              class="
                quiz__analytics-value
              "
            >

              ${t.correctAnswers}

            </span>

          </div>

          <div
            class="
              quiz__analytics-card
            "
          >

            <span
              class="
                quiz__analytics-label
              "
            >

              Incorrect Answers

            </span>

            <span
              class="
                quiz__analytics-value
              "
            >

              ${t.incorrectAnswers}

            </span>

          </div>

        </div>

        <div class="quiz__actions">

          <button

            class="quiz__btn-secondary"

            data-action="view-achievements"
            
            aria-label="See achievements"

          >

            Achievements

          </button>


        </div>

      </div>

    </section>

  `}function Ao({value:t,max:e,label:r="",colorClass:n=""}){const s=Math.min(100,Math.round(t/e*100));return`

    <div
      class="
        quiz__progress
      "
    >

      ${r?`

          <div
            class="
              quiz__progress-label
            "
          >

            <span>

              ${r}

            </span>

            <span>

              ${t}/${e}

            </span>

          </div>

        `:""}

      <div
        class="
          quiz__progress-track
        "
      >

        <div

          class="
            quiz__progress-fill

            ${n}

          "

          style="
            width:${s}%;
          "

        ></div>

      </div>

    </div>

  `}function Eo(){const t=de(D.ACHIEVEMENTS,[]),e=bt();return`

    <section
      class="quiz__container"
    >

      <div
        class="quiz__contents"
      >

        <h1
          class="quiz__title"
        >

          Achievements

        </h1>

        ${ln.map(r=>{const n=to(r,e),s=t.includes(r.id);return`
            
            <div
              class="
                quiz__analytics-card
              "
            >

              <strong>

                ${t.includes(r.id)?"🏆":"🔒"}

                ${r.title}

              </strong>

              <p>

                ${r.description}

                ${!s&&n?`
                    ${Ao({label:"Progress",value:n.current,max:n.target})}

                  `:""}
                
              </p>

            </div>

          `}).join("")}

      </div>

    </section>

  `}function Ro(){return`

    <section
      class="quiz__container"
    >

      <div class="quiz__contents">

        <h1
          class="quiz__title"
        >

          Sign In

        </h1>

        <p
          class="quiz__intro-subtext"
        >

          Save your progress,
          compete globally and
          sync across devices.

        </p>

      </div>

      <div
        class="quiz__actions"
      >

        <button

          class="quiz__btn-primary"

          data-action="google-login"

        >

          Continue with Google

        </button>

        <button

          class="quiz__btn-secondary"

          data-action="github-login"

        >

          Continue with GitHub

        </button>

        <button

          class="quiz__btn-secondary"

          data-action="email-login-screen"

        >

          Email & Password

        </button>

        <button

          class="quiz__btn-secondary"

          data-action="go-back"

        >

          Continue as Guest

        </button>

      </div>

    </section>

  `}function M(){Ia();const t=document.querySelector("#quiz-screen");if(!t){console.error("Screen container not found");return}try{switch(p.currentScreen){case"welcome":t.innerHTML=qa();break;case"auth":t.innerHTML=Ro();break;case"home":t.innerHTML=$a();break;case"quiz":t.innerHTML=Ba();break;case"results":t.innerHTML=so();break;case"leaderboard":t.innerHTML=oo();break;case"resume":t.innerHTML=lo();break;case"review":t.innerHTML=go();break;case"settings":t.innerHTML=To();break;case"profile":t.innerHTML=jo();break;case"achievements":t.innerHTML=Eo();break;default:t.innerHTML=`
          <p>
            Screen not found
          </p>
        `}yo()}catch(e){console.error("Render failure:",e),t.innerHTML=`

      <div
        class="
          quiz__fatal-error
        "
      >

        <h2>
          Something went wrong
        </h2>

        <button
          class="quiz__btn-primary"

          onclick="window.location.reload()"
        >

          Reload App

        </button>

      </div>

    `}}function L(t){Dt(t),Ee()}function Oo({isCorrect:t,remainingTime:e}){if(!t)return p.quiz.streak=0,0;p.quiz.streak++,p.quiz.streak>p.quiz.bestStreak&&(p.quiz.bestStreak=p.quiz.streak);const r=U.BASE_CORRECT_POINTS,n=e*U.TIME_BONUS_MULTIPLIER,s=p.quiz.streak*U.STREAK_BONUS_MULTIPLIER,i=r+n+s;return p.quiz.score+=i,i}function Po(){const t=p.quiz.answers.filter(e=>e.isCorrect).length;return Math.round(t/p.quiz.questions.length*100)}function zo(){const t=p.quiz.answers.filter(r=>r.isCorrect).length,e=p.quiz.answers.length;return{score:p.quiz.score,bestStreak:p.quiz.bestStreak,totalDurationSeconds:p.quiz.totalDurationSeconds,correctAnswers:t,totalQuestions:e,accuracy:Po()}}async function Co(t){const{data:e,error:r}=await re.from("profiles").select("*").eq("id",t).single();if(r)throw r;return e}async function Io(t){const{data:e,error:r}=await re.from("player_stats").select("*").eq("player_id",t).single();if(r)throw r;return e}async function qo(t,e){const r={quizzes_played:e.quizzesPlayed,highest_score:e.highestScore,total_score:e.totalScore,average_score:e.averageScore,correct_answers:e.correctAnswers,incorrect_answers:e.incorrectAnswers,best_streak:e.bestStreak,total_time_played:e.totalTimePlayed,perfect_scores:e.perfectScores,experience:e.experience,level:e.level},{data:n,error:s}=await re.from("player_stats").update(r).eq("player_id",t).select().single();if(s)throw s;return n}async function $o(t,e){return qo(t,e)}async function Lo(){const t=zo(),e=Za(t,p.user.isAuthenticated?p.user.stats:void 0);if(Xa(e.stats),p.user.isAuthenticated)try{await $o(p.user.id,e.stats),$("☁ Progress Synced")}catch(n){console.error(n),$("Cloud sync failed.")}Fa({userId:p.user.id,displayName:p.user.displayName||"Anonymous",...t});const r=eo();return r.length&&(p.ui.achievementModalVisible=!0,p.ui.unlockedAchievement=r[0],$("🏆 Achievement Unlocked")),e.leveledUp&&(p.ui.levelUpModalVisible=!0,p.ui.unlockedLevel=e.newLevel,$(`🎉 Level ${e.newLevel}!`)),{quizResult:t,playerStats:e.stats,unlockedAchievements:r,leveledUp:e.leveledUp,newLevel:e.newLevel}}function cn(t){p.quiz.isAnswerLocked||(p.quiz.selectedAnswerIndex=t,Ee(),M())}function Wt(){if(p.quiz.isAnswerLocked)return;const{questions:t,currentQuestionIndex:e,selectedAnswerIndex:r}=p.quiz;if(r===null)return;const n=t[e],s=r===n.answer;p.quiz.isAnswerLocked=!0,ke(),p.quiz.currentExplanation=n.explanation,Oo({isCorrect:s,remainingTime:p.quiz.remainingTime}),p.quiz.answers.push({questionId:n.id,questionText:n.question,options:n.options,selectedIndex:r,correctIndex:n.answer,explanation:n.explanation,isCorrect:s}),Ee(),M()}function Mo(){const{questions:t,currentQuestionIndex:e}=p.quiz;if(e<t.length-1){p.quiz.currentQuestionIndex++,p.quiz.remainingTime=p.quiz.questionTimeLimit,p.quiz.selectedAnswerIndex=null,p.quiz.isAnswerLocked=!1,p.quiz.currentExplanation="",wt(),Ee(),M();return}un()}async function un(){ke(),Fe(),p.quiz.finishedAt=Date.now(),p.quiz.totalDurationSeconds=Math.floor((p.quiz.finishedAt-p.quiz.startedAt)/1e3),await Lo(),We(),L("results")}function No(){if(p.quiz.selectedAnswerIndex!==null){Wt();return}p.quiz.isAnswerLocked=!0,p.quiz.currentExplanation="Time expired!",M()}function Uo(){ke(),Fe(),p.quiz.isAnswerLocked=!0,p.quiz.currentExplanation="Quiz time expired!",M(),setTimeout(()=>{un()},1200)}function Do(){ke(),Fe(),Vt(),L("home")}function Vt(){p.quiz.currentQuestionIndex=0,p.quiz.score=0,p.quiz.answers=[],p.quiz.selectedAnswerIndex=null,p.quiz.isAnswerLocked=!1,p.quiz.currentExplanation="",p.quiz.streak=0,p.quiz.bestStreak=0,p.quiz.startedAt=null,p.quiz.finishedAt=null,p.quiz.questionStartedAt=null,p.quiz.totalDurationSeconds=0,p.quiz.remainingTime=p.quiz.questionTimeLimit,p.quiz.remainingQuizTime=p.quiz.quizTimeLimit}function wt(){ke(),p.quiz.timerIntervalId=setInterval(()=>{p.quiz.remainingTime--,Bo(),Ee(),p.quiz.remainingTime<=0&&(p.quiz.remainingTime=0,ke(),No())},1e3)}function ke(){p.quiz.timerIntervalId&&(clearInterval(p.quiz.timerIntervalId),p.quiz.timerIntervalId=null)}function Bo(){const t=document.querySelector(".quiz__timer-value"),e=document.querySelector(".quiz__timer");t&&(t.textContent=`${p.quiz.remainingTime}s`,p.quiz.remainingTime<=5?e?.classList.add("quiz__timer--warning"):e?.classList.remove("quiz__timer--warning"))}function Ho(){const t=document.querySelector(".quiz__quiz-timer-value"),e=document.querySelector(".quiz__quiz-timer");if(!t)return;const r=Math.floor(p.quiz.remainingQuizTime/60),n=p.quiz.remainingQuizTime%60;t.textContent=`${r}:${n.toString().padStart(2,"0")}`,p.quiz.remainingQuizTime<=30?e?.classList.add("quiz__quiz-timer--warning"):e?.classList.remove("quiz__quiz-timer--warning")}function Ft(){Fe(),p.quiz.quizTimerIntervalId=setInterval(()=>{const t=Math.floor((Date.now()-p.quiz.startedAt)/1e3);p.quiz.remainingQuizTime=Math.max(0,p.quiz.quizTimeLimit-t),Ho(),Ee(),p.quiz.remainingQuizTime<=0&&(Fe(),Uo())},1e3)}function Fe(){p.quiz.quizTimerIntervalId&&(clearInterval(p.quiz.quizTimerIntervalId),p.quiz.quizTimerIntervalId=null)}const hn=["welcome","home","quiz","results","leaderboard","resume","review","settings","profile","achievements","auth"];function Wo(){const t=window.location.hash.replace("#/","");return hn.includes(t)?t:"welcome"}function Ut(){const t=Wo();if(!p.navigation.isNavigatingBack&&p.currentScreen&&p.currentScreen!==t){const e=p.navigation.history;(e.length===0||e[e.length-1]!==p.currentScreen)&&(e.push(p.currentScreen),e.length>50&&e.shift())}p.currentScreen=t,p.navigation.isNavigatingBack=!1,M()}function Dt(t){if(!hn.includes(t))return;const e=`#/${t}`;if(window.location.hash===e){Ut();return}window.location.hash=e}function Vo(){if(window.addEventListener("hashchange",Ut),p.pendingSession){if(Pa(p.pendingSession),p.quiz.remainingQuizTime<=0){p.pendingSession=null,Dt("results");return}p.quiz.remainingTime<=0&&!p.quiz.isAnswerLocked&&(p.quiz.isAnswerLocked=!0,p.quiz.currentExplanation="Time expired while away."),Dt(p.pendingSession.currentScreen),p.currentScreen==="quiz"&&(p.quiz.remainingTime>0&&!p.quiz.isAnswerLocked&&wt(),p.quiz.remainingQuizTime>0&&Ft()),p.pendingSession=null;return}Ut()}async function Fo(t){const[e,r]=await Promise.all([Co(t),Io(t)]);return{bio:e.bio,country:e.country,avatarUrl:e.avatar_url,createdAt:e.created_at,quizzesPlayed:r.quizzes_played,highestScore:r.highest_score,averageScore:r.average_score,bestStreak:r.best_streak,level:r.level,experience:r.experience}}async function Ko(){try{const t=await nn();Et(t),await Pr(t),ja(async(e,r)=>{Et(r?.user??null),await Pr(r?.user??null),M()})}catch(t){console.error("Auth initialization failed",t),Et(null)}}function Et(t){if(!t){p.user=Ir();return}Object.assign(p.user,sn(t))}async function Pr(t){if(!t)return;const e=await Fo(t.id);p.user.profile={bio:e.bio,country:e.country,avatarUrl:e.avatarUrl,createdAt:e.createdAt},p.user.stats={quizzesPlayed:e.quizzesPlayed,highestScore:e.highestScore,averageScore:e.averageScore,bestStreak:e.bestStreak,level:e.level,experience:e.experience}}function Go(){const t=p.navigation.history;for(;t.length>0;){const e=t.pop();if(!(e==="quiz"&&p.quiz.finishedAt))return e}return null}function dn(t){const e=[...t];for(let r=e.length-1;r>0;r--){const n=Math.floor(Math.random()*(r+1));[e[r],e[n]]=[e[n],e[r]]}return e}function Jo(t){const e=t.options[t.answer],r=dn(t.options);return{...t,options:r,answer:r.indexOf(e)}}function zr(){Vt();const t=mo({category:p.quiz.category,difficulty:p.quiz.difficulty});if(t.length===0){const r=p.quiz.category,n=p.quiz.difficulty;let s="No questions available for this selection.";return r!=="all"&&n!=="all"?s=`No ${n} ${r} questions available yet.`:r!=="all"?s=`No ${r} questions available yet.`:n!=="all"&&(s=`No ${n} questions available yet.`),$(s),!1}const e=dn(t).slice(0,p.quiz.questionCount);return p.quiz.questions=e.map(Jo),p.quiz.startedAt=Date.now(),p.quiz.finishedAt=null,p.quiz.currentQuestionIndex=0,p.quiz.selectedAnswerIndex=null,p.quiz.isAnswerLocked=!1,p.quiz.currentExplanation="",p.quiz.answers=[],p.quiz.score=0,p.quiz.streak=0,p.quiz.bestStreak=0,p.quiz.questionStartedAt=Date.now(),wt(),Ft(),!0}async function Qo(){return Ta()}async function Yo(){return Aa()}async function Xo(){return Ea()}async function Zo(t){switch(t){case"google-login":try{await Yo()}catch(e){console.error(e),$("Google sign in failed.")}return!0;case"github-login":try{await Xo()}catch(e){console.error(e),$("GitHub sign in failed.")}return!0;case"logout":try{await Qo(),L("home")}catch(e){console.error(e),$("Unable to logout.")}return!0;default:return!1}}function el(t,e){switch(t){case"go-back":{const r=Go();return r&&(p.navigation.isNavigatingBack=!0,L(r)),!0}case"open-auth":return L("auth"),!0;case"view-profile":return L("profile"),!0;case"view-achievements":return L("achievements"),!0;case"view-leaderboard":return L("leaderboard"),!0;default:return!1}}function tl(t,e){switch(t){case"share-score":return navigator.clipboard.writeText("I just completed the Quiz challenge!").then(()=>{$("Score copied to clipboard!")}).catch(()=>{$("Clipboard unavailable")}),!0;case"toggle-leaderboard-search":p.ui.leaderboardSearchVisible=!p.ui.leaderboardSearchVisible,M(),p.ui.leaderboardSearchVisible&&requestAnimationFrame(()=>{document.querySelector(".quiz__leaderboard-search input")?.focus()});break;case"toggle-leaderboard-collapse":p.ui.leaderboardCollapsed=!p.ui.leaderboardCollapsed,M();break;case"locate-user":{p.ui.leaderboardCollapsed&&(p.ui.leaderboardCollapsed=!1,M());const r=document.querySelector(".quiz__leaderboard-item--current-user");if(!r)return;r.scrollIntoView({behavior:"smooth",block:"center"}),r.classList.add("quiz__leaderboard-item--pulse"),setTimeout(()=>{r.classList.remove("quiz__leaderboard-item--pulse")},2e3);break}default:return!1}}function rl(t,e){return!1}function nl(t,e){switch(t){case"begin-custom-quiz":{const r=document.querySelector("#quiz-category"),n=document.querySelector("#quiz-difficulty");return p.quiz.category=r?.value||"all",p.quiz.difficulty=n?.value||"all",zr()?(L("quiz"),!0):void 0}case"start-quiz":return p.currentScreen==="quiz"?void 0:(zr(),L("quiz"),!0);case"select-answer":return cn(Number(e.dataset.index)),!0;case"submit-answer":return Wt(),!0;case"next-question":return Mo(),!0;case"restart-quiz":return Do(),!0;case"resume-session":return Object.assign(p.quiz,p.pendingSession.quiz),p.pendingSession=null,L("quiz"),wt(),Ft(),!0;case"discard-session":return We(),p.pendingSession=null,Vt(),L("home"),!0;case"review-answers":return L("review"),!0;default:return!1}}function sl(t,e){switch(t){case"share-score":return navigator.clipboard.writeText("I just completed the Quiz challenge!").then(()=>{$("Score copied to clipboard!")}).catch(()=>{$("Clipboard unavailable")}),!0;case"close-level-up":return p.ui.levelUpModalVisible=!1,p.ui.unlockedLevel=null,M(),!0;case"close-achievement":return p.ui.achievementModalVisible=!1,p.ui.unlockedAchievement=null,M(),!0;default:return!1}}function il(t,e){return t==="open-settings"?(L("settings"),!0):!1}let Cr=!1;function al(){Cr||(Cr=!0,document.addEventListener("click",async t=>{const e=t.target.closest("[data-action]");if(!e)return;const r=e.dataset.action;await Zo(r)||el(r)||il(r)||nl(r,e)||tl(r)||sl(r)||rl(r)}),document.addEventListener("submit",t=>{if(!t.target.matches(".quiz__welcome-form"))return;t.preventDefault();const n=document.querySelector("#display-name").value.trim();if(!n){$("Please enter your name");return}p.user.displayName=n,je(D.DISPLAY_NAME,n),L("home")}),document.addEventListener("keydown",t=>{if(t.key==="Escape"&&p.ui.leaderboardSearchVisible){p.ui.leaderboardSearchVisible=!1,p.ui.leaderboardSearchTerm="",M();return}if(t.key==="/"&&p.currentScreen==="leaderboard"){t.preventDefault(),p.ui.leaderboardSearchVisible=!0,M(),requestAnimationFrame(()=>{document.querySelector(".quiz__leaderboard-search input")?.focus()});return}if(p.currentScreen!=="quiz")return;if(t.key==="Enter"){!p.quiz.isAnswerLocked&&p.quiz.selectedAnswerIndex!==null&&Wt();return}if(p.quiz.isAnswerLocked)return;const e=t.key.toLowerCase(),n={a:0,b:1,c:2,d:3}[e];n!==void 0&&cn(n)}),document.addEventListener("input",t=>{const e=t.target;if(!e.matches(".quiz__leaderboard-search input"))return;const r=e.value;p.ui.leaderboardSearchTerm=r,M();const n=document.querySelector(".quiz__leaderboard-search input");n&&(n.focus(),n.setSelectionRange(r.length,r.length))}),document.addEventListener("change",t=>{const e=t.target;if(e.matches("#quiz-category")){p.quiz.category=e.value;return}if(e.matches("#quiz-difficulty")){p.quiz.difficulty=e.value;return}if(e.matches("#quiz-question-count")){p.quiz.questionCount=Number(e.value);return}}))}async function ol(){wn(),await Ra(),await Ca(),await Ko(),Vo(),al()}async function ll(){console.log("Testing Supabase connection...");const{data:t,error:e}=await re.auth.getSession();return e?(console.error(e),!1):(console.log("Supabase Connected ✅"),console.log(t),!0)}ol();ll();
