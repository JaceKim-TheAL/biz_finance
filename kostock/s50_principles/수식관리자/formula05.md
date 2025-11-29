🏠 > [kostock](../../) > [principles](../) > [수식관리자](./) > `일반함수`

<table>
  <tr>
    <td><a href="formula01.md">기술적지표</a></td>
    <td><a href="formula02.md">신호검색</a></td>
    <td><a href="formula03.md">시스템트레이딩</a></td>
    <td><a href="formula04.md">강세약세</a></td>
    <td><b href="formula05.md">일반함수</b></td>
  </tr>
</table>

---
# 일반함수

### INDEX
- [RSI(Relative Strength Index, 상대강도지수)](#rsirelative-strength-index-상대강도지수)

---
## RSI(Relative Strength Index, 상대강도지수)
> 주가의 상승과 하락 강도를 수치화한 모멘텀 지표
> - 보통 70 이상이면 과매수, 30 이하이면 과매도 상태로 해석합니다
> - RSI는 현재 추세의 강도를 백분율로 나타내어 언제 주가 추세가 전환될 것인가를 예측하는데 유용한 지표입니다.

[수식]
```js
sum(if(C-C(1)>0,C-C(1),0),Period)/sum(if(C-C(1)>0,C-C(1),C(1)-C),Period)*100

```

[해석]
-  RSI의 값이 70 이상이면 과도 매수 상태로 판단하여 매도 시점으로 
생각할 수 있고,  30 이하이면 과도 매도 상태로 생각되어 매수 시점으로 
판단할 수 있습니다.

-  RSI의 값이 30 이하이거나 70 이상일 때 주가 추세와 Divergence가 
나타나면 추세 반전 신호로 판단됩니다.

-  주가가 상승 추세로 보이고 있을 때 RSI의 값이 직전 최고 수준을 
돌파하지 못하고 하락하다가 직전 저점을 하향 돌파하는 순간이 매도 
시점이 되며, 반대로 주가가 하락 추세를 보이고 있을 때 RSI의 값이 
직전 최저 수준을 돌파하지 못하고 상승하다가 직전 고점을 상향 
돌파하는 순간이 매수 시점이 됩니다.

<br/>

[[TOP]](#index)

---
