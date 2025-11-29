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
- [신호등라인](#신호등라인)

---

## 신호등라인
> 상승종목의 당일 시가 기준으로 저항/지지 라인
> - ver1. 신호등라인 모두 표시 (21🟥 10🟨 5🟩 2🟦 0⬛️)
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