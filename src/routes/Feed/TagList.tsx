import styled from "@emotion/styled"
import { useRouter } from "next/router"
import React, { useEffect, useState } from "react"
import { Emoji } from "src/components/Emoji"
import { useTagsQuery } from "src/hooks/useTagsQuery"

type Props = {}

const TagList: React.FC<Props> = () => {
  const router = useRouter()
  const currentTag = router.query.tag || undefined
  const data = useTagsQuery()
  const [dataKeys, setDataKeys] = useState<String[][]>([])
  const mainTags = new Set<String>()

  const handleClickTag = (value: any) => {
    // delete
    if (currentTag === value) {
      router.push({
        query: {
          ...router.query,
          tag: undefined,
        },
      })
    }
    // add
    else {
      router.push({
        query: {
          ...router.query,
          tag: value,
        },
      })
    }
  }

  const tagContents = (mapValue: String[], i: number) => {
    const stringValue: String = mapValue.join("::")
    if (!mainTags.has(mapValue[1])) {
      mainTags.add(mapValue[1])
      return (
        <>
          <div className="mainTags">{mapValue[1]}</div>
          <a
            key={i}
            data-active={stringValue === currentTag}
            onClick={() => handleClickTag(stringValue)}
          >
            - {mapValue[2]}
          </a>
        </>
      )
    } else {
      return (
        <a
          key={i}
          data-active={stringValue === currentTag}
          onClick={() => handleClickTag(stringValue)}
        >
          - {mapValue[2]}
        </a>
      )
    }
  }

  useEffect(() => {
    const tempArray: String[][] = []
    Object.keys(data).map((value) => {
      const splitted: String[] = value.split("::")
      if (splitted[2] === undefined || splitted[2].length <= 1) return
      tempArray.push(splitted)
    })
    setDataKeys(tempArray.sort())
  }, [])

  return (
    <StyledWrapper>
      <div className="top">
        <Emoji>🏷️</Emoji> 태그
      </div>
      <div className="list">
        {dataKeys.map((mapValue, index) => {
          return tagContents(mapValue, index)
        })}
      </div>
    </StyledWrapper>
  )
}

export default TagList

const StyledWrapper = styled.div`
  .top {
    display: none;
    padding: 0.25rem;
    margin-bottom: 0.75rem;

    @media (min-width: 1024px) {
      display: block;
    }
  }

  .list {
    display: flex;
    margin-bottom: 1.5rem;
    gap: 0.25rem;
    overflow: scroll;

    scrollbar-width: none;
    -ms-overflow-style: none;
    ::-webkit-scrollbar {
      width: 0;
      height: 0;
    }

    @media (min-width: 1024px) {
      display: block;
    }

    .mainTags {
      display: block;
      padding: 0.5rem;
      padding-left: 0.3rem;
      padding-right: 0.3rem;
      margin-top:0.3rem
      margin-bottom: 0.3rem;
      border-radius: 0.5rem;
      font-size: 0.975rem;
      line-height:1rem;
      font-weight : 600;
      color: ${({ theme }) => theme.colors.gray11};
      flex-shrink:0;
      cursor:default;
    }
    
    a {
      display: block;
      padding: 0.25rem;
      padding-left: 1rem;
      padding-right: 1rem;
      margin-top: 0.25rem;
      margin-bottom: 0.25rem;
      border-radius: 0.75rem;
      font-size: 0.875rem;
      line-height: 1.25rem;
      color: ${({ theme }) => theme.colors.gray10};
      flex-shrink: 0;
      cursor: pointer;

      :hover {
        background-color: ${({ theme }) => theme.colors.gray4};
      }
      &[data-active="true"] {
        color: ${({ theme }) => theme.colors.gray12};
        background-color: ${({ theme }) => theme.colors.gray4};

        :hover {
          background-color: ${({ theme }) => theme.colors.gray4};
        }
      }
    }

  }
`
