SELECT GRADE, ID, EMAIL
FROM (
    SELECT D.ID, D.EMAIL,
           CASE
               WHEN SUM(S.CATEGORY = 'Front End') > 0
                AND SUM(S.NAME = 'Python') > 0      THEN 'A'
               WHEN SUM(S.NAME = 'C#') > 0          THEN 'B'
               WHEN SUM(S.CATEGORY = 'Front End') > 0 THEN 'C'
           END AS GRADE
    FROM DEVELOPERS D
    JOIN SKILLCODES S ON D.SKILL_CODE & S.CODE > 0
    GROUP BY D.ID, D.EMAIL
) T
WHERE GRADE IS NOT NULL
ORDER BY GRADE, ID;