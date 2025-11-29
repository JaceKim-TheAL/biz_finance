🏠 > [kostock](../../) > [principles](../) > [수식관리자](./) > `기술적지표`

<table>
  <tr>
    <td><b href="formula01.md">기술적지표</b></td>
    <td><a href="formula02.md">신호검색</a></td>
    <td><a href="formula03.md">시스템트레이딩</a></td>
    <td><a href="formula04.md">강세약세</a></td>
    <td><a href="formula05.md">일반함수</a></td>
  </tr>
</table> 

---
# 기술적지표
  
### INDEX
- [ln[신호등라인]](#신호등라인)
- [ln[피봇분봉]](#ln피봇분봉)
- [ln[N이평D분봉]](#lnn이평d분봉)
- [ln[신고라인]](#ln신고라인)
- [ln[신고대비]](#ln신고대비)

---
## ln[신호등라인]
> 상승종목의 당일 시가 기준으로 저항/지지 라인
> - ver1. 신호등라인 모두 표시 : 21🟥 10🟨 5🟩 2🟦 0⬛️
> - ver2. 분봉차트에서 고가기준으로 화면최대화
 
[수식]
```js
신2 = dayopen()*(100+상승률1)/100;
호2 = dayopen()*(100+상승률2)/100;
등2 = dayopen()*(100+상승률3)/100;
라 = dayopen()*(100+상승률4)/100;
인 = dayopen()*(100+상승률5)/100;

DH = dayhigh();
ML = if(DH>신2, 신2, if(DH>호2, 호2, if(DH>등2, 등2, 라)));
신 = if(DH>신2, 신2, ML);
호 = if(DH>호2, 호2, ML);
등 = if(DH>등2, 등2, ML);
```

[지표조건설정]
```js
상승률 = [0, 2, 5, 10, 21]
```
<br/>

[[TOP]](#index)

---
## ln[피봇분봉]
> 피봇분석은 선물거래와 같이 일일매매가 빈번한 거래에서 주로 사용되는 단기적인 가격흐름의 중심/저항/지지 분석입니다.
> - 피봇분석은 당일의 가격변동폭이 클수록 다음날 피봇의 지지와 저항수준이 넓혀지게 됩니다.
> - 한편 피봇분석에 의해 산출된 수치들은 기본적으로 지지와 저항의 수준으로 사용되며 
> - 그 중 피봇포이트 자체가 가장 훌륭한 지지와 저항수준이 되며 
> - 1차와 2차의 지지및 저항수준은 피봇포인트보다 신뢰도가 조금 떨어집니다.
> - 피봇라인 표시 : R2🔴 R1🟠 Pivot🔵 S1🟤 S2⚫️

[수식]
```js
피봇선 = (predayhigh()+predaylow()+predayclose())/3;
변동폭 = predayhigh()-predaylow();
피저갭 = 피봇선-predaylow();
피고갭 = predayhigh() - 피봇선;

Pv2R = shift(피봇선 + 변동폭, 이동);
Pv1R = shift(피봇선 + 피저갭, 이동);
PvLn = shift(피봇선, 이동);
Pv1S = shift(피봇선 - 피고갭, 이동);
Pv2S = shift(피봇선 - 변동폭, 이동);
```

[지표조건설정]
```js
이동 = 3
```

<br/>

[[TOP]](#index)

---
## ln[N이평D분봉]
> 분봉상에서 5일/20일 돌파여부를 체크하기 용이하다.
> N일이평 : 5🟥 10🟧 20🟨

[수식]
```js
sum5 = DayClose()+nPreDayClose(1)+nPreDayClose(2)+nPreDayClose(3)+nPreDayClose(4);
sum10 = sum5+nPreDayClose(5)+nPreDayClose(6)+nPreDayClose(7)+nPreDayClose(8)+nPreDayClose(9);
sum15 = sum10+nPreDayClose(10)+nPreDayClose(11)+nPreDayClose(12)+nPreDayClose(13)+nPreDayClose(14);
sum20 = sum15+nPreDayClose(15)+nPreDayClose(16)+nPreDayClose(17)+nPreDayClose(18)+nPreDayClose(19);
sum25 = sum20+nPreDayClose(20)+nPreDayClose(21)+nPreDayClose(22)+nPreDayClose(23)+nPreDayClose(24);

ma5d  = sum5/5;
ma10d = sum10/10;
ma15d = sum15/15;
ma20d = sum20/20;
ma25d = sum25/25;
```

<br/>

[[TOP]](#index)

---
## ln[신고라인]
> 신고가라인 표시를 통해 전고점을 직관적으로 표시
> 신고가라인 : 20🟠 60🟢 120🔵 240⚫️ 480🟣

[수식]
```js
신고가1 = shift(최고값(가격, 기간1, 1), 이동);
신고가2 = shift(최고값(가격, 기간2, 1), 이동);
신고가3 = shift(최고값(가격, 기간3, 1), 이동);
신고가4 = shift(최고값(가격, 기간4, 1), 이동);
신고가5 = shift(최고값(가격, 기간5, 1), 이동);
```

[지표조건설정]
```js
기간 = [20, 60, 120, 240, 480]
가격 = 고가
이동 = 3
```

<br/>

[[TOP]](#index)

---
## ln[신고대비]
> 보통 1년 신고가대비 눌림라인을 표시

[수식]
```js
신고가  = 최고값(가격, 기간, 1);
신고가1 = shift(신고가, 이동);
대비가1 = shift(신고가 * (100-대비1)/100, 이동);
대비가2 = shift(신고가 * (100-대비2)/100, 이동);
대비가3 = shift(신고가 * (100-대비3)/100, 이동);
대비가4 = shift(신고가 * (100-대비4)/100, 이동);

신고가1
```

[지표조건설정]
```js
기간 = 240
대비 = [10, 20, 30, 40]
가격 = 고가
이동 = 3
```
<br/>

[[TOP]](#index)

---
## ln[]

[수식]
```js

```

[지표조건설정]
```js
이동 = 3
```
<br/>

[[TOP]](#index)

---