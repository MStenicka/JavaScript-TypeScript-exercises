//https://www.hackerrank.com/challenges/gem-stones/problem

function gemstones(arr) {
  // Write your code here
  let firstElementCharacters = arr[0].split('');
  let count = 0;
  let gemstones = [];
  for (let i = 0; i < firstElementCharacters.length; i++) {
    let stack = [];
    for (let j = 1; j < arr.length; j++) {
      if (arr[j].includes(firstElementCharacters[i])) {
        stack.push(firstElementCharacters[i]);
      }
      if (stack.length === arr.length - 1) {
        if (!gemstones.includes(stack[0])) {
          gemstones.push(stack[0]);
          count++;
        }
      }
    }
  }
  console.log(gemstones);
  console.log(count);
}

// arr = ['abcdde', 'baccd', 'eeabg'];

// gemstones(arr);
// gemstones(arr);
arr = [
  'ayayrnhxvfbxzodsycpjqlrbwbmrmoaeunllzjrtdcmdbcmbdefglycboqxkagyderwkpdpewsjgkqdhcsixxhsrolrfnbkilw',
  'wgfvoecyrmvjefplndcdrozkpkoxnigzpcgzzeitwddxtqrhfqsukchfxqycacmoiknbiwhxxmbpljqhkahjt',
  'rbharxcldxthzuqrmofxcomdvjewxvwpsyhdnyamglki',
  'hjtcaklozqfqdhegxprswinviyumb',
  'tkpypsgvxridahechuimlgzbszkwjqofikegrfnc',
  'bpxujjbamtbayygucpdubwjqchiixesgaxfsoyveixdudaimkmbjpsvqhjjhdzdmpctwqfvpnydsrphinuwlnxns',
  'dhqdtxtqmjpljdcvsbbxycjgvjgdwuawifiarpovyvuegjunrfwkiezevniawwj',
  'iakgmjufocwzvckqgrblosihzoallnxpkfrddewuugbfcheepnssbodotlwmerspnrkutwjfpvjmyznyxahlemuosfxwwqcrpnil',
  'tuwrztdwcnixcmnthwfpqvobumirefolsyutfjsbcrymcnkguetxxpvqgnuupilfacg',
  'auwsniqazoujcwrhgmydxtqtdodeqxhjvdrwecllpgobpyhhmwzbxnjufhejvnrkbkcvgfrlnwcsvitkdeiwwvoyvu',
  'zqbrrwhredbkhpifuugdlsoctjqnmavivmxly',
  'vwfhdyvrpesrrzsbdzazfelvkoxkjmbpuchrlukfpyuiwltpgyijoxlhuqffyabnzcgjpcnrwxhjbpgduaqeicdfu',
  'jmxunyoixyqkwqzcjvapzualqsfxsdejrvwsdnrlyzcagcjmskntpscosnkuzhbpnodrdyvccfjfzkmcutbianzmgrgqde',
  'pemtwacnulonrfqivxsuqvjtydvzkhbgbx',
  'wssqhzlgzqiolfyfrmslcsemodxmfonzekuenqkhnpfhmcssojhkbpantwvedakogcqohsuyl',
  'tvhfdoltzrarjgwcmhfxtihgcnoniovktrzrastgacyztobfwmpibkotkoqbgjdfuyenveabpbhap',
  'qfezrjtualblytkmiiynkssgiawedxobpzhcmwvf',
  'kunvirnaxglbzvwdigzonasnmlefufxthlvmjmwcvyquuopqy',
  'srxexnbcafbyzfpookleaqmouctszcqinvrmyomfaivahwqitdpkhcgxgvhqiqqbynmljgjeqyvxbmbnxrqjmau',
  'ammqkvpptlborkerralkzxoacygliubggvumelrxtinbsufwahekgcfvwttpqqqxzwspcjrde',
  'prhefnqfgzrojyedwpaampontkyghlweicuxlbqfvuars',
  'qtihdwshwpnojovcrunasdkjjvgxqmgzwmqmpgrcakfjylwextpobkkntxxceiupzubuoiaqecis',
  'rkfenjmobutlqwqsdgpiapchyxvzl',
  'ihjrfqtgzcynaszvdseeaddvylhyneypqpungdddzretiavlaykfykjoyxoxlqjymwgjxedrldb',
  'usakrhosijzciglpgvtmqqrnfdunzqntbtkoeopwxlsegsmodiqaferxyro',
  'pcdqugnvbrtaikyjeonmyekssxutoidhyldzzwjf',
  'hpcdtwwocixiastzqvqvbwfkvfktgchdajoyxrbxfmexudaiwjskrufbbasbmjufxqjvejauklafpkcivunxy',
  'qkqcialfsqhkzmgqssiiehvxiwoyenaghnndoqhlmuodobgpgrgpolrzmzmtuqhwhkdkjwfpauqxxbdwwanv',
  'tahbfoqjhhyjwociqvptkuifrlmziiqktsdnpilgdexazmkbxm',
  'cujhiwsvsptysoybzlipcgiwqtcvvyvvobxohdlpkujzqtdnqemgxocfpazxrhqcnldy',
  'ionolubaqmqyuhvsktigmetfnghjdcgvywziqpgmtutmxjbrnyiqhh',
  'hpeouucdzrvjovhzrtykwdgzbvxgextswhxvvwufqrxdlrdomiznfarqslmqciqaywlzckotdq',
  'divdoncdlkcgihpuurbicfybfkzkdszdyhqwncmvyozqqjprhloosredxymvldubqdndmwtvggrcat',
  'suhrpnpuipcbgtrbilowodsvfzutflcvzpesimcianxefaqsnohhlmbdjdnfdxgwkfzgijyqzkw',
  'admcwveyqdgrluiswaawfqmsngulzoonvcrjzvhikxebntrkjjhpzauogkt',
  'dvnvpiugvvusjahtsrecuylbamkvmfhjouznqvvawxmv',
  'awvlucnhyozgqpjltdiobrxfkemsftppa',
  'cmfgtxqowqzczmbltkznsldmxzthnlvkazeiiqfbcjvopysaeru',
  'qxhoigvvlhbdpetzzpccxptobeuafbynmszkjjjfayndarswkrscmp',
  'ecdevhmdikfyujafjzhyzkrqvferrmjwytmofcitwpjsqvjwicokbdpclzgzsnlrbfgabdoxbsvoqwanmmmypjizo',
  'yfndihlzocgmxabsktupjevhzwrwq',
  'rejqymhqvqfwajqtsqvtoiqnctmbbxsbkntqcaewkzakhmfrsxhlpzzqiruynfxusojuygggiefzstikmcbhhzvxtudf',
  'zytvjztzyjwrzvuscxaishplniotuorbjukrhpjsxgdhmmgsecwqpinqbffpbdhknocexidozrvqtmiocwhq',
  'vhhycyncgxodfmiingnlgqzrukxukzdtaczallisxzsjqialdahofsltgbhpdvejwcmzigncctwtje',
  'flzvgpaotyboifihguidmtkxewctgvnwkjnxhvseerleydprmqeli',
  'ojdtqdcrxisufnbyjegqmskzdqiyrdaefsbalhvjmacnunzgmilobmhsgypitihijmpkguwxeaicvcpsvgzyzflqyognu',
  'fclepxngurybwngiyzojoxvxihotoipmvkxfsdaq',
  'wioxghynzskvacpqlmfbdujretrm',
  'fmjbvnjgjqrmdexjdfbjirqiftypgpvlmcngolrfngiqrwtpsanzybkcvhhabuahb',
  'mymbfrbvrjtykklvtnkhaydgnlbuwktiemikrpxsoqskkgmatiqgyggbjlfrfynewzzedaxqgtphxsnjcwiyzyfyyrdjfxmxuc',
  'eczouynjkfjiqrhaaivrrglycxeltuokqgfgjdltvpsavldsysnfbvwqdbhwusgtvwamtrvxeygxwbgsducp',
  'ulyycfnoamjsowhechzuxrelkicqntcvwgwmkbdpitdxwvlezz',
  'levddpeaxchbgsyqkrcbgboonujdefquepnlgpucrydonwxuautsufnmaeeadyshphbwbipzkmraqbubbnkc',
  'rcqbfyzfkahyjwrireqewpzxhweusejetvvyqmvndrimpzrxwbhmyjiyplakgbscpeoqkmrr',
  'caqgmzrdvbtxdfmjotanbgaxrzqxboyiyhknypiiwaxealqzjevyalllcmjjuqfxnwjpmdlwxpaymipveljjsomdzq',
  'fzthexjxlsllqkusjqyrprhydeinadikssuvapqxuzjcetmlvsyfgnxonwrvgkipotxyevtojekpb',
  'hgmtzdbfarlwdlwsnyfcqsxtbmjbozelmnrvjngvpititekus',
  'zwzxqcemdkwfaoiraesaviyvpbjsldypobvailcebanhttqevtgwrbbdonubt',
  'dtiugjxdjlkbamfuldyhroknssoyycsmbmikbvuhwqhiflizzoeuyxrfptrgjfwmyv',
  'gzimamdjltbnoureicxhowvsfmqypksu',
  'fpgxbeqaiztkyfobrjvvmvpwdhsqclngezmu',
  'hougsdjedjacxbzytfcvcolevfoiktnxebupiwdupscjeekeaqrtgdbemodkl',
  'xwmksibzqymctvtcwbskgdhwtlcwhliqmbeioppxguqfansrxojveznizs',
  'hbzkivbrnuawesnofxudjqpkocbmlgbatmy',
  'quggkllvdcuspwqxisuofsezmtqjaximafykbchqztnrfbyonzs',
  'xygkfpedqvzztovaazinximtksophnaqrtrfhgkxlcoizkdjolowjgzqytuelbhcrbbtliwbejhploaksif',
  'pqxkjufpwhphsqylipdegncaquoukbolwhoqafyahnrxrfwnymozzayooljozkvtwaofnunangqjiqjjruxzznfzmilusftuz',
  'fbhbvrnqtojnymfyrargfdccwuoyicqlatasneagomvnihxkgjwknijwtwmvufhpcauvtjyhikcqdez',
  'lklrbthlticrsiiqluepdbthzoggmshmffowxvskaamtxeinuxlwxrrendozdyfrdfjecojooom',
  'fvtxcsvtsifwcvoavqzubugourmhopkwzgmqbebtfnuvtjylodfcpwuooddvfaclcqmiazfmypkodprep',
  'drscbotgyolpkjamfwbeuznceriqxvhmp',
  'ktipdxlvdzywgajuoggehwdrmcaayclfbsqn',
  'xqucshkwdlqlehebzewdufhbhsycwkrlltljyjhnwpyjnlgwbnfrubaaesyalcvaldfqieodiwqxjpvgjqshnlpmzdgomj',
  'wwdcvolnnymnobvjcotgcrsddouufvaeiyqfplomwedxqhlrfmpedhvqsitoefrjrkgxneysztige',
  'ltovwgcpjvpjiqgqtjxgbsjtptqzattomgfrbjrzbwycnbwgeebgnexmuhiouuhegyplcivzehdakahsofuerqkhhhri',
  'hfbsgpxkqjqrmekvdufmziaoylrctwqmon',
  'ovkjpgdnabqzwsqihzieifgiptgwyxrldtpudvczaqmpbjbhiravlfzeyteudggovdh',
  'lmczweoqihgxnjuoyvrbqaxupzwkvdscythgf',
  'cndcarmcjuixhrexjqvwubeymfavkvswelipckpnuskgopbsrwiuzdzvpddrnmljizbtvt',
  'vydxiuusmfkdgtrwcrublnwopzxfbrojhqgaee',
  'zwxpsvcqplkemgeoenjrihtubydabchof',
  'uzrpzgdqgkmwfxojfuwjgmidjykvtcarhhlniensmcqsxskxobtlasv',
  'omqxlzqrinyfkatnieawkbjggzuhkdiaspopkjojyfcfipmwtv',
  'sgeqpsdfzjbswsfqpicrxirakyhbvwxprrozunqmazhhsbtzal',
  'igqvlwmihxyvdbpfzsjarueonjfrtxck',
  'mqyainlpyerftcovkowzgkdjbxuhstsz',
  'tsyrbgefdzpvvcahnjkowxsilsumq',
  'fxtmkchbaqqeluzzkmrvoxpjpxyiaszxjttxnrdwbexascetg',
  'eyefdbvkfvrpbhwpjmvmoiqkzrixhsmjkhizmnmlaoqpprowcmtzwtgzhryjulasfdltukiyymnpbdyuyugvoodtaczetlibwz',
  'hcjfxskbeblhmlzqmzvbrutfacwondphbgyjtnwwjupwcqjbebtpfsmvkiqigwzxbxxpx',
  'fgmqplrbaspwcukthavxqnzsyijoqed',
  'tkgahgslsqujjwhnpdnxkextirpvbhplqzpcpgniqucjwdfcudifwjzohravosjiamgvyldmfsabykh',
  'jgepcfqnfhtevprhnaoskimcgyauvghuelyodqzidfjxfhmlcvtcmqbxikrofalmujorlwpoheucwmrvc',
  'dxighozubetqxvludodjrzgfgzqogwecptbwoynpascqowjlhzzwvmaiuvkzblifv',
  'rpjybciaklwgxzoeuvmjqhtndsf',
  'wgsdxqcsmlzjhrigzhnkkamevanvchhgokpgiyqtbadydylkqvgmwltxfussuuywi',
  'tnulqhbfwiojdwzmazgekltmxrkrnysivcqbph',
  'jjefgnsxmbizjsialnymigtzbqhyojpyqpgyokinxjyhpyidsfrtjqczbmplqacmyenuwxuvzzreajezgfrgv',
  'yihzylpgwsfnbehtmdsktjjmoruaqszftcvxlg',
  'pjykfhmmgpdwjsihqwoocbjxiumrzjotyeeafnevlpk',
];
console.log(arr.length);
gemstones(arr);
