git log -5 --pretty=format:'{%n  "commit": "%h",%n  "subject": "%s",%n  "date": "%aD",%n  "author": "%aN"%n},' |
sed "$ s/,$//" |
sed ':a;N;$!ba;s/\r\n\([^{]\)/\\n\1/g' |
awk 'BEGIN { print("[") } { print($0) } END { print("]") }' > changelog-data.json
